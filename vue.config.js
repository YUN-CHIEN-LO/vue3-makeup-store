module.exports = {
  lintOnSave: false,
  // 全局引入scss
  css: {
    loaderOptions: {
      sass: {
        prependData: `
             @import "@/scss/index.scss";
          `,
      },
    },
  },
  // 不希望打包後的檔名出現雜湊值
  filenameHashing: false,
  // 佈署
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue3-makeup-store/" : "/",
};
