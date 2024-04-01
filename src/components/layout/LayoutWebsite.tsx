import { Outlet } from 'react-router-dom'
import HeaderPage from '../Use/container/HeaderPage'
import FooterPage from '../Use/container/FooterPage'
import Navs from '../Use/container/Navs'



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