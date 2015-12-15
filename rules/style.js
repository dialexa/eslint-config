// see http://eslint.org/docs/rules/#stylistic-issues

module.exports = {
  'rules': {
    'array-bracket-spacing': [2, 'never'],
    'brace-style': [2, '1tbs', {'allowSingleLine': true }],
    'camelcase': [2, {'properties': 'never'}],
    'comma-spacing': [2, {'before': false, 'after': true}],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': 0,
    'eol-last': 2,
    'func-names': 0,
    'func-style': 0,
    'id-length': 0,
    'indent': [2, 2, {"SwitchCase": 1}],
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    'lines-around-comment': 0,
    'linebreak-style': 0,
    'max-nested-callbacks': 0,
    'new-cap': [2, {'newIsCap': true}],
    'new-parens': 0,
    'newline-after-var': 0,
    'no-array-constructor': 0,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, {'max': 2, 'maxEOF': 1}],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 0,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, 'never'],
    'operator-assignment': 0,
    'operator-linebreak': 0,
    'padded-blocks': [2, 'never'],
    'quote-props': 0,
    'quotes': [2, 'single', 'avoid-escape'],
    'id-match': 0,
    'semi-spacing': [2, {'before': false, 'after': true}],
    'semi': [2, 'always'],
    'sort-vars': 0,
    'space-before-keywords': [2, 'always'],
    'space-after-keywords': [2, 'always'],
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-return-throw-case': 2,
    'space-unary-ops': 0,
    'spaced-comment': [2, 'always', {
      'exceptions': ['-', '+'],
      'markers': ['=', '!']           // pace here to support sprockets directives
    }],
    'wrap-regex': 0
  }
};
