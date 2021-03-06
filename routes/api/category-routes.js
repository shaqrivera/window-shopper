const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
  const categoryData = await Category.findAll({include: Product});
  res.status(200).json(categoryData);
  }
  catch(err){
    res.status(500).json(err)
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
    try{
    const categoryData = await Category.findByPk(req.params.id, {include: Product});
    if(!categoryData){
      res.status(404).json({message: 'No category found with that id!'})
    }
    res.status(200).json(categoryData)  
    } 
    catch (err) {
      res.status(500).json(err)
    }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory)  
  } 
  catch (err) {
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryUpdate = await Category.update({category_name: req.body.category_name}, {where:{id: req.params.id} });
    res.status(200).json(categoryUpdate);
  } 
  catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryDelete = await Category.destroy({where: {id: req.params.id}});
    res.status(200).json(categoryDelete)
  } 
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
