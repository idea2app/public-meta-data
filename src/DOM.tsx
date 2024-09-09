import { DOMRenderer, JsxChildren } from 'dom-renderer';

export interface LayoutProps {
    title: string;
    children?: JsxChildren;
}

export const Layout = ({ title, children }: LayoutProps) => (
    <html>
        <head>
            <meta charset="UTF-8" />

            <title>{title}</title>
            <link rel="icon" href="https://github.com/idea2app.png" />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />

            <link
                rel="stylesheet"
                href="https://unpkg.com/bootstrap/dist/css/bootstrap-utilities.min.css"
            />
            <link
                rel="stylesheet"
                href="https://unpkg.com/github-markdown-css"
            />
        </head>
        <body class="m-3 markdown-body">{children}</body>
    </html>
);

export interface ListProps {
    homepage: string;
    list: { name: string; file: string }[];
}

export const List = ({ homepage, list }: ListProps) => (
    <>
        <h2>All Data</h2>
        <ol>
            {list.map(({ name, file }) => (
                <li key={file}>
                    <a href={new URL(file, homepage) + ''}>{name}</a>
                </li>
            ))}
        </ol>
    </>
);

const renderer = new DOMRenderer();

export const generatePageHTML = ({
    title,
    homepage,
    ReadMe,
    list
}: LayoutProps & ListProps & { ReadMe: string }) =>
    renderer.renderToStaticMarkup(
        <Layout title={title}>
            <article innerHTML={ReadMe} />

            <List homepage={homepage} list={list} />
        </Layout>
    );
