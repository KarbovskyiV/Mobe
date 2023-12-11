import React from 'react';

const FilterCheckbox = ({ label, checked, onChange }) => (
  <div>
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  </div>
);

export default FilterCheckbox;