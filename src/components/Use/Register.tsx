
// type Props = {}

const Register = () => {
  return (
    <div className="mt-5 mb-5">
      <h1 className="text-center">ĐĂNG KÝ TÀI KHOẢN</h1>
      <form action="">
        <label htmlFor="">User:</label>
        <input type="text" className="form-control" name="" id="" required/>
        <label htmlFor="">Password:</label>
        <input type="text" className="form-control" name="" id="" required/>
        <button type="submit" className="btn btn-primary mt-3 mb-5">ĐĂNG KÝ</button>
      </form>
      <p >Bạn đã có tài khoản?<a href="/Login">Đăng nhập</a></p>
    </div>
  )
}

export default Register