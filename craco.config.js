const path = require("path")

module.exports = {
    webpack: {
        alias: {
            '@containers' : path.resolve(__dirname, './src/components/containers/'),
            '@views':  path.resolve(__dirname,'./src/components/views'),
            '@stores': path.resolve(__dirname, './src/stores'),
            '@common': path.resolve(__dirname, './src/common')
        }
    }
}