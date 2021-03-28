import {IUser} from '../models/user.model';
import {removeDiacritics} from './removeDiacritics';

export const filterNationality = (users: IUser[], natArray: string[]): IUser[] => {
  if (natArray.length > 0) {
    return users.filter(user => natArray.includes(user.nat));
  } else {
    return users;
  }
};

export const filterSearch = (users: IUser[], searchText: string, searchKey = 'name'): IUser[] => {
  searchText = removeDiacritics(searchText.toLowerCase()).replace(/\s/g, '');
  if (searchText.length < 1) {
    return users;
  } else {
    switch (searchKey) {
      case 'name':
        return users.filter(
          user =>
            removeDiacritics(user.name.first.toLowerCase()).includes(searchText) ||
            removeDiacritics(user.name.last.toLowerCase()).includes(searchText) ||
            `${removeDiacritics(`${user.name.first.toLowerCase()}${user.name.last.toLowerCase()}`)}`
            .replace(/\s/g, '').includes(searchText)
        );
      case 'address':
        return users.filter(
          user =>
            removeDiacritics(user.location.street.name.toLowerCase()).includes(searchText) ||
            removeDiacritics(user.location.city.toLowerCase()).includes(searchText) ||
            removeDiacritics(user.location.state.toLowerCase()).includes(searchText) ||
            removeDiacritics(user.location.country.toLowerCase()).includes(searchText)
        );
      case 'email':
        return users.filter(user => removeDiacritics(user.email.toLowerCase()).includes(searchText));
      default:
        break;
    }
    return users.filter(user => user[searchKey as keyof IUser] === searchText);
  }
};
