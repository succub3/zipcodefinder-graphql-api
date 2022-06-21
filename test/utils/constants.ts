import { Region } from "../../src/zippopotam/types/region";
import { Place } from "../../src/zippopotam/types/place";

export const COUNTRY_1 = "Canada";
export const COUNTRY_ABBREVIATION_1 = "CA";
export const CANADA_ZIP_CODE_1 = "A0A";

export const PLACE_NAME_1 = "Southeastern Avalon Peninsula (Ferryland)";
export const LATITUDE_1 = "47.0073";
export const LONGITUDE_1 = "-52.9589";
export const STATE_1 = "Newfoundland and Labrador";
export const STATE_ABBREVIATION_1 = "NL";

export const PLACE_1: Place = {
  "place name": PLACE_NAME_1,
  "longitude": LONGITUDE_1,
  "state": STATE_1,
  "state abbreviation": STATE_ABBREVIATION_1,
  "latitude": LATITUDE_1,
};

export const REGION_1: Region = {
  "post code": CANADA_ZIP_CODE_1,
  "country": COUNTRY_1,
  "country abbreviation": COUNTRY_ABBREVIATION_1,
  "places": [
    PLACE_1
  ],
};
