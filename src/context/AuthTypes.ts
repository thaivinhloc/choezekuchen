export type TLogin = {
  identifier: string;
  password: string;
};
export type TSignup = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
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
}

export interface IResponseLogin {
  jwt: string;
  user: IUser;
}
