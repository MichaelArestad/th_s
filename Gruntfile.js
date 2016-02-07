module.exports = function(grunt) {

	// 1. All configuration goes here
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		sass: {
			dist: {
				options: {
					sourceMap: true,
					outputStyle: 'expanded'
				},
				files: {
					'style.css': 'scss/style.scss',
					'rtl.css': 'scss/rtl.scss',
					'css/editor-style.css': 'scss/editor-style.scss'
				}
			}
		},
		autoprefixer: {
			options: {},
			global: {
				options: {
					// browser-specific info: https://github.com/ai/autoprefixer#browsers
					browsers: [ '> 1%', 'last 2 versions', 'ff 17', 'opera 12.1', 'ie 8', 'ie 9' ]
				},
				src: 'css/style.css'
			},
		},
		watch: {
			scss: {
				files: [ 'scss/**/*.scss' ],
				tasks: [ 'sass' ],
				options: {
					spawn: false,
				}
			},
			autoprefixer: {
				files: [ '*.css', '**/*.css' ],
				tasks: [ 'autoprefixer' ],
				options: {
					livereload: true,
					spawn: false,
				}
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-autoprefixer' );

	grunt.registerTask( 'default', [ 'sass', 'autoprefixer', 'watch' ] );

};
