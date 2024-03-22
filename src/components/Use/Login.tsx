
// type Props = {}

const Login = () => {
  return (
    <div className="mt-5 mb-5">
      <h1 className="text-center">ĐĂNG NHẬP TÀI KHOẢN</h1>
      <form action="">
        <label htmlFor="">User:</label>
        <input type="text" className="form-control" name="" id="" />
        <label htmlFor="">Password:</label>
        <input type="text" className="form-control" name="" id="" />
        <button type="submit" className="btn btn-primary mt-3 mb-5">ĐĂNG NHẬP</button>
      </form>
      <p >Bạn chưa có tài khoản?<a href="/Register">Đăng ký</a></p>
    </div>
  )
}

export default Login