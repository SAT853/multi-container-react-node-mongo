const mongoose = require("mongoose");

const db = process.env.TO_DO_DB;

const connectDB = async () => {
  let attemps = 5;

  while (attemps) {
    try {
      await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
      break;
    } catch (error) {
      console.log("Error: ", error.message);
      attemps -= 1;
      console.log(`connection attempts left: ${attempts}`);
      // wait for 10 seconds before retrying
      await new Promise((res) => setTimeout(res, 10000));
    }
  }
};

module.exports = { connectDB };
