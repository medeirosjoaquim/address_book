export const dropdownStyles = {
  option: (provided) => ({
    ...provided,
    padding: 10,
    // backgroundColor: 'green',
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '1rem',
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
}
