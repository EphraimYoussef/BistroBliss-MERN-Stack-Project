const userServices = require('../services/userServices');
const jsend = require('jsend');


const getUser = async (req, res) => {
    try{
        const user = await userServices.getUser(req.user._id);
        res.json(jsend.success({user}));
    }catch(err){
        res.status(500).json(jsend.error({message: err.message}));
    }
}

const getUsers = async (req, res) => {
    try{
        const users = await userServices.getUsers();
        res.json(jsend.success({users}));
    }catch(err){
        res.status(500).json(jsend.error({message: err.message}));
    }
}

const updateUser = async (req, res) => {
    try{
        const user = await userServices.updateUser(req.user._id, req.body);
        res.json(jsend.success({user}));
    }catch(err){
        res.status(500).json(jsend.error({message: err.message}));
    }
}

const getBookings = async (req, res) => {
    try{
        const bookings = await userServices.getBookings(req.user._id);
        res.json(jsend.success({bookings}));
    }catch(err){
        res.status(500).json(jsend.error({message: err.message}));
    }
}


module.exports = {
    getUser,
    getUsers,
    updateUser,
    getBookings
}