const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  //STRIPE_SECRET
);

//API

//App config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (req, res) => {
  res.status(200).send("hello World!");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "inr",
  });

  //OK created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);
