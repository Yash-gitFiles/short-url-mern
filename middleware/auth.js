const { getUser } = require("../services/auth");

async function restrictLoggedInUserOnly(req, res, next) {
  const userUid = req.cookies.uid;
  if (!userUid) {
    return res.redirect("static/login");
  }
  const user = getUser(userUid);
  if (!user) {
    return res.redirect("static/login");
  }
  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const userUid = req.cookies.uid;
  const user = getUser(userUid);
  req.user = user;
  next();
}

module.exports = {
  restrictLoggedInUserOnly,
  checkAuth,
};
