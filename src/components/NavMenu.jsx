import { NavLink } from "react-router-dom"

function NavMenu(props) {
    const unauthNavPaths = ['/', 'explore', 'sign-in', 'register']
    const unauthNavMenus = ['Home', 'Explore' , 'Sign In', 'Register']
    
    const navPaths = ['/', 'explore', 'campaigns', 'profile']
    const navMenus = ['Home', 'Explore' , 'Campaigns', 'Profile']

    const index = parseInt(props.index)

    return (
        <NavLink 
            to={unauthNavPaths[index]}
            className={
                ({isActive}) => [
                    "px-3 py-2 font-poppins cursor-pointer text-base font-medium hover:text-primary-hover",
                    isActive ? "text-slate-900" : "text-slate-400"
                ].join(" ")
            }
        >{unauthNavMenus[index]}</NavLink>
    )
}

export default NavMenu