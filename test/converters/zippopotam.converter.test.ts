import { convertPlaceToLocation, convertRegionToZipCodeInfo } from "../../src/converters/zippopotam.converter";
import {
  CANADA_ZIP_CODE_1,
  COUNTRY_1,
  COUNTRY_ABBREVIATION_1,
  LATITUDE_1,
  LONGITUDE_1,
  PLACE_1,
  PLACE_NAME_1,
  REGION_1,
  STATE_1,
  STATE_ABBREVIATION_1
} from "../utils/constants";

describe("Zippopotam converter tests", () => {

  describe("Convert place to location", () => {

    it("should convert a valid (CA) place successfully", () => {
      // Given
      // Canadian PLACE_1

      // When
      const location = convertPlaceToLocation(PLACE_1);

      // Then
      expect(location).toBeDefined();
      expect(location.locationName).toBe(PLACE_NAME_1);
      expect(location.longitude).toBe(LONGITUDE_1);
      expect(location.state).toBe(STATE_1);
      expect(location.stateCode).toBe(STATE_ABBREVIATION_1);
      expect(location.latitude).toBe(LATITUDE_1);
    });

  });

  describe("Convert region to zip code info", () => {

    it("should convert a valid (CA) region successfully", () => {
      // Given
      // Canadian REGION_1

      // When
      const zipCodeInfo = convertRegionToZipCodeInfo(REGION_1);

      // Then
      expect(zipCodeInfo).toBeDefined();
      expect(zipCodeInfo.country).toBe(COUNTRY_1);
      expect(zipCodeInfo.countryCode).toBe(COUNTRY_ABBREVIATION_1);
      expect(zipCodeInfo.zipCode).toBe(CANADA_ZIP_CODE_1);
      expect(zipCodeInfo.locations).toBeDefined();
      expect(zipCodeInfo.locations.length).toBe(1);
    });

  });

});
