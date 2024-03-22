import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../Admin/header/HeaderAdmin'
import FooterAdmin from '../Admin/FooterAdmin'



const LayoutAdmin = () => {
  return (
    <> 
    <div>
        <HeaderAdmin />
        <main >
            <Outlet />
        </main>
        <FooterAdmin />
    </div>

    </>
  )
}

export default LayoutAdmin