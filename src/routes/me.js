    const express = require('express')
    const router = express.Router()

    const meController = require('../app/controllers/MeController')

    router.use('/stored/toys', meController.storedToy)

    module.exports = router