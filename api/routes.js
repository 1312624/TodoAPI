import express, { Router } from 'express';

const router = new Router();

router.use('/todo', require('./routes/todo'));

router.use('*', (req, res) => {
    res.status(404);
    res.send('NOT_FOUND');
    res.end();
});

export default router;