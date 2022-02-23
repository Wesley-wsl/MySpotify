export const getTime = (miliseconds: number) => {
    // eslint-disable-next-line prettier/prettier
    const toMinutes = Math.floor((miliseconds / 1000) / 60);
    const toSeconds = Math.round((miliseconds / 1000) % 60);
    const converted = `${
        String(toMinutes).length === 1 ? "0" : ""
    }${toMinutes}:${toSeconds}${String(toSeconds).length === 1 ? "0" : ""}`;

    return converted;
};
