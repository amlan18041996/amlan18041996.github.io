import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Story from './pages/Story';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Galleria from './pages/Galleria';
import Guestbook from './pages/Guestbook';
import { useThemeStore, getThemeColors } from './store/themeStore';

function App() {
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);

  return (
    <Router>
      <div className={`min-h-screen ${theme.background} ${theme.text}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/galleria" element={<Galleria />} />
          <Route path="/guestbook" element={<Guestbook />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
