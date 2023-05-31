import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx';
import { TbWorld } from 'react-icons/tb';

import SearchBar from '../SearchBar';

import { ReactComponent as PlusMinus } from '../../assets/plusminus.svg'

import logo from '../../assets/hostshare-green.png'
import getListings from '../../api/apiRequest';
import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import useComponentVisible from '../../hooks';

interface IProps {
    extraPadding?: boolean
    lessPadding?: boolean
}

const Header = (props: IProps) => {

    const [extendHeader, toggleExtendHeader] = useState(false)
    const [locationSearch, activateLocationSearch] = useState(false)
    const [dateSelector, showDateSelector] = useState(false)
    const [guestSelector, showGuestSelector] = useState(false)
    const [checkIn, showCheckIn] = useState(false)
    const [checkOut, showCheckOut] = useState(false)
    const [searchText, updateSearch] = useState('')
    let [adultCount, setAdultCount] = useState(0)
    let [childCount, setChildCount] = useState(0)
    let [infantCount, setInfantCount] = useState(0)
    let [petCount, setPetCount] = useState(0)

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)

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
        setIsComponentVisible(true)
        activateLocationSearch(false)
        showCheckIn(false)
        showCheckOut(false)
        showGuestSelector(false)
        showDateSelector(false)
    }

    const showDestinations = () => {
        activateLocationSearch(true)
        showDateSelector(false)
        showCheckIn(false)
        showCheckOut(false)
        showGuestSelector(false)
    }

    const showCheckinDate = () => {
        showDateSelector(true)
        showCheckIn(true)
        showCheckOut(false)
        activateLocationSearch(false)
        showGuestSelector(false)
    }

    const showCheckOutDate = () => {
        showDateSelector(true)
        showCheckIn(false)
        showCheckOut(true)
        activateLocationSearch(false)
        showGuestSelector(false)
    }
    
    const selectLocation = (location: string) => {
        updateSearch(location)
        showDateSelector(true)
        activateLocationSearch(false)
        setIsComponentVisible(true)
    }

    const chooseGuest = () => {
        showDateSelector(false)
        showCheckIn(false)
        showCheckOut(false)
        showGuestSelector(true)
        activateLocationSearch(false)

    }
    
    return ( 
        <div className={`py-3 sticky top-0 w-full bg-white z-50 grid-cols-3 grid items-center justify-around border-b justify-self-center transition-all duration-300 ${extendHeader ? 'pb-4' : 'pb-3'} max-sm:grid-cols-none`}>
            {/* Logo */}
            <Link to={'/'} className='max-sm:hidden'>
                <div className={`${props.extraPadding ? 'pl-36' : props.lessPadding ? 'pl-4' : 'pl-20'}`}>
                    <img src={ logo } alt='logo' style={{ height: 35 }} />
                </div>
            </Link>

            <SearchBar onClick={ onClickSearchBar } searching={ extendHeader && isComponentVisible } minimized={ props.extraPadding === true }/> 

            {/* menu bar */}
            <div className={`place-self-end self-center flex flex-row items-center ${props.extraPadding ? 'mr-36' : props.lessPadding ? 'mr-4' : 'mr-20' } max-sm:hidden`}>
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
                extendHeader && isComponentVisible
                ?
                <div ref={ ref } className='col-span-2 w-full border rounded-full h-[66px] relative left-[-25%] col-start-2 grid grid-cols-3 overflow-hidden bg-gray-100'>
                    <div className={`px-8 py-3 w-full hover:bg-gray-200 rounded-full ${locationSearch ? 'bg-white hover:bg-white shadow-xl' : ''}`}>
                        <h3 onClick={ showDestinations } className='text-sm font-bold cursor-pointer'>Where</h3>
                        <input className='outline-none bg-transparent text-sm text-gray-500' type='text' value={ searchText } placeholder='Search destinations' onChange={ (e) => updateSearch(e.target.value) }/>
                    </div>

                    <div className='flex flex-row justify-between'>
                        <div onClick={ showCheckinDate } className={`px-6 py-3 hover:bg-gray-200 rounded-full w-full ${checkIn ? 'bg-white hover:bg-white shadow-xl' : ''}`}>
                            <h3 className='text-sm font-bold cursor-pointer'>Check in</h3>
                            <h3 className='text-sm text-gray-500'>Add dates</h3>
                        </div> 
                        <div onClick={ showCheckOutDate } className={`px-6 py-3 hover:bg-gray-200 rounded-full w-full ${checkOut ? 'bg-white hover:bg-white shadow-xl' : ''}`}>
                            <h3 className='text-sm font-bold cursor-pointer'>Check out</h3>
                            <h3 className='text-sm text-gray-500'>Add dates</h3>
                        </div>
                    </div>

                    <div className={`grid grid-cols-2 hover:bg-gray-200 rounded-full justify-items-end ${guestSelector ? 'bg-white hover:bg-white shadow-xl' : ''}`}>
                        <div className='px-6 py-3 justify-self-start'>
                            <h3 onClick={ chooseGuest } className='text-sm font-bold cursor-pointer'>Who</h3>
                            <h3 className='text-sm text-gray-500'>{ (childCount + adultCount + infantCount + petCount) > 0 ? (childCount + adultCount + infantCount + petCount) > 1 ? `${(childCount + adultCount + infantCount + petCount)} guests` : '1 guest' : 'Add guests' }</h3>
                        </div>
                        
                        <Link to={`/s/${ searchText === '' ? 'united, states' : searchText }`} state={ searchText }>
                            <div className='mt-2 mr-3'>
                                <div className='rounded-full max-w-[140px] h-12 flex flex-row justify-between items-center  bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-teal-400 via-teal-500 to-teal-600 p-4'>
                                    <span><BiSearch className='text-white text-xl'/></span>
                                    <h3 className='text-white text-xl'>Search</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                :
                null
            }

            {
                (locationSearch && searchText.length <= 0 && !dateSelector && isComponentVisible)
                ?
                <div ref={ ref } className='col-span-2 w-full absolute top-40  z-50 left-[-25%] col-start-2 grid grid-cols-3'>
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
                (guestSelector && !dateSelector && !locationSearch && isComponentVisible)
                ?
                <div ref={ ref } className='col-span-2 w-full absolute top-40  z-50 left-[25%] col-start-2 grid grid-cols-3'>
                    <div className='rounded-3xl bg-white px-8 pt-10 pb-12 flex flex-col col-span-2 max-w-lg border'>
                        <div className='flex flex-row justify-between pb-5 border-b '>
                            <div>
                                <h3>Adults</h3>
                                <h3 className='text-gray-300'>Ages 13 and above</h3>
                            </div>

                            <div className='flex flex-row items-center justify-center'>
                                <div onClick={ () => adultCount < 1 ? setAdultCount(0) : setAdultCount(adultCount - 1) } className={`w-9 h-9 flex justify-center items-center rounded-full border ${ adultCount > 0 ? 'cursor-pointer' : 'cursor-not-allowed'} ${adultCount > 0 ? 'border-black' : ''}`}>
                                    <span className={`${adultCount < 1 ? 'text-gray-200' : 'text-black'}`}><AiOutlineMinus/></span>
                                </div>
                                <span className='px-5 tabular-nums font-sans'>{ adultCount }</span>
                                <div onClick={ () => setAdultCount(adultCount + 1) } className='w-9 h-9 flex justify-center items-center rounded-full border border-black cursor-pointer'>
                                    <span><AiOutlinePlus/></span>
                                </div>
                            </div>
                       </div>

                        <div className='flex flex-row justify-between pb-5 border-b pt-4'>
                            <div>
                                <h3>Children</h3>
                                <h3 className='text-gray-300'>Ages 2-12</h3>
                            </div>

                            <div className='flex flex-row items-center justify-center'>
                                <div onClick={ () => childCount < 1 ? setChildCount(0) : setChildCount(childCount - 1) } className={`w-9 h-9 flex justify-center items-center rounded-full border ${ childCount > 0 ? 'cursor-pointer' : 'cursor-not-allowed'} ${childCount > 0 ? 'border-black' : ''}`}>
                                    <span className={`${childCount < 1 ? 'text-gray-200' : 'text-black'}`}><AiOutlineMinus/></span>
                                </div>
                                <span className='px-5 tabular-nums font-sans'>{ childCount }</span>
                                <div onClick={ () => setChildCount(childCount + 1) }className='w-9 h-9 flex justify-center items-center rounded-full border border-black cursor-pointer'>
                                    <span><AiOutlinePlus/></span>
                                </div>
                            </div>
                       </div>

                        <div className='flex flex-row justify-between pb-5 border-b pt-4'>
                            <div>
                                <h3>Infants</h3>
                                <h3 className='text-gray-300'>Under 2</h3>
                            </div>

                            <div className='flex flex-row items-center justify-center'>
                                <div onClick={ () => infantCount < 1 ? setInfantCount(0) : setInfantCount(infantCount - 1) } className={`w-9 h-9 flex justify-center items-center rounded-full border ${ infantCount > 0 ? 'cursor-pointer' : 'cursor-not-allowed'} ${infantCount > 0 ? 'border-black' : ''} `}>
                                    <span className={`${infantCount < 1 ? 'text-gray-200' : 'text-black'}`}><AiOutlineMinus/></span>
                                </div>
                                <span className='px-5 tabular-nums font-sans'>{ infantCount }</span>
                                <div onClick={ () => setInfantCount(infantCount + 1) } className='w-9 h-9 flex justify-center items-center rounded-full border border-black cursor-pointer'>
                                    <span><AiOutlinePlus/></span>
                                </div>
                            </div>
                       </div>

                        <div className='flex flex-row justify-between pb-5 border-b pt-4'>
                            <div>
                                <h3>Pets</h3>
                                <h3 className='text-gray-300'>Bringing a service animal?</h3>
                            </div>

                            <div className='flex flex-row items-center justify-center'>
                                <div onClick={ () => petCount < 1 ? setPetCount(0) : setPetCount(petCount - 1) } className={`w-9 h-9 flex justify-center items-center rounded-full border ${ petCount > 0 ? 'cursor-pointer' : 'cursor-not-allowed'} ${petCount > 0 ? 'border-black' : ''}`}>
                                    <span className={`${petCount < 1 ? 'text-gray-200' : 'text-black'}`}><AiOutlineMinus/></span>
                                </div>
                                <span className='px-5 tabular-nums font-sans'>{ petCount }</span>
                                <div onClick={ () => setPetCount(petCount + 1) } className='w-9 h-9 flex justify-center items-center rounded-full border border-black cursor-pointer'>
                                    <span><AiOutlinePlus/></span>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                :
                null
            }
            {
                (searchText.length > 0 && !dateSelector && isComponentVisible)
                ?
                <div ref={ ref } className='absolute top-40 z-50 left-[-25%] col-start-2 pr-14 w-3/6'>
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
                                    <div className='flex pl-3 cursor-pointer flex-row items-center hover:bg-gray-50' key={ index } onClick={ () => selectLocation(listing)  }>
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
            {
                (dateSelector && !locationSearch && isComponentVisible)
                ?
                <div ref={ ref } className='col-span-2 w-full border rounded-[28px] absolute top-[174px] z-50 left-[-25%] col-start-2 overflow-hidden bg-white px-8 py-4'>
                    <div className='flex flex-row flex-grow justify-center w-full mt-4'>
                        <div className='flex flex-row bg-gray-200 p-1 rounded-full'>
                            <div className='px-12 py-3 text-sm rounded-full bg-white'>
                                <span className='font-semibold'>Choose dates</span>
                            </div>
                            <div className='px-12 py-3 text-sm rounded-full hover:bg-white'>
                                <span className='font-semibold'>Flexible dates</span>
                            </div>
                        </div>
                    </div>

                    {/* Calendar */}

                    <div className='flex flex-row h-80 justify-between px-4 w-full rounded-lg my-6'>
                        <div className='p-3 grid grid-cols-7 gap-3'>
                            <div className='col-span-7 items-center'>
                                <h3 className='text-center'>May 2023</h3>
                            </div>
                            {
                                ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => <div className='flex justify-center'> <h3 className='text-xs text-gray-500 font-semibold'>{ day }</h3></div>)
                            }
                           
                            {
                                [...Array(31)].map((e, i) => <span className='p-2 flex items-center justify-center rounded-full' key={i}>{ i }</span>)
                            }
                        </div>

                        <div className='p-3 grid grid-cols-7 gap-3'>
                            <div className='col-span-7 items-center'>
                                <h3 className='text-center'>June 2023</h3>
                            </div>
                            {
                                ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => <div className='flex justify-center'> <h3 className='text-xs text-gray-500 font-semibold'>{ day }</h3></div>)
                            }
                           
                            {
                                [...Array(31)].map((e, i) => <span className='p-2 flex items-center justify-center' key={i}>{ i }</span>)
                            }
                        </div>
                    </div>

                    <div className='flex flex-row'>
                        <div className='rounded-full border-2 bg-gray-50 px-4 py-[2px] mr-4 hover:border-black border-black'>
                            <span className='text-xs'>Exact dates</span>
                        </div>

                        <div className='rounded-full border flex flex-row place-items-center px-4 py-[2px] mr-4 hover:border-black'>
                            <span> <PlusMinus /> </span> <span className='text-xs'> 1 day</span>
                        </div>

                        <div className='rounded-full border flex flex-row place-items-center px-4 py-[2px] mr-4 hover:border-black'>
                            <span> <PlusMinus /> </span> <span className='text-xs'> 3 days</span>
                        </div>

                        <div className='rounded-full border flex flex-row place-items-center px-4 py-[2px] mr-4 hover:border-black'>
                            <span> <PlusMinus /> </span> <span className='text-xs'> 5 days</span>
                        </div>

                        <div className='rounded-full border flex flex-row place-items-center px-4 py-[2px] mr-4 hover:border-black'>
                            <span> <PlusMinus /> </span> <span className='text-xs'> 7 days</span>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </div>
     );
}
 
export default Header;