import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import instance from "~/apis";
import { TProduct } from "../interfaces/products";
type Props ={};

const ProductsDetail = (props: Props) => {
  const params = useParams();
  const [product, setproduct] = useState<TProduct | null >(null);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${params.id}`);
      setproduct(data);
    }
    getProduct();
  }, [])
  return (
    <div>
        <div className="row">
            <div className=" d-flex gap-5 border p-5 bg-secondary-subtle  ">
              <div>
                <img width={600} src={product?.thumbnail} alt="..." />
              </div>
                
              <div className="card-body">
                <h3 className="card-title product__title">
                  {product?.title}
                </h3>
                <p className="card-text ">
                  {product?.description}
                </p>
                <p>Thương hiệu: <span >{product?.brand}</span></p>
                <div className="d-flex gap-3">
                  <p className="card-text product__price text-danger">
                  ${product?.brand} 
                  </p>
                  <p>Giảm: <del className="text-body-secondary ">{product?.discountPercentage}% </del></p>
                </div>
                
                
              <div className="card-footer ">
                <button className="btn btn-primary ">Add To Cart</button>
              </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProductsDetail