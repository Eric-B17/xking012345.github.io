import './App.css'
import NES from "./NES.jsx";
import GBCA from "./GB.C.A.jsx";
import SNES from "./SNES.jsx";
import N64 from "./N64.jsx";
import GC from "./GC.jsx";
import NESGames from "./NES.jsx";
import GBCAList from "./GB.C.A.jsx";
import SNESList from "./SNES.jsx";
import N64List from "./N64.jsx";
import GCList from "./GC.jsx";

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

return (
    <>
    <NESGames nes={nes}></NESGames>
    <GBCAGames gbca={gbca}></GBCAGames>
    <SNESGames snes={snes}></SNESGames>
    <N64Games n64={n64}></N64Games>
    <GCGames gc={gc}></GCGames>
      </>
)


}

export default App
