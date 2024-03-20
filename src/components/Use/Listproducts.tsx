import { useEffect, useState } from 'react'
import '../css/products-list.css'

// type Props = {}

const Listproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products'); // Đường dẫn tới tệp JSON
        const data = await response.json();
        setProducts(data);
        console.log(data)
      } catch (error) {
        console.error('Lỗi khi tải danh sách sản phẩm:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className='mt-5 mb-3 '>DANH SÁCH SẢN PHẨM</h1>
      <main className="pro ">
        {products.map((product: any) => (
          <div className="row">
            <div className="card ">
              <a href="">
                <img height={200} src={product.images} className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <h5 className="card-title product__title">
                  {product.title}
                </h5>
                <p className="card-text ">
                  {product.description}
                </p>
                <p className="card-text product__price text-danger ">
                  ${product.price}
                </p>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary ">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )

}

export default Listproducts