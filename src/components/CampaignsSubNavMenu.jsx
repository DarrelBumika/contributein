import RocketIcon from "../assets/rocket.svg";
import ClockIcon from "../assets/clock.svg";
import PlusIcon from "../assets/plus-circle.svg";
import { NavLink } from "react-router-dom";

function CampaignsSubNavMenu(props) {
    const navPaths = ['/campaigns', '/campaigns/create']
    const navIcon = [RocketIcon, PlusIcon]
    const navMenus = ['My Campaigns', 'New Campaign']

    // eslint-disable-next-line react/prop-types
    const index = parseInt(props.index)

    return (
        <NavLink
            to={navPaths[index]}
            end
            className={
                ({isActive}) => [
                    "flex gap-3 p-3 rounded-md",
                    isActive ? "bg-primary-border" : "bg-primary-white"
                ].join(" ")
            }
        >
            <img src={navIcon[index]} alt="" className='w-6 h-6' />
            <text className='font-poppins font-medium text-base'>{navMenus[index]}</text>
        </NavLink>
    )
}

export default CampaignsSubNavMenu