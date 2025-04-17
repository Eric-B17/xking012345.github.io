const WiiUGames = ({WiiU}) => {
    return(
        <ul>
            {WiiU.map(wiiU => (
                <li>{wiiU}</li>
            ))}
        </ul>
    )
}

export default WiiUGames