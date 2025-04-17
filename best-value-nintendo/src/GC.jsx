const GCGames = ({gc}) => {
    return (
        <ul>
            {gc.map (gcgames => (
                <li>{gcgames}</li>
            ))};
        </ul>
    );
};

export default GCGames;