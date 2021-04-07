import React, { memo } from 'react';
import { func } from 'prop-types';
import { capitalize, getDateTime } from '../../helpers';
import { post } from '../../mockAPI/postRequest';
import { patch } from '../../mockAPI/patchRequest';
import useGetRequests from '../../hooks/useGetRequests';
import TableWrapper from './styledComponents';
import Button from '../Button';

function Table({ onChange }) {
  const { fetchData, data } = useGetRequests('/api/requests');

  async function handleClick() {
    const randomData = {
      city: 'Southe Mariane',
      email: "test_mail@gottlieb.ca",
      name: `Cecilia Welch`,
      phoneNumber: "215-293-5846",
      status: "send",
      timestamp: "2012-04-23T01:06:43.511Z",
    };

    await post('/api/requests', randomData)
      .then(() => fetchData());

    onChange();
  }

  async function handleButtonClick(item) {
    item.status = item.status === 'send' ? 'unsend' : 'send';
    patch('/api/requests', item)
      .then(() => fetchData());
  }

  return (
    <TableWrapper>
      <header
        className="support-requests-header"
      >
        <h2>
          Support Requests
        </h2>
        <span
          onClick={() => handleClick()}
        >
          ADD
        </span>
      </header>
      <table>
        <tbody>
          <tr className="table-header">
            <th>NAME</th>
            <th>EMAIL</th>
            <th>TIME</th>
            <th>PHONE NUMBER</th>
            <th>CITY</th>
            <th>STATUS</th>
          </tr>
          {
            data && data.requests
              .sort((a, b) => parseInt(b.id) - parseInt(a.id))
              .map(row => (
                <tr
                  className="table-row"
                  key={row.name}
                >
                  <td
                    className="td-name"
                  >
                    {row.name}
                  </td>
                  <td>{row.email}</td>
                  <td>{getDateTime(row.timestamp)}</td>
                  <td>{row.phoneNumber}</td>
                  <td>{row.city}</td>
                  <td
                    className="button-table"
                  >
                    <Button
                      label={capitalize(row.status)}
                      normal={row.status === 'unsend'}
                      transparent={row.status === 'send'}
                      onClick={() => handleButtonClick(row)}
                    />
                  </td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </TableWrapper>
  );
}

Table.propTypes = {
  onChange: func,
};

Table.propTypes = {
  onChange: () => {},
};

export default memo(Table);
