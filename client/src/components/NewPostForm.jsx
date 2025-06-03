import { instance } from "../api/PostsApi";
import { useState } from "react";

const NewPostForm = ()=>{

  const [postTitle,setPostTitle] = useState("");
  const [postContent,setPostContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await instance.post('/posts',{
        title:postTitle,
        content:postContent
      })

      setPostTitle("")
      setPostContent("")

    }
    catch(error){
      console.error("error",error);
      
    }

  }


  return(
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">post title</label>
      <input id="title" value={postTitle} type="text" onChange={(e)=>setPostTitle(e.target.value)} />
      <label htmlFor="content">post content</label>
      <input id="content" value={postContent} type="text" onChange={(e)=>setPostContent(e.target.value)} />
      <button type="submit">create post</button>
    </form>
    </>
  )

}

export default NewPostForm;