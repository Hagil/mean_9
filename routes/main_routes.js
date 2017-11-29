var router = require('express').Router();
var PATIENTCLASS = require('../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res){
    console.log('doing homepage');
    res.render('index');
}

//api
router.get('/api/v9/read', do_read);
router.get('/api/v9/read/:_id', do_single_read);
router.post('/api/v9/create', do_create);
router.put('/api/v9/update', do_update);
router.delete('/api/v9/delete', do_delete);

function do_read(req, res) {
    console.log('getting all records');
    PATIENTCLASS.find({}, {
            name: 1,
            gender: 1
        })
        .then(function (results) {
           // console.log(results);
            res.json(results);
        });
}

function do_single_read(req, res) {
    console.log('getting single record');
    console.log(req.params);
    PATIENTCLASS
        .findById(req.params._id)
        .then(function (result){
            console.log(result);
            res.json(result);
        });
}

function do_create(req, res) {
    console.log('creating record');
    console.log(req.body);
    var data = {
        name: req.body.name,
        gender: req.body.gender,
        contact: {
            email: req.body.email,
            cell: req.body.cell,
        },
        medical: {
            drug: req.body.drug,
            usage: req.body.usage
        }
    }
    var patient = new PATIENTCLASS(data);
    patient.save().then(function (result){
        console.log(result);
        res.json({message: 'backend created!'});
    });
}

function do_update(req, res) {
    console.log('updating record');
    console.log(req.body);
    var update = {
        $set: {
            name: req.body.name,
            gender: req.body.gender,
            contact: {
                email: req.body.email,
                cell: req.body.cell,
            },
            medical: {
                drug: req.body.drug,
                usage: req.body.usage
            }
        }
    }
    PATIENTCLASS
        .findByIdAndUpdate(req.body._id, update)
        .then(function (result){
            console.log(result);
            res.json({message: 'backend updated!'});
        });
}

function do_delete(req, res) {
    console.log('deleting record');
    console.log(req.params);
    PATIENTCLASS.findByIdAndRemove(req.params._id).then(function (result){
        console.log(result);
        res.json({message: 'backend deleted!'});
    });
}