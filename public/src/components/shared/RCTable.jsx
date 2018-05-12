import React, {Component} from 'react';
import * as R from 'ramda';
import './RCTable.css';

const classNames = {
  table: 'rc-Table',
  th: 'rc-Table__th',
  tr: 'rc-Table__tr',
};

const createTH = text => (<th key={text} className={classNames.th}>{text}</th>);

const formatCell = rowData => R.compose(
  ([name, format]) => format(rowData[name]),
  R.props(['name', 'format'])
);

const createRowByColRules = colRules => rowData =>
  R.compose(
    R.map(formatCell(rowData)),
    R.reject(R.prop('hidden')),
  )(colRules);

class RCTable extends Component {

  render() {
    const {classes, cols, data} = this.props;

    const colNames = R.compose(
      R.map(R.prop('t')),
      R.reject(R.prop('hidden'))
    );

    const rows = R.map(createRowByColRules(cols))(data);

    return (
      <table className={`${classNames.table} ${classes}`.trim()}>
        <thead>
          <tr className={classNames.tr}>
            {R.map(createTH)(colNames(cols))}
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, index) =>(
              <tr key={index}>
                {row.map((cell, index) => (
                  <td className='rc-Table__td' key={`${cell}${index}`}>{cell ? cell : '-'}</td>))}
               </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default RCTable;