import "../css/css.css"

const Register = () => {
  return (
    <div className="login mt-5 mb-5 p-5">
      <h1 className="mb-5">ĐĂNG KÝ TÀI KHOẢN</h1>
      <form action="" >
        <label htmlFor="">User:</label>
        <input type="text" className="form-control w-50  " name="" id="" required />
        <label htmlFor="">Password:</label>
        <input type="Password" className="form-control w-50 " name="" id="" required />
        <button type="submit" className="btn btn-primary mt-3 mb-5">ĐĂNG KÝ</button>
      </form>
      <p >Bạn chưa có tài khoản?<a href="/login">Đăng nhập</a></p>
    </div>
  )
}

export default Register