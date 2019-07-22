const getDetailProductData = (req, res, db) => {
  db.select('*').from('tb_chitietsp').orderBy('sp_id', 'asc')
    .then(items => {
      if (items.length) {
        res.json(items)
      } else {
        res.json({ dataExists: 'false' })
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}

const getByIdDetailProductData = (req, res, db) => {
  const id = req.params.id
  db.select('*').where({ ctsp_id: id }).from('tb_chitietsp')
    .then(items => {
      if (items.length) {
        res.json(items)
      } else {
        res.json({ dataExists: 'false' })
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}

const postDetailProductData = (req, res, db) => {
  const { ctsp_id, sp_id, ctsp_xuatxu, ctsp_model, ctsp_thongso, ctsp_kichthuoc, ctsp_congsuat, ctsp_khoiluong, ctsp_dacdiem, ctsp_hangsx } = req.body
  db('tb_chitietsp').insert({ ctsp_id, sp_id, ctsp_xuatxu, ctsp_model, ctsp_thongso, ctsp_kichthuoc, ctsp_congsuat, ctsp_khoiluong, ctsp_dacdiem, ctsp_hangsx })
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}

const putDetailProductData = (req, res, db) => {
  const id = req.params.id
  const { sp_id, ctsp_xuatxu, ctsp_model, ctsp_thongso, ctsp_kichthuoc, ctsp_congsuat, ctsp_khoiluong, ctsp_dacdiem, ctsp_hangsx } = req.body
  db('tb_chitietsp').where({ ctsp_id: id }).update({ sp_id, ctsp_xuatxu, ctsp_model, ctsp_thongso, ctsp_kichthuoc, ctsp_congsuat, ctsp_khoiluong, ctsp_dacdiem, ctsp_hangsx })
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}

const deleteDetailProductData = (req, res, db) => {
  const id = req.params.id
  db('tb_chitietsp').where({ ctsp_id: id }).del()
    .then(() => {
      res.json({ delete: 'true' })
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}

module.exports = {
  getDetailProductData,
  getByIdDetailProductData,
  postDetailProductData,
  putDetailProductData,
  deleteDetailProductData
}