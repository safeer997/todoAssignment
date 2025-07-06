import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='dashboard/:username' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
