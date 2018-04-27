# Checkbook.io API

[Checkbook.io](https://checkbook.io/) API for sending checks online and offline.

This module lets you send, query, charge, and interact with the checkbook.io API in your Node.js applications.

## Install

```js
$ npm i -s git+ssh://git@github.com:VillaRentals/checkbook.io-sdk.git

```

## Usage

#### Configure Strategy

The Checkbook.io sdk API authenticates using the a key and secret. These tokens are obtained through the [Checkbook.io portal](https://checkbook.io/login). The SDK requires the realm of the API (test, sandbox, live) and long with the previously mentioned tokens.

```js
new Checkbook('stage', key, secret);
```

#### Making Requests

See the [documentation](docs/index.html) for more information about the SDK.

## Tests

The key and secret are required for the tests to pass. These can be obtained through the [Checkbook.io portal](https://checkbook.io/login). Once these tokens have been acquired, create a .env file from the [.env.example](.env.example) file and provide the tokens. These will be used to authenticate your requests.

```bash
$ npm install --dev
$ npm test
```
## License

[The MIT License](http://opensource.org/licenses/MIT)
