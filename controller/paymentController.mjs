
import Stripe from "../utils/stripeClient.mjs";

export const clientCheckoutSession = async (req, res) => {
    try {
        const { allproduct } = req.body;

        if (!allproduct?.name || !allproduct?.price) {
            return res.status(400).send({
                message: "invalid product data "
            });
        }

        const session = await Stripe.checkout.sessions.create({
            payment_method_types: ["card"],

            line_items: [
                {
                    price_data: {
                        currency: "usd",

                        product_data: {
                            name: allproduct.name,
                            description: allproduct.description || ''
                        },

                        unit_amount: allproduct.price * 100,
                    },

                    quantity: allproduct.quantity || 1,
                },
            ],

            mode: "payment",

            success_url: `${process.env.client_url}/success`,

            cancel_url: `${process.env.client_url}/cancel`,
        });

        res.send({ url: session.url });

    } catch (error) {
        res.status(500).send({
            message: 'stripe checkout session creation failed ',
            error: error.message,
        });
    }
};
