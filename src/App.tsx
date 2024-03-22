
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import Shop from './components/Use/Shop';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Use/Login';
import Register from './components/Use/Register';
import Notfound from './components/Use/Notfound';
import LayoutWebsite from './components/layout/LayoutWebsite';
import Home from './components/Use/Home';
import LayoutAdmin from './components/layout/LayoutAdmin';
import HomeAdmin from './components/Admin/HomeAdmin';
import ProductsAdmin from './components/Admin/Products';


const App: React.FC = () => {

  return (
    <div>

      <Routes>
        <Route path="/" element={<LayoutWebsite />} >
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Notfound />} />
        </Route>

        <Route path="/admin" element={<LayoutAdmin />} >
          <Route index element={<HomeAdmin />} />
          <Route path="products" element={<ProductsAdmin />} />
        </Route>

      </Routes>

    </div>
  );
};

export default App;