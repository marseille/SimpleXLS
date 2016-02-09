var exports = module.exports = {};
var streams = require('memory-streams');
var fs = require('fs');

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