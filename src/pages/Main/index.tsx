import React, { ReactElement } from 'react';
import { BiSearch } from 'react-icons/bi'
import { TbWorld } from 'react-icons/tb'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsPersonCircle } from 'react-icons/bs'

import logo from '../../assets/hostshare-green.png'
import Filters from '../../components/Filters';

const Main = (): ReactElement => {
    return (
        <> 
        {/* move to header component */}
        <div className='py-5 grid-cols-3 grid items-center justify-around border-b justify-self-center'>
            {/* Logo */}
            <div className='pl-10'>
                {/* <h1 className='text-teal-600 tex'>Airbnb Clone</h1> */}
                <img src={ logo } alt='logo' style={{ height: 35 }} />
            </div>

            {/* Search component */}
            <div className='flex p-4 rounded-full w-96 shadow-sm border-2 flex-row justify-between h-12 items-center self-center cursor-pointer hover:shadow-md hover:transition-all'>
                <h3 className='text-black font-semibold font-circular'>Anywhere</h3> <span className='text-gray-400 font-thin'>|</span>
                <h3 className='text-black font-semibold'>Any week</h3> <span className='text-gray-400 font-thin'>|</span>
                <h3 className='text-gray-500 font-normal'>Add guests</h3>
                <span className='w-8 h-8 rounded-full bg-teal-600 items-center justify-center flex'>
                    <BiSearch className='text-white'/>
                </span>
            </div>

            {/* menu bar */}
            <div className='place-self-end self-center flex flex-row items-center mr-10'>
                <div className='text-black font-semibold p-3 rounded-full cursor-pointer hover:bg-gray-100 mr-1'>
                    <h2>Airbnb your home</h2>
                </div>

                <span className='mt-1 mx-1 p-4 text-lg rounded-full cursor-pointer hover:bg-gray-100'>
                    <TbWorld />
                </span>

                <div className='flex flex-row p-3 border-2 rounded-full cursor-pointer justify-center items-center hover:shadow-md hover:transition-all'>
                    <RxHamburgerMenu className='mx-1 text-lg'/>
                    <BsPersonCircle className='mx-1 text-2xl text-gray-500'/>
                </div>
            </div>
        </div>

        {/* filter component */}

        <Filters />
        </>
    );
}
 
export default Main;