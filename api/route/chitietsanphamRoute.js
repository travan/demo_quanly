const express = require('express')
const router = express.Router()
const chitietsanpham = require('../controller/chitietsanpham')

module.exports = (db) => {
  router.get('/detail-product', (req, res) => chitietsanpham.getDetailProductData(req, res, db))
  router.get('/detail-product/:id', (req, res) => chitietsanpham.getByIdDetailProductData(req, res, db))
  router.post('/detail-product', (req, res) => chitietsanpham.postDetailProductData(req, res, db))
  router.put('/detail-product/:id', (req, res) => chitietsanpham.putDetailProductData(req, res, db))
  router.delete('/detail-product/:id', (req, res) => chitietsanpham.deleteDetailProductData(req, res, db))

  return router
}