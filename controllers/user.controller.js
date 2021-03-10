const { response } = require("express");

const usersGet = (req, res = response) => {
  res.json({
    ok: true,
    msg: " Get Api controller",
  });
};

const usersPost = (req, res) => {
  const { body } = req;
  const { name } = body;
  res.json({
    ok: true,
    msg: "Post Api controller",
    name,
  });
};

const usersPut = (req, res) => {
  res.json({
    ok: true,
    msg: " Put Api controller",
  });
};

const usersDelete = (req, res) => {
  res.json({
    ok: true,
    msg: " Delete Api controller",
  });
};

const userPatch = (req, res) => {
  res.json({
    ok: true,
    msg: " Patch Api controller",
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
  userPatch,
};
