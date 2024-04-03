import "../css/css.css";
import { Link, NavLink } from "react-router-dom";
import { TProduct } from "../interfaces/Products";

type Props = {
  products: TProduct[];
  onDel: (id: number | String | undefined) => void;
};

const ProductsAdmin = ({ products, onDel }: Props) => {
  const handleDelete = (id: number | String | undefined) => {
    onDel(id);
  };

  return (
    <div>
      <h1 className="mt-5 mb-3 text-center">QUẢN LÝ SẢN PHẨM</h1>
      <Link to="add" className="btn btn-primary mb-3">
        Thêm sản phẩm
      </Link>
      <div className="row ">
        <table className=" table-bordered">
          <thead className="text-center ">
            <tr>
              <th className="p-2">ảnh</th>
              <th>tên</th>
              <th>mô tả</th>
              <th>giá</th>
              <th>giảm giá</th>
              <th>đánh giá</th>
              <th>số lượng</th>
              <th>thương hiệu</th>
              <th>danh mục</th>
              <th>hình thu nhỏ</th>
              <th>chức năng</th>
            </tr>
          </thead>
          <tbody className="text-center border-1">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="col-2 ">
                  <img
                    className="p-2"
                    width={200}
                    height={200}
                    src={product.images}
                    alt={product.title}
                  />
                </td>
                <td className="col-1 p-2 ">{product.title}</td>
                <td className="col-2 p-2 ">{product.description}</td>
                <td className="col-1 ">${product.price}</td>
                <td className="col-1">{product.discountPercentage}%</td>
                <td className="col-2">{product.rating}</td>
                <td className="col-2">{product.stock}</td>
                <td className="col-2 p-2 ">{product.brand}</td>
                <td className="col-2 p-1 ">{product.category}</td>
                <td className="col-2 p-2">
                  <img
                    width={150}
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </td>
                <td className="d-flex p-2 gap-2 mt-3   ">
                  <NavLink
                    className="btn btn-warning"
                    to={`/admin/products/edit/${product.id}`}
                  >
                    UPDATE
                  </NavLink>
                  <a
                    className="btn btn-danger "
                    onClick={() => handleDelete(product.id)}
                  >
                    DELETE
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="add" className="btn btn-primary mb-3 mt-5">
        Thêm sản phẩm
      </Link>
    </div>
  );
};

export default ProductsAdmin;
