import { Outlet } from 'react-router-dom'
import HeaderPage from '../Use/HeaderPage'
import FooterPage from '../Use/FooterPage'
import Navs from '../Use/Navs'



const LayoutWebsite = () => {
  return (
    <> 
    <div>
        <HeaderPage />
        <Navs/>
        <main >
            <Outlet />
        </main>
        <FooterPage />
    </div>

    </>
  )
}

export default LayoutWebsite