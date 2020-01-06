const webpack=require('webpack')
const path=require('path')


module.exports={

	devtools:'inline-source-map',
	
entry:{
	'index':'./src/index.js'
},

output:{
	path:path.resolve(__dirname,'dist'),
	filename:'[name].[hash].js'
},

module :{
	rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:'babel-loader'
			}
	]
},

devServer:{
	contentBase:path.join(__dirname,"/public/"),
	port:3000,
	publicPath:"http://localhost:3000/dist/"
}

}