module.exports = function(grunt) {

	// 1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					// Can be nested, compact, compressed, expanded
					style: 'expanded'
				},
				files: {
					'style.css': 'scss/style.scss',
					'rtl.css': 'scss/rtl.scss',
					'css/editor-style.css': 'scss/editor-style.scss',
				}
			}
		},
		autoprefixer: {
			options: {
				// Task-specific options go here.
			},
			global: {
				options: {
					// Target-specific options go here.
					// browser-specific info: https://github.com/ai/autoprefixer#browsers
					// DEFAULT: browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1']
					browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1', 'ie 8', 'ie 9']
				},
				src: 'css/style.css'
			},
		},
		watch: {
			scss: {
				files: [
					'scss/*.scss',
					'scss/**/*.scss',
					'scss/**/**/*.scss'
				],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			},
			autoprefixer: {
				files: ['*.css', '**/*.css',],
				tasks: ['autoprefixer'],
				options: {
					livereload: true,
					spawn: false,
				}
			}
		}
	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-watch');      // watch files for changes
	grunt.loadNpmTasks('grunt-contrib-sass');       // Gettin Sassy!
	grunt.loadNpmTasks('grunt-autoprefixer');       // Auto-freaking-prefixer!!!

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['watch']);

};
