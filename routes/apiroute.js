var tableData = require("../data/table");
var waitData = require("../data/wait");

module.exports = function(app) {
    app.get("/api/table", function(req, res){
        res.json(tableData);
    });

    app.get("/api/wait", function(req, res){
        res.json(waitData);
    });

    app.post("/api/table", function(req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitData.push(req.body);
            res.json(false);
        }
    });

    app.post("/api/clear", function() {
        tableData = [];
        waitData = [];
        console.log(tableData);
    });
};