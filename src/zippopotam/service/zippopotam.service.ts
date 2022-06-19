import { zippopotamClient } from "../client/zippopotam.client";
import { Region } from "../types/region";
import { ZipCodeInfo } from "../../types/zip.code.info";
import { convertRegionToZipCodeInfo } from "../../converters/zippopotam.converter";
import { mockedRegions } from "../data/dataset";

export const getMockedZipCodeInfo = async (countryCode: string, zipCode: string): Promise<ZipCodeInfo | undefined> => {
  const region = mockedRegions.find((region) => region["country abbreviation"] === countryCode && region["post code"] === zipCode);
  return region ? convertRegionToZipCodeInfo(region) : undefined;
};

export const getZipCodeInfo = async (countryCode: string, zipCode: string): Promise<ZipCodeInfo | undefined> => {
  const { data } = await zippopotamClient.get<Region>(`/${countryCode}/${zipCode}`);
  return data ? convertRegionToZipCodeInfo(data as Region) : undefined;
};
