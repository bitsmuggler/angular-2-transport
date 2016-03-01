System.config({
  "baseURL": "/",
  "paths": {
    "app/*": "app/*",
    "*": "node_modules/*"
  },
  "defaultJSExtensions": true,
  "packages": {
    "app": {
      "main": "bootstrap",
      "defaultJSExtensions": false,
      "defaultExtension": "js"
    }
  }
});
