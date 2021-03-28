export interface UserI {
  userId: number;
  mobile: string;
  role: string[];
  email: string;
  allowedCountries: string[];
  allowedVendorCodes: string[];
  firstName: string;
  lastName: string;
  enabled: boolean;
  deviceType: string;
  token: string;
}
