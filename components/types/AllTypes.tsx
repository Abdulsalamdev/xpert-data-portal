export interface LOGINAPI {
  email: string;
  password: string;
}

export interface AddressSucess {
  close: () => void;
  opened: boolean;
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

//address list types
export interface AddressListData {
  count: number;
  next: null;
  previous: null;
  results: AddressLisResult[];
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

// forget password types
export interface FORGETPASSWORD {
  email: string;
}

// verification code
export interface VERIFY_CODE {
  email: string;
  verification_code: string;
}
