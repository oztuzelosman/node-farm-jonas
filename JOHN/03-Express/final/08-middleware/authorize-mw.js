const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "osman") {
    req.user = { id: 01, name: "Osman" };
    next();
  } else {
    res.status(401).send("unauthorized");
  }
};

module.exports = authorize;
