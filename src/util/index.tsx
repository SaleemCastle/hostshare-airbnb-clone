import { TbPool } from 'react-icons/tb'
import { MdCabin } from 'react-icons/md'
import { IoBedOutline } from 'react-icons/io5'
import { GiTreeGrowth } from 'react-icons/gi'
import { FaSkiingNordic } from 'react-icons/fa'

export const getIcons = (title: string, className: string) => {
    switch(title) {
        case 'Amazing pools': return <TbPool className={className}/>
        case 'Cabins': return <MdCabin className={className}/>
        case 'Countryside': return <GiTreeGrowth className={className} />
        case 'Skiing': return <FaSkiingNordic className={className}/>
        default: return <IoBedOutline className={className}/>
    }
}