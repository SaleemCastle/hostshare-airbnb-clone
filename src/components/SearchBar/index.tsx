import React from 'react';
import { BiSearch } from 'react-icons/bi';

interface IProps {
    onClick: () => void
    searching: boolean
}

const SearchBar = (props: IProps) => {
    const { onClick, searching } = props
    return (  
        searching
        ?
        <div className='grid grid-cols-4 h-20 items-center justify-between max-w-3xl'>
            <div className='flex flex-row col-start-2'>
                <div className='relative group mr-3 cursor-pointer'>
                    <h2 className=''>Stays</h2>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all"></span>
                </div>

                <div className='relative group cursor-pointer'>
                    <h2 className='text-gray-400'>Experiences</h2>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all"></span>
                </div>
            </div>

            <div className='col-start-3 relative group cursor-pointer ml-5'>
                <h2 className='whitespace-nowrap text-center text-gray-400'>Online Experiences</h2>
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all"></span>
            </div>
        </div>
        :
        <div onClick={ onClick } className={`${searching ? 'scale-150' : 'scale-100'} transition-all duration-500 flex p-4 rounded-full w-96 shadow-sm border-2 place-self-center flex-row justify-between h-12 items-center self-center cursor-pointer hover:shadow-md hover:transition-all`}>
            <h3 className='text-black font-medium font-circular'>Anywhere</h3> <span className='text-gray-400 font-thin'>|</span>
            <h3 className='text-black font-medium'>Any week</h3> <span className='text-gray-400 font-thin'>|</span>
            <h3 className='text-gray-500 font-normal'>Add guests</h3>
            <span className='w-8 h-8 rounded-full bg-teal-600 items-center justify-center flex'>
                <BiSearch className='text-white'/>
            </span>
        </div>
    );
}
 
export default SearchBar;