export interface LOGINAPI {
  email: string;
  password: string;
}

export interface AddressSucess {
  close: () => void;
  opened: boolean;
}

export interface OPENADDRESS {
  close: () => void;
  opened: boolean;
  region_Pk: number | null;
}

export interface ADDRESSLIST {
  is_headquarter: boolean;
  id: number;
  description: string;
  region: string;
  city: string;
  edit_url: string;
  delete_url: string;
}
// get region
export interface REGIONDATA {
  count: number;
  next: null;
  previous: null;
  results: REGION[];
}

export interface REGION {
  id: number;
  name: string;
}

//address list types
export interface AddressListData {
  count: number;
  next: null;
  previous: null;
  results: AddressLisResult[];
}

export interface CITYADDRESSDATA {
  count: number;
  next: null;
  previous: null;
  results: CITYADDRESS[];
}
export interface CITYADDRESS {
  id: number;
  latitude: string;
  longitude: string;
  city: string;
  is_headquarter: true;
  description: string;
}

export interface AddressLisResult {
  is_headquarter: boolean;
  id: number;
  description: string;
  region: string;
  city: string;
  edit_url: string;
  delete_url: string;
}

// addAddress
export interface ADDADDRESS {
  is_headquarter: boolean;
  description: string;
  region: string;
  city: string;
  latitude: string;
  longitude: string;
}

// forget password types
export interface FORGETPASSWORD {
  email: string;
}

// verification code
export interface VERIFY_CODE {
  email: string;
  verification_code: string;
}

// password reset
export interface PASSWORDRESET {
  email: string;
  new_password: string;
  confirm_password: string;
}
