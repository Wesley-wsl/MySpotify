import React from "react";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import * as S from "./styles";

const DashboardTemplate: React.FC = ({ children }) => {
    return (
        <S.Container>
            <Sidebar />
            <Topbar />
            {children}
        </S.Container>
    );
};

export default DashboardTemplate;
