/**
 * Created by kexiao on 16/12/20.
 */

var webpack = require('webpack');
var path = require('path');
module.exports={

    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:__dirname+'/build'
    },
    module:{
        loaders:[
            {
                test:/\.js/,
                include:[
                    path.resolve(__dirname,'app/src'),
                    path.resolve(__dirname,'app/test')
                ],
                exclude: /node_modules/,
                loader:'babel'
            }
        ]
    },
    devtool:'#eval-source-map',

    devServer:{
        contentBase:'/build',

    }
}
