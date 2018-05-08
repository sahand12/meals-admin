import React, {Component} from 'react';
import './RCTable.css';

class RCTable extends Component {

  render() {
    const {
      columns = [],
      rows = [],
    } = this.props;
console.log(columns);
    return (
      <table>
        <thead>
          <tr>
            {columns.forEach(heading => (<th key={heading}>{heading}</th>))}
          </tr>
        </thead>
        <tbody>
          {rows.forEach((row, index) =>(
            <tr key={index}>
              {row.forEach(cell => (<td key={cell}>{cell}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default RCTable;