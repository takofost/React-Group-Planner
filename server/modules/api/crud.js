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
    email:{
        type: String,
        require: true
        // type : Date, 
        // default:Date.now,
        // require: true
    }


}, { collection: 'crudData' });


var module = mongoose.model("crudData", mydata)

exports.save = function (req, res) {
    var postbody = req.body;
    var data = {
        name: postbody.name,
        email: postbody.email
    }
    var saveData = new module(data);
    
    saveData.save(function (err, data1) {
        console.log("data",data,data1)
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
exports.delete = function (req, res) {
    var postbody = req.params.id;
      
   module.findByIdAndRemove(postbody,function (err, data1) {
        if (err) {
            res.send({
                statusCode: 400,
                message: "data not delete"
            })
        } else {
            res.send({
                statusCode: 200,
                message: "Delete Data Successfully",
                data: data1
            })
        }
    })
}
exports.update = function (req, res) {
    var postbody = req.body;
    console.log(postbody);
    var data = {
        name: postbody.name,
        email: postbody.email
    }
   var id=req.params.id;
    
    module.findByIdAndUpdate(id,data,function (err, data1) {
        if (err) {
            res.send({
                statusCode: 500,
                message: "data not update"
            })
        } else {
            res.send({
                statusCode: 200,
                message: "data  update successfully",
                data: data1
            })
        }
    })
}

    exports.getbyid = function (req, res) {
    var postbody = req.params.id;
     
   module.findById(postbody,function (err, data1) {
        if (err) {
            res.send({
                statusCode: 400,
                message: "id not get"
            })
        } else {
            res.send({
                statusCode: 200,
                message: "get id successfully",
                data: data1
            })
        }
    })
}


 exports.getbyLogin = function (req, res) {
        var postbody = req.body;
       // console.log(postbody);
        var data = {
            email: postbody.email,
            name: postbody.name

        }
    //  var id=req.params.id;
       module.findOne(data,function (err, data1) {
            if (err) {
                res.send({
                    statusCode: 500,
                    message: "data nt found"
                })
            } else {
                if(data1==null){
                    res.send({
                        statusCode: 500,
                        message: "data not found"
                    })   
                }else{
                     res.send({
                    statusCode: 200,
                    message: "data  found",
                    data: data1
                })
                }
               
            }
        })
    }
  