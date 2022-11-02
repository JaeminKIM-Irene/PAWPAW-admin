import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './pages/pc/Main';
import Notice from './pages/pc/Notice';
import Event from './pages/pc/Event';
import Account from './pages/pc/Account';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/notice' element={<Notice/>} />
          <Route path='/event' element={<Event/>} />
          <Route path='/account' element={<Account/>} />
        </Routes>
    </Router>
    </div>
    
  );
}

export default App;
