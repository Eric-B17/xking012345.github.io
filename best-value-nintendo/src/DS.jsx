const DSGames = ({DS}) => {
    return (
        <ul>
            {DS.map (dsgames => (
                <li>{dsgames}</li>
            ))};
        </ul>
    );
};

export default DSGames;