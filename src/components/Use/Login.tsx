import "../css/css.css"

const Login = () => {
  return (
    <div className="login mt-5 mb-5 p-5">
      <h1 className="mb-5">ĐĂNG NHẬP TÀI KHOẢN</h1>
      <form action="" >
        <label htmlFor="">User:</label>
        <input type="text" className="form-control w-50  " name="" id="" required/>
        <label htmlFor="">Password:</label>
        <input type="Password" className="form-control w-50 " name="" id="" required/>
        <button type="submit" className="btn btn-primary mt-3 mb-5">ĐĂNG NHẬP</button>
      </form>
      <p >Bạn chưa có tài khoản?<a href="/Register">Đăng ký</a></p> 
    </div>
  )
}

export default Login 