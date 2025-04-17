const ThreeDsGames = ({ThreeDs}) => {
    return(
        <ul>
            {ThreeDs.map(ThreeDS => (
                <li>{ThreeDS}</li>
            ))}
        </ul>
    )
}

export default ThreeDsGames