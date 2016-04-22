module.exports = function(grunt) {

    // Configure tasks`
    grunt.initConfig({
        // read package.json for dependencies
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            build:{
                src:'app/*.js',
                dest:'dist/js/script.min.js'
            },
            dev:{
                options:{
                    beautify:true,
                    mangle:false,
                    compress:false,
                    preserveComments:'all'
                },
                src:'app/*.js',
                dest:'dist/js/script.js'
            }
        },
        watch:{
            js:{
                //watch the file
                files:['app/*.js'],
                //run the task
                tasks:['uglify:dev']
            },
            css:{
                files:['app/assets/scss/*.scss'],
                tasks:['sass:dev']
            }
        },
        sass:{
            dev:{
                options:{
                    outputStyle:'expand'
                },
                files:{
                    'dist/js/styles.css':'assets/scss/application.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default',['uglify:dev','sass:dev']);
    grunt.registerTask('build',['uglify:build']);
};



