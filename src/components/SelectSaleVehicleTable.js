import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export const SelectSaleVehicleTable = (dataItem, index) => {
  if (index === 0) {
    return (
      <thead style={{ backgroundColor: '#cfcfcf' }}>
        <tr>
          <th scope="row"> # </th>
          {dataItem.map((dataHeader, index) => (
            <th key={index}>{dataHeader}</th>
          ))}
          <th>Include ?</th>
        </tr>
      </thead>
    );
  } else {
    return (
      <tbody sytle={{ striped: true }}>
        <tr>
          <th scope="row">Vehicle {index}</th>
          {dataItem.map((dataBody, index) => (
            <td key={index}>{dataBody}</td>
          ))}
          <td>
            <Checkbox color="primary" />
          </td>
        </tr>
      </tbody>
    );
  }
};
