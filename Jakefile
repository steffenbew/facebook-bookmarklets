var fs    = require('fs');
var path  = require('path');
var sys   = require('sys');
var jsmin = require('jsmin').jsmin;
var glob  = require('glob');


// read file, minify, wrap in js invocation and save to build path
var bookmarkify = function (srcpath) {

  var src          = fs.readFileSync(srcpath);
  var minified_src = jsmin(src.toString());
  var bookmarklet  = "javascript:(function(){" + encodeURIComponent(minified_src) + "}());";
  var destination  = 'build/' + path.basename(srcpath);
  
  fs.writeFileSync(destination, bookmarklet);
  sys.puts(srcpath + ' -> ' + destination);

  return bookmarklet;
};


// create an index.html overview file in build directory, in order to drag & drop the finished bookmarklets
var createOverview = function (bookmarks) {

  var html = '<ul>';

  for (var i = 0; i < bookmarks.length; i++) {
    html += '<li><a href="' + bookmarks[i].src + '">' + bookmarks[i].file.slice(4, -3) + '</a></li>';
  }

  html += '</ul>';

  fs.writeFileSync('build/index.html', html);
};


// jake tasks
desc('bookmarkify all scripts in src directoy');
task('default', function () {

  // read src dir and process each file
  glob.glob('src/*.js', function (er, matches) {
    var bookmarks = [];
    for (var i = 0; i < matches.length; i++) {
      bookmarks[i] = {
        'file' : matches[i],
        'src'  : bookmarkify(matches[i])
      };
    }
    createOverview(bookmarks);
  });

});
