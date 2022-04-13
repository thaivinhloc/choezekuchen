export interface User {
  name: string;
  commited: number;
  completed: number;
  due: number;
  dailyAverage: number;
  dailyRequired: number;
  lastUpdated: string;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface Image {
  url: string;
  formats: Formats;
}

export interface User {
  name: string;
  commited: number;
  completed: number;
  due: number;
  dailyAverage: number;
  dailyRequired: number;
  lastUpdated: string;
}

export interface IResponseRetreat {
  name: string;
  description: string;
  image: Image;
  totalCommitment: number;
  totalGroupCompleted: number;
  totalParticipants: number;
  user: User;
}

export interface IUser {
  id: number;
  username: string;
}

export interface IResponseListRetreat {
  commited: number;
  dailyRequired: number;
  user: IUser;
  completed: number;
  dailyAverage: string;
  lastUpdated: string;
}

export type TPostSubmitRetreat = {
  recitationNumber: number;
};
