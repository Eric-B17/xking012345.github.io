import './App.css'
import React, { useState } from 'react';
import Games from "./Games.jsx";


const App = () => {

    const nes = [
    "Super Mario Bros",
    "Legend Of Zelda",
    "Kirby’s Adventure",
    "Punch-Out",
    "Duck Hunt"
    ]

    const gbca = [
    "Pokémon Red/Blue/Yellow",
    "The Legend of Zelda: Link’s Awakening",
    "Kirby & The Amazing Mirror",
    "Metroid Fusion",
    "Golden Sun"
    ]

    const snes = [
    "Super Mario World",
    "Super Metroid",
    "Donkey Kong Country",
    "Kirby Super Star",
    "Earthbound/Mother"
    ]

    const n64 = [
    "Super Mario 64",
    "Legend Of Zelda Ocarina of Time",
    "Donkey Kong 64",
    "Star Fox 64",
    "F-Zero X"
    ]

    const gc = [
    "Legend of Zelda Wind Waker",
    "F-Zero GX",
    "Luigi’s Mansion",
    "Metroid Prime",
    "Pikmin"
    ]

    const Ds = [
        "New Super Mario Bros.",
        "Pokemon Black/White/Black 2/White 2",
        "The Legend of Zelda: Phantom Hourglass",
        "Animal Crossing: Wild World",
        "Nintendogs",
    ]

    const ThreeDs = [
        "Tomodachi Life",
        "Pokemon Sun/Moon/Ultra Sun/ Ultra Moon",
        "Super Mario 3D Land",
        "Fire Emblem Awakening",
        "Kirby Triple Deluxe"
    ]

    const Wii = [
        "Wii Sports",
        "Super Mario Galaxy",
        "The Legend of Zelda: Twilight Princess",
        "Xenoblade Chronicles",
        "WarioWare: Smooth Moves"
    ]

    const WiiU = [
        "Super Mario 3D World",
        "Splatoon",
        "Pikmin 3",
        "Donkey Kong Country: Tropical Freeze",
        "Pokken Tournament"
    ]

    const Switch = [
        "Super Smash Bros. Ultimate",
        "Super Mario Odyssey",
        "The Legend of Zelda: Breath of the Wild",
        "Animal Crossing: New Horizons",
        "Fire Emblem: Three Houses"
    ]

    function Tabs({ children }) {
        const [activeTab, setActiveTab] = useState(0);

        const handleTabClick = (index) => {
            setActiveTab(index);
        };

        return (
            <div>
                <div className="tab-buttons">
                    {React.Children.map(children, (child, index) => (
                        <button
                            key={index}
                            className={index === activeTab ? 'active' : ''}
                            onClick={() => handleTabClick(index)}
                        >
                            {child.props.label}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    {children[activeTab]}
                </div>
            </div>
        );
    }

    function Tab({ label, children }) {
        return (
            <div>
                {children}
            </div>
        );
    }


return (
    <>
        <img src="data:image/png;base64,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"></img>
        <h1>BEST VALUE NINTENDO GAMES</h1>
        <Tabs>
            <Tab label="NES">
                <Games games={nes}></Games>
            </Tab>
            <Tab label="Gameboy">
                <Games games={gbca}></Games>
            </Tab>
            <Tab label="SNES">
                <Games games={snes}></Games>
            </Tab>
            <Tab label="Nintendo 64">
                <Games games={n64}></Games>
            </Tab>
            <Tab label="Gamecube">
                <Games games={gc}></Games>
            </Tab>
            <Tab label="DS">
                <Games games={Ds}></Games>
            </Tab>
            <Tab label="Wii">
                <Games games={Wii}></Games>
            </Tab>
            <Tab label="3DS">
                <Games games={ThreeDs}></Games>
            </Tab>
            <Tab label="Wii U">
                <Games games={WiiU}></Games>
            </Tab>
            <Tab label="Switch">
                <Games games={Switch}></Games>
            </Tab>
        </Tabs>
      </>
)

}

export default App
