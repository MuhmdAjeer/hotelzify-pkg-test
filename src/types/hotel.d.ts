export interface HotelAPIResponse {
  id: number;
  userId: number;
  name: string;
  hotelTypeId: number;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  pinCode: string;
  address: string;
  acceptanceRate: number;
  dialCode: string;
  mobile: string;
  email: string;
  websiteSlug: string;
  googleReviewsLink: null;
  status: string;
  description: string;
  googlePlaceId: string;
  logo: string;
  isActive: number;
  ghcEnabled: number;
  isTestProperty: number;
  googleRating: number;
  whatsappDial: null;
  whatsappNumber: null;
  themeId: number;
  defaultDomain: string;
  domain: null;
  domainValid: null;
  currency: string;
  autoAccept: number;
  gstin: string;
  hotelIdentifier: string;
  totalReview: null;
  syncedGoogleMyBusinessDt: null;
  isLive: number;
  isAgreed: number;
  isTaxIncluded: boolean;
  minBookingNights: number;
  chainId: number;
  chainName: string;
  scrapedDt: null;
  otaUpdatedDt: Date;
  isCallEnabled: boolean;
  createdDt: Date;
  createdBy: null;
  modifiedDt: Date;
  modifiedBy: number;
  hotel_type_id: number;
  HotelType: Type;
  HotelAddons: any[];
  HotelAmenities: HotelAmenity[];
  HotelImages: Image[];
  HotelRooms: HotelRoom[];
  Socials: any[];
}

export interface HotelAmenity {
  id: number;
  hotelId?: number;
  amenitiesId: number;
  syncedGoogleMyBusinessDt: null;
  createdDt: Date;
  createdBy: number | null;
  modifiedDt: Date;
  modifiedBy: null;
  isActive: number;
  hotel_id?: number;
  amenities_id: number;
  Amenity: Amenity;
  hotelRoomId?: number;
  hotel_room_id?: number;
}

export interface Amenity {
  id: number;
  name: string;
  type: Tag;
  icon: string;
  category: Tag;
  googleAmenity: null | string;
  cdnImageUrl: string;
  createdDt: Date;
  createdBy: null;
  modifiedDt: Date;
  modifiedBy: null;
  isActive: number;
  Transalations: Transalation[];
}

export interface Transalation {
  name: string;
}

export enum Tag {
  BedType = "bed_type",
  Hotel = "hotel",
  Room = "room",
}

export interface Image {
  id: number;
  hotelId?: number;
  imageUrl: string;
  cdnImageUrl: string;
  index: number;
  type: TypeEnum;
  tag: Tag;
  metaTags: null;
  googleMyBusinessImageId: null;
  googleMyBusinessLocationId: null;
  syncedGoogleMyBusinessDt: null;
  createdDt: Date;
  createdBy: null;
  modifiedDt: Date;
  modifiedBy: null;
  isActive: number;
  hotel_id?: number;
  google_my_business_location_id: null;
  hotelRoomId?: number;
  hotel_room_id?: number;
}

export enum TypeEnum {
  Image = "image",
}

export interface HotelRoom {
  id: number;
  hotelId: number;
  roomTypeId: number;
  roomName: string;
  description: string;
  defaultGuestCount: number;
  defaultPrice: string;
  maxGuestCount: number;
  baseAdultCount: number;
  baseChildCount: number;
  baseInfantCount: number;
  maxAdultCount: number;
  maxChildCount: number;
  maxInfantCount: number;
  priceConfig: { [key: string]: number };
  priceConfigDifference: null;
  chosenPriceConfig: string;
  extraChildPrice: null | string;
  childAgeSplit: number;
  childAgeLimit: number;
  extraInfantPrice: null | string;
  currency: string;
  roomCount: number;
  isActive: number;
  inProgress: number;
  isHourly: number;
  createdDt: Date;
  createdBy: number;
  modifiedDt: Date;
  modifiedBy: number;
  hotel_id: number;
  room_type_id: number;
  RoomType: Type;
  RoomImages: Image[];
  HotelRoomAddons: any[];
  HotelRoomAmenities: HotelAmenity[];
  pricing: Pricing[];
  pricingAdditionalGuests: PricingAdditionalGuests;
  availableRooms: number;
  ratePlans: RatePlans;
}

export interface Type {
  id: number;
  name: string;
  createdDt: Date;
  createdBy: null;
  modifiedDt: Date;
  modifiedBy: null;
  isActive: number;
  Transalations: Transalation[];
  cdnImageUrl?: null;
}

export interface Pricing {
  adultCount: number;
  childCount: number;
  infantCount: number;
  ratePlanCode: RatePlanCode;
  priceForPax: PriceForPax[];
  price: number;
  roomCount: number;
}

export interface PriceForPax {
  checkInDate: Date;
  priceBeforeTax: number;
}

export enum RatePlanCode {
  Ap = "AP",
  FlexBb = "FLEX-BB",
  FlexRo = "FLEX-RO",
  Map = "MAP",
}

export interface PricingAdditionalGuests {
  "FLEX-RO": PricingAdditionalGuestsAP;
  "FLEX-BB": PricingAdditionalGuestsAP;
  MAP: PricingAdditionalGuestsAP;
  AP: PricingAdditionalGuestsAP;
}

export interface PricingAdditionalGuestsAP {
  adults: PriceForPax[];
  children: PriceForPax[];
  infants: PriceForPax[];
}

export interface RatePlans {
  AP: RatePlansAP;
  MAP: RatePlansAP;
  "FLEX-BB": RatePlansAP;
  "FLEX-RO": RatePlansAP;
}

export interface RatePlansAP {
  id: number;
  ratePlanId: string;
  ratePlanCode: RatePlanCode;
  ratePlanConfig: string;
}
