import React, { ReactElement, useEffect, useState } from 'react';

import Filters from '../../components/Filters';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Listings from '../../components/Listings';
import MapButton from '../../components/MapButton';

import getListings from '../../api/apiRequest';

import { Airbnb } from '../../Models/models';

const Main = (): ReactElement => {

    const [payload, setPayload] = useState<Airbnb | null>(null)

    useEffect(() => {
        if (payload === null) {
            setPayload(getListings())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <> 

            <Header />

            {/* filter component */}

            <Filters categories={ !payload?.categories ? [] : payload.categories } />

            {/* Listings */}

            <Listings listings={ payload?.data }/>

            {/* Footer */}
            <div className='fixed grid grid-cols-3 bottom-20 w-full'>
                <div className='col-start-2 justify-self-center'>
                    <MapButton />
                </div>
            </div>

            {/* <div className='absolute right-0 top-0 left-0 w-full min-h-screen min-w-max h-screen bg-gray-500 bg-opacity-50 z-10'>
            </div>  */}
            <Footer />

        </>
    );
}
 
export default Main;