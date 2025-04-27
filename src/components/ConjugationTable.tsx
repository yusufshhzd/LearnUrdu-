import React from 'react';

const ConjugationTable = ({ data }: { data: any }) => {
  const rows = data.length;
  const columns = data[0].length;

  const createTable = () => {
    const table = [];
    for (let row = 0; row < rows; row++) {
      const cells = [];
      for (let col = 0; col < columns; col++) {
        const isBold = row === 0 || col === 0;
        cells.push(
          <td key={col} className={isBold ? 'bold' : ''}>
            {typeof data[row][col] === 'string'
              ? data[row][col].split('\n').map((line: string, idx: number) => (
                  <div key={idx}>{line}</div>
                ))
              : data[row][col]}
          </td>
        );
      }
      table.push(<tr key={row}>{cells}</tr>);
    }
    return table;
  };

  return (
    <table className="conjugationTable">
      <tbody>
        {createTable()}
      </tbody>
    </table>
  );
};

export default ConjugationTable;
