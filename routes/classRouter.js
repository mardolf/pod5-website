const express = require('express')

const classRouter = express.Router()

const classController = require('../controllers/classControler')

classRouter.get('/',classController.getAllClasses)

module.exports = classRouter