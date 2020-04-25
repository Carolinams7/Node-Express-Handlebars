var orm = require("../config/orm");

var table = "burgers";

var burger = {
    select:function(callback){
        orm.selectAll(table, function(res){
            callback(res);
        })
    },
    create:function(column, value, callback){
        orm.insertOne(table, column, value, function(res){
            callback(res);
        })
    },
    update:function(column, value, id, callback){
        orm.updateOne(table, column, value, id, function(res){
            callback(res);
        })
    }
}

module.exports = burger;
