import Header from './Header.jsx'
import Footer from './Footer.jsx'

import {
    Outlet
} from 'react-router-dom'

function App() {
    return (
        <>
            <div className="w-full h-full">
                <div className='w-full h-auto sticky top-0 z-50'>
                    <Header />
                </div>
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default App