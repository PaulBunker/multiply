module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    base: 'dist/',
                    keepalive: true
                }
            }
        },

        copy: {
            main: {
                files: [
                    {
                        src: 'src/index.html',
                        dest: 'dist/index.html'
                    }
                ]
            }
        },

        less: {
            main: {
                files: [
                    {
                        src: 'src/css/main.less',
                        dest: 'dist/css/main.css'
                    }
                ]
            }
        },

        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('autoprefixer')({browsers: 'last 6 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'dist/css/main.css'
            }
        },

        webpack: {
            main: {
                entry: './src/js/main.js',
                output: {
                    path: 'dist/js',
                    filename: 'main.js'
                },
                failOnError: false,
                debug: true,
                devtool: 'inline-source-map',
                module: {
                    loaders: [
                        {
                            test: /\.js$/,
                            include: /src\/js\//,
                            loader: 'babel-loader'
                        }
                    ]
                }
            }
        },

        watch: {
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['webpack']
            },
            css: {
                files: ['src/css/**/*.less'],
                tasks: ['less', 'postcss']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['copy']
            }
        }

    });

    grunt.registerTask('build', ['copy', 'less', 'postcss', 'webpack']);
    grunt.registerTask('serve', ['build', 'connect']);
    grunt.registerTask('default', ['build', 'connect', 'watch']);

};
