import Link from "next/link";
import { FC } from "react";

import styles from './NavDropdownWithSubMenu.module.css'


type SubMenuLink = {

    link: string;
    label: string;
}

type Props = {

    link: string;
    label: string;
    subMenu: string[];
    subMenuLinks: SubMenuLink[];
    toggleSubMenu: () => void;
    dropdownCLose: () => void;
}



const NavDropdownWithSubMenu: FC<Props> =
    ({ link, label, subMenu, toggleSubMenu, dropdownCLose, subMenuLinks }) => {

        return (
            <li className="responsive-dropdown-li" onClick={toggleSubMenu}>
                <div className="flex-center-between">
                    <Link
                        onClick={dropdownCLose}
                        href={link}
                        className="text-[17px] text-primary text-hover"
                    >{label}</Link>
                    <div className={subMenu.includes(label) ? styles['cross-active'] : styles['cross-passive']}>
                        <div className={styles.horizontal}></div>
                        <div className={styles.vertical}></div>
                    </div>
                </div>
                <ul className={`ml-[24px] ${subMenu.includes(label) ? "" : "passive"}`}>
                    {subMenuLinks.map((subMenuLink) => {
                        return (
                            <li key={subMenuLink.label} className="responsive-submenu-li">
                                <Link
                                    onClick={dropdownCLose}
                                    href={subMenuLink.link}
                                    className="responsive-submenu-link"
                                >{subMenuLink.label}</Link>
                            </li>
                        )
                    })}
                </ul>
            </li>
        )
    }

export default NavDropdownWithSubMenu;