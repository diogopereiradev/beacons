import { IconType } from 'react-icons';

export interface LinkType {
  url: string,
  icon: JSX.Element | IconType,
  name: string;
}