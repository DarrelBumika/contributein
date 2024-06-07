import GalleryIcon from '../assets/gallery.svg'
import MapIcon from '../assets/map.svg'
import FeedIcon from '../assets/feed.svg'

import { NavLink } from "react-router-dom"

function NavMenu(props) {
    const navPaths = ['/profile', '/history']
    const navIcon = [GalleryIcon, MapIcon, FeedIcon]
    const navMenus = ['Gallery', 'Map', 'Feed']

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
            <img src={navIcon[index]} alt="" />
            <text className='font-poppins font-medium text-base'>{navMenus[index]}</text>
        </NavLink>
    )
}

export default NavMenu