const WiiUGames = ({WiiU}) => {
    return (
        <ul>
            {WiiU.map (wiiUgames => (
                <li>{wiiUgames}</li>
            ))};
        </ul>
    );
};

export default WiiUGames;