import { Region } from "../zippopotam/types/region";
import { Place } from "../zippopotam/types/place";
import { ZipCodeInfo } from "../types/zip.code.info";
import { Location } from "../types/location";

export function convertPlaceToLocation(place: Place): Location {
  return {
    locationName: place["place name"],
    longitude: place.longitude,
    state: place.state,
    stateCode: place["state abbreviation"],
    latitude: place.latitude,
  };
}

export function convertRegionToZipCodeInfo(region: Region): ZipCodeInfo {
  return {
    zipCode: region["post code"],
    country: region.country,
    countryCode: region["country abbreviation"],
    places: region.places.map((place) => convertPlaceToLocation(place)),
  };
}
