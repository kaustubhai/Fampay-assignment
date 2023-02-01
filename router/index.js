import express from 'express';
import { fetchVideos, filterVideos } from '../controller/index.js';
const router = express.Router();

router.route('/fetch').get(fetchVideos)
router.route('/search').get(filterVideos);

export default router;