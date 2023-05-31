import React, { Suspense, lazy } from 'react';
import { Link, useParams } from 'react-router-dom';
import GoogleMapReact from 'google-map-react'

import getListings from '../../api/apiRequest';

import Header from '../../components/Header';
import Filters from '../../components/Filters';
import TotalPriceSwitcher from '../../components/TotalPriceSwitcher';

const SearchResults = () => {
    let { searchParam } = useParams();
    const listings = getListings().data.filter(listing => {
        const wordArray = searchParam?.split(' ')
        const first = wordArray ? wordArray[0].substring(0, wordArray[0].length - 1) : ''
        const queryVal = listing.info.location.city + listing.info.location.address + listing.info.location.country.title

        return queryVal.toLowerCase().includes(first.toLowerCase())
    })
    return (  
        <div>
            <Header lessPadding/>
            
            <Filters categories={ getListings().categories } searchResultsPage/>

            <div className='flex flex-row pl-4'>
                <div className='flex-[2] mr-6'>
                    <div className='py-5'>
                        <h3 className='font-semibold'>{`${listings.length} places in ${searchParam}`}</h3>
                    </div>
                    <TotalPriceSwitcher left/>

                    <div className='grid grid-cols-3 py-5 gap-5'>
                        {
                            listings
                            ?
                            listings.map((listing, index) => {
                                const Home = lazy(() => import('../../components/ListingsCard/index'))
                                return (
                                    <Suspense fallback={<h1>Loading...</h1>} key={ index }>
                                        <Link to={`/room/${listing.info.id}`} key={ index }>
                                            <Home key={ index } info={ listing.info }/>
                                        </Link>
                                    </Suspense>
                                )
                            })
                            :
                            <h1>NO DATA</h1>
                        }
                    </div>
                </div>
                <div className='flex-[1] bg-[#b3e6f4] h-[530px] sticky top-44'>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyChsyNQMNcQXFJh3ghzdltB4HTKE7OsdsI" }}
                        defaultCenter={ { lat: listings[0].info.location.lat, lng: listings[0].info.location.long } }
                        defaultZoom={ 10 }
                        yesIWantToUseGoogleMapApiInternals
                    >
                        <MapMarker 
                            currency={ listings ? listings[0].info.currency.code : '' } 
                            price={ listings ? listings[0].info.price : 0 }
                            lat={ listings ? listings[0].info.location.lat : 0 }
                            lng={ listings ? listings[0].info.location.long : 0 }
                        />
                    </GoogleMapReact>
                </div>
            </div>

        </div>
    );
}

interface IMapMarkerProps {
    currency: string
    price: number
    lat: number
    lng: number
}
const MapMarker = (props: IMapMarkerProps) => {
    return (  
        <div className='px-10 py-1 rounded-full shadow-md border flex flex-row bg-white items-center justify-center hover:scale-110'>
            <h3 className='text-sm font-bold'>{ `$${props.price}` }</h3>
            <h3 className='text-sm font-bold pl-2'>{ props.currency }</h3>
        </div>    
    )
}

 
export default SearchResults;