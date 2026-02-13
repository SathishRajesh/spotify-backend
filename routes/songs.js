const router = require("express").Router();
const { searchSongs } = require("../controllers/songController");

router.get("/", searchSongs);

module.exports = router;
