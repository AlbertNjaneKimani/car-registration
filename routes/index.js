const express = require('express');
const router = express.Router();

const { Cars } = require('../models/cars');

// Get all cars
router.get('/api/cars', (req, res) => {
    Cars.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        }
        else {
            console.log("error occured" +error);
        }
    })
})
//save cars
router.post('/api/cars/add', (req, res) => {
    const car = new Cars({
        number: req.body.number,
        model: req.body.model,
        make: req.body.make,
        description: req.body.description,
        year: req.body.year,
        price: req.body.price
    });
    car.save((err, data) => {
        res.status(200).json({
            code: 200, message: 'Car created successfully ',
            addCar: data
        })
    })
})

//get single car  by id
router.get('/api/cars/:id', (req, res) => {
    Cars.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data);
        }
        else {
            console.log(err);
        }
    })
});
// update existing car
router.put('/api/cars/edit/:id', (req, res) => {
    const car = {
        number: req.body.number,
        model: req.body.model,
        make: req.body.make,
        description: req.body.description,
        year: req.body.year,
        price: req.body.price
    };
    Cars.findByIdAndUpdate(req.params.id, { $set: car }, { new: true }, (err, data) => {
        if (!err) {
            res.status(200)
                .json({
                    code: 200, message: "record updated successfully",
                    updateCar: data
                })
        }
        else {
            console.log(err)
        }
    })
})

//Delete a car
router.delete('/api/cars/delete/:id', (req, res) => {
    Cars.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err) {
            res.status(200)
                .json({ code: 200, message: "car deleted successfully" })
        }
        else {
            console.log(err);
        }
    })
    
})
module.exports = router;        