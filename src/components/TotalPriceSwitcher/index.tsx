import React, { ReactElement } from 'react';

const TotalPriceSwitcher = (): ReactElement => {
    return ( 
        <div className='max-w-full grid grid-cols-4 items-center mt-2 3xl:grid-cols-6 3xl:col-start-3'>
            <div className='rounded-xl border px-4 py-5 col-span-2 col-start-2 3xl:col-start-3'>
                <div className='flex flex-row'>
                    <h1 className='font-medium'>Display Total Price</h1> 
                    <span className='mx-5 font-thin text-gray-300'>|</span>
                    <h1 className='text-gray-500'>Include all fees, before taxes</h1>
                </div>
            </div>
        </div>
     );
}
 
export default TotalPriceSwitcher;