import { NavLink } from 'react-router-dom'

const Navs = () => {
  return (
      <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline gap-5  ">
          <NavLink className="nav-item nav-link link-body-emphasis" to="/">Trang chủ</NavLink>
          <NavLink className="nav-item nav-link link-body-emphasis" to="/shop">Sản phẩm</NavLink>
        </nav>
      
      </div>
  )
}

export default Navs
