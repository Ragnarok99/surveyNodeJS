const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requiredLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post("/api/stripe", requiredLogin, async (req, res) => {
    console.log(req.body);
    try {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: "usd",
        description: "5 dollars for 5 credits",
        source: req.body.id
      });

      req.user.credits += 5;
      const user = await req.user.save();

      res.send(user);
    } catch (error) {
      console.log({ error });
    }
  });
};
