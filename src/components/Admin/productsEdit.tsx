import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import { TProduct } from '../interfaces/Products';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instance from '~/apis';


const productSchema = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(''),
  images: Joi.string().allow(''),
  thumbnail: Joi.string().allow(''),
  discountPercentage: Joi.number().required().min(0),
  stock: Joi.number().required().min(0),
  brand: Joi.string().required().min(3).max(255),
  category: Joi.string().required().min(0)
});

type Props = {
	onEdit: (product: TProduct) => void;
};

const ProductsEdit = ({ onEdit }: Props) => {
	const { id } = useParams();
	const [product, setProduct] = useState<TProduct | null>(null);
	const {register,handleSubmit,formState: { errors }} = useForm<TProduct>({
		resolver: joiResolver(productSchema),
	});

	useEffect(() => {
		(async () => {
			const { data } = await instance.get(`/products/${id}`);
			setProduct(data);
		})();
	}, []);

	const onSubmit = (product: TProduct) => {
		onEdit({ ...product, id: Number(id) });
	};


  return (
    <div>
      <main className="p-5 ">
        <h2 className="text-center">CẬP NHẬT SẢN PHẨM</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="form-group">
            <label htmlFor="name">Tên sản phẩm:</label>
            <input type="text" className="form-control"  {...register('title', { required: true })} defaultValue={product?.title} />
            {errors.title && <p className='text-danger'>{errors.title.message} </p>}

          </div>
          <div className="form-group">
            <label htmlFor="sortDescriptions">Mô tả:</label>
            <textarea className="form-control" {...register('description')} defaultValue={product?.description}></textarea>

          </div>
          <div className="form-group">
            <label htmlFor="productImage">Ảnh:</label>
            <input type="text" className="form-control mt-3 mb-3 " {...register('images')} defaultValue={product?.images} />

          </div>
          <div className="form-group">
            <label htmlFor="descriptions">Giá:</label>
            <input type="number" className="form-control" {...register('price', { required: true })} defaultValue={product?.price as number} />
            {errors.price && <p className='text-danger'>{errors.price.message}</p>}

          </div>
          <div className="form-group">
            <label htmlFor="price">Giảm giá:</label>
            <input type="number" className="form-control" {...register('discountPercentage')} defaultValue={product?.discountPercentage as number} />
            {errors.discountPercentage && <p className='text-danger'>{errors.discountPercentage.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="author">Ảnh nhỏ:</label><br /><br />
            <input type="text" className="form-control" {...register('thumbnail')} defaultValue={product?.thumbnail} />

          </div><br />
          <div className="form-group">
            <label htmlFor="date">Số lượng:</label>
            <input type="number" className="form-control" {...register('stock')} defaultValue={product?.stock as number} />
            {errors.stock && <p className='text-danger'>{errors.stock.message}</p>}

          </div>
          <div className="form-group">
            <label htmlFor="author">Thương hiệu:</label>
            <input type="text" className="form-control" {...register('brand')} defaultValue={product?.brand} />
            {errors.brand && <p className='text-danger'>{errors.brand.message}</p>}

          </div>
          <div className="form-group">
            <label htmlFor="author">Danh mục:</label>
            <input type="text" className="form-control" {...register('category')} defaultValue={product?.category} />
            {errors.category && <p className='text-danger'>{errors.category.message}</p>}

          </div>

          <button type="submit" className="btn btn-primary my-4 ">Submit</button>
        </form>
      </main>

    </div>
  );
};

export default ProductsEdit;