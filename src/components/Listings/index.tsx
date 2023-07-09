import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';

import { AirbnbDatum } from '../../Models/models';

import TotalPriceSwitcher from '../TotalPriceSwitcher';
import CardSkeleton from '../ListingsCard/ListingCardSkeleton';

interface IProps {
    listings: AirbnbDatum[] | undefined
}

const Listings = (props: IProps) => {
    const { listings } = props
    
    return ( 
        <div className='
            pl-20 
            pr-20 
            grid 
            grid-cols-4 
            mt-2 
            gap-5 
            3xl:grid-cols-6 
            max-sm:px-4
            max-sm:flex
            max-sm:flex-col
            max-[550px]:flex
            max-[550px]:grid-cols-2
        '
          style={{flexFlow: 'wrap'}}
        >

            <div className='col-span-4 gap-5 3xl:grid-cols-6 3xl:col-span-6 max-sm:grid-cols-none max-sm:gap-0 basis-full'>
                <TotalPriceSwitcher />
            </div>

            {
                listings
                ?
                listings.map((listing, index) => {
                    const Home = lazy(() => import('../ListingsCard/index'))
                    return (
                        <Suspense fallback={<CardSkeleton/>}>
                            <Link className='max-[650px]:basis-[47%] max-[440px]:basis-full' to={`/room/${listing.info.id}`}>
                                <Home key={ index } info={ listing.info }/>
                            </Link>
                        </Suspense>
                    )
                })
                :
                null
            }
            
        </div>
     );
}
 
export default Listings;