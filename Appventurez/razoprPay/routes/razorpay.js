const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');

const instance =new Razorpay({
    key_id: '',
    key_secret:''
});

router.get('/', (req, res) => {
    var options = {
        amount: 600,
        currency: 'INR',
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            console.log(err);
        } else {
            console.log(order.id , "order");
            res.render('./checkout.ejs', {amount: order.amount, order_id: order.id});
        }
    });
});


router.post('/pay-verify',(req,res) => {
    console.log(req.body , "body");
    body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
    var crypto = require("crypto");
    var expectedSignature = crypto.createHmac('sha256', '')
                                    .update(body.toString())
                                    .digest('hex');
                                    console.log("sig"+req.body.razorpay_signature);
                                    console.log("sig"+expectedSignature);
    
    if(expectedSignature === req.body.razorpay_signature){
      console.log("Payment Success");
    }else{
      console.log("Payment Fail");
    }
  })

module.exports = router;
