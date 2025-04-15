const GCList = ({gc}) => {
    return (
        <ul>
            {gc.map (gcgames => (
                <li>{gcgames}</li>
            ))};
        </ul>
    );
};

export default GCList;