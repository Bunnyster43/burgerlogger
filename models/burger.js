var orm = require("../config/orm.js");

var burger = {
    select: function(callback) {
        orm.select("burgers", function(result) {
        callback(result);
    });
},
    insert: function(cols, vals, callback) {
        orm.insert("burgers", cols, vals, function(result) {
        callback(result);
    });
},
    update: function(objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(result) {
        callback(result);
    });
},
//     delete: function(condition, callback){
//         orm.delete("burgers", condition, function(result){
//         callback(result);
//     });
// }};
}
module.exports = burger;