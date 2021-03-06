// @ts-ignore
const {alias} = require('react-app-rewire-alias')
module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@assets' : 'src/assets',
        '@pages' : 'src/pages'
    })(config)

    return config
}
