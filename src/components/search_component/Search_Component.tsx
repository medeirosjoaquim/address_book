import React from 'react';
import './search-component.scss';
import Select from 'react-select';

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
          placeholder={options[0].label}

          styles={{
            option: (provided) => ({
              ...provided,
              padding: 10,
              // backgroundColor: 'green',
            }),
            placeholder: (provided) => ({
              ...provided,
              fontSize: '2rem',
              fontWeight: 'bold'
            }),
            control: (provided) => ({
              ...provided,
              height: '3rem',
              minHeight: 30,
              padding: 0,
              // backgroundColor: 'red',
              lineHeight: 'normal',
              borderRadius: 0,
              border: 0,
              boxShadow: 'none'
            }),
            container: (provided) => ({
              ...provided,
              width: '50%',

            })
          }} options={options} />

      </div>
    </div>
  );
}

export default SearchComponent;
