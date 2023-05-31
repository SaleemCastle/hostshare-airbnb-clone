import React from 'react';
import { IoPinOutline } from 'react-icons/io5';

import RightArrow from '../RightArrow';
import { Category } from '../../Models/models';
import { getIcons } from '../../util';
import { BsHouses } from 'react-icons/bs';

interface IProps {
    categories?: Category[] | undefined
    searchResultsPage?: boolean
}

const Filters = (props: IProps) => {

    const { categories, searchResultsPage } = props

    return (
        <div className={`flex flex-row justify-between items-center pr-20 sticky top-[70px] bg-white z-40 ${props.searchResultsPage ? 'pr-4' : 'pr-20'} border-b shadow-lg max-sm:pr-0 max-sm:border-b-0`}>
            <div className={`grid grid-flow-col gap-14 mt-5 pl-20 justify-start max-w-[95%] overflow-hidden overflow-x-scroll no-scrollbar whitespace-nowrap ${props.searchResultsPage ? 'pl-4' : 'pl-20'} max-sm:gap-4 max-sm:pl-4 max-sm:mt-0 max-sm:shadow-lg max-sm:max-w-full`}>
                {
                    searchResultsPage
                    ?
                    <div className='flex flex-col items-center justify-between h-20 cursor-pointer py-3 max-sm:h-16'>
                        <BsHouses className='text-3xl text-black max-sm:text-[10px]'/>
                        <h3 className='text-center text-xs font-semibold text-black max-sm:text-[10px]'>Your Search</h3>
                    </div>
                    :
                    null
                }
                {
                    categories
                    ?
                    categories.map((category: Category, index: number) => {
                        return (
                            <div key={ index } className='flex flex-col items-center justify-between h-20 cursor-pointer group py-3 border-b border-transparent hover:border-gray-300 max-sm:h-16'>
                                {
                                    getIcons(category.title, 'text-3xl text-gray-500 group-hover:text-black group-hover:transition-all max-sm:text-[14px]')
                                }
            
                                <h3 className='text-center text-gray-500 text-xs font-semibold group-hover:text-black group-hover:transition-all max-sm:text-xs'>{ category.title }</h3>
                            </div>
                        )
                    })

                    :
                    null
                }

            </div>
            
            <div className='mt-10 flex flex-row items-center justify-center mb-3 max-sm:hidden'>
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