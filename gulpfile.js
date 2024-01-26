const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  cssmin = require("gulp-clean-css"),
  jsmin = require("gulp-terser"),
  browserSync = require("browser-sync").create()
// css && cssmin
gulp.task('css', function () {
  return gulp
    .src("./publics/styles/*.scss")
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest("./publics/gulp"))
    .pipe(browserSync.stream())
})
// js min
gulp.task('js', function () {
  return gulp
    .src("./publics/js/**/*.js")
    .pipe(jsmin())
    .pipe(gulp.dest("./publics/gulp"))
})
// watch && browserSync
gulp.task('watch', function (cb) {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    startPath: "index.html",
  })
  gulp.watch("publics/styles/**/*.scss", gulp.series("css"))
  gulp.watch("./*.html").on("change", browserSync.reload)
  gulp.watch("publics/js/**/*.js", gulp.series("js"))
  cb()
});
// default tasks
gulp.task('default', gulp.series("css", "js", "watch"));
// deploy gulp
exports.build = gulp.series("css", "js")