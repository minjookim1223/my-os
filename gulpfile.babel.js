'use strict';

import path from 'path';
import gulp from 'gulp';
import replace from 'gulp-replace';

const manifestFilename = 'manifest.json';
const buildPath = path.join(__dirname, 'build');
const manifestPath = path.join(buildPath, manifestFilename);

gulp.task('replaceManifest', () =>
  gulp
    .src(manifestPath)
    .pipe(replace(/%(REACT_APP_\w+)%/g, (_, key) => process.env[key]))
    .pipe(gulp.dest(buildPath)),
);

gulp.task('default', gulp.parallel(
  'replaceManifest',
));
