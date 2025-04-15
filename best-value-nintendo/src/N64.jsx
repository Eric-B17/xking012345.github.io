const N64List = ({n64}) => {
    return (
        <ul>
            {n64.map (n64games => (
                <li>{n64games}</li>
            ))};
        </ul>
    );
};

export default N64List;