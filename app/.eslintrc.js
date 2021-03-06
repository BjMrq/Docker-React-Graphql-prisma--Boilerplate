module.exports = {
  parserOptions: {
    ecmaVersion: 10,
    parser: "babel-eslint"
  },
  extends: [
    "airbnb/base"
  ],
  plugins: [
    'eslint-plugin',
  ],
  "rules": {
    "max-len": [
      "warn",
      {
        "code": 100,
        "ignoreStrings": true,
        "ignoreUrls": true,
        "ignoreComments": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "import/prefer-default-export": "off",
    "no-console": "off",
    "quotes": [
      "warn",
      "single"
    ],
    // Pading and spacing
    "key-spacing": [
      "warn",
      {
        "align": {},
        "multiLine": {}
      }
    ],
    "no-multi-spaces": [
      "warn",
      {
        "exceptions": {
          "VariableDeclarator": true
        },
        "ignoreEOLComments": true
      }
    ],
    "newline-per-chained-call": [
      "warn",
      {
        "ignoreChainWithDepth": 2
      }
    ],
    "padded-blocks": [
      "warn",
      "always"
    ],
    "padding-line-between-statements": [
      "warn",
      {
        "blankLine": "always",
        "prev": "*",
        "next": [
          "return",
          "if"
        ]
      },
      {
        "blankLine": "always",
        "prev": [
          "const",
          "let",
          "var",
          "import"
        ],
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": [
          "const",
          "let",
          "var",
          "import"
        ],
        "next": [
          "const",
          "let",
          "var",
          "import"
        ]
      }
    ],
    // Semi and coma rules
    "comma-dangle": "off",
    "no-extra-semi": "warn",
    "semi-style": [
      "error",
      "last"
    ],
    "semi": [
      "warn",
      "always",
      {
        "omitLastInOneLineBlock": false
      }
    ],
    "indent": [
      "warn",
      2
    ],
    "comma-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    // Object rules
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "object-curly-newline": [
      "warn",
      {
        "ObjectPattern": {
          "multiline": true,
          "minProperties": 3,
        },
        "ObjectExpression": {
          "multiline": true,
          "minProperties": 2,
        },
        "ImportDeclaration": "never",
        "ExportDeclaration": "never"
      }
    ],
    // Array rules
    "array-bracket-spacing": [
      "warn",
      "always"
    ],
    "array-bracket-newline": [
      "warn",
      {
        "multiline": true,
        "minItems": 3
      }
    ],
    "array-element-newline": [
      "warn",
      {
        "multiline": true,
        "minItems": 3
      }
    ]
  },
  env: {
    "node": true,
    "browser": false,
    "jest": true
  },
}