export const dropdownStyles = {
  option: (provided: any) => ({
    ...provided,
    padding: 10,
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fontSize: '1rem',
    fontWeight: 'bold'
  }),
  singleValue: (provided: any) => ({
    ...provided,
    textTransform: 'uppercase',
    fontSize: '1rem',
    color: '#999',
    fontWeight: 'bold'
  }),
  control: (provided: any) => ({
    ...provided,
    height: '3rem',
    minHeight: 30,
    padding: 0,
    lineHeight: 'normal',
    borderRadius: 0,
    border: 0,
    boxShadow: 'none'
  }),
  container: (provided: any) => ({
    ...provided,
    width: '50%',
  })
}
