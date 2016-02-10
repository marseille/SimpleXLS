var exports = module.exports = {};
var streams = require('memory-streams');
var fs = require('fs');


/**
 *
 * Give me some columns and some datas to noms.
 * 
 * Columns have the structure {'label': 'my infinitely expressive column name', 'name':'my_boring_database_semantic_name'}
 * Rows (datas) have the structure {'my_boring_database_semantic_name': 'foo', 'my_other_semantic_name': 'bar'}
 *
 */
exports.write_to_xls = function(columns, datas){  
  var write = new streams.WritableStream();
  var header = "";
  columns.forEach(function(column){    
    header += column.label + "\t";
  });
  header += "\n";
  write.write(header);

  datas.forEach(function(model){
    var row = "";
    columns.forEach(function(key){          
      row += model[key.name] + "\t";      
    });
    row += "\n";
    write.write(row);    
  });
  return write;
};