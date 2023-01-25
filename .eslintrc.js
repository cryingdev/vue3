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

    }
}