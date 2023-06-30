import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoPinOutline } from 'react-icons/io5';

interface IProps {
    onClick: () => void
    searching: boolean
    minimized?: boolean
}

const SearchBar = (props: IProps) => {
    const { onClick, searching, minimized } = props

    return (  
        searching
        ?
        <div className='grid grid-cols-4 h-20 items-center justify-between max-w-3xl sm:w-full'>
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
        <div onClick={ onClick } className={`${searching ? 'scale-150' : 'scale-100'} transition-all duration-500 flex p-4 rounded-full w-96 shadow-sm border-2 place-self-center flex-row justify-between h-12 items-center self-center cursor-pointer hover:shadow-md hover:transition-all max-sm:shadow-lg max-[750px]:col-span-3 max-[750px]:w-full `}>
            {
                !minimized
                ?
                <>
                    <h3 className='text-black font-medium font-circular max-[750px]:hidden'>Anywhere</h3> <span className='max-[750px]:hidden text-gray-400 font-thin'>|</span>
                    <h3 className='text-black font-medium max-[750px]:hidden'>Any week</h3> <span className='max-[750px]:hidden text-gray-400 font-thin'>|</span>
                    <h3 className='text-gray-500 font-normal max-[750px]:hidden'>Add guests</h3>
                    <div className='hidden max-[750px]:flex items-center flex-row flex-grow w-full'>
                        <span>
                            <BiSearch />
                        </span>

                        <div className='hidden max-[750px]:flex flex-col ml-5'>
                            <h3 className='text-black font-bold text-xs'>Anywhere</h3>
                            <div className='flex flex-row items-center text-xs'>
                                <h3 className='text-gray-500 font-medium'>Any week</h3> <span className='text-gray-400 font-thin px-2'>.</span>
                                <h3 className='text-gray-500 font-normal'>Add guests</h3>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div>
                    <h3 className='text-black font-medium font-circular'>Start your search</h3> 
                </div>
            }
            <span className='w-8 h-8 rounded-full bg-teal-600 items-center justify-center flex max-[750px]:hidden'>
                <BiSearch className='text-white'/>
            </span>
            <div className='rounded-full hidden border h-8 w-8 justify-center items-center max-[750px]:flex'>
                <span className='text-sm relative -top-px'>
                    <IoPinOutline className='font-extrabold rotate-90 top-1 absolute'/>
                    <IoPinOutline className='font-extrabold rotate-[270deg] ' />
                </span>
            </div>
        </div>
    );
}
 
export default SearchBar;