const express = require('express')
const router = express.Router()
const danhmuc = require('../controller/danhmuc')

module.exports = (db) => {
  router.get('/danhmuc/:id', (req, res) => danhmuc.getCataloryData(req, res, db))

  return router
}