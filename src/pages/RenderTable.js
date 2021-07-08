import React from 'react';

export const RenderTable = (dataItem, index) => {
  // console.log('=================index in RenderTable===================');
  // console.log(index);
  // console.log('=================dataItem in RenderTable===================');
  // console.log(dataItem);

  if (index === 0) {
    return (
      <thead style={{ backgroundColor: '#cfcfcf' }}>
        <tr>
          <th scope="row"> # </th>
          {dataItem.data.map((dataHeader, index) => (
            <th key={index}>{dataHeader}</th>
          ))}
        </tr>
      </thead>
    );
  } else {
    return (
      <tbody sytle={{ striped: true }}>
        <tr>
          <th scope="row">Vehicle {index}</th>
          {dataItem.data.map((dataBody, index) => (
            <td key={index}>{dataBody}</td>
          ))}
        </tr>
      </tbody>
    );
  }
};
