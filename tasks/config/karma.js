module.exports = function(grunt) {

  grunt.config.set('karma', {
      unit: {
        configFile: 'test/client/karma.conf.js'
      }
  });

  grunt.loadNpmTasks('grunt-karma');
};
