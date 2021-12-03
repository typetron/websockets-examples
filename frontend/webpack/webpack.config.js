const path = require('path')

module.exports = {
	entry : './index.ts',
	resolve : {
		extensions : ['.tsx', '.ts', '.js'],
	},
	optimization : {
		usedExports : true,
		minimize : true, // <---- disables uglify.
		// minimizer: [new UglifyJsPlugin()] if you want to customize it.
	},
	output : {
		filename : 'index.js',
		path : path.resolve(__dirname, '../../public'),
	},
}
