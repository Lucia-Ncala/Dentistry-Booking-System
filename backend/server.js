const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.post("/bookings", async (req, res) => {

  try {

    const {
      name,
      phone,
      service,
      date,
      time,
      notes
    } = req.body;

    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          customer_name: name,
          phone,
          service,
          booking_date: date,
          booking_time: time,
          notes,
          status: "pending"
        }
      ]);

    if (error) {
      throw error;
    }

    res.status(200).json({
      success: true,
      message: "Booking created successfully",
      data
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: "Something went wrong"
    });

  }

});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});