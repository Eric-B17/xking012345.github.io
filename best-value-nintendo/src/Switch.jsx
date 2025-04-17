const SwitchGames = ({Switch}) => {
    return (
        <ul>
            {Switch.map (switchgames => (
                <li>{switchgames}</li>
            ))};
        </ul>
    );
};

export default SwitchGames;