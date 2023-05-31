import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import { AiFillCar, AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BsChevronDown, BsDoorOpen, BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { GrApps, GrWifi } from 'react-icons/gr'
import { FiMapPin } from 'react-icons/fi'
import { IoShareOutline } from 'react-icons/io5';
import { SlPicture } from 'react-icons/sl'
import { TbToolsKitchen } from 'react-icons/tb'
import { FaPaw } from 'react-icons/fa'
import { Modal, Ripple, initTE } from "tw-elements";


import getListings from '../../api/apiRequest';

import { ReactComponent as Superhost } from '../../assets/superhost.svg';
import { ReactComponent as SuperhostProfile } from '../../assets/superhost-green.svg';
import { MainImage } from '../../Models/models';
import { useEffect } from 'react';


const Room = () => {
    useEffect(() => {
        initTE({ Modal, Ripple });
    })
    let { id } = useParams();
    const listing = getListings().data.find(listing => listing.info.id === id)?.info

    const getFirstFourImages = (images: MainImage[]) => {
        const imageSet: MainImage[] = []
        for (let index = 3; index < 7; index++) {
            const element = images[index];
            imageSet.push(element)
        }

        return imageSet
    }

    const firstFourImages = getFirstFourImages(listing ? listing?.images.data : [] as MainImage[])

    return (  
        <div className=''>
            <Header extraPadding/>

            <div className='mb-1 ml-36 pt-6'>
                <h1 className='text-3xl'>{ listing?.title }</h1>
            </div>

            <div className='flex flex-row justify-between mx-36'>
                <div className='flex flex-row'>
                    <span className='mt-1 font-medium pr-1'>
                        <AiFillStar />
                    </span>
                    <span className='font-medium'>{ listing?.ratings.guestSatisfactionOverall }</span>
                    <span className='px-2 flex -mt-1'>.</span>
                    <p className='underline'>{ `${listing?.visibleReviewCount} reviews` }</p>
                    <span className='px-2 font-thin text-gray-300'>.</span>
                    {
                        listing
                        ?
                        listing.host?.isSuperhost
                        ?
                        <span className='flex flex-row'>
                            <span className=''><Superhost className='mt-1'/></span>
                            <span className='px-2 text-gray-500 font-extralight'>Superhost</span>
                            <span className='px-2 font-thin text-gray-300'>.</span>
                        </span>
                        :
                        null
                        :
                        null
                    }
                    <span className='pl-2 underline'>{ listing?.location.city }</span>,
                    <span className=' underline'>{ listing?.location.country.title }</span>
                </div>

                <div className='flex flex-row'>
                    <div className='rounded-md p-[2px] flex flex-row hover:bg-gray-200 cursor-pointer pr-1'>
                        <IoShareOutline className='mt-[3px]'/>
                        <h3 className='px-[6px] underline'>Share</h3>
                    </div>

                    <div className='rounded-md p-[2px] flex flex-row hover:bg-gray-200 cursor-pointer pl-1'>
                        <AiOutlineHeart className='mt-[3px]'/>
                        <h3 className='px-[6px] underline'>Save</h3>
                    </div>
                </div>
            </div>

            {/* Images */}
            <div className='grid grid-cols-2 mt-6 mx-36 gap-x-3 relative'>

                <div className='bg-white cursor-pointer border border-black rounded-md px-4 py-1 absolute bottom-6 right-6 flex flex-row justify-center'>
                    <span className='mt-1 pr-1'
                        data-te-toggle="modal"
                        data-te-target="#gallery"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    ><GrApps /></span>
                    <h3 className='pl-1'>Show all photos</h3>
                </div>

                <div className='max-h-96 rounded-l-xl overflow-hidden'>
                    <img className='' src={ listing?.mainImage.url } alt="main" loading='lazy'/>
                </div>
                <div className='grid grid-cols-2 gap-3 max-h-96 overflow-hidden rounded-r-xl'>
                    {
                        firstFourImages.map((image, index) => {
                            return (
                                <div className='max-h-[100%] overflow-hidden' key={ index }>
                                    <img loading='lazy' className='w-full max-w-full max-h-full object-cover bg-center' src={ image.url } alt={ image.type } key={ index }/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Descriptive Area */}

            <div className='flex flex-row mx-36'>
                <div className='pt-12 pb-6 max-w-4xl flex-grow'>
                    <div className='flex flex-row justify-between border-b pb-6'>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-semibold'>{`Entire home hosted by ${ listing?.host?.name }`}</h2>
                            <div className='flex flex-row'>
                                {
                                    listing 
                                    ?
                                    listing.details.data.map((detail, index, array) => {
                                        return (
                                            <div key={ index }>
                                                <span className='font-extralight text-gray-600'>{ `${detail.value} ${detail.type}` }</span>
                                                <span className='mx-1 font-light align-text-bottom'> { index === array.length -1 ? '' : '.'}</span>
                                            </div>
                                        )
                                    })
                                    : 
                                    null
                                }
                                
                            </div>
                        </div>

                        <div className='w-14 h-14 relative'>
                            <div className='w-14 h-14 rounded-full overflow-hidden'>
                                <img src={`${listing?.host?.avatar.url}`} alt={ listing?.host?.name } />
                            </div>
                            {
                                listing
                                ?
                                listing.host?.isSuperhost
                                ?
                                <SuperhostProfile className='bottom-0 absolute -right-2'/>
                                :
                                null
                                :
                                null
                            }
                        </div>

                    </div>

                    <div className='flex flex-row border-b py-6 flex-1'>
                        <div className='flex flex-col'>
                            {
                                listing
                                ?
                                listing.host?.isSuperhost
                                ?
                                <div className='flex flex-row w-full pb-6'>
                                    <div className='mr-4'><Superhost className='text-2xl'/></div>
                                    <div>
                                        <h3 className='font-semibold text-sm'>{`${listing.host.name} is a Superhost`}</h3>
                                        <h3 className='text-gray-400 font-thin text-sm'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</h3>
                                    </div>
                                </div>
                                :
                                null
                                :
                                null
                            }

                            <div className='flex flex-row w-full pb-6'>
                                <div className='mr-4'><BsDoorOpen className='text-2xl'/></div>
                                <div>
                                    <h3 className='font-semibold text-sm'>Self check-in</h3>
                                    <h3 className='text-gray-400 font-thin text-sm'>Check yourself in with the keypad.</h3>
                                </div>
                            </div>
                            
                            {
                                listing
                                ?
                                listing?.ratings.location > 4.75
                                ?
                                <div className='flex flex-row w-full'>
                                    <div className='mr-4'><FiMapPin className='text-2xl'/></div>
                                    <div>
                                        <h3 className='font-semibold text-sm'>Great location</h3>
                                        <h3 className='text-gray-400 font-thin text-sm'>95% of recent guests gave the location.</h3>
                                    </div>
                                </div>
                                :
                                null
                                :
                                null
                            }

                            <div className='w-full'></div>
                        </div>
                    </div>

                    <div className='flex flex-col border-b py-6 flex-1'>
                        {
                            listing
                            ?
                            <p className='text-[15px] text-gray-500'>{ listing.description.length > 500 ? listing.description.substring(0,500).concat('...') : listing.description }</p>
                            :
                            null
                        }
                        {
                            listing
                            ?
                            listing.description.length > 500
                            ?    
                            <div 
                                className='pt-6 flex flex-row cursor-pointer'
                                data-te-toggle="modal"
                                data-te-target="#description"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                <h3 className='underline'>Show more</h3> 
                                <span className='pl-1 mt-1'><BsChevronRight /> </span>
                            </div>
                            :
                            null
                            :
                            null
                        }
                    </div>

                    <div className='flex flex-col border-b py-6'>
                        <h1 className='text-2xl font-semibold'>What this place offers</h1>
                        <div className='pt-4 flex flex-row'>
                            <div className='py-1 flex flex-row flex-[1]'>
                                <span className='pr-4 text-lg mt-1'><SlPicture/></span> <h3 className='text-lg'>River view</h3> 
                            </div>
                            
                            <div className='py-1 flex flex-row flex-[1]'>
                                <span className='pr-4 text-lg mt-1'><SlPicture/></span> <h3 className='text-lg'>Waterfront</h3> 
                            </div>
                        </div>

                        <div className='pt-1 flex flex-row'>
                            <div className='py-1 flex flex-row flex-[1]'>
                                <span className='pr-4 text-lg mt-1'><TbToolsKitchen/></span> <h3 className='text-lg'>Kitchen</h3> 
                            </div>
                            
                            <div className='py-1 flex flex-row flex-[1]'>
                                <span className='pr-4 text-lg mt-1'><GrWifi/></span> <h3 className='text-lg'>Wifi</h3> 
                            </div>
                        </div>

                        <div className='pt-1 flex flex-row'>
                            <div className='py-1 flex flex-row flex-[1]'>
                                <span className='pr-4 text-lg mt-1'><AiFillCar/></span> <h3 className='text-lg'>Free parking on premises</h3> 
                            </div>
                            
                            <div className='py-1 flex flex-row flex-[1]'>
                                <span className='pr-4 text-lg mt-1'><FaPaw/></span> <h3 className='text-lg'>Pets allowed</h3> 
                            </div>
                        </div>
                        
                        <div className='rounded-lg border border-black py-2 px-4 max-w-[190px] flex flex-row mt-4'>
                            <h3>{`Show all ${ listing?.amenities.count ?? 0 } amenities`}</h3>
                        </div>
                    </div>

                    
                </div>


                {/*checkout summary */}
                <div>

                    <div className='rounded-xl shadow-2xl p-6 mt-12 ml-[8.33%] min-w-[350px] border max-h-[270px] sticky top-24'>
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-row justify-between mb-6'>
                                <div className='pr-3'>
                                    <h2 className='font-semibold'>{ `${listing?.currency.symbol}${listing?.price} ${listing?.currency.code}` } <span className='font-normal'>{'night'}</span></h2>
                                </div>

                                <div className='pl-3 flex flex-row'>
                                    <div className='flex flex-row'>
                                        <span className='mt-1 font-medium pr-1'>
                                            <AiFillStar />
                                        </span>
                                        <span className='font-medium'>{ listing?.ratings.guestSatisfactionOverall }</span>
                                    </div>
                                    <h3 className='pl-5 text-gray-400 underline'>{ `${listing?.visibleReviewCount} reviews` }</h3>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 mb-4 border rounded-lg pb-3 border-gray-400'>
                                <div className='px-3 py-[10px] border-r border-gray-400'>
                                    <h3 className='text-xs font-semibold'>CHECK-IN</h3>
                                    <h3 className='text-xs text-gray-400'>Add date</h3>
                                </div>

                                <div className='px-3 py-[10px]'>
                                    <h3 className='text-xs font-semibold'>CHECKOUT</h3>
                                    <h3 className='text-xs text-gray-400'>Add date</h3>
                                </div>

                                <div className='col-span-2 flex flex-row justify-between items-center border-t pt-3 border-gray-400'>
                                    <div className='px-3'>
                                        <h3 className='text-xs font-semibold'>GUESTS</h3>
                                        <h3 className='text-xs text-gray-400'>1 guest</h3>
                                    </div>

                                    <span className="mb-[2px] pr-3"><BsChevronDown /></span>
                                </div>
                            </div>

                            <div className='bg-teal-600 rounded-lg w-full py-3 px-6 text-center cursor-pointer'>
                                <span className='font-semibold text-white'>Check availablity</span>
                            </div>

                            {/* <div className='w-full text-center'>
                                <span className='font-light'>You won't be charged yet</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

                {/* Description Modal */}

                <div
                    data-te-modal-init
                    className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-gray-500 bg-opacity-40"
                    id="description"
                    tabIndex={ -1 }
                    aria-labelledby="description"
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        data-te-modal-dialog-ref
                        className="pointer-events-none relative flex w-auto items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[800px]"
                    >
                        <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-opacity-100 p-4 dark:border-opacity-50">
                            
                            
                                <button
                                    type="button"
                                    className="box-content rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-100 border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                    data-te-modal-dismiss
                                    aria-label="Close"
                                >

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18L18 6M6 6l12 12" 
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className='overflow-y-scroll h-[600px]'>

                                <div className='p-4'>
                                    <h1 className='text-3xl font-medium'>About this space</h1>
                                </div>
                    
                                <div className="relative p-4">
                                    {
                                        listing
                                        ?
                                        listing?.description.split('**').map((paragraph, index) => {
                                            if ( index === 0 )  return  <p>{paragraph}</p>

                                            if (index % 2 === 0){
                                                return  <p className='font-thin'>{paragraph}</p>
                                            }

                                            return <h3 className='text-xl font-semibold py-2'>{ paragraph }</h3>
                                        })
                                        :
                                        <p>''</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Gallery Modal */}

                <div
                    data-te-modal-init
                    className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                    id="gallery"
                    tabIndex={ -1 }
                    aria-labelledby="gallery"
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        data-te-modal-dialog-ref
                        className="pointer-events-none relative flex w-auto items-center opacity-0 transition-all duration-300 ease-in-out min-[0px]:m-0 min-[0px]:h-full min-[0px]:max-w-none"
                    >
                        <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 min-h-full">
                        <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-opacity-100 p-4 dark:border-opacity-50">
                        
                        
                            <button
                                type="button"
                                className="box-content rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-100 transition-all border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close"
                            >
                                <BsChevronLeft />
                            </button>
                        </div>

                        <div className='overflow-y-scroll h-[600px] px-40 gap-5 grid-cols-2 grid'>

                            {
                                listing
                                ?
                                listing.images.data.map(image => {
                                    return (
                                        <div>
                                            <img src={ image.url } alt={ image.mimeType } loading='lazy' />
                                        </div>
                                    )
                                })
                                :
                                null
                            }
                            
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Room;