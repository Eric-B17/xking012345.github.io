const SNESList = ({snes}) => {
    return (
        <ul>
            {snes.map (snesgames => (
                <li>{snesgames}</li>
            ))};
        </ul>
    );
};

export default SNESList;