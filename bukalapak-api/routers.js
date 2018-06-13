const express = require('express');
const router = express.Router();
const Products = require('./models/products');
const Banners = require('./models/banners')
const Carts = require('./models/carts')

router.get('/products', function(req, res) {
  Products.find()
    .then(function(products) {
      res.send(products);
    });
});

router.get('/products/:id', function(req, res, next) {
  Products.findOne({_id: req.params.id})
    .then(function(product) {
      res.send(product);
    })
    .catch(next)
});

router.get('/products/page/:page/show/:show', function(req, res, next) {
  Products.find()
    .skip(req.params.show*(req.params.page-1))
    .limit(Number(req.params.show))
    .then(function(product) {
      res.send(product)
    })
    .catch(next)
})

router.get('/products/category/:category', function(req, res, next) {
  Products.find({category: req.params.category})
    .then(function(product) {
      res.send(product);
    })
    .catch(next)
});

router.post('/products', function(req, res, next) {
  const {name, role} = req.body;

  Products.create(req.body)
    .then( function(result) {
      res.send(result);
    })
    .catch(next)
});

router.put('/products/:id', function(req, res) {
  Products.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(function(result) {
      Products.findOne({_id: req.params.id})
        .then(function(product) {
          res.send(product);
        })
    });
});

router.delete('/products/:id', function(req, res) {
  Products.findOneAndRemove({_id: req.params.id})
    .then(function(result){
      res.send(result)
    });
});

router.get('/banners', function(req, res) {
  Banners.find()
    .then(function(banners) {
      res.send(banners);
    });
});

router.get('/banners/:id', function(req, res, next) {
  Banners.findOne({_id: req.params.id})
    .then(function(banner) {
      res.send(banner);
    })
    .catch(next)
});

router.post('/banners', function(req, res, next) {
  const {name, role} = req.body;

  Banners.create(req.body)
    .then( function(result) {
      res.send(result);
    })
    .catch(next)
});

router.put('/banners/:id', function(req, res) {
  Banners.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(function(result) {
      Products.findOne({_id: req.params.id})
        .then(function(product) {
          res.send(product);
        })
    });
});

router.delete('/banners/:id', function(req, res) {
  Banners.findOneAndRemove({_id: req.params.id})
    .then(function(result){
      res.send(result)
    });
});

router.get('/carts', function(req, res) {
  Carts.find()
    .then(function(banners) {
      res.send(banners);
    });
});

router.get('/carts/:id', function(req, res, next) {
  Carts.findOne({_id: req.params.id})
    .then(function(banner) {
      res.send(banner);
    })
    .catch(next)
});

router.post('/carts', function(req, res, next) {
  const {name, role} = req.body;

  Carts.create(req.body)
    .then( function(result) {
      res.send(result);
    })
    .catch(next)
});

router.put('/carts/:id', function(req, res) {
  Carts.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(function(result) {
      Carts.findOne({_id: req.params.id})
        .then(function(product) {
          res.send(product);
        })
    });
});

router.delete('/carts/:id', function(req, res) {
  Carts.findOneAndRemove({_id: req.params.id})
    .then(function(result){
      res.send(result)
    });
});

module.exports = router;
