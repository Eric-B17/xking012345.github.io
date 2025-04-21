const Games = ({games}) => {
    return (
        <ul>
            {games.map((game, index) => (
                <li key={index}>{game}</li>
            ))}
        </ul>
    );
};

export default Games;