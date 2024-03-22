import { useEffect, useState } from 'react'
import '../css/products-list.css'
import { Link } from 'react-router-dom';
import instance from '~/apis';
import { TProduct } from '../interfaces/products';

// type Props = {}

const Listproducts = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await instance.get(`/products`);
        setProducts(data);
        console.log(data)
      } catch (error) {
        console.error('Lỗi khi tải danh sách sản phẩm:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className=' text-center '>
      <h1 className='mt-5 mb-5 '>DANH SÁCH SẢN PHẨM</h1>
      <main className="pro ">
        {products.map((product) => (
          <div className="row">
            <div className="card ">
              <Link to={`/shop/${product.id}`}>
                <img height={200} src={product.images} className="card-img-top" alt="..." />
              </Link>
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