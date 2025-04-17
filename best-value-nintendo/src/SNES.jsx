const SNESGames = ({snes}) => {
    return (
        <ul>
            {snes.map (snesgames => (
                <li>{snesgames}</li>
            ))};
        </ul>
    );
};

export default SNESGames;