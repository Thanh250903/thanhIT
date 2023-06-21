const express = require('express')
const router = express.Router()

const toyController = require('../app/controllers/ToyController')
// tạo route, định nghĩa 1 tuyến đường
router.use('/create', toyController.create)
router.post('/store', toyController.store)
router.use('/:id/edit', toyController.edit)
router.put('/:id', toyController.update)
router.delete('/:id', toyController.delete)
router.use('/:slug', toyController.show)

module.exports = router