const getAllUsers = (req, res, next) => {
  res.status(200).json({
    message: "Get Users Using Controllers Success!",
  });
};

const postUsers = (req, res, next) => {
  res.status(200).json({
    message: "Post Users Using Controllers Success!",
  });
};

module.exports = { getAllUsers, postUsers };
