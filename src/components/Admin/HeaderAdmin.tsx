import { NavLink } from 'react-router-dom'

const HeaderAdmin = () => {
  return (
      <div className="nav-scroller py-1 mb-3 border-bottom mt-5">
        <nav className="nav nav-underline gap-5  ">
          <NavLink className="nav-item nav-link link-body-emphasis" to="/admin">Trang chủ</NavLink>
          <NavLink className="nav-item nav-link link-body-emphasis" to="/admin/products">Sản phẩm</NavLink>
          <NavLink className="nav-item nav-link link-body-emphasis" to="/">Xem website</NavLink>
        </nav>
      </div>
  )
}

export default HeaderAdmin