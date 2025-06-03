import express, { Router } from 'express';

const router = Router();

import { CreatePost, GetPosts } from '../controllers/PostController.js';

router.get('/', GetPosts);
router.post('/', CreatePost);

export default router;
