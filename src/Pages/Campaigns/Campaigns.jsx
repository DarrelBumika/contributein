import SubHeader from "../Campaigns/SubHeader.jsx";
import {Outlet} from "react-router-dom";

function Campaigns() {
    return (
        <>
            <div className="w-full h-full">
                <div className="w-full h-auto sticky top-[72px] z-50">
                    <SubHeader/>
                </div>
                <Outlet/>
            </div>
        </>
    )
}

export default Campaigns