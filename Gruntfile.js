/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    
    // Task configuration.
    concat: {
      bower:{
        options: {
          banner: '',
          stripBanners: false
        },
        files: {
          'css/vendor/pure.min.css': ['./bower_components/pure/pure-min.css'],
          'js/vendor/jquery.min.js': ['./bower_components/jquery/dist/jquery.min.js']
        } 
      }
    },

   'bower-install-simple': {
     all:{}
   },

   jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },

      src: {
        src: 'js/*.js'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
    },

    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile'],
      },
      src: {
        files: ['js/*.js'],
        tasks: ['jshint:src'],
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-install-simple');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('bower', ['bower-install-simple','concat:bower']);
  grunt.registerTask('default', ['jshint', 'concat']);

};
