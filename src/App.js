import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import AboutMe from './components/AboutMe';
import Post from './components/Post';
import ProductPage from './pages/ProductPage';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} >
        <Route path='me' element={<AboutMe />}/>
        <Route path='post' element={<Post />}/>
      </Route>
      <Route path='/product' element={<ProductPage />}/>
      <Route path='/product/:productId' element={<ProductDetail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
