import React, {useContext} from 'react';
import './search-component.scss';
import Select from 'react-select';
import {dropdownStyles} from './dropdown.styles';
import {MainContext} from '../../context/app.context';
import {debounce} from '../../helpers/debounce';

const options = [
  {value: 'name', label: 'Name'},
  {value: 'address', label: 'Address'},
  {value: 'email', label: 'e-mail'},
];

function SearchComponent() {
  const [appContext, setAppContext] = useContext(MainContext);
  const setAppContextDebounce = debounce(setAppContext, 500);

  const handleInputChange = (inputValue: string) => {
    setAppContextDebounce({...appContext, searchText: inputValue});
  };

  const handleSelectChange = (val: {value: string; label: string}) => {
    setAppContextDebounce({...appContext, searchKey: val.value});
  };
  return (
    <div className="search-component--container column"
    data-testid="search">
      <div className="row">
        <div className="input-field">
          <input placeholder="Search" onChange={e => handleInputChange(e.target.value)} id="search-input" />
        </div>
        <Select
          isSearchable={false}
          onChange={val => handleSelectChange(val)}
          defaultValue={options[0]}
          placeholder={'search by'.toUpperCase()}
          styles={{...dropdownStyles}}
          options={options}
        />
      </div>
    </div>
  );
}

export default SearchComponent;
