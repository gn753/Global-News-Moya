import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";
import "webpack-dev-server";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"; //핫리로딩
const isDevelopment = process.env.NODE_ENV !== "production";
// in case you run into any typescript error when configuring `devServer`
const config: webpack.Configuration = {
  name: "moya",
  mode: isDevelopment ? "development" : "production",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "public"),
    //경로
    filename: "bundle.js",
    //결과물의 이름
    publicPath: "/",
  },
  //최상위 루트.js하나만 경로로 설정 시 나머지는 같이 끌려온다.

  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".jsx", ".js", ".tsx", ".ts", ".json", ".scss", ".sass"], //확장자 이름
    alias: {
      "@src": path.resolve(__dirname, "src/"),
      "@public": path.resolve(__dirname, "public/"),
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 versions", "ie >= 11"],
                },
                // useBuiltIns: "usage",
                // corejs: 3,
              },
            ],
            [
              "@babel/preset-react",
              { runtime: "automatic", importSource: "@emotion/react" },
            ],
            "@babel/preset-typescript",
          ],
          plugins: [
            [
              "@babel/plugin-transform-runtime",
              {
                corejs: 3,
                proposals: true,
              },
              "@emotion/babel-plugin",
            ],
            [isDevelopment && require.resolve("react-refresh/babel")].filter(
              Boolean
            ),
          ],
        },
        exclude: ["/node_modules"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
      //   서버에 정적파일의 위치를 알려줌
    },
    hot: true,
    historyApiFallback: true,
    open: true,
    proxy: {
      "/api": {
        target: "http://54.180.136.0:3000",
        pathRewrite: { "^/api": "" },
        secure: true,
      },
    },
  },
};
export default config;
