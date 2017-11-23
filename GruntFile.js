module.exports = function(grunt){
    grunt.initConfig({
        run: {
            build: {
              cmd: 'tsc'
            }
          },
          copy: {
            deploy: {
              files: [{
                  expand: true,
                  src: ["install/**", "node_modules/**", "node.exe", "install.bat"],
                  dest: "./dist",
                }
              ]
            }
          },
          zip_directories: {
            package: {
              files: [{
                filter: 'isDirectory',
                expand: true,
                src: ['dist/**'],
                dest: './'
              }]
            }
          }
    });

    grunt.loadNpmTasks("grunt-run")
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-zip-directories');

    grunt.registerTask('default', ['run:build','copy:deploy']);
    grunt.registerTask('release', ['default', 'zip_directories:package']);
    
}