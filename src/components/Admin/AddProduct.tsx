import { SubmitHandler, useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useNavigate } from 'react-router-dom';
import { TProduct } from '../interfaces/Products';
import { createProduct } from '~/apis/Product';


const productSchema = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().required().min(3),
  images: Joi.number().required(),
  discountPercentage: Joi.string().required().min(0),
  thumbnail: Joi.number().required(),
  stock: Joi.string().required().min(0),
  brand: Joi.number().required().min(3).max(255),
  category: Joi.number().required().min(0),
});

const AddProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    resolver: joiResolver(productSchema),
  });

  const onSubmit: SubmitHandler<TProduct> = (product) => {
    (async () => {
      await createProduct(product);
      navigate('/admin/products');
    })();
  };

  return (
    <div>
      <main className="p-5 ">
        <h2 className="text-center">THÊM SẢN PHẨM</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Tên sản phẩm:</label>
            <input type="text" className="form-control"  {...register('title')}/>
            {errors.title && <p className='text-danger'>{errors.title.message = "không được để trống"} </p>}

          </div>
          <div className="form-group">
            <label htmlFor="sortDescriptions">Mô tả:</label>
            <input type="text" className="form-control" {...register('description')} />
            {errors.description && <p className='text-danger'>{errors.description.message = "không được để trống"}</p>}

          </div>
          <div className="form-group">
            <label htmlFor="productImage">Ảnh:</label><br />
            <input type="file" className="form-control-file mt-3 mb-3 " {...register('images')} />
            {errors.images && <p className='text-danger'>{errors.images.message = "không được để trống"}</p>}

          </div>
          <div className="form-group">
            <label htmlFor="descriptions">Giá:</label>
            <input type="number" className="form-control" {...register('price')} />
            {errors.price && <p className='text-danger'>{errors.price.message = "không được để trống"}</p>}

          </div>
          <div className="form-group">
            <label htmlFor="price">Giảm giá:</label>
            <input type="number" className="form-control" {...register('discountPercentage')} />
            {errors.discountPercentage && <p className='text-danger'>{errors.discountPercentage.message = "không được để trống"}</p>}

          </div>
          <div className="form-group">
            <label htmlFor="author">Ảnh nhỏ:</label><br /><br />
            <input type="file" className="form-control-file" {...register('thumbnail')} />
            {errors.thumbnail && <p className='text-danger'>{errors.thumbnail.message = "không được để trống"}</p>}

          </div><br />
          <div className="form-group">
            <label htmlFor="date">Số lượng:</label>
            <input type="number" className="form-control" {...register('stock')}/>
            {errors.stock && <p className='text-danger'>{errors.stock.message = "không được để trống"}</p>}

          </div>
          <div className="form-group">
            <label htmlFor="author">Thương hiệu:</label>
            <input type="text" className="form-control" {...register('brand')} />
            {errors.brand && <p className='text-danger'>{errors.brand.message = "không được để trống"}</p>}

          </div>
          <div className="form-group">
            <label htmlFor="author">Danh mục:</label>
            <input type="number" className="form-control" {...register('category')}/>
            {errors.category && <p className='text-danger'>{errors.category.message = "không được để trống"}</p>}

          </div>
          
          <button type="submit" className="btn btn-primary my-4 ">Add Product</button>
        </form>
      </main>
    </div>
  );
};

export default AddProduct;