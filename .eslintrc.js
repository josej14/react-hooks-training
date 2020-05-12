module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  plugins: ['react', 'react-hooks', 'extra-rules', 'module-resolver'],
  rules: {
    'strict': 0,
    'import/prefer-default-export': 'warn',
    'implicit-arrow-linebreak': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'no-underscore-dangle': ['error', {allow: ['__']}],
    complexity: ['warn', 4],
    'max-lines': ['warn', 300],
    'no-magic-numbers': 'warn',
    'extra-rules/no-commented-out-code': 'error',
    'no-console': 'error',
    // React config
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/sort-prop-types': 'off',
    'react/forbid-prop-types': [
      2,
      {
        forbid: ['any', 'array'],
        checkContextTypes: false,
        checkChildContextTypes: false,
      },
    ],
    'react/prop-types': 'off',
    'react/no-array-index-key': 'warn',
    'react/prefer-stateless-function': 2,
    // React hooks config
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',

    // Module resolver
    'module-resolver/use-alias': 'error',
    'import/extensions': 'warn'
  },
};
