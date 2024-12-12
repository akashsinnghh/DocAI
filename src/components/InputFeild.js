import React from 'react';

const InputField = ({ type, placeholder, value, onChange, required, style }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="auth-input"
        style={style}
      />
    </div>
  );
};

export default InputField;
