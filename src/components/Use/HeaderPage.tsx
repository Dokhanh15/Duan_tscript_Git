import { NavLink } from 'react-router-dom'
import '../css/products-list.css'


const HeaderPage = () => {

  return (
    <div >

      <header className="mt-5 mb-3 ">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className=" gap-2  col-form-label-lg  d-flex justify-content-end align-items-center">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <a className="link-secondary" href="#" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" /></svg>
              </a>
            </form>
            <NavLink className="btn btn-sm btn-outline-secondary" to="/Register">Sign up</NavLink>
            <NavLink className="btn btn-sm btn-outline-secondary" to="/Login">Sign in</NavLink>
          </div>
        </div>
      </header>
    </div>
  )
}

export default HeaderPage