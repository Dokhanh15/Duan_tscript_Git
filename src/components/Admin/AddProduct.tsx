import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import { TProduct } from '../interfaces/Products';


const productSchema = Joi.object({
  title: Joi.string().required().min(3).max(255).messages({
    'string.empty': 'Title không được để trống',
    'string.min': 'Title phải có độ dài tối thiểu là {#limit} ký tự',
    'string.max': 'Title phải có độ dài tối đa là {#limit} ký tự',
  }),
  price: Joi.number().required().min(0).messages({
    'any.required': 'Price không được để trống',
    'number.base': 'Price phải là một số',
    'number.min': 'Price phải có giá trị tối thiểu là {#limit}',
  }),
  description: Joi.string().allow(''),
  images: Joi.string().allow(''),
  thumbnail: Joi.string().allow(''),

  discountPercentage: Joi.number().required().min(0).messages({
    'number.base': 'DiscountPercentage phải là một số',
    'number.empty': 'DiscountPercentage không được để trống',
    'number.min': 'DiscountPercentage phải có giá trị tối thiểu là {#limit}',
  }),
  stock: Joi.number().required().min(0).messages({
    'number.base': 'Stock phải là một số',
    'number.empty': 'Stock không được để trống',
    'number.min': 'Stock phải có giá trị tối thiểu là {#limit}',
  }),
  brand: Joi.string().required().min(3).max(255).messages({
    'string.empty': 'Brand không được để trống',
    'string.min': 'Brand phải có độ dài tối thiểu là {#limit} ký tự',
    'string.max': 'Brand phải có độ dài tối đa là {#limit} ký tự',
  }),
  category: Joi.string().required().min(0).messages({
    'string.empty': 'Category không được để trống',
    'string.min': 'Category phải có độ dài tối thiểu là {#limit} ký tự',
  }),
});

type Props = {
	onAdd: (product: TProduct) => void;
};
const AddProduct = ({onAdd}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    resolver: joiResolver(productSchema),
  });

  const onSubmit = (product: TProduct) => {
    onAdd(product);
  };

  return (
    <div>
      <main className="p-5 ">
        <h2 className="text-center">THÊM SẢN PHẨM</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="form-group">
            <label htmlFor="name">Tên sản phẩm:</label>
            <input type="text" className="form-control"  {...register('title',{required :true})} />
            {errors.title && <p className='text-danger'>{errors.title.message} </p>}

          </div>
          <div className="form-group">
            <label htmlFor="sortDescriptions">Mô tả:</label>
            <textarea className="form-control" {...register('description')} ></textarea>

          </div>
          <div className="form-group">
            <label htmlFor="productImage">Ảnh:</label>
            <input type="text" className="form-control mt-3 mb-3 " {...register('images')} /> 

          </div>
          <div className="form-group">
            <label htmlFor="descriptions">Giá:</label>
            <input type="number" className="form-control" {...register('price',{required:true})} />
            {errors.price && <p className='text-danger'>{errors.price.message}</p>}

          </div>
          <div className="form-group">
            <label htmlFor="price">Giảm giá:</label>
            <input type="number" className="form-control" {...register('discountPercentage')} />
            {errors.discountPercentage && <p className='text-danger'>{errors.discountPercentage.message }</p>}

          </div>
          <div className="form-group">
            <label htmlFor="author">Ảnh nhỏ:</label><br /><br />
            <input type="text" className="form-control" {...register('thumbnail')} />

          </div><br />
          <div className="form-group">
            <label htmlFor="date">Số lượng:</label>
            <input type="number" className="form-control" {...register('stock')} />
            {errors.stock && <p className='text-danger'>{errors.stock.message }</p>}

          </div>
          <div className="form-group">
            <label htmlFor="author">Thương hiệu:</label>
            <input type="text" className="form-control" {...register('brand')} />
            {errors.brand && <p className='text-danger'>{errors.brand.message }</p>}

          </div>
          <div className="form-group">
            <label htmlFor="author">Danh mục:</label>
            <input type="text" className="form-control" {...register('category')} />
            {errors.category && <p className='text-danger'>{errors.category.message }</p>}

          </div>

          <button type="submit" className="btn btn-primary my-4 ">Submit</button>
        </form>
      </main>

    </div>
  );
};

export default AddProduct;