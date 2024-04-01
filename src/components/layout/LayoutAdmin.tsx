import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../Admin/container/header/HeaderAdmin'
import FooterAdmin from '../Admin/container/FooterAdmin'



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