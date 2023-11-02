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
  is_headquarter: boolean;
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

export interface ACTIVITYLOGDATA {
  count: number;
  next: null;
  previous: null;
  results: ACTIVITYLOG[];
}

export interface ACTIVITYLOG {
  actor: string;
  action: string;
  date_created: string;
}

//create new staff
export interface CREATESTAFF {
  email: string;
  alias_email: string;
  picture: string;
  middle_name?: string;
  date_of_birth: string;
  gender: string;
  martial_status: string;
  role: string;
  phone_number: string;
  work_phone: string;
  next_of_kin_first_name: string;
  next_of_kin_last_name: string;
  next_of_kin_middle_name: string;
  next_of_kin_phone_number: string;
  next_of_kin_email: string;
  next_of_kin_relationship: string;
  first_name: string;
  last_name: string;
  tribe: number;
  squad: number;
  address: number;
}

// dashboard
export interface STAFFDASHBOARD {
  name: string;
  email: string;
  phone_number: string;
  tribe: string;
  squad: string;
  status: string;
  url: string;
  id: number;
  unique_id: string;
  male_staff: number;
  female_staff: number;
  last_created_squad: string;
  last_created_tribe: string;
  overall_squad: number;
  overall_staff: number;
overall_tribe:number
}





