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

export interface ILocalization {
  id: number;
  name: string;
  totalCommitment: string;
  dateStart: string;
  dateEnd: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  description: string;
  locale: string;
  isGroup: boolean;
}

export interface IResponseActiveRetreat {
  id: number;
  name: string;
  dateStart: string;
  dateEnd: string;
  totalCommitment: string;
  localizations: ILocalization[];
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

export interface IResponseRetreatDetailById {
  id: number;
  name: string;
  totalCommitment: string;
  dateStart: string;
  dateEnd: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  description: string;
  locale: string;
  isGroup: boolean;
  localizations: any[];
  image: Image;
}
export interface IResponseRetreatDetail {
  dateStart: string;
  dateEnd: string;
  id: number;
  name: string;
  description: string;
  image: Image;
  isGroup: boolean;
  totalParticipants: number;
  totalGroupCompleted: number;
  totalCommitment: number;
  due: number;
  user: User;
}

export interface IUser {
  id: number;
  username: string;
  address?: string;
}

export interface Completed {
  retreatName: string;
  completed: number;
  commited: number;
}

export interface IResponseListRetreat {
  id: number;
  name: string;
  address: string;
  completed: Completed[];
  lastUpdated: string;
}

export type TPostSubmitRetreat = {
  recitationNumber: number;
  completedAt: string;
  retreatId: number;
};
