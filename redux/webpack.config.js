import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  // 開発用の設定
  mode: "development",
  // エントリーポイントを設定
  entry: "./src/index.tsx",
  // バンドル後のファイルの出力設定
  output: {
    //  ファイルのの出力先のディレクトリを指定する
    path: path.join(__dirname, "dist"),
    // 出力されるファイル名
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 「test」で指定した拡張子をコンパイルする
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: true,
    liveReload: true,
  },
  // importの際に「extensions」の拡張子を省略する
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
