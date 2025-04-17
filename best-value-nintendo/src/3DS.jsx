const ThreeDSGames = ({ThreeDS}) => {
    return (
        <ul>
            {ThreeDS.map (threedsgames => (
                <li>{threedsgames}</li>
            ))};
        </ul>
    );
};

export default ThreeDSGames;