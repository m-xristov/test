import * as path from "path";
import * as webpack from "webpack";

// tslint:disable-next-line:no-object-literal-type-assertion
export default {
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            configFileName: "tsconfig.json"
                        }
                    }
                ],
                exclude: [
                    /\.e2e\.ts$/,
                    /node_modules/
                ]
            },

            {
                test: /.ts$/,
                exclude: /(node_modules|\.spec\.ts|\.e2e\.ts$)/,
                loader: "istanbul-instrumenter-loader",
                enforce: "post"
            },

            {
                test: /\.json$/,
                use: "json-loader"
            },

            {
                test: /\.css$/,
                use: ["to-string-loader", "css-loader"]
            },

            {
                test: /\.scss$/,
                use: ["to-string-loader", "css-loader", "sass-loader"]
            },

            {
                test: /\.html$/,
                use: "raw-loader"
            }
        ]
    }
    /*plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: null,
            test: /\.(ts|js)($|\?)/i
        }),

        new webpack.NoEmitOnErrorsPlugin()
    ]
    */
} as webpack.Configuration;
