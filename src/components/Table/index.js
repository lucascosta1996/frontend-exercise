import React, { memo } from 'react';
import { array, func, string } from 'prop-types';
import { capitalize, getDateTime, isDate } from '../../helpers';
import TableWrapper from './styledComponents';
import Button from '../Button';

function Table({
  data,
  header,
  handleButtonClick,
  handleAddClick,
  tableTitle
}) {
  return (
    <TableWrapper>
      <header
        className="support-requests-header"
      >
        <h2>
          {tableTitle}
        </h2>
        <span
          onClick={() => handleAddClick()}
        >
          ADD
        </span>
      </header>
      <table>
        <tbody>
          <tr className="table-header">
            {header.map(item => <th key={item}>{item}</th>)}
          </tr>
          {
            data && data
              .sort((a, b) => parseInt(b.id) - parseInt(a.id))
              .map(row => (
                <tr
                  className="table-row"
                  key={row.id}
                >
                  {Object.entries(row).map((key) => {
                    const className = `td-${key[0]}`;

                    if (key[0] === 'id') return;

                    if (isDate(key[1])) {
                      return (
                        <td
                          key={key[1]}
                          className={className}
                        >
                          {getDateTime(key[1])}
                        </td>
                      );
                    } else if (key[0] === 'status') {
                      return (
                        <td
                          className="button-table"
                          key={key[1]}
                        >
                          <Button
                            label={capitalize(key[1])}
                            normal={key[1] === 'unsend'}
                            transparent={key[1] === 'send'}
                            onClick={() => handleButtonClick(row)}
                          />
                        </td>
                      );
                    } else {
                      return (
                        <td
                          className={className}
                          key={key[1]}
                        >
                          {key[1]}
                        </td>
                      );
                    }
                })}
                </tr>
              )
              )
          }
        </tbody>
      </table>
    </TableWrapper>
  );
}

Table.propTypes = {
  data: array,
  header: array,
  tableTitle: string,
  handleButtonClick: func,
  handleAddClick: func,
};

Table.defaultProps = {
  data: [],
  header: [],
  tableTitle: '',
  handleButtonClick: () => {},
  handleAddClick: () => {},
};

export default memo(Table);
