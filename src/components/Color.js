import React from 'react';

export default function Color() {
  const color = {
    name: 'red',
    hex: 'ff0000',
    rgb: '255, 0, 0'
  };

  const dlStyle = {
    color: color.name
  };

  return (
    <dl style={dlStyle}>
      <dt>Name</dt>
      <dd>{color.name}</dd>

      <dt>Age</dt>
      <dd>{color.hex}</dd>

      <dt>Weight</dt>
      <dd>{color.rgb}</dd>
    </dl>
  );
}
