// controllers/booking.js
import { db } from "../db.js";

export const book = (req, res) => {
  const { userID, venueID, date, times } = req.body;

  const q = "INSERT INTO booking(`userID`, `venueID`, `bookingDate`, `duration`) VALUES (?)";
  const values = [userID, venueID, date, JSON.stringify(times)];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Booking has been created!");
    //hehehe
  });
};
