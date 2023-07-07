#! /usr/bin/env ts-node

import { toHyphenCase } from 'web-utility';
import { outputFile, readFile, outputJSON, readJSON } from 'fs-extra';

import * as data from './data';
import { marked } from 'marked';

const title = 'Public Meta Data',
    list: { name: string; file: string }[] = [];

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
        ReadMe = marked((await readFile('ReadMe.md')) + '');

    const List = marked(`## All Data

${list.map(
    ({ name, file }, index) =>
        `${++index}. [${name}](${new URL(file, homepage)})`
)}`),
        entry = 'public/index.html';

    await outputFile(
        entry,
        `<head>
    <meta charset="UTF-8">

    <title>${title}</title>
    <link rel="icon" href="https://github.com/idea2app.png">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://unpkg.com/bootstrap/dist/css/bootstrap-utilities.min.css">
    <link rel="stylesheet" href="https://unpkg.com/github-markdown-css">
</head>
<body class="m-3 markdown-body">
    ${ReadMe}

    ${List}
</body>`
    );
    console.log(`[save] ${entry}`);

    console.timeEnd(title);
})();
