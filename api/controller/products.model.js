const mongoose = require('mongoose')
const order = require('../model/order')

exports.getOrder = async(req,res)=>{
    try{
        //Order object
        const Order = await order.find();//Gets all the data fr4om database
        res.status(200).json({
            msg: "This is Get request for Orders",
            statusMsg:"Products data fetched successfully",
            data:Order
        })
    }
    catch(err){
        res.status(501).json({
            code:10,
            msg: "Failed to save data",
            statusMsg:"Something went wrong",
            err:err
        })
    }
}

//Post (Create->CRUD)
exports.createOrder = async(req,res)=>{
    try{
        //Order object
        const Order = new order({
            _id:new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        }) 
        const data = await Order.save();//call's save method and wait
        res.status(200).json({
            msg: "This is POST request for Orders",
            statusMsg:"Product created successfully",
            order:data
        })
    }
    catch(err){
        res.status(501).json({
            code:10,
            msg: "Failed to save data",
            statusMsg:"Something went wrong",
            err:err
        })
    }
}

exports.getOrderById = async(req,res)=>{
    try{
        //Order object
        const Order = await order.findById(req.params.orderId);//Gets all the data fr4om database
        res.status(200).json({
            msg: "This is Get request for Single Order",
            statusMsg:"Product data fetched successfully",
            data:Order
        })
    }
    catch(err){
        res.status(501).json({
            code:10,
            msg: "Failed to save data",
            statusMsg:"Something went wrong",
            err:err
        })
    }
}

exports.updateOrder = async(req,res)=>{
    try{
        //Order object
        const Order = await order.findByIdAndUpdate(req.params.orderId, req.body);//Gets all the data fr4om database
        res.status(200).json({
            statusMsg:"Product Updated successfully",
            data:Order
        })
    }
    catch(err){
        res.status(501).json({
            code:10,
            msg: "Failed to save data",
            statusMsg:"Something went wrong",
            err:err
        })
    }
}

exports.deleteOrder = async(req,res)=>{
    try{
        //Order object
        const Order = await order.findByIdAndDelete(req.params.orderId);//Gets all the data fr4om database
        res.status(200).json({
            statusMsg:"Product deleted successfully",
            data:Order
        })
    }
    catch(err){
        res.status(501).json({
            code:10,
            msg: "Failed to save data",
            statusMsg:"Something went wrong",
            err:err
        })
    }
}