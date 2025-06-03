import { Post } from '../models/PostModel.js';

export const CreatePost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const existingPost = await Post.findOne({ title, content });

    if (existingPost) {
      return res.status(409).send('Post already exists');
    }

    const addedPost = await Post.create({ title, content });

    return res.status(201).json(addedPost);
  } catch (error) {
    console.error('❌ Error occurred:', error);
    return res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
};

export const GetPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json(posts);
  } catch (error) {
    console.error('❌ Error occurred:', error);
    return res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
};
