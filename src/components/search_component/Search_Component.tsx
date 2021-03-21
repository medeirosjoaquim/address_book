import React from 'react';
import './search-component.scss';
import Select from 'react-select';
import {dropdownStyles} from './dropdown.styles';

const options = [
  { value: 'name', label: 'Name' },
  { value: 'address', label: 'Address' },
  { value: 'email', label: 'e-mail' },
];

function SearchComponent() {
  return (
    <div className="search-component--container column">
      <div className="row">
        <div className="input-field"><input placeholder="Search" id="search-input" /></div>
        <Select isSearchable={false}
          placeholder={'search by'.toUpperCase()}

          styles={{...dropdownStyles}} options={options} />

      </div>
    </div>
  );
}

export default SearchComponent;
