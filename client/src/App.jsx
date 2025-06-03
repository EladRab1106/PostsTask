import { Routes,Route} from "react-router-dom";
import PostList from "./components/PostList";
import NewPostForm from "./components/NewPostForm";

function App() {
  

  return (
    <Routes>
      <Route path = "/" element = {<PostList/>}/>
      <Route path = "/createPost" element = {<NewPostForm/>}/>
    </Routes>
  );
}

export default App;
