import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BsFillPersonFill, BsChevronDown, BsDoorOpen } from 'react-icons/bs';
import { GrApps } from 'react-icons/gr'
import { FiMapPin } from 'react-icons/fi'
import { IoShareOutline } from 'react-icons/io5';

import getListings from '../../api/apiRequest';

import { ReactComponent as Superhost } from '../../assets/superhost.svg';
import { MainImage } from '../../Models/models';

const Room = () => {
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

    const firstFourImages =  getFirstFourImages(listing ? listing?.images.data : [] as MainImage[])

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
                    <span className='pr-2'><BsFillPersonFill className='rotate-180 scale-x-50 mt-1'/></span>
                    <span className='px-2 text-gray-500 font-extralight'>Superhost</span>
                    <span className='px-2 font-thin text-gray-300'>.</span>
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

                <div className='bg-white border border-black rounded-md px-4 py-1 absolute bottom-6 right-6 flex flex-row justify-center'>
                    <span className='mt-1 pr-1'><GrApps /></span>
                    <h3 className='pl-1'>Show all photos</h3>
                </div>

                <div className='max-h-96 rounded-l-xl overflow-hidden'>
                    <img className='' src={ listing?.mainImage.url } alt="main" />
                </div>
                <div className='grid grid-cols-2 gap-3 max-h-96 overflow-hidden rounded-r-xl'>
                    {
                        firstFourImages.map((image, index) => {
                            return (
                                <div className='max-h-[100%] overflow-hidden' key={ index }>
                                    <img className='w-full max-w-full max-h-full object-cover bg-center' src={ image.url } alt={ image.type } key={ index }/>
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
                                    listing.details.data.map((detail, index) => {
                                        return (
                                            <div key={ index }>
                                                <span className='font-extralight text-gray-600'>{ `${detail.value} ${detail.type}` }</span>
                                                <span className='mx-1 font-light'> . </span>
                                            </div>
                                        )
                                    })
                                    : 
                                    null
                                }
                                
                            </div>
                        </div>

                        <div className='w-14 h-14 rounded-full overflow-hidden'>
                            <img src={`${listing?.host?.avatar.url}`} alt={ listing?.host?.name } />
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

                    <div className='flex flex-row border-b py-6 flex-1'>
                        {
                            listing
                            ?
                            <p className='text-[15px] text-gray-500'>{ listing.description.length > 500 ? listing.description.substring(0,500).concat('...') : listing.description }</p>
                            :
                            null
                        }
                    </div>
                    
                </div>


                {/*checkout summary */}

                <div className='rounded-xl shadow-2xl p-6 mt-12 ml-[8.33%] min-w-[350px] border max-h-[270px]'>
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

                        <div className='bg-teal-600 rounded-lg w-full py-3 px-6 text-center'>
                            <span className='font-semibold text-white'>Check availablity</span>
                        </div>

                        {/* <div className='w-full text-center'>
                            <span className='font-light'>You won't be charged yet</span>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Room;