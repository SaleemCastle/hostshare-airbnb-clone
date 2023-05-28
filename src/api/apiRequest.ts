import { Airbnb } from '../Models/models'
import listings from './listings.json'

const getListings = (): Airbnb => {
    // @ts-ignore
    return listings
}

export default getListings
