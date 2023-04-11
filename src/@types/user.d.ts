import { TechType } from './tech';

export interface UserType {
  avatarUrl: string,
  name: string,
  bio: string,
  techs: TechType[];
}