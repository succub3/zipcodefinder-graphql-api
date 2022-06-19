import { Place } from "./place";

export interface Region {
  "post code": string;
  "country": string;
  "country abbreviation": string;
  "places": Place[];
}
