const NESGames = ({nes}) => {
    return (
        <ul>
            {nes.map (nesgames => (
                <li>{nesgames}</li>
            ))};
        </ul>
    );
};

export default NESGames;