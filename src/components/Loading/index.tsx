import React from "react";

import * as S from "./styles";

const Loading: React.FC = () => {
    return (
        <S.Container>
            <S.Loader data-testid="Loading" />
        </S.Container>
    );
};

export default Loading;
