let gulp = require('gulp');
var autoprefixer = require('autoprefixer');
const sass = require('gulp-sass')(require('sass'))
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
const compress_images = require("compress-images");
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

gulp.task('hello', function () {
    console.log('Hello world !!!');
   });

   gulp.task('postcss:min', function () {
    return gulp.src('./dist/assets/css/*.css')
    .pipe(postcss([cssnano]))
    .pipe(gulp.dest('./dist/assets/css'));
   });

gulp.task('postcss:prefix', function () {
    return gulp.src('./src/assets/css/*.css')
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('./src/assets/css'));
   });

gulp.task('sass', function () {
    return gulp.src('./src/assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/assets/css'));
   })

gulp.task('html', function () {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
   })
   
   gulp.task('sass:watch', function () {
    gulp.watch('./src/assets/sass/**/*.scss', gulp.series('sass'));
   });
   
   gulp.task('compress', function () {
    return gulp.src('src/assets/js/*')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    });

   gulp.task('img:min', function () {
    compress_images(
        "src/assets/img/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}",
        "./dist/assets/img/",
        { compress_force: false, statistic: true, autoupdate: true },
        false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        {
        gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
        },
        function (err, completed) {
        if (completed === true) {
        }
        }
    );
    }
);

gulp.task('build', gulp.parallel('html','img:min',
            gulp.series('sass', 'postcss:prefix', 'postcss:min'), 
            gulp.series('compress')));