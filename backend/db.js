const mongoose = require("mongoose");

// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoURI =
  "mongodb+srv://arkasourav7:itsDb0@cluster0.gydpsdk.mongodb.net/iNotesDb?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = () => {
  mongoose.connect(mongoURI, (err) => {
    if (err) console.log("error:", err);
    else console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
