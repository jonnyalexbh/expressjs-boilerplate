# Express.js boilerplate

## Core Stack

- **Node.js**
- **Express.js**
- **Jest**

## Start project

```sh
$ npm init
$ npm i express
```

### Running project :
``` bash
$ cp .env-sample .env
$ npm run start
$ npm run start:dev
```
## Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

### `dependencies`

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| express                         | Node.js web framework                                                 |
| pino                            | Logging library                                                       |
| pino-pretty                     | Module can be used to format logs                                     |
| express-validator               | Easy form validation for Express                                      |

### `devDependencies`

| Package                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| nodemon                         | Utility that automatically restarts node process when it crashes       |
| eslint                          | Linter for JavaScript and TypeScript files                             |
| dotenv                          | Loads environment variables from .env file                             |
| jest                            | Testing library for JavaScript                                         |
| husky                           | Husky is a tool that allows us to easily wrangle Git hooks             |

## Unit testing

``` bash
$ npm run test
```

### Project Structure
```sh
.
├── app/
│   └── constants             # contains constants files
│   └── controllers           # contains controller files
│   └── errors                # contains errors files
│   └── logger                # contains pino logger
│   └── middlewares           # contains middlewares files
│   └── schemas               # contains schemas files
│   └── routes.js             # routes config file
├── config/                   # all configuration file here
|   └── index.js              # app configuration
├── .gitignore                # specifies intentionally untracked files to ignore
├── app.js                    # API declaration (App entry point)
├── server.js                 # server configuration
└── package.json              # build scripts and dependencies
```
## Code Style Guides
* Guideline:
  * Use camelCase for variable name, naming function
  * Use UpperCase for Constant Variable
  * Use snake_case for file name

### Install eslint airbnb

```sh
$ npm install --save-dev eslint
$ npx eslint --init
```

### Install husky

```sh
$ npx husky-init
```

<details>
<summary><strong>Debugger VSCode</strong></summary>

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Attach",
      "port": 9229,
      "request": "attach",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "pwa-node"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Jest All",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": [
        "${workspaceRoot}/test/app",
        "--runInBand"
      ],
      "env": {
        "NODE_ENV": "testing"
      },
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true,
      "windows": {
        "program": "${workspaceFolder}/node_modules/jest/bin/jest"
      }
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Jest Current File",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": [
        "${relativeFile}",
        "--config"
      ],
      "env": {
        "NODE_ENV": "testing"
      },
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true,
      "windows": {
        "program": "${workspaceFolder}/node_modules/jest/bin/jest"
      }
    }
  ]
}
```
</details>

### License

MIT
