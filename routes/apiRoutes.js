const router = require("express").Router();
const User = require("../models/user");

router.get("/api/user", (req, res) => res.json([]));
router.post("/api/user", (req, res) => {
    const userData = req.body;
    console.log(userData);
    User.create(userData)
        .then((result) => res.json(result))
        .catch(e=> {
            console.log(e)
            res.sendStatus(500);
        });
});






module.exports = router;