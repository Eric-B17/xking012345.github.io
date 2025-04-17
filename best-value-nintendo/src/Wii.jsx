const WiiGames = ({Wii}) => {
    return(
        <ul>
            {Wii.map(wii => (
                <li>{wii}</li>
            ))}
        </ul>
    )
}

export default WiiGames