export enum PostalCodeType {
  PostalCode = "postalCode",
  ZipCode = "zipCode",
}

export interface CountryPostalCode {
  type: PostalCodeType;
  required: boolean;
}

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
  postalCode?: CountryPostalCode;
  regionType?: CountryRegionType;
  regions: CountryRegion[];
}
