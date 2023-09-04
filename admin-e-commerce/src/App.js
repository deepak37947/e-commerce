import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './view/login&signup page/Login';
import Signup from './view/login&signup page/Signup';
import PrivateRoute from './Route/privateRoute';
import Home from './view/Home';
import PublicRoute from './Route/publicRoute';

function App() {
  return (
    <div className="App">
      <h1 className='text-center'>hello user</h1>
      <Routes>

        <Route path='/' element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>

        <Route path='/' element={<PublicRoute />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
