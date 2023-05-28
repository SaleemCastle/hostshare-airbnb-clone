import React, { ReactElement } from 'react';
import ListingsCard from '../ListingsCard';
import TotalPriceSwitcher from '../TotalPriceSwitcher';


const Listings = (): ReactElement => {
    return ( 
        <div className='max-w-full px-20 grid grid-flow-row-dense auto-rows-[minmax(min-content,max-content)] grid-cols-4 mt-2 gap-5 3xl:grid-cols-6'>

            <div className='col-span-4 gap-5 3xl:grid-cols-6 3xl:col-span-6'>
                {/* <div className='col-span-2 3xl:col-start-3'> */}
                    <TotalPriceSwitcher />
                {/* </div> */}
            </div>

            <div className=''>
                <ListingsCard />
            </div>
            <div className=''>
                <ListingsCard />
            </div>
            <div className=''>
                <ListingsCard />
            </div>
            <div className=''>
                <ListingsCard />
            </div>
            <div className=''>
                <ListingsCard />
            </div>
            <div className=''>
                <ListingsCard />
            </div>
            <div className=''>
                <ListingsCard />
            </div>
            <div className=''>
                <ListingsCard />
            </div>
            
        </div>
     );
}
 
export default Listings;