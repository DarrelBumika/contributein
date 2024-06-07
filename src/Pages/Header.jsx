import Menu from '../components/Menu.jsx'
import PlusIcon from '../assets/plus.svg'
import UserIcon from '../assets/user.svg'
import SettingsIcon from '../assets/settings.svg'
import NavMenu from '../components/NavMenu.jsx'

function Header() {
    const indexes = [0, 1, 2, 3]

    return (
        <>
            <div className="w-full h-[72px] py-5 flex z-50 self-stretch justify-center border border-b-gray-200 bg-primary-white">
                <div className="w-[90%] h-full flex justify-between items-center">
                    <div className="flex w-auto gap-4">
                        <div className="flex items-center text-m font-poppins text-primary-main font-bold cursor-pointer">
                            ContributeIN
                        </div>
                        <div className="flex gap-1 justify-center">
                            {indexes.map((i) =>
                                <NavMenu index={i} />
                            )}
                        </div>
                    </div>
                    <div className="flex w-auto gap-3 justify-between">
                        <Menu iconSrc={PlusIcon}/>
                        <Menu iconSrc={UserIcon}/>
                        <Menu iconSrc={SettingsIcon}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header