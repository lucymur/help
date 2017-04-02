module.exports = function () {
	return {
		/**
		 * Paths
		 */
		srcDir: 'src',
		buildDir: 'build',
		vendorDir: 'node_modules',
		buildVendorDir: 'vendor',
		buildDevDir: '<%= config.buildDir %>/dev',
		buildProdDir: '<%= config.buildDir %>/prod',
		htmlDir: '<%= config.srcDir %>/html',

		/**
		 *	Use this configs for file compilation
		 */
		files: {

			/**
			 * Javascript files
			 */
			js: {
				/**
				 * This section is not working yet!!!!
				 */
				vendorOut: 'javascript/vendor.min.js',
				sourceOut: 'javascript/script.min.js',

				
				/**
				 * Put in this section vendor files from folder "node_modules"
				 * This files will by copy to the "vendor" folder and automatically added to html files
				 */
				vendor: [
					'jquery/dist/jquery.min.js',
					'bootstrap-sass/assets/javascripts/bootstrap.min.js',
					'fancybox/dist/js/jquery.fancybox.pack.js'
				],

				/**
				 * Put in this section you source js files.
				 * This files will by copy to the current folder and automatically added to html files
				 */
				source: [
					'javascript/scripts.js'
				]
			},

			css: {
				vendorOut: 'stylesheets/vendor.min.css',

				vendor: [
					// 'fancybox/dist/css/jquery.fancybox.css'
				]
			},

			/**
			 * Put in this section html files which should be displayed.
			 */
			html: [
				'index.html',
				'frontpage.html',
				'components.html'
			],

			/**
			 * Sass paths
			 */
			sass: {
				'stylesheets/style.css': 'sass/style.scss'
			},

			/**
			 * copy paths
			 */
			copy: {
			
				/**
				 * copy from source
				 */
				source: [
					'images/**/*',
					'fonts/**/*'
				],

				/**
				 * copy from vendor
				 */
				vendor: [
					'fancybox/dist/img/*',
					'bootstrap-sass/assets/fonts/bootstrap/*',
					'font-awesome/fonts/**/*',
				]
			}
		}
	}
};