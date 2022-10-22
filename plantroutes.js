const express = require('express')
const router = express.Router()
module.exports = router
const fsPromises = require('node:fs/promises')

// /plants/id
// when you go to eg plants/id it'll display the relevant object data
router.get('/:id', (req, res) => {
  readPlants()
    .then((data) => {
      const plant = data.plants.find((plants) => plants.id == req.params.id)
      console.log(plant)
      res.render('plants', plant)
    })
    .catch((e) => console.log(e))
})

function readPlants() {
  return fsPromises
    .readFile('./data.json', 'utf-8')
    .then((data) => {
      return JSON.parse(data)
    })
    .catch((e) => console.log(e))
}
