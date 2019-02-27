module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'reactCounterInput',
      externals: {
        react: 'React'
      }
    }
  }
}
