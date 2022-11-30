import Link from "next/link";
import { FC } from "react";

type Props = {
    link: string;
    label: string;
    onClick: () => void;
}

const NavDropdown: FC<Props> = ({ link, label, onClick }) => {

    return (
        <li className="responsive-dropdown-li">
            <Link
                onClick={onClick}
                href={link}
                className="text-[17px] text-primary text-hover"
            >{label}</Link>
        </li>
    )
}

export default NavDropdown;