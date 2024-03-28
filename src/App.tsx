
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Login from './components/Use/Login';
import Register from './components/Use/Register';
import Notfound from './components/Use/Notfound';
import LayoutWebsite from './components/layout/LayoutWebsite';
import Home from './components/Use/Home';
import LayoutAdmin from './components/layout/LayoutAdmin';
import HomeAdmin from './components/Admin/HomeAdmin';
import ProductsAdmin from './components/Admin/Products';
import ProductsDetail from './components/Use/ProductsDetail';
import { useEffect, useState } from 'react';
import instance from './apis';
import { TProduct } from './components/interfaces/Products';
import Listproducts from './components/Use/Listproducts';
import AddProduct from './components/Admin/AddProduct';


const App: React.FC = () => {

  const [products, setProducts] = useState<TProduct[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await instance.get(`/products`);
			setProducts(data);
		};
		fetchProducts();
	}, []);

  return (
    <div>

      <Routes>

        <Route path="/" element={<LayoutWebsite />} >
          <Route index element={<Home />} />
          <Route path="shop" element={<Listproducts products={products} />} />
          <Route path="shop/:id" element={<ProductsDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<LayoutAdmin />} >
          <Route index element={<HomeAdmin />} /> 
          <Route path="products" element={<ProductsAdmin />} />
          <Route path="products/add" element={<AddProduct />} />
        </Route>

        <Route path="*" element={<Notfound />} />

      </Routes>

    </div>
  );
};

export default App;