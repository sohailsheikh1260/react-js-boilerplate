module.exports = {
  // ...other configurations...
  module: {
    rules: [
      {
        test: /\.(mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/audio/", // Output path for the bundled audio files
            },
          },
        ],
      },
    ],
  },
};
