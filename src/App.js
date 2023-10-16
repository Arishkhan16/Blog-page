import Banner from "./components/banner/Banner";
import BlogList from "./components/blogList/BlogList";
import Blog from "./components/blogs/Blog";
import Destination from "./components/destination/Destination";
import Topbar from "./components/topbar/Topbar"; 

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Banner/>
      <Blog/>
      <BlogList/>
      <Destination/>
    </div>
  );
}

export default App;