var mongoose = require('mongoose');

var crud = {
    title: "crudapp",
    statusCode: 200
}
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Talha:Talha1@ds127132.mlab.com:27132/cruddb');

var mydata = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    time:{
        type:String,
        require: true
        // type : Date, 
        // default:Date.now,
        // require: true
    },
    text:{
        type:String,
        require:true
    }


}, { collection: 'chatRecord' });


var module = mongoose.model("chatRecord", mydata)

exports.save = function (req, res) {
    var postbody = req.body;
    var data = {
        name: postbody.name,
        time: postbody.time,
        text:postbody.text,
    }
    var saveData = new module(data);
  
    saveData.save(function (err, data1) {
       // console.log("data",data,data1)
        if (err) {
            res.send({
                statusCode: 500,
                message: "data not save"
            })
        } else {
            res.send({
                statusCode: 200,
                message: "data  save",
                data: data1
            })
        }
    })
}

exports.get = function (req, res) {
    module.find({}, function (err, data1) {
        if (err) {
            res.send({
                statusCode: 500,
                message: "not get data"
            })
        } else {
            res.send({
                statusCode: 200,
                message: "get data",
                data: data1
            })
        }
    })
}