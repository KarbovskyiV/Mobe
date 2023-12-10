import React from 'react';
import FilterCheckbox from '../FilterChechbox/FilterCheckbox';

const Filters = ({ characteristics, onCharacteristicChange, onSortChange }) => (
  <div>
    <div>
      <h2></h2>
      {characteristics.map((char, index) => (
        <FilterCheckbox
          key={index}
          label={char}
          checked={char.isChecked}
          onChange={() => onCharacteristicChange(index)}
        />
      ))}
    </div>
    <div>
      <h2>Сортування</h2>
      <label>
        За назвою:
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="asc">За зростанням</option>
          <option value="desc">За спаданням</option>
        </select>
      </label>
    </div>
  </div>
);

export default Filters;