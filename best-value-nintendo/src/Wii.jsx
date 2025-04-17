const WiiGames = ({Wii}) => {
    return (
        <ul>
            {Wii.map (wiigames => (
                <li>{wiigames}</li>
            ))};
        </ul>
    );
};

export default WiiGames;