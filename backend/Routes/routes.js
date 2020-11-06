const router = require('express').Router();
let Boat = require('../models/boat');


router.route('/').get((req, res) => {
  Boat.find()
    .then((boat) => res.json(boat))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/search/:query').get((req, res) => {
  let temp = JSON.parse(req.params.query);
  let filter = {};

  if (temp.boatModel) {
    filter.boatModel = { $regex: temp.boatModel, $options: 'i' };
  }
  if (temp.price) {
    filter.price = { $lte: temp.price };
  }
  if (temp.minprice) {
    filter.price = { $gte: temp.minprice };
  }
  Boat.find(filter, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.route('/add').post((req, res) => {
  const boatModel = req.body.boatModel;
  const yearModel = Number(req.body.yearModel);
  const price = Number(req.body.price);
  const sailboat = Boolean(req.body.sailboat);
  const engine = Boolean(req.body.engine);
  const date = Date.parse(req.body.date);

  const newBoat = new Boat({
    boatModel,
    yearModel,
    price,
    sailboat,
    engine,
    date,
  });

  newBoat
    .save()
    .then(() => res.json('Boat added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Boat.findById(req.params.id)
    .then((Boat) => res.json(Boat))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Boat.findByIdAndDelete(req.params.id)
    .then(() => res.json('Boat Deleted!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
