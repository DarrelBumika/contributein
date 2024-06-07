import Header from "../Header"
import SubHeader from "./SubHeader"
import Gallery from "./Gallery"
import Map from "./Map"

import { Outlet } from "react-router-dom"


function Explore() {
    return (
        <>
            <div className="w-full h-full">
                {/*<div className="w-full h-auto sticky top-[72px] z-50">*/}
                {/*    <SubHeader />*/}
                {/*</div>*/}
                <Outlet />
            </div>
        </>
    )
}

export default Explore