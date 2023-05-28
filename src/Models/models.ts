export interface Airbnb {
    source:     string;
    type:       string;
    categories: Category[];
    data:       AirbnbDatum[];
    count:      number;
}

export interface Category {
    id:    string;
    type:  string;
    title: string;
}

export interface AirbnbDatum {
    ref:       string;
    info:      Info;
    category?: string;
}

export interface Info {
    type:                 InfoType;
    images:               Images;
    details:              Details;
    description:          string;
    mainImage:            MainImage;
    maxGuestCapacity:     number;
    host?:                Host;
    amenities:            Amenities;
    title:                string;
    id:                   string;
    location:             Location;
    ratings:              Ratings;
    visibleReviewCount:   number;
    available:            boolean;
    price:                number;
    currency:             Currency;
    sleepingArrangements: SleepingArrangements;
}

export interface Amenities {
    type:  AmenitiesType;
    data:  AmenitiesDatum[];
    count: number;
}

export interface AmenitiesDatum {
    group:     Group;
    available: boolean;
    title:     string;
    type:      string;
}

export enum Group {
    Bathroom = "Bathroom",
    BedroomAndLaundry = "Bedroom and laundry",
    Entertainment = "Entertainment",
    Family = "Family",
    HeatingAndCooling = "Heating and cooling",
    HomeSafety = "Home safety",
    InternetAndOffice = "Internet and office",
    KitchenAndDining = "Kitchen and dining",
    LocationFeatures = "Location features",
    NotIncluded = "Not included",
    Outdoor = "Outdoor",
    ParkingAndFacilities = "Parking and facilities",
    PrivacyAndSafety = "Privacy and safety",
    ScenicViews = "Scenic views",
    Services = "Services",
}

export enum AmenitiesType {
    Amenitiy = "amenitiy",
}

export interface Currency {
    code:   CurrencyCode;
    symbol: Symbol;
    name:   Name;
}

export enum CurrencyCode {
    Usd = "USD",
}

export enum Name {
    UnitedStatesDollar = "United States Dollar",
}

export enum Symbol {
    Empty = "$",
}

export interface Details {
    type:  DetailsType;
    data:  DetailsDatum[];
    count: number;
}

export interface DetailsDatum {
    type:  PurpleType;
    value: number;
}

export enum PurpleType {
    Bath = "bath",
    Baths = "baths",
    Bed = "bed",
    Bedroom = "bedroom",
    Bedrooms = "bedrooms",
    Beds = "beds",
    Guests = "guests",
}

export enum DetailsType {
    Detail = "detail",
}

export interface Host {
    name:        string;
    avatar:      MainImage;
    isSuperhost: boolean;
}

export interface MainImage {
    url:         string;
    width:       number;
    height:      number;
    mimeType:    MIMEType;
    orientation: Orientation;
    aspectRatio: number;
    type:        MainImageType;
}

export enum MIMEType {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
}

export enum Orientation {
    Landscape = "landscape",
    Portrait = "portrait",
    Square = "square",
}

export enum MainImageType {
    Avatar = "avatar",
    Main = "main",
    Photo = "photo",
}

export interface Images {
    type:  ImagesType;
    data:  MainImage[];
    count: number;
}

export enum ImagesType {
    Image = "image",
}

export interface Location {
    lat:     number;
    long:    number;
    address: string;
    city:    string;
    country: Country;
    zip:     string;
}

export interface Country {
    code:  CountryCode;
    title: CountryTitle;
}

export enum CountryCode {
    Us = "US",
}

export enum CountryTitle {
    UnitedStates = "United States",
}

export interface Ratings {
    accuracy:                 number;
    checkin:                  number;
    cleanliness:              number;
    communication:            number;
    location:                 number;
    value:                    number;
    guestSatisfactionOverall: number;
}

export interface SleepingArrangements {
    type:  SleepingArrangementsType;
    data:  SleepingArrangementsDatum[];
    count: number;
}

export interface SleepingArrangementsDatum {
    title:    DatumTitle;
    subTitle: SubTitle;
    icons:    Icon[];
}

export enum Icon {
    SystemBedDouble = "SYSTEM_BED_DOUBLE",
    SystemBedKing = "SYSTEM_BED_KING",
    SystemBedQueen = "SYSTEM_BED_QUEEN",
    SystemBedSingle = "SYSTEM_BED_SINGLE",
    SystemSofabed = "SYSTEM_SOFABED",
}

export enum SubTitle {
    The1DoubleBed2SingleBeds = "1 double bed, 2 single beds",
    The1KingBed = "1 king bed",
    The1QueenBed = "1 queen bed",
    The1QueenBed1SofaBed = "1 queen bed, 1 sofa bed",
}

export enum DatumTitle {
    Bedroom = "Bedroom",
    Bedroom1 = "Bedroom 1",
    Bedroom2 = "Bedroom 2",
    Bedroom3 = "Bedroom 3",
}

export enum SleepingArrangementsType {
    SleepingArrangement = "sleeping-arrangement",
}

export enum InfoType {
    Home = "home",
}
