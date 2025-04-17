const DsGames = ({Ds}) => {
    return(
        <ul>
            {Ds.map(DS => (
                <li>{DS}</li>
            ))}
        </ul>
    )
}

export default DsGames