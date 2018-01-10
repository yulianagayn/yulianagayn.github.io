'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sync from 'browser-sync';
import watch from 'gulp-watch';
import vueify from 'vueify';

gulp.task('build', () => {
    return browserify({
        entries: __dirname + '/src/js/app.js',
        extension: ['.js', '.vue'],
        debug: true
    }).transform(vueify, {babel: {presets: ['es2015'], plugins: ['transform-runtime']}})
        .transform(babelify, {presets: ['es2015'], extensions: ['.js', '.vue']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'))
        .pipe(sync.reload({stream: true}));
});

gulp.task('watch', ['build'], () => {
    gulp.watch('./src/**/*.scss', ['build']);
    gulp.watch('./src/**/*.js', ['build']);
    gulp.watch('./src/**/*.vue', ['build']);
});