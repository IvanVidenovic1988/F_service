import { useState } from 'react';
import Image from 'next/image';
import { ROUTES } from '../../consts/routes';
import NavDropdownWithSubMenu from '../../components/navbar/mobileNavDropdown/NavDropdownWithSubMenu';
import NavDropdown from '../../components/navbar/mobileNavDropdown/NavDropdown';


const MobileNavbar = () => {

    const [subMenu, setSubMenu] = useState<string[]>([])
    const [dropdown, setDropdown] = useState(false)

    const toggleSubMenu = (selectedSubMenu: string) => {
        if (subMenu.includes(selectedSubMenu)) {
            setSubMenu((currState) => currState.filter(menu => menu !== selectedSubMenu))
        } else {
            setSubMenu((menu) => [...menu, selectedSubMenu])
        }
    }

    const dropdownToggle = () => {
        setDropdown((currState) => !currState)
    }

    const dropdownCLose = () => {
        setDropdown(false)
        setSubMenu([])
    }


    return (
        <div className="z-50 w-full lg:hidden">
            <div className="m-[24px]">
                <div className="h-[44px] flex items-center justify-between">

                    <Image
                        onClick={() => dropdownToggle()}
                        src="/burger.png"
                        width={30}
                        height={22}
                        alt='burger menu icon'
                    />

                    <div>
                        logo
                    </div>

                    <Image
                        src='/search-black.png'
                        width={30}
                        height={22}
                        alt='search picture'
                    />
                </div>
            </div>

            <div className={dropdown ? "navbarActive" : "passive"}>

                <div className="mt-[36px] px-[24px] pb-[24px] bg-white">
                    <ul>
                        {ROUTES.map(route => {
                            return (
                                route.subMenuLinks ? (
                                    <NavDropdownWithSubMenu
                                        label={route.label}
                                        link={route.link}
                                        subMenuLinks={route.subMenuLinks}
                                        subMenu={subMenu}
                                        toggleSubMenu={() => toggleSubMenu(route.label)}
                                        dropdownCLose={dropdownCLose}
                                        key={route.label}
                                    />
                                ) : (<NavDropdown
                                    label={route.label}
                                    link={route.link}
                                    onClick={dropdownCLose}
                                    key={route.label}
                                />)
                            )
                        })}

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default MobileNavbar;
