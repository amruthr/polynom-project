const express = require('express');
const passport = require('passport');
const Authentication = require('../controllers/authentication');
const router = express.Router();
const ModelProducts = require('../models/ModelProducts');
const ModelLog = require('../models/ModelLog');
const ModelOrders = require('../models/ModelOrders');
const ModelCategories = require('../models/ModelCategory');
const ModelCarousel = require('../models/ModelCarouselData');

router.get('/carouselData', (req, res)=>{
  ModelCarousel.find((err, x) => {
    err ? res.status(500).send(err) :
    res.json(x)
  })
});
//------------
router.post('/carouselData', (req, res, next)=> {
  const {src, caption  } = req.body
  const newItem = new ModelCarousel({ 
    src,
    caption,
  });
  newItem.save((err, saveditem) => {
    if (err) return console.log(err);
    res.send(saveditem);
    next();
  })
})

//-------

router.get('/productsdata', (req, res)=> {
  ModelProducts.find((err, x) => {
      err ? res.status(500).send(err) :
      res.json(x)
  })
})

router.get('/productsdata/:id', (req, res)=> {
  ModelProducts.findById(req.params.id)
    .then(x => {
      if (!x) return res.status(404).end()
      return res.json(x)
    })
    .catch(err => next(err))
})

router.get('/packages/:id', (req, res)=> {
  const { id } = req.params
  id===undefined? ModelProducts.find((err, x) => {
    err ? res.status(500).send(err) :
    res.status(200).json(x)
}):
  ModelProducts.find({tags:{$all:[id]}})
    .then(x => {
      if (!x) return res.status(404).end()
      return res.json(x)
    })
    .catch(err => next(err))
})


router.post('/update/item', (req, res, next)=> {
  const { id, title, price, color, size, tags, images, description } = req.body
  ModelProducts.findById(id, (err, model) => {
    if (err) return handleError(err);
  
    model.set({ title, price, color, size, tags, images, description });
    model.save(function (err, updatedItem) {
      if (err) return console.log(err);
      next();
    });
  }).then(()=>{
    const logUpdate = new ModelLog({ 
      type: 'Update',
      time: new Date(),
      itemid: id,
      itemtitle: title
    });
    logUpdate.save(function(err, logSaved){
      if(err){return next(err);}
      res.end();
    });
  }).catch(err => next(err));
})

router.post('/add/item', (req, res, next)=> {
  const {title,
    price, 
    highlights,
    includes, 
    tags,
    images,
    description,
    days,
    doesnotinclude  } = req.body
  const newItem = new ModelProducts({ 
    title,
    price, 
    highlights,
    includes, 
    tags,
    images,
    description,
    days,
    doesnotinclude
  });
  newItem.save((err, saveditem) => {
    if (err) return console.log(err);
    next();
  })
  const logAdd = new ModelLog({ 
    type: 'Create',
    time: new Date(),
    itemid: newItem._id,
    itemtitle: title
  });
  logAdd.save(function(err, logSaved){
    if(err){return next(err);}
    res.end();
  });
})

router.post('/add/orders', (req, res, next)=> {
  const { ref, customerinfo, order, totalDelivery, totalAmount } = req.body
  const newOrder = new ModelOrders({ 
    ref,
    customerinfo,
    order,
    totalDelivery,
    totalAmount
  });
  newOrder.save((err, saveditem) => {
    if (err) return console.log(err);
    res.end();
  })
})

router.get('/orders', (req, res)=> {
  ModelOrders.find((err, x) => {
      err ? res.status(500).send(err) :
      res.json(x)
  })
})


router.delete('/delete/item/:id', (req, res, next)=> {
  const { id } = req.params
  ModelProducts.findByIdAndRemove(id, (err, model) => {
    if (err) return console.log(err);
    res.send('item: '+id+' deleted');
  })
  .then(()=>{
    const logDelete = new ModelLog({ 
      type: 'Delete',
      time: new Date(),
      itemid: id
    });
    logDelete.save(function(err, logSaved){
      if(err){return next(err);}
      res.end();
    });
  }).catch(err => next(err));
});

router.get('/log', (req, res)=> {
  ModelLog.find((err, x) => {
      err ? res.status(500).send(err) :
      res.json(x)
  })
})

router.get('/category', (req, res)=> {
  ModelCategories.find((err, x) => {
    err ? res.status(500).send(err) :
    res.json(x).status(200)
})
})


router.get('/shopbyprice', (req, res)=> {
  ModelProducts.aggregate([{$group:{_id:{$arrayElemAt:["$tags",0]}, price:{$min:"$price"}, images:{$max:"$images"},subcats: {$addToSet:"$title"}}}],(err, x) => {
      err ? res.status(500).send(err) :
      res.json(x)
  })
})


router.get('/secret', passport.authenticate('jwt', {session: false}), (req, res)=> {
  res.json({authorization: true});
});

router.post('/signin', passport.authenticate('local', {session:false}), Authentication.signin);

router.post('/signup', Authentication.signup);


module.exports = router;
