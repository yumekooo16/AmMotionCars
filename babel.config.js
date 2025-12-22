module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: {
            // ✅ Ciblez uniquement les navigateurs modernes
            browsers: [
              'last 2 Chrome versions',
              'last 2 Firefox versions',
              'last 2 Safari versions',
              'last 2 Edge versions'
            ]
          },
          // ✅ N'incluez que les polyfills nécessaires
          useBuiltIns: 'usage',
          corejs: 3
        }
      }
    ]
  ]
};