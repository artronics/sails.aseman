module.exports = function(grunt) {

  grunt.config.set('mochaTest', {
    test: {
      options: {
        reporter: 'spec'
      },
      src: [
        'test/server/bootstrap.test.js',
        'test/server/**/*.spec.js']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');

};
