# SimpleXLS

[![NPM url here](https://raw.githubusercontent.com/dman777/icons/master/npm.jpg)](https://www.npmjs.com/package/simple-xls)

```npm install simple-xls``` 

Simple XLS exporter in NodeJS.

Simple XLS has one function:
```SimpleXLS.write_to_xls = function(columns, datas)```
  
Columns have the structure: 
```javascript
{
  'label': 'my infinitely expressive column name',
  'name':'my_boring_database_semantic_name'
}
```

Rows (datas) have the structure:
```javascript
{
  'my_boring_database_semantic_name': 'foo',
  'my_other_semantic_name': 'bar'
}
```


The return is a WritableStream from the [memory-streams](https://www.npmjs.com/package/memory-streams) npm package. 
   
Now all you have to do to return this as an attachment in [ExpressJS](http://expressjs.com/) is:

```javascript
var SimpleXLS = require('SimpleXLS');
var xls_buffer = SimpleXLS.write_to_xls(columns, rows).toBuffer();
resp.setHeader('Content-Type', 'application/vnd.openxmlformats');
resp.setHeader("Content-Disposition", "attachment; filename=" + "example.xls");
resp.setHeader('Content-Length', xls_buffer.length);
resp.end(xls_buffer);
```
