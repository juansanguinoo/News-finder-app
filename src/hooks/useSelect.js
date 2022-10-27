import React from 'react'
import { useState } from 'react'

const useSelect = (initialState, OPTIONS) => {

  const [category, setCategory] = useState(initialState);

  const handleChange = (e) => {
    setCategory(e.target.value);
  }

  const SelectNews = () => (
    <select
      className="browser-default"
      value={category}
      onChange={handleChange}>
      {OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return [category, SelectNews];
};

export default useSelect
