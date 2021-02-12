# Express.js boilerplate

```sh
$ npm init
$ npm i express
```
### Node JS Lib
* express
* pino
* pino-pretty

### Node JS Lib dev
* nodemon
* eslint

### Project Structure
```sh
.
├── app/
│   └── logger                # contains pino logger
│   └── middlewares           # contains middlewares files
│   └── routes.js             # routes config file
├── .gitignore                # specifies intentionally untracked files to ignore
├── app.js                    # app setup file
└── package.json              # build scripts and dependencies

```

### Install eslint airbnb

```sh
$ npm install --save-dev eslint
$ npx eslint --init
```
### Debugger VSCode

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
### License

MIT
