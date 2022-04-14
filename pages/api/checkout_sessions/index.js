import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
/* 
sau alta varianta pt cele de mai sus
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
*/

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { price, quantity } = req.body.items[0];
    const { formRegister } = req.body;
    console.log("req.body: ", formRegister)
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
          {
            price: price,
            quantity: quantity,
          },
        ],
        // success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/inscriere`,
        metadata: formRegister,
      });
      console.log("Form register:",formRegister)

      // res.redirect(303, session.url)
      // res.status(200).json(session)
      res.status(200).json(session)
    } catch (error) {
      console.log(
        "Payment not good, you are to poor, or your wife took all of your money 🥳"
      );
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    console.log('checkout_sessions: else')
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed for you.");
  }
}
