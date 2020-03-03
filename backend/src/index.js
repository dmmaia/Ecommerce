const express = require('express')
var cors = require('cors');
const paypal = require('paypal-rest-sdk');
const paypalConfig = require('./config/paypal');

paypal.configure(paypalConfig) 

const app = express()
app.use(cors())

app.get('/', (req,res)=> {
    res.send("Hello")
})

const {products} = require('./config/products')

app.post('/buy', (req,res) => {
    
    const productId = "1";
    const product = products.reduce((all, item)=> item.id.toString() === productId ? item : all, {});
    if(!product.id) return res.send('Error');

    const cart = [{
        "name": product.title,
        "sku": product.id,
        "price": product.price.toFixed(2),
        "currency": "USD",
        "quantity": 1
    }];

    const value={"currency": "USD", "total": product.price.toFixed(2),}
    const description = product.description;

    const json_payment ={
        "intent": "sale",
        "payer": {payment_method:"paypal"},
        "redirect_urls":{
            "return_url": "http://localhost:3333/success",
            "cancel_url": "http://localhost:3333/cancel"
        },
        "transactions": [{
            "item_list":{"items": cart},
            "amount": value,
            "description": description
        }]
    }
    paypal.payment.create(json_payment, (err, pagamento) => {
        if(err){
            console.warn(err);
        }
        else{
            pagamento.links.forEach((link) => {
                if(link.rel === 'approval_url') return res.redirect(link.href);
            })
        }
    })
})

app.listen(3333);