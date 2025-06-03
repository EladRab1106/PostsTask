import { useEffect, useState } from "react"
import { instance } from "../api/PostsApi";




const PostList = ()=>{
  const [posts,setPosts] = useState([])
useEffect(() => {
  const fetchposts = async () => {
    try {
      const allPosts = await instance.get('/posts');
      setPosts(allPosts.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  fetchposts();
}, []);

  return(
    <>
    {posts.map((post,i)=>(
    <div key={post._id || i}>
      <div>post number: {i}</div>
      <div>title: {post.title}</div>
      <div>content: {post.content}</div>
      <div></div>
      </div>
    ))}

    </>
  )

}

export default PostList;