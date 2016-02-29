System.config({
  "baseURL": "/",
  "transpiler": "typescript",
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "*": "*.js"
  },
  "defaultJSExtensions": true,
  "typescriptOptions": {
    "compilerOptions": {
      "target": "es5",
      "module": "system",
      "moduleResolution": "node",
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "noImplicitAny": false
    },
    "exclude": [
      "jspm_packages",
      "node_modules"
    ],
    "compileOnSave": true
  },
  "packages": {
    "app": {
      "main": "bootstrap",
      "defaultJSExtensions": false,
      "defaultExtension": "ts"
    }
  }
});

System.config({
  "map": {
    "typescript": "npm:typescript@1.8.2"
  }
});

