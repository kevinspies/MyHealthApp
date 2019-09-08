const router = require("express").Router();
const User = require("../models/user");

router.get("/api/user", (req, res) => {
    User.find({}).then(users => res.json(users));
}); 

router.get("/api/user/:id", (req, res) => {
     const id = req.params.id;
     User.findById(id).then(user => res.json(user))
        .catch(err=> res.status(422).json(err));
});

router.post("/api/user", (req, res) => {
    const userData = req.body;
    console.log("User created:");
    console.log("---------------------");
    console.log(userData);
    User.create(userData)
        .then((result) => res.json(result))
        .catch(e=> {
            console.log(e)
            res.sendStatus(500);
        });
});

router.put("/api/user/:id", (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    .then(users => res.json(users))
    .catch(err => res.status(404).json(err));
})

router.delete("/api/user/:id", (req, res)=> {
    const id = req.params.id;
    User.remove({_id:id})
    .then(user=>res.json(user))
    .catch(e=>res.status(404).json(e));
});





module.exports = router;