import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" onChange={handleChange} />
    </>
  );
};

export default Filter;
