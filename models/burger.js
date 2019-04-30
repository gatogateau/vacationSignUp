// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
    all: function (cb) {
        orm.allBurgers("burgers", function (res) {
            cb(res);
        });
    },


    create: function (name, cb) {
        orm.addBurger("burgers", name, function (res) {
            cb(res);
        });

    },

    update: function (id, devoured, cb) {
        orm.updateBurger("burgers", id, devoured, function (res) {
            cb(res);
        });

    },

    delete: function (name, cb) {
        orm.deleteBurger("burgers", name, function (res) {
            cb(res);
        });

    }
};

// exports database functions for the controller (controller/apiRoutes.js)
module.exports = burger;