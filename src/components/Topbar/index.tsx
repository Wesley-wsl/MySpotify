import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { FormEvent, useContext, useState } from "react";

import ArrowDownSvg from "../../assets/icons/arrow-down.svg";
import ArrowUpSvg from "../../assets/icons/arrow-up.svg";
import MoonSvg from "../../assets/icons/moon.svg";
import ProfileSvg from "../../assets/icons/profile.svg";
import SearchSvg from "../../assets/icons/search.svg";
import SunSvg from "../../assets/icons/sun.svg";
import { ThemeContext } from "../../contexts/Theme";
import * as S from "./styles";

const Topbar: React.FC = () => {
    const { data } = useSession();
    const [openOptions, setOpenOptions] = useState(false);
    const [search, setSearch] = useState(String);
    const { lightMode, setLightMode } = useContext(ThemeContext);

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        if (search.trim() !== "") Router.push(`/browse/${search.trim()}`);

        setSearch("");
    };

    const changeTheme = async () => {
        if (lightMode) {
            destroyCookie(null, "theme");
            setLightMode(false);
        } else {
            setCookie(null, "theme", "light");
            setLightMode(true);
        }
    };

    return (
        <S.Container>
            <S.SearchBar onSubmit={e => handleSearch(e)}>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit">
                    <SearchSvg aria-label="Search icon" />
                </button>
            </S.SearchBar>

            <S.ProfileContainer>
                <S.Profile onClick={() => setOpenOptions(!openOptions)}>
                    {data?.user?.image ? (
                        <Image
                            src={`${data.user.image}`}
                            alt="Profile image"
                            width={32}
                            height={32}
                        />
                    ) : (
                        <ProfileSvg aria-label="Profile icon" />
                    )}

                    <p>{data && data.user?.name}</p>

                    {openOptions ? (
                        <ArrowUpSvg aria-label="Arrow up icon" />
                    ) : (
                        <ArrowDownSvg aria-label="Arrow down icon" />
                    )}
                </S.Profile>

                {openOptions && (
                    <S.Options>
                        <li onClick={() => signOut()}>Log out</li>
                    </S.Options>
                )}

                {lightMode ? (
                    <MoonSvg onClick={changeTheme} className="moon" />
                ) : (
                    <SunSvg onClick={changeTheme} className="sun" />
                )}
            </S.ProfileContainer>
        </S.Container>
    );
};

export default Topbar;
