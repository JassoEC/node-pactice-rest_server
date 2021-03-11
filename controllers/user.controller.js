const { response } = require("express");

const usersGet = (req, res = response) => {
  const { q, name = "no name", ...rest } = req.query;
  res.json({
    ok: true,
    msg: " Get Api controller",
    q,
    name,
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
  const { id } = req.params;
  res.json({
    ok: true,
    msg: " Put Api controller",
    id,
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
