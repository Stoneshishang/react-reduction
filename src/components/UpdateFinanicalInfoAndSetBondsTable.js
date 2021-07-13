import React from 'react';
import { Input } from 'reactstrap';
import CurrencyInputField from 'react-currency-input-field';

export const FinancialInfoAndBondsTable = (dataItem, index) => {
  if (index === 0) {
    return (
      <thead style={{ backgroundColor: '#cfcfcf' }}>
        <tr>
          <th scope="row"> # </th>
          {dataItem.map((dataHeader, index) => (
            <th key={index}>{dataHeader}</th>
          ))}
          <th>Purchase Price</th>
          <th>Min Amount of Purchase</th>
          <th>Max Amount of Purchase</th>
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
          <td style={{ justifyContent: 'start' }}>
            <CurrencyInputField
              placeholder="USD"
              prefix="$"
              style={{
                display: 'block',
                width: '100%',
                height: '2.25rem',
                padding: '0.375rem 0.75rem',
                fontSize: '1rem',
                fontWeight: '400',
                fontColor: '#495057',
                lineHeight: '1.5',
                color: '#495057',
                backgroundColor: '#fff',
                backgroundClip: 'padding-box',
                border: '1px solid #ced4da',
                borderRadius: '0.25rem',
                transition:
                  'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
              }}
            />
          </td>
          <td>
            <Input
              type="number"
              name="number"
              id="minPurchaseAmount"
              placeholder="Purchase Amount"
              min={0}
            />
          </td>
          <td>
            <Input
              type="number"
              name="number"
              id="minPurchaseAmount"
              placeholder="Purchase Amount"
              max={20}
            />
          </td>
        </tr>
      </tbody>
    );
  }
};
