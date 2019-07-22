const getProductData = (req, res, db) => {
  db.select('*').from('tb_sanpham').orderBy('sp_id', 'asc')
    .then(items => {
      if (items.length) {
        res.json(items)
      } else {
        res.json({ dataExists: 'false' })
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}

const getByIdProductData = (req, res, db) => {
  const id = req.params.id
  db.select('*').where({ sp_id: id }).from('tb_sanpham')
    .then(items => {
      if (items.length) {
        res.json(items)
      } else {
        res.json({ dataExists: 'false' })
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}

const postProductData = (req, res, db) => {
  const { sp_id, sp_ma, sp_ten, sp_hinhanh, sp_ghichu, sp_trangthai, sp_tong } = req.body
  db('tb_sanpham').insert({ sp_id, sp_ma, sp_ten, sp_hinhanh, sp_ghichu, sp_trangthai, sp_tong: parseInt(sp_tong) })
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}

const putProductData = (req, res, db) => {
  const id = req.params.id
  const { sp_ma, sp_ten, sp_hinhanh, sp_ghichu, sp_trangthai, sp_tong } = req.body
  db('tb_sanpham').where({ sp_id: id }).update({ sp_ma, sp_ten, sp_hinhanh, sp_ghichu, sp_trangthai, sp_tong: parseInt(sp_tong) })
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}

const deleteProductData = (req, res, db) => {
  const id = req.params.id
  db('tb_sanpham').where({ sp_id: id }).del()
    .then(() => {
      res.json({ delete: 'true' })
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}

module.exports = {
  getProductData,
  getByIdProductData,
  postProductData,
  putProductData,
  deleteProductData
}