const {src, dest , watch, series , parallel} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

const paths = {
    stylesPath: 'app/styles/**/*.scss',
    scriptPath: 'app/scripts/**/*.js',
};

function stylesTask(){
    return src(paths.stylesPath, {sourcemaps:true})
    .pipe(sass())
    .pipe(cleancss())
    .pipe(autoprefixer())
    .pipe(dest('dist', {sourcemaps: '.'}));
}

function scriptsTask() {
	return src(paths.scriptPath,{ sourcemaps: true }
	)
		.pipe(terser())
		.pipe(dest('dist', { sourcemaps: '.' }));
}


function browserSyncServe(cb){
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });

    cb();
}

function browserSyncReload(cb){
    browserSync.reload();
    cb();
}

function watchTask(){
    watch('*.html',browserSync.reload());
    watch([paths.stylesPath, paths.scriptPath],
    series(stylesTask,scriptsTask,browserSyncReload)
    );
}

exports.default = series(stylesTask,scriptsTask,browserSyncServe,watchTask);