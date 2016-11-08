module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
        all:{
            options:{
                port:9001,
                hostname:'localhost',
                bases:['app'],
                livereload:true
            }
        }
    },
    watch: {
        options:{livereload:true},
        syncjsfiles: {
            files: ['app/*.js'],
        },
    },
});

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sync');
  grunt.loadNpmTasks('grunt-express');


  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('server', ['express','watch']);

};
