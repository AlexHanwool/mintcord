exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) next();
  else res.status(403).json({
    result: "failure",
    message: "please log in first",
  });
}

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) next();
  else res.json({
    result: "failure",
    message: "please logout first",
  });
}