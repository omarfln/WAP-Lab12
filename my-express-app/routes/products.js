const express = require('express');
const router = express.Router();

const products = [
    { id: 1, name: 'Apple watch' },
    { id: 2, name: 'Apple IPhone' },
];

// Get 
router.get('/', (req, res) =>{
    console.log("/products get request");
    res.send(products);
});

// Post
router.post('/', (req, res) => {
    console.log("/products Post request");
    const newProduct = req.body;
    const newProductId = products.length + 1;
    newProduct.id = newProductId;
    products.push(newProduct);
    res.send(products);
});

module.exports = router;