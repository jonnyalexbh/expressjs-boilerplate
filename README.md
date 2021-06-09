# Express.js boilerplate

```sh
$ npm init
$ npm i express
```

### Running project :
``` bash
$ npm run start
$ npm run start:dev
```

### Node JS Lib
* express
* pino
* pino-pretty

### Node JS Lib dev
* nodemon
* eslint
* dotenv

### Project Structure
```sh
.
├── app/
│   └── controllers           # contains controller files
│   └── errors                # contains errors files
│   └── logger                # contains pino logger
│   └── middlewares           # contains middlewares files
│   └── routes.js             # routes config file
├── config/                   # all configuration file here
│   └── index.js              # app configuration
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
