module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),

		sass: {
			build: {
				files : [
					{
						src : ['**/*.scss', '!**/_*.scss'],
						cwd : 'scss',
						dest : 'css',
						ext : '.css',
						expand : true
					}
				],
				options : {
					style : 'expanded'
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 8000,
					base: './',
					keepalive: true
				}
			}
		}

	});

	// Default task
	grunt.registerTask('default', ['sass']);

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};