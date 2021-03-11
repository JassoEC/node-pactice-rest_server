const { Router } = require("express");
const {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
  userPatch,
} = require("../controllers/user.controller");

const router = Router();

router.get("/", usersGet);
router.post("/", usersPost);
router.put("/:id", usersPut);
router.delete("/", usersDelete);
router.patch("/", userPatch);

module.exports = router;
