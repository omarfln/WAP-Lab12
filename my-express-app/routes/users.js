const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Liza' },
];


// Get 
router.get('/', (req, res) =>{
    console.log("/users get request");
    res.send(users);
});

// Post
router.post('/', (req, res) => {
    console.log("/users Post request");
    const newUser = req.body;
    const newUserId = users.length + 1;
    newUser.id = newUserId;
    users.push(newUser);    
    res.send(users);
});



module.exports = router;