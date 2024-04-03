import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TProduct } from "../interfaces/Products";
import "../css/css.css";
import axios from "axios";

const ProductsDetail = () => {
  const params = useParams();
  const [product, setproduct] = useState<TProduct | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/products/${params.id}`,
      );
      setproduct(data);
    };
    getProduct();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="box d-flex gap-5 border p-5 ">
          <div>
            <img width={500} src={product?.thumbnail} alt="..." />
          </div>

          <div>
            <h3 className="card-title product__title">{product?.title}</h3>
            <p className="card-text ">{product?.description}</p>
            <p>
              Thương hiệu: <span>{product?.brand}</span>
            </p>
            <div className="d-flex gap-3">
              <p className="card-text product__price text-danger">
                ${product?.brand}
              </p>
              <p>
                Giảm:{" "}
                <del className="text-body-secondary ">
                  {product?.discountPercentage}%{" "}
                </del>
              </p>
            </div>
            <div className="card-footer ">
              <button className="btn btn-primary ">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
