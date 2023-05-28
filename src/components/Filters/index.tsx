import React from 'react';
import { IoBedOutline, IoPinOutline } from 'react-icons/io5';

import RightArrow from '../RightArrow';
import { Category } from '../../Models/models';
import { getIcons } from '../../util';

interface IProps {
    categories?: Category[] | undefined
}

const Filters = (props: IProps) => {

    const { categories } = props

    return (
        <div className='flex flex-row justify-between items-center pr-10'>
            <div className='grid grid-flow-col gap-14 mt-5 px-20 justify-start max-w-[95%] overflow-hidden whitespace-nowrap'>
                {
                    categories
                    ?
                    categories.map((category: Category, index: number) => {
                        return (
                            <div key={ index } className='flex flex-col items-center justify-between h-20 cursor-pointer group py-3 border-b border-transparent hover:border-gray-300'>
                                {
                                    getIcons(category.title, 'text-3xl text-gray-500 group-hover:text-black group-hover:transition-all')
                                }
            
                                <h3 className='text-center text-gray-500 text-xs font-semibold group-hover:text-black group-hover:transition-all'>{ category.title }</h3>
                            </div>
                        )
                    })

                    :
                    null
                }

            </div>
            
            <div className='mt-10 flex flex-row items-center justify-center mb-3'>
                <RightArrow />

                <div className='py-4 px-4 rounded-xl flex flex-row ml-3 border items-center'>
                    <span className='mr-1 font-semibold text-xs relative -top-px'>
                        <IoPinOutline className='font-semibold rotate-90 top-1 absolute'/>
                        <IoPinOutline className='font-semibold rotate-[270deg] ' />
                    </span>
                    <h3 className='ml-1 font-semibold text-xs'>Filters</h3>
                </div>
            </div>
        </div> 
     );
}
 
export default Filters;