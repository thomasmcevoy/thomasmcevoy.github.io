System.config({
  "paths": {
    "*": "*.js",
    "thomas-mcevoy.com/*": "../lib/*.js",
    "github:*": "../jspm_packages/github/*.js",
    "npm:*": "../jspm_packages/npm/*.js"
  },
  "map": {
    "html5shiv": "npm:html5shiv@3.7.2",
    "jquery": "github:components/jquery@1.11.2",
    "svg4everybody": "npm:svg4everybody@0.0.2"
  }
});
