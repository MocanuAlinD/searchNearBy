import Stripe from "stripe";
import { buffer } from "micro";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const config = {
    api: {
        bodyParser: false,
    }
}

export default async function handler(req,res){
    if(req.method === "POST"){
        console.log('webhook reached')
        let event
        try {
            // 1.retrieve the event by verifying the signature using the raw body and secret
            const rawBody = await buffer(req)
            const signature = req.headers['stripe-signature']

            event = stripe.webhooks.constructEvent(rawBody.toString(),signature,process.env.STRIPE_WEBHOOK_SECRET)
        } catch (error) {
            console.log(`Error message ${err.message}`)
            res.status(400).send(`Webhook error ${err.message}`)
            return
        }
        // Successfully constructed event
        console.log("Success: ", event.id)

        if(event.type === 'checkout.session.completed'){
            console.log('Payment received, event is: ', event)
        } else {
            console.warn(`Unhandled event type: ${event.type}`)
        }
        res.json({received: true, alin: 'este bine'})

    } else {
        // res.setHeaders("Allow", "POST")
        res.status(500).end('Method Not Allowed')
    }
}