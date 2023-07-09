import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import RightArrow from '../RightArrow';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import { Info } from '../../Models/models';

interface IProps {
    category?: string
    info: Info
}

const ListingsCard = (props: IProps) => {
    const { currency, mainImage, price, ratings, location, title } = props.info
    return ( 
        <div className='max-w-sm flex flex-col group'>
            <div className='w-full max-h-96 relative'>
                <div className='rounded-xl min-h-full h-80 flex flex-col justify-between max-[550px]:h-56 max-[440px]:h-72' style={
                    { 
                        backgroundImage: `url(${mainImage.url})`, 
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat'
                    }
                }>
                    <div className='grid grid-cols-2 gap-4'>
                        <span className='col-start-2 justify-self-end p-4'> <Heart /> </span>
                    </div>

                    <div className='grid grid-cols-2 gap-4 py-4'>
                        <RightArrow className='col-start-2 justify-self-end invisible group-hover:visible cursor-pointer group-hover:transition-all'/>
                    </div>

                    <div className='grid grid-cols-3 gap-4 p-4 invisible'>
                        <div></div>
                        <div>temp</div>
                        <div></div>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-8 pt-5'>
                <h1 className='font-semibold col-span-7'>{ `${location.city} ${location.country.title}` }</h1>
                <div className='flex flex-row justify-end'>
                    <span className='mt-0.5 text-lg font-medium '>
                        <AiFillStar />
                    </span>
                    <h3> { ratings.guestSatisfactionOverall } </h3>
                </div>
                
            </div>

            <div className='grid grid-cols-8'>
                <h1 className='col-span-7 text-gray-400'>{ title }</h1>    
            </div>

            <div className='grid grid-cols-8'>
                <h1 className='col-span-7 text-gray-400'>Jun 2 - 7</h1>    
            </div>

            <div className='grid grid-cols-8'>
                <h1 className='col-span-7'><span className='font-semibold'>{ `$${price} ${currency.code}` }</span> night</h1>    
            </div>

        </div>
     );
}
 
export default ListingsCard;