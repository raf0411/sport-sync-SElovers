// controllers/payment.js
import { db } from "../db.js";

export const makePayment = (req, res) => {
  const { userID, method, details } = req.body;

  const q = "INSERT INTO payment(`bookingID`, `paymentMethod`, `cardName`, `cardNumber`, `expiryDate`, `CVV`) VALUES (?)";
  const values = [userID, method, JSON.stringify(details)];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Payment has been processed!");
    //hehehe
  });
};
