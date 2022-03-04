import Link from "next/link";
import { useState } from "react";

import BrowseSvg from "../../assets/icons/browse.svg";
import HomeSvg from "../../assets/icons/home.svg";
import LikedSongsSvg from "../../assets/icons/liked-songs.svg";
import * as S from "./styles";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <S.Container isOpen={isOpen}>
                {isOpen && (
                    <S.Close onClick={() => setIsOpen(!isOpen)}>X</S.Close>
                )}

                <S.MainNavigation>
                    <ul>
                        <li>
                            <Link href="/home">
                                <a>
                                    <HomeSvg aria-label="Home icon" />
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/browse">
                                <a>
                                    <BrowseSvg aria-label="browse icon" />
                                    Browse
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/liked-songs">
                                <a>
                                    <LikedSongsSvg aria-label="heart icon" />
                                    Liked songs
                                </a>
                            </Link>
                        </li>
                    </ul>
                </S.MainNavigation>

                <S.Label>Your Library</S.Label>

                <nav>
                    <S.ListStyle>
                        <li>
                            <Link href="/recent-played">Recent played</Link>
                        </li>
                        <li>
                            <Link href="/playlists">Playlists</Link>
                        </li>
                        <li>
                            <Link href="/albums">Albums</Link>
                        </li>
                        <li>
                            <Link href="/artists">Artists</Link>
                        </li>
                    </S.ListStyle>
                </nav>
            </S.Container>

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
