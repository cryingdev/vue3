module.export = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        //vue
        'plugin:vue/vue3-strongly-recommended',
        //js
        'eslint:recommended'
    ],
    parserOption: {
        parser: 'babel-eslint'
    },
    rules: {
        "vue/html-closing-braket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "always",
                "normal": "never",
                "component": "always"
            },
            "svg": "always",
            "math": "always"
        }]
    }
}