const GBCAGames = ({gbca}) => {
    return (
        <ul>
            {gbca.map (gbcagames => (
                <li>{gbcagames}</li>
            ))};
        </ul>
    );
};

export default GBCAGames;