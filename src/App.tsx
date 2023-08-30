import "./App.scss";
import{BrowserRouter as Router,Routes, Route,} from "react-router-dom"
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
<div className="app">
  <Router>
   <Header></Header>
   <div className="container">
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
    <Route path="*" element={<PageNotFound/>}/>
    </Routes>
   <Footer/>
   </div>
  </Router> 
</div>
  )
}

export default App
