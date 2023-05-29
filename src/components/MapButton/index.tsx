import React from 'react';
import { BsMapFill } from 'react-icons/bs';


const MapButton = () => {
    return ( 
        <div className='bg-neutral-900 rounded-full py-4 px-5 cursor-pointer hover:scale-105 hover:shadow-lg hover:transition-all'>
            <div className='flex flex-row items-center justify-between text-white max-w-[140px]'>
                <h3 className='pr-1'>Show Map</h3>
                <BsMapFill className='pl-1'/>
            </div>
        </div>
    );
}
 
export default MapButton;