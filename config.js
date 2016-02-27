System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
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
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "app": {
      "main": "bootstrap",
      "defaultJSExtensions": false,
      "defaultExtension": "ts"
    }
  },

  map: {
    "typescript": "npm:typescript@1.8.2"
  }
});
