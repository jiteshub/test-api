const express = require('express')
const router = express.Router()
const Ordercontroller = require('../controller/products.model')

//Get request for Orders
router.get('/',Ordercontroller.getOrder)
// (req,res)=>{
//     res.status(200).json({
//         msg: "This is Get request for Orders"
//     })
// })

router.post("/",Ordercontroller.createOrder)
//(req,res)=>{

//    //1 object of model
//     const Order = new order({
//         _id:new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         price: req.body.price
//     }) 

//     //2 save model object to database
//         Order.save()
//         .then((res)=>{
//             console.log(res);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
        
//     res.status(200).json({
//         msg: "This is POST request for Orders",
//         statusMsg:"Product created successfully",
//         order:Order
//     })
// })

router.get('/:orderId',Ordercontroller.getOrderById)
// (req,res)=>{
//     const id = req.params.orderId
//     res.status(200).json({
//         msg: "This is Get request for single order",
//         id: id
//     })
// })

router.put('/:orderId',Ordercontroller.updateOrder)
// (req,res)=>{
//     const id = req.params.orderId
//     res.status(200).json({
//         msg: "This is Put request for  single order",
//         id: id
//     })
// })

router.delete('/:orderId',Ordercontroller.deleteOrder)
// (req,res)=>{
//     const id = req.params.orderId
//     res.status(200).json({
//         msg: "This is delete request for  single order",
//         id: id
//     })
// })

module.exports = router