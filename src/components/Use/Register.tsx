import "../css/css.css";
import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/User";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import axios from "axios";

const registerSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().min(2).max(255),
  password: Joi.string().required().min(6).max(255),
});

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: joiResolver(registerSchema),
  });

  const onSubmit = (user: User) => {
    (async () => {
      const { data } = await axios.post("http://localhost:3000/register", user);
      console.log(data);
      if (data.accessToken) {
        window.confirm("Đăng ký thành công!") && navigate("/login");
      }
    })();
  };
  return (
    <div className="login mt-5 mb-5 p-5">
      <h1 className="mb-5">ĐĂNG KÝ TÀI KHOẢN</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Email:</label>
        <input
          type="email"
          className="form-control w-50  "
          {...register("email", {
            required: true,
            minLength: 2,
            maxLength: 255,
          })}
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control w-50 "
          {...register("password", {
            required: true,
            minLength: 5,
            maxLength: 255,
          })}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}

        <button type="submit" className="btn btn-primary mt-3 mb-5">
          ĐĂNG KÝ
        </button>
      </form>
      <p>
        Bạn chưa có tài khoản?<a href="/login">Đăng nhập</a>
      </p>
    </div>
  );
};

export default Register;
