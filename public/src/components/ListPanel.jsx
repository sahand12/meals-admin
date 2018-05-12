import React, {Component} from 'react';
import RCTable from './shared/RCTable';
import * as R from 'ramda';

const t = {
  tableHeadings: {
    fname: 'نام',
    lname: 'نام خانوادگی',
    email: 'ایمیل',
    mobile: 'موبایل',
    since: 'تاریخ عضویت',
    isAdmin: 'ادمین',
    edit: 'ویرایش',
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
    const {cols, data, tableClasses} = this.props;

    return (
      <div className="rc-panel__tableContainer">
        <RCTable cols={cols} data={data} classes={tableClasses}/>
        <table className="pt-html-table">
        </table>
      </div>
    );
  }
}