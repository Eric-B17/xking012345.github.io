import './App.css'
import NESGames from "./NES.jsx";
import GBCAGames from "./GB.C.A.jsx";
import SNESGames from "./SNES.jsx";
import N64Games from "./N64.jsx";
import GCGames from "./GC.jsx";
import DsGames from "./DS.jsx";
import ThreeDsGames from "./3DS.jsx";
import WiiGames from "./Wii.jsx";
import WiiUGames from "./Wii U.jsx";
import SwitchGames from "./Switch.jsx";

const App = () => {

    const Ds = [
        "New Super Mario Bros.",
        "Pokemon Black/White/Black 2/White 2",
        "The Legend of Zelda: Phantom Hourglass",
        "Animal Crossing: Wild World",
        "Nintendogs"
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

  return (
    <>
        <DsGames Ds={Ds}></DsGames>
        <ThreeDsGames ThreeDs={ThreeDs}></ThreeDsGames>
        <WiiGames Wii={Wii}></WiiGames>
        <WiiUGames WiiU={WiiU}></WiiUGames>
        <SwitchGames Switch={Switch}></SwitchGames>
    </>
  )
}

export default App
