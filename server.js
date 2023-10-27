// sk_test_51NwgO8SIt68lv3KusdWrABM7Vz54mSAoaphwCBrHUYIPVqfeQW1OXjAvuG0Tkd2cDf7ktRJ9hEjqEgQaq8P03u9d0071U5fBwQ
// coffee: price_1O5shSSIt68lv3KupezideE1
// 600    : price_1O5siRSIt68lv3Ku4I2iNhMs
///6000   : price_1O5sjDSIt68lv3KuKW5qzAYi 

const express=  require('express')
var cors = require('cors')
require('dotenv').config()
const stripe=require('stripe')(process.env.Secret_Key)


// console.log(process.env.Secret_Key)

const app= express();
app.use(cors())
app.use(express.static("public"))
app.use(express.json());

app.post("/checkout",async(req,res)=>{
    const items=req.body.items;
    let lineItems=[];
    items.forEach(item => {
        lineItems.push(
            {
                price:item.id,
                quantity:item.quantity
            }
        )
    });

    const session =await stripe.checkout.sessions.create({
        line_items:lineItems,
        mode:'payment',
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel"
    });
    res.send(
        JSON.stringify({
            url:session.url
        })
    )



})


app.listen(4000,()=>{
    console.log("listen at 4000");
})


