# website

> Offline first personal website

## Features

- Offline first
    - Use [localforage](https://github.com/localForage/localForage) for local data storage
    - Use [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), through [sw-precache](https://github.com/GoogleChrome/sw-precache), to cache assets
- [Trello design pattern](https://github.com/trello/trellisheets/blob/master/styleguide.md) for stylesheets

## Usage

```bash
# start an http local server with livereload
$ npm run dev

# run tests
$ npm test

# generate production files in a dist/ folder
$ npm run build
```

## License

[MIT](/LICENSE) © [Yerko Palma](https://github.com/YerkoPalma)
