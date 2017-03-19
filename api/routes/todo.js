import express from 'express';
import * as TodoService from '../services/todoService';

const router = module.exports = express.Router();

router.route('/category')
    //add new category
    .post((req, res) => {
        const { category } = req.body;
        TodoService.addCategory({ category })
            .then(saved => {
                res.status(200).json(saved);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    })
    
    //get all categories
    .get((req, res) => {
        TodoService.getAllCategory()
            .then((result) => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    });


router.route('/item')
    .post((req, res) => {
        const { title, content, categoryID } = req.body

        TodoService.addItem({ title, content, categoryID })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    })

    .get((req, res) => {
        const categoryID = req.query.categoryID;

        TodoService.getItemByCategoryID(categoryID)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    });
