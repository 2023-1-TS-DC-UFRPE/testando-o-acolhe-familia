# testando-o-acolhe-familia

## Setup

For setting it up, just use the following command and you're ready to go:

```bash
npm install
```

Thereafter, you may want to run Cypress using the following command:

```bash
npx cypress open
```

### Authentication

Some tests requires authentication to the Acolhe System, to run those tests you may need to create an environment file, the usual way is to create a `cypress.env.json` environment file, and the contents may be similar to [example.cypress.env.json](./example.cypress.env.json). On this file you can define your own environment variable, such as sensitive information (e.g. emails and passwords).

If you need any more help, please look at [Environment Variables | Cypress Documentation](https://docs.cypress.io/guides/guides/environment-variables).
