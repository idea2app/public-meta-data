#! /usr/bin/env tsx

import { toHyphenCase } from 'web-utility';
import { outputFile, readFile, outputJSON, readJSON } from 'fs-extra';
import { marked } from 'marked';
import './polyfill';

import * as data from './data';
import { generatePageHTML, ListProps } from './DOM';

const title = 'Public Meta Data',
    list: ListProps['list'] = [];

(async () => {
    console.time(title);

    for (const [key, value] of Object.entries(data)) {
        const name = toHyphenCase(key);
        const file = `${name}.json`;
        const path = `public/${file}`;

        await outputJSON(path, value);

        list.push({ name, file });

        console.log(`[save] ${path}`);
    }

    const { homepage } = await readJSON('package.json'),
        ReadMe = marked((await readFile('ReadMe.md')) + '') as string;

    const entry = 'public/index.html';

    await outputFile(
        entry,
        generatePageHTML({ title, homepage, ReadMe, list })
    );
    console.log(`[save] ${entry}`);

    console.timeEnd(title);
})();
