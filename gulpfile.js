var gulp = require("gulp"),
    sass = require("gulp-sass"),
    mincss = require("gulp-clean-css")
    rename = require("gulp-rename")

gulp.task("sass", function() {
  gulp.src("./sass/*.sass")
  .pipe(sass())
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(mincss())
  .pipe(gulp.dest("./css/"))
});

gulp.task("sass:watch", function() {
  gulp.watch("./sass/*.sass", ["sass"])
});

gulp.task("default", ["sass:watch"]);
