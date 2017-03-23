module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "env": {
    "browser": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-named-as-default": "off",
    "no-nested-ternary": "off",
    "react/forbid-prop-types": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/no-children-prop": "off" // React Router 4. Route component has a children prop which receives a function
  }
};
