/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function(grunt) {
    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            dist: {
                options: {
                    optimizationLevel:5 
                },
                files: [{
                    expand: true,
                    cwd: 'www/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },
        uglify: {
            dist: {
                options: {
                    sourceMap: true,
                },
                files: {
                    'www/js/index.min.js': ['www/js/index.js']
                }
            }
        },
        cssmin: {
            dist: {
                options: {
                },
                files: {
                    'www/css/index.min.css': ['www/css/**/*.css']
                }
            }
        },
        uncss: {
            dist: {
                options: {
                    ignore: [/js-.+/, '.special-class'],
                    ignoreSheets: [/fonts.googleapis/],
                },
                files: {
                    'www/css/unused-removed.css': ['www/index.html',
                    'www/contact.html', 'www/service.html']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-uncss');
    
    grunt.registerTask('default', ['imagemin', 'uglify', 'cssmin', 'uncss']);
}
