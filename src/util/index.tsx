import { TbHome, TbPool } from 'react-icons/tb'
import { MdCabin } from 'react-icons/md'
import { IoBedOutline } from 'react-icons/io5'

export const getIcons = (title: string, className: string) => {
    switch(title) {
        case 'Amazing pools': return <TbPool className={className}/>
        case 'Cabins': return <MdCabin className={className}/>
        default: return <IoBedOutline className={className}/>
    }
}