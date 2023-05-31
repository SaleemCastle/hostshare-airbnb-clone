import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Header from '../../../components/Header';

const SearchResultsSkeleton = () => {

    return (  
        <div>
            <Header extraPadding/>
            <Skeleton height={50} width={'81%'} className='mt-8 ml-36'/>
            <Skeleton height={20} width={'20%'} className='mt-4 ml-36'/>
            <Skeleton height={40} width={'50%'} className='mt-4 ml-36'/>

            <div className='ml-36 mt-6 grid grid-cols-2'>

                <div>
                    <div className='flex flex-row'>
                        <Skeleton width={ 200 } height={ 200 } className=' rounded-lg mr-3'/>
                        <Skeleton width={ 200 } height={ 200 } className=' rounded-lg mx-3'/>
                        <Skeleton width={ 200 } height={ 200 } className=' rounded-lg mx-3'/>
                    </div>
                        
                    <div className='flex flex-row'>
                        <Skeleton width={ 200 } height={ 200 } className=' rounded-lg mr-3'/>
                        <Skeleton width={ 200 } height={ 200 } className=' rounded-lg mx-3'/>
                        <Skeleton width={ 200 } height={ 200 } className=' rounded-lg mx-3'/>
                    </div>
                </div>

                <Skeleton width={ '80%' } height={ 400 } className=' rounded-lg mx-3'/>

            </div>
        </div>
    );
}
 
export default SearchResultsSkeleton;