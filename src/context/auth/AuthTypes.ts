export type TLogin = {
  identifier: string;
  password: string;
};
export type TSignup = {
  username: string;
  email: string;
  address: string;
  password: string;
  confirmPassword?: string;
  country?: string;
  city?: string;
};

export interface IUser {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  address?: string;
  city?: string;
  country?: string;
}

export interface IResponseLogin {
  jwt: string;
  user: IUser;
}
