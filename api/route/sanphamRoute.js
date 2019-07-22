const express = require('express')
const router = express.Router()
const sanpham = require('../controller/sanpham')

module.exports = (db) => {
  router.get('/product', (req, res) => sanpham.getProductData(req, res, db))
  router.get('/product/:id', (req, res) => sanpham.getByIdProductData(req, res, db))
  router.post('/product', (req, res) => sanpham.postProductData(req, res, db))
  router.put('/product/:id', (req, res) => sanpham.putProductData(req, res, db))
  router.delete('/product/:id', (req, res) => sanpham.deleteProductData(req, res, db))

  return router
}