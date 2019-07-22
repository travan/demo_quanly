const getCataloryData = (req, res, db) => {
  const id = parseInt(req.params.id)
  console.log(id)
  db.select('*').where({ dm_id: id }).from('tb_danhmuc')
    .then(items => {
      if (items.length) {
        res.json(items)
      } else {
        res.json({ dataExists: 'false' })
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}
module.exports = {
  getCataloryData
}