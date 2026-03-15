import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { ResourceDetail } from './ResourceDetail';
import './index.css';

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resource/:id" element={<ResourceDetail />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
