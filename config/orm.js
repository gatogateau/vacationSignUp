// connect to config/connection from static position public folder
var connection = require("../config/connection.js");

// connection for testing this page only
// var connection = require("./connection.js");

// connect determines the queries


var orm = {
    allBurgers: function (table, cb) {
        connection.query("SELECT * FROM " + table, function (err, res) {
            if (err) {
                throw err;
            }
            // Log all results of the SELECT statement
            console.log(res);
            cb(res)

        });

    },
    addBurger: function (table, name, cb) {
        connection.query(
            "INSERT INTO " + table + " SET ?", {
                burgerName: name,
                devoured: false
            },

            function (err, res) {
                // console.log(res.affectedRows + " product inserted!\n");
                console.log(res);
                cb(res);
            }


        );
        // cb(res);
        // logs the actual query being run
        // console.log(query.sql);
    },
    deleteBurger: function (table, name, cb) {
        console.log("deleting burger");
        connection.query("DELETE FROM " + table + " WHERE ?", {
                burgerName: name
            },
            function (err, res) {
                console.log(name + " was deleted");
                // console.log(res.affectedRows + " products deleted!\n");
                cb(res);
            }
        );
        // cb(res);

    },

    updateBurger: function (table, id, devoured, cb) {
        console.log("updating " + table + " to " + devoured);
        // devoured = parseInt(devoured);
        console.log(typeof (devoured));
        connection.query(
            "UPDATE " + table + " SET ? WHERE ?", [{
                    devoured: devoured

                },
                {
                    id: id
                }
            ],
            function (err, res) {
                console.log(id + " was updated to devour " + devoured);
                // console.log(res.affectedRows + " products updated!\n");
                cb (res)
            }
        );
        // cb(res);
    }
};

// test addBurger
// orm.addBurger ("garlicWonder", "0");

// test updateBurger
// orm.updateBurger("Plain ol Veggie burger", 1);

// test deleteBurger
// orm.deleteBurger("garlicWonder");

// test allBurgers
// orm.allBurgers();



module.exports = orm;