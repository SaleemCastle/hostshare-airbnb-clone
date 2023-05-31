import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Header from '../../../components/Header';

const RoomSkeleton = () => {

    return (  
        <div>
            <Header extraPadding/>
            <Skeleton height={50} width={'45%'} className='mt-8 ml-36'/>
            <Skeleton height={20} width={'35%'} className='mt-4 ml-36'/>

            <Skeleton height={300} width={'80%'} className='mt-4 ml-36'/>
            <div className='ml-36 mt-8'>
                <Skeleton height={50} width={'50%'} />
                <Skeleton height={50} width={'50%'} />
            </div>
        </div>
    );
}
 
export default RoomSkeleton;