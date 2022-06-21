import { Location } from "./location";

export interface ZipCodeInfo {
  zipCode: string;
  country: string;
  countryCode: string;
  locations: Location[];
}
