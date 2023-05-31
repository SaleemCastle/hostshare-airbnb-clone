import { TbBeach, TbChefHat, TbHomeHeart, TbLayoutGridAdd, TbPool } from 'react-icons/tb'
import { MdCabin, MdHouseboat, MdOutlineDownhillSkiing } from 'react-icons/md'
import { IoBedOutline, IoGolfSharp } from 'react-icons/io5'
import { GiBarn, GiBowlingStrike, GiCampingTent, GiDesert, GiFarmTractor, GiGrandPiano, GiGrapes, GiHouseKeys, GiParkBench, GiPisaTower, GiSpookyHouse, GiSummits, GiTheaterCurtains, GiTreeGrowth, GiTreehouse, GiVikingLonghouse, GiWaveSurfer } from 'react-icons/gi'
import { FaSkiingNordic } from 'react-icons/fa'
import { BiWater } from 'react-icons/bi'
import { BsCupHot, BsFire } from 'react-icons/bs'
import { HiOutlineHomeModern } from "react-icons/hi2";
import { SiAutoprefixer } from 'react-icons/si'
import { RiKeyboardBoxLine } from 'react-icons/ri'

export const getIcons = (title: string, className: string) => {
    switch(title) {
        case 'Amazing pools': return <TbPool className={className}/>
        case 'Cabins': return <MdCabin className={className}/>
        case 'Countryside': return <GiTreeGrowth className={className} />
        case 'Skiing': return <FaSkiingNordic className={className}/>
        case 'Lake': return <BiWater className={className}/>
        case 'Beachfront': return <TbBeach className={className}/>
        case 'Iconic cities': return <GiPisaTower className={className}/>
        case 'Play': return <GiBowlingStrike className={className}/>
        case 'Amazing views': return <GiTheaterCurtains className={className}/>
        case 'Vineyards': return <GiGrapes className={className}/>
        case 'Lakefront': return <MdHouseboat className={className}/>
        case 'Trending': return <BsFire className={className}/>
        case 'National parks': return <GiParkBench className={className}/>
        case 'New': return <GiHouseKeys className={className}/>
        case 'Farms': return <GiFarmTractor className={className}/>
        case 'Tiny homes': return <TbHomeHeart className={className}/>
        case 'Camping': return <GiCampingTent className={className}/>
        case "Chef's kitchens": return <TbChefHat className={className}/>
        case 'Ski-in/out': return <MdOutlineDownhillSkiing className={className}/>
        case 'Surfing': return <GiWaveSurfer className={className}/>
        case 'Golfing': return <IoGolfSharp className={className}/>
        case 'Bed & breakfast': return <BsCupHot className={className}/>
        case 'Design': return <HiOutlineHomeModern className={className}/>
        case 'Desert': return <GiDesert className={className}/>
        case 'Grand piano': return <GiGrandPiano className={className}/>
        case 'Off-the-grid': return <TbLayoutGridAdd className={className}/>
        case 'Barns': return <GiBarn className={className}/>
        case 'Treehouses': return <GiTreehouse className={className}/>
        case 'A-frames': return <SiAutoprefixer className={className}/>
        case 'Top of the world': return <GiSummits className={className}/>
        case 'Yurts': return <GiVikingLonghouse className={className}/>
        case 'Mansions': return <GiSpookyHouse className={className}/>
        case 'Containers': return <RiKeyboardBoxLine className={className}/>
        default: return <IoBedOutline className={className}/>
    }
}