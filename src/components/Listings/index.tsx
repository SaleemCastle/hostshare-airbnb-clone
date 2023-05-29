import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';

import { AirbnbDatum } from '../../Models/models';

import TotalPriceSwitcher from '../TotalPriceSwitcher';

interface IProps {
    listings: AirbnbDatum[] | undefined
}

const Listings = (props: IProps) => {
    const { listings } = props
    return ( 
        <div className='max-w-full pl-20 pr-20 grid grid-flow-row-dense auto-rows-[minmax(min-content,max-content)] grid-cols-4 mt-2 gap-5 3xl:grid-cols-6'>

            <div className='col-span-4 gap-5 3xl:grid-cols-6 3xl:col-span-6'>
                <TotalPriceSwitcher />
            </div>

            {
                listings
                ?
                listings.map((listing, index) => {
                    const Home = lazy(() => import('../ListingsCard/index'))
                    return (
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Link to={`/room/${listing.info.id}`}>
                                <Home key={ index } info={ listing.info }/>
                            </Link>
                        </Suspense>
                    )
                })
                :
                <h1>NO DATA</h1>
            }
            
        </div>
     );
}
 
export default Listings;