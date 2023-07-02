import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Components/Navbar';
import UserProfileLayout from './Layout/UserProfileLayout';
import Layout from './Layout/Layout';
import UserProfile from './Pages/User/UserProfile';
import Faq from './Components/Faq/Faq';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/*" element={<Layout />}>
            <Route exact path="" element={<Home />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="faq" element={<Faq />} />
            <Route exact path="contact" element={<Contact />} />
            <Route exact path="blog" element={<Blog />} />
          </Route>
          <Route exact path="/*" element={<UserProfileLayout />}>
            <Route exact path="userProfile" element={<UserProfile />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
