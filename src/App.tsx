import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Use/Login";
import Register from "./components/Use/Register";
import Notfound from "./components/Use/container/Notfound";
import LayoutWebsite from "./components/layout/LayoutWebsite";
import Home from "./components/Use/container/Home";
import LayoutAdmin from "./components/layout/LayoutAdmin";
import HomeAdmin from "./components/Admin/container/HomeAdmin";
import ProductsAdmin from "./components/Admin/Products";
import ProductsDetail from "./components/Use/ProductsDetail";
import { useEffect, useState } from "react";
import { TProduct } from "./components/interfaces/Products";
import Listproducts from "./components/Use/Listproducts";
import AddProduct from "./components/Admin/AddProduct";
import ProductsEdit from "./components/Admin/productsEdit";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`http://localhost:3000/products`);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product: TProduct) => {
    (async () => {
      const { data } = await axios.post(
        `http://localhost:3000/products`,
        product,
      );
      setProducts([...products, data]);
      window.confirm("Thêm sản phẩm thành công");
      navigate("/admin/products");
    })();
  };

  const handleEditProduct = (product: TProduct) => {
    (async () => {
      const { data } = await axios.put(
        `http://localhost:3000/products/${product.id}`,
        product,
      );
      setProducts(products.map((item) => (item.id === data.id ? data : item)));
      window.confirm("Cập nhật sản phẩm thành công");
      navigate("/admin/products");
    })();
  };

  const handleDel = (id: number | String | undefined) => {
    (async () => {
      const confirm = window.confirm(
        "Bạn chắc chắn muốn xóa sản phẩm này chứ?",
      );
      if (confirm) {
        await axios.delete(`http://localhost:3000/products/${id}`);
        setProducts(products.filter((i) => i.id !== id));
        window.confirm("xóa sản phẩm thành công");
      }
    })();
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Listproducts products={products} />} />
          <Route path="shop/:id" element={<ProductsDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route
            path="products"
            element={<ProductsAdmin products={products} onDel={handleDel} />}
          />
          <Route
            path="products/add"
            element={<AddProduct onAdd={handleAdd} />}
          />
          <Route
            path="products/edit/:id"
            element={<ProductsEdit onEdit={handleEditProduct} />}
          />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
