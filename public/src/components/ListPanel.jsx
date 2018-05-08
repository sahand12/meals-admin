import React, {Component} from 'react';
import RCTable from './shared/RCTable';

const t = {
  tableHeadings: {
    fname: 'نام',
    lname: 'نام خانوادگی',
    email: 'ایمیل',
    mobile: 'موبایل',
    since: 'تاریخ عضویت',
    isAdmin: 'ادمین',
  },
  create: 'ایجاد',
  list: 'لیست',
  search: 'جستجو',
  title: 'کاربران',
  newUser: 'کاربر جدید',
  userSearch: 'جستجو کاربر',
};

export default class ListPanel extends Component {
  render() {
    const columns = Object.keys(t.tableHeadings).map(h => t.tableHeadings[h]);
    const rows = [];
    return (
      <div className="rc-panel__tableContainer">
        <RCTable columns={columns} rows={rows}/>
        <table className="pt-html-table .modifier">
        </table>
      </div>
    );
  }
}