import path from 'path'
const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'public')

export default {
  // ビルドのモード指定
  mode: 'development',

  // ビルドを始める際の開始点
  entry: src + '/index.jsx',

  // ビルドファイルの出力先
  output: {
    path: dist,
    filename: 'bundle.js'
  },

  // jsxをbabel-loaderで処理する
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    ]
  },

  // ビルドする拡張子の設定
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
