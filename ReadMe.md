# Public Meta Data

**HTTP API** for Public Meta Data, written in [TypeScript][1] & designed for [CDN][2].

[![CI & CD](https://github.com/idea2app/public-meta-data/actions/workflows/main.yml/badge.svg)][3]

-   [Source Data](https://github.com/idea2app/public-meta-data/tree/master/src/data/)
-   [HTTP API](https://idea2app.github.io/public-meta-data/)

## User cases

1. [China Open Source map](https://kaiyuanshe.cn/organization/)

## Add more data

1. For **junior engineers**, you can [submit an issue][4] and wait for the maintainer reaction
2. For **senior engineers**, just [add a Source file in the Data directory][5], and make a pull request
3. After your pull request reviewd & merged, new data will be updated by [GitHub actions][6] automatically

## Host your own mirror

1. Fork [this repository][7]
2. You can add your custom **HTTP domain** with `cname` field at end of [GitHub action configuration][8]
3. You can replace [GitHub pages][9] with an **Object Storage service** (AWS S3, etc.)

## Inspired by

1. [China 996 data](https://github.com/FreeCodeCamp-Chengdu/996-data)
2. [Web polyfill](https://polyfill.web-cell.dev/)

[1]: https://www.typescriptlang.org/
[2]: https://en.wikipedia.org/wiki/Content_delivery_network
[3]: https://github.com/idea2app/public-meta-data/actions/workflows/main.yml
[4]: https://github.com/idea2app/public-meta-data/issues/new?assignees=TechQuery&labels=data&template=data.md&title=
[5]: https://github.com/idea2app/public-meta-data/new/master/src/data
[6]: https://github.com/features/actions
[7]: https://github.com/idea2app/public-meta-data
[8]: https://github.com/idea2app/public-meta-data/blob/master/.github/workflows/main.yml#L26
[9]: https://pages.github.com/
