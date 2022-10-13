const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
    const data = {
       "Nombre": "Rafael",
       "Website": "asdas.com"

    };
    res.json(data)
});

module.exports = router;