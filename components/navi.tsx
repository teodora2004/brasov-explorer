import Link from "next/link";
import Image from "next/image";

import { FC } from "react";
import { NavigationItem } from "@/types";

const Navi: FC = () => {
    const navigation: NavigationItem[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },

    ]
    return (
        <nav className="sticky top-0 bg-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-black text-lg font-bold">Brasov Explorer</div>

                <ul className="flex space-x-4">
                    {navigation.map((element, index) => (
                        <li key={index}>
                            <Link className="text-black hover: text-gray-300" href={element.href}>
                                {element.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navi;