export enum CountryRegionType {
  State = "state",
  Province = "province",
}

export interface CountryRegion {
  code: string;
  name: string;
}

export interface Country {
  code: string;
  name: string;
  callingCode: string;
  regionType?: CountryRegionType;
  regions: CountryRegion[];
}
