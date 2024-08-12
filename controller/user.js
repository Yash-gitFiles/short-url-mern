const User = require("../models/authUser");
async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/static");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.render("login", {
      error: "invalid username or password",
    });
  }
  return res.redirect("/static");
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
