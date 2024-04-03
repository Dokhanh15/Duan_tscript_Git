import "../css/css.css";
import { Link } from "react-router-dom";
import { TProduct } from "../interfaces/Products";

type Props = {
  products: TProduct[];
};

const Listproducts = ({ products }: Props) => {
  return (
    <div className=" text-center ">
      <h1 className="mt-5 mb-5 ">DANH SÁCH SẢN PHẨM</h1>
      <main className="pro ">
        {products.map((product) => (
          <div key={product.id} className="row">
            <div className="card ">
              <Link to={`/shop/${product.id}`}>
                <img
                  height={200}
                  src={product.images}
                  className="card-img-top"
                  alt={product.title}
                />
              </Link>
              <div className="card-body ">
                <h5 className="card-title product__title">{product.title}</h5>
                <p className="card-text ">{product.description}</p>
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
  );
};

export default Listproducts;
