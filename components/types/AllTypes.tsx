export interface LOGINAPI {
  email: string;
  password: string;
}

export interface AddressSucess {
  close: () => void;
  opened: boolean;
}
