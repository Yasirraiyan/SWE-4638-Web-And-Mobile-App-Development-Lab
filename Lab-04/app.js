const mongoose = require("mongoose");
const User = require("./models/User");

mongoose
  .connect("mongodb://127.0.0.1:27017/BookModel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const newUser = new User({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  phone: "0123456789",
});

newUser
  .save()
  .then((user) => console.log("User Saved:", user))
  .catch((err) => console.log("Error:", err));
