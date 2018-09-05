import express from 'express';
import { join } from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev'

/*eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  } else{
    open('http://localhost:' + port);
  }
});
