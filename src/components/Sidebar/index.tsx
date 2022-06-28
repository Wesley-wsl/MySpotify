import Link from "next/link";
import { useState } from "react";

import { sidebarLibrary, sidebarNav } from "../../utils/constants";
import * as S from "./styles";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <S.Container isOpen={isOpen}>
                {isOpen && (
                    <S.Close onClick={() => setIsOpen(false)}>X</S.Close>
                )}

                <S.MainNavigation>
                    <ul>
                        {sidebarNav.map(({ path, name, svg }, index) => (
                            <li onClick={() => setIsOpen(false)} key={index}>
                                <Link href={path}>
                                    <a>
                                        {svg}
                                        {name}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </S.MainNavigation>

                <S.Label>Your Library</S.Label>

                <nav>
                    <S.ListStyle>
                        {sidebarLibrary.map(({ path, name }, index) => (
                            <li onClick={() => setIsOpen(false)} key={index}>
                                <Link href={path}>{name}</Link>
                            </li>
                        ))}
                    </S.ListStyle>
                </nav>
            </S.Container>

            <S.Overlay onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />

            {!isOpen && (
                <S.Mobile onClick={() => setIsOpen(!isOpen)}>
                    <div />
                    <div />
                    <div />
                </S.Mobile>
            )}
        </>
    );
};

export default Sidebar;
