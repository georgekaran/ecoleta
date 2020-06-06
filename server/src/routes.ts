import express from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const router = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

router.get('/items', itemsController.index);

router.post('/points', upload.single('image'), pointsController.create);
router.get('/points', pointsController.index);
router.get('/points/:id', pointsController.show);

export default router;
