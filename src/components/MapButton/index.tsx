import React from 'react';
import { BsMapFill } from 'react-icons/bs';


const MapButton = () => {
    return ( 
        <div className='bg-neutral-900 rounded-full py-4 px-5 cursor-pointer hover:scale-105 hover:shadow-lg hover:transition-all max-sm:py-2 max-sm:px-3'>
            <div className='flex flex-row items-center justify-between text-white max-w-[140px]'>
                <h3 className='pr-1 max-sm:text-[10px]'>Show Map</h3>
                <BsMapFill className='pl-1 max-sm:text-[10px]'/>
            </div>
        </div>
    );
}
 
export default MapButton;