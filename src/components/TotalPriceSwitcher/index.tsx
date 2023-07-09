import React from 'react';

interface IProps {
    left?: boolean
}

const TotalPriceSwitcher = (props: IProps) => {
    return ( 
        <div className={props.left ? 'max-w-full flex flex-row items-center mt-2' : 'max-w-full grid grid-cols-4 items-center mt-2 3xl:grid-cols-6 3xl:col-start-3'}>
            <div className={props.left ? 'rounded-xl border px-4 py-5 flex-1' : 'rounded-xl border px-4 py-5 col-span-2 col-start-2 3xl:col-start-3 max-sm:col-span-full'}>
                <div className='flex flex-row justify-between max-sm:items-center'>
                    <div className='flex flex-row max-sm:flex-col'>
                        <h1 className='font-medium max-[440px]:text-sm'>Display Total Price</h1> 
                        <span className='mx-5 font-thin text-gray-300 max-sm:hidden'>|</span>
                        <h1 className='text-gray-500 max-[440px]:text-sm'>Include all fees, before taxes</h1>
                    </div>

                    <div>  
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-10 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black dark:peer-focus:ring-black rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TotalPriceSwitcher;