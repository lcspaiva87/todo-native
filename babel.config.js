module.exports = function (api) {
  api.cache(true)

  return {
    extends: ['@react-native-community', 'prettier'],
    plugins: ['react', 'react-native', 'prettier'],
  }
}
