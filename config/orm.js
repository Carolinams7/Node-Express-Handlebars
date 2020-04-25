var connection = require("./connection");

var orm = {
    // SELECT * FROM table
    selectAll:function(table, ormCallback){
        var query = "SELECT * FROM ??";
        connection.query(query,[table],function(err, res){
            if(err)throw err;
            ormCallback(res);
        });
    },
    // INSERT INTO table (column) VALUE ("string")
    insertOne:function(table, column, value, ormCallback){
        var query = "INSERT INTO ?? (??) VALUE (?)";
        connection.query(query,[table, column, value],function(err, res){
            if(err)throw err;
            ormCallback(res);
        });
    },
    // UPDATE table SET column = "string" WHERE id = "id"
    updateOne:function(table, column, value, id, ormCallback){
        var query = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(query,[table, column, value, id],function(err, res){
            if(err)throw err;
            ormCallback(res);
        });
    }
};

module.exports = orm;
