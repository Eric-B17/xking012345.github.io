const SwitchGames = ({Switch}) => {
    return(
        <ul>
            {Switch.map(NintendoSwitch => (
                <li>{NintendoSwitch}</li>
            ))}
        </ul>
    )
}

export default SwitchGames