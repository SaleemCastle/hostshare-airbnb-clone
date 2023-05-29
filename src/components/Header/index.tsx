import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx';
import { TbWorld } from 'react-icons/tb';

import SearchBar from '../SearchBar';

import logo from '../../assets/hostshare-green.png'
import getListings from '../../api/apiRequest';

interface IProps {
    extraPadding?: boolean
}

const Header = (props: IProps) => {

    const [extendHeader, toggleExtendHeader] = useState(false)
    const [locationSearch, activateLocationSearch] = useState(false)
    const [searchText, updateSearch] = useState('')
    const listings = getListings().data

    const regions = [
        { name: "I'm flexible", image: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg'},
        { name: "United States", image: 'https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320'},
        { name: "Dominican Republic", image: 'https://a0.muscache.com/im/pictures/09369fb8-0035-43e0-9c0c-0dff0ba11b12.jpg?im_w=320'},
        { name: "Europe", image: 'https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320'},
        { name: "Canada", image: 'https://a0.muscache.com/im/pictures/cd9f2bf0-eefc-4980-b7cb-9c8ca3dae883.jpg?im_w=320'},
        { name: "South America", image: 'https://a0.muscache.com/im/pictures/06a30699-aead-492e-ad08-33ec0b383399.jpg?im_w=320'}
    ]

    const onClickSearchBar = () => {
        toggleExtendHeader(!extendHeader)
    }

    const showDestinations = () => {
        activateLocationSearch(true)
    }
    
    return ( 
        <div className={`py-3 sticky top-0 w-full bg-white z-50 grid-cols-3 grid items-center justify-around border-b justify-self-center transition-all duration-300 ${extendHeader ? 'pb-4' : 'pb-3'}`}>
            {/* Logo */}
    
            <div className={`${props.extraPadding ? 'pl-36' : 'pl-20'}`}>
                <img src={ logo } alt='logo' style={{ height: 35 }} />
            </div>

            <SearchBar onClick={ onClickSearchBar } searching={ extendHeader } minimized={ props.extraPadding === true }/> 

            {/* menu bar */}
            <div className={`place-self-end self-center flex flex-row items-center ${props.extraPadding ? 'mr-36' : 'mr-20' }`}>
                <div className='text-black font-medium p-3 rounded-full cursor-pointer hover:bg-gray-100 mr-1'>
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

            {
                extendHeader
                ?
                <div className='col-span-2 w-full border rounded-full h-[66px] relative left-[-25%] col-start-2 grid grid-cols-3 overflow-hidden bg-gray-100'>
                    <div className={`px-8 py-3 w-full hover:bg-gray-200 rounded-full ${locationSearch ? 'bg-white hover:bg-white shadow-xl' : ''}`}>
                        <h3 onClick={ showDestinations } className='text-sm font-bold cursor-pointer'>Where</h3>
                        <input className='outline-none bg-transparent text-sm text-gray-500' type='text' value={ searchText } placeholder='Search destinations' onChange={ (e) => updateSearch(e.target.value) }/>
                        {/* <h3 className='text-sm text-gray-500'>Search destinations</h3> */}
                    </div>

                    <div className='flex flex-row justify-between'>
                        <div className='px-6 py-3 hover:bg-gray-200 rounded-full w-full'>
                            <h3 className='text-sm font-bold cursor-pointer'>Check in</h3>
                            <h3 className='text-sm text-gray-500'>Add dates</h3>
                        </div> 
                        <div className='px-6 py-3 hover:bg-gray-200 rounded-full w-full'>
                            <h3 className='text-sm font-bold cursor-pointer'>Check out</h3>
                            <h3 className='text-sm text-gray-500'>Add dates</h3>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 hover:bg-gray-200 rounded-full justify-items-end'>
                        <div className='px-6 py-3 '>
                            <h3 className='text-sm font-bold cursor-pointer'>Who</h3>
                            <h3 className='text-sm text-gray-500'>Add guests</h3>
                        </div>
                        
                        <div className='mt-2 mr-3'>
                            <div className='rounded-full max-w-[140px] h-12 flex flex-row justify-between items-center  bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-teal-400 via-teal-500 to-teal-600 p-4'>
                                <span><BiSearch className='text-white text-xl'/></span>
                                <h3 className='text-white text-xl'>Search</h3>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
            }

            {
                (locationSearch && searchText.length <= 0)
                ?
                <div className='col-span-2 w-full absolute top-40  z-50 left-[-25%] col-start-2 grid grid-cols-3'>
                    <div className='rounded-3xl bg-white px-8 pt-10 pb-12 flex flex-col col-span-2 max-w-lg border'>
                        <h3 className='text-sm font-bold pb-4'>Search by region</h3>

                        <div className='grid grid-cols-3 gap-y-4'>
                            {
                                regions.map((region, index) => {
                                    return (
                                        <div className='flex flex-col w-32 h-36' key={ index }>
                                            <img className='rounded-lg border w-full cursor-pointer transition-all hover:border-black' src={ region.image } alt={ region.name }/>
                                            <h3 className='font-extralight text-sm py-1'>{ region.name }</h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                :
                null
            }
            {
                searchText.length > 0
                ?
                <div className='absolute top-40 z-50 left-[-25%] col-start-2 pr-14 w-3/6'>
                    <div className='rounded-3xl bg-white px-5 pt-10 pb-12 flex flex-col max-w-lg border'>
                        {
                            listings.filter(listing => {
                                const { info: { location: { address, city, country } } } = listing 
                                const addressToFilter = address + city + country.title
    
                                return addressToFilter.toLowerCase().includes(searchText.toLowerCase()) 
                            })
                            .map(listing => listing.info.location.city + ', ' + listing.info.location.country.title)
                            .filter((value, index, array) => { 
                                return array.indexOf(value) === index;
                            })
                            .slice(0, 5)
                            .map((listing, index) => {
                                return (
                                    <div className='flex pl-3 cursor-pointer flex-row items-center hover:bg-gray-50' key={ index } onClick={ () => { updateSearch(listing) } }>
                                        <div className='p-3 mr-4 rounded-lg bg-gray-100 my-3'>
                                            <span><FiMapPin className='text-2xl'/></span>
                                        </div>
                                        <div>
                                            <h3>{ listing }</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                :
                null
            }
        </div>
     );
}
 
export default Header;