export interface LOGINAPI {
  email: string;
  password: string;
}
export interface FilterStaff {
  close: () => void;
  opened: boolean;
  search?: string;
  is_active?: boolean;
  tribe_name?: string;
  squad__name?: string;
  page?: number;
}

export interface FillSearch {
  search?: string;
  is_active?: boolean;
  tribe_name?: string;
  squad__name?: string;
  page?: number;
}
export interface AddressSucess {
  close: () => void;
  opened: boolean;
  id?: number;
  initialData?: STAFFLISTDATA;
}

export interface InitialData {
  initialData?: STAFFLISTDATA;
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
  latitude?: string;
  longitude?: string;
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
  date_of_birth?: string;
  gender: string;
  martial_status: string;
  role: string;
  phone_number: string;
  work_phone: string;
  next_of_kin_first_name: string;
  next_of_kin_last_name: string;
  next_of_kin_middle_name?: string;
  next_of_kin_phone_number: string;
  next_of_kin_email: string;
  next_of_kin_relationship: string;
  first_name: string;
  last_name: string;
  region: string;
  city: string;
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
  overall_tribe: number;
}

/// staff list
export interface STAFFLIST {
  count: number;
  next: null;
  previous: null;
  results: STAFFLISTDATA[];
}
// staff list data
export interface STAFFLISTDATA {
  name: string;
  email: string;
  phone_number: string;
  tribe: string;
  squad: string;
  status: boolean;
  url: string;
  city: string;
  region: string;
  id: number;
  address: number;
  first_name: string;
  last_name: string;
  is_active: boolean;
  date_created: string;
  date_updated: string;
  unique_id: string;
  picture: string;
  middle_name: string;
  date_of_birth: any;
  gender: string;
  martial_status: string;
  alias_email: string;
  role: string;
  work_phone: string;
  next_of_kin_first_name: string;
  next_of_kin_last_name: string;
  next_of_kin_middle_name: string;
  next_of_kin_phone_number: string;
  next_of_kin_email: string;
  next_of_kin_relationship: string;
}
// tribe list
export interface TRIBELIST {
  count: number;
  next: null;
  previous: null;
  results: TRIBELISTDATA[];
}
// tribe list data
export interface TRIBELISTDATA {
  id: number;
  name: string;
  tribe_lead: number;
  date_created: string;
  url: string;
  squads: string[];
}
// squads list
export interface TRIBESQUAD {
  count: number;
  next: string | null;
  previous: string | null;
  results: TRIBESQUADDATA[];
}

// squad list data
export interface TRIBESQUADDATA {
  id: number;
  name: string;
  squad_lead: any;
  members: number;
  date_created: string;
  url: string;
}

// edit address

export interface EditAddressModal {
  opened: boolean;
  close: () => void;
  initialData: AddressLisResult | null;
}

export interface EditAddress {
  latitude: string;
  longitude: string;
  city: string;
  is_headquarter: boolean;
  description: string;
}

export interface DeleteAddress {
  close: () => void;
  opened: boolean;
  deleteData: number | null;
}

export interface NotificationData {
  actor: string;
  action: string;
  date_created: string;
}

export interface ActivityLogSorted {
  start_date: string;
  end_date: string;
}

export type UserData = {
  id: number;
  user: {
    email: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
  };
  tribe: string;
  squad: string;
  date_created: string;
  date_updated: string;
  unique_id: string;
  picture: string;
  middle_name: string;
  date_of_birth: any;
  gender: string;
  martial_status: string;
  alias_email: string;
  role: string;
  phone_number: string;
  work_phone: string;
  next_of_kin_first_name: string;
  next_of_kin_last_name: string;
  next_of_kin_middle_name: string;
  next_of_kin_phone_number: string;
  next_of_kin_email: string;
  next_of_kin_relationship: string;
  address: number;
  tokens: {
    refresh: string;
    access: string;
  };
};

export interface UserStaff {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  tribe: string;
  squad: string;
  date_created: string;
  date_updated: string;
  unique_id: string;
  picture: string;
  middle_name: string;
  date_of_birth: any;
  gender: string;
  martial_status: string;
  alias_email: string;
  role: string;
  phone_number: string;
  work_phone: string;
  next_of_kin_first_name: string;
  next_of_kin_last_name: string;
  next_of_kin_middle_name: string;
  next_of_kin_phone_number: string;
  next_of_kin_email: string;
  next_of_kin_relationship: string;
  address: number;
  tokens: {
    refresh: string;
    access: string;
  };
}

export interface StaffSearch {
  is_active: boolean;
  page: number;
  search: string;
  squad__name: string;
  tribe_name: string;
}
