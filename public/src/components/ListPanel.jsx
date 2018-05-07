import React, {Component} from 'react';

const t = {
  create: 'ایجاد',
  list: 'لیست',
  search: 'جستجو',
  title: 'کاربران',
  newUser: 'کاربر جدید',
  userSearch: 'جستجو کاربر',
  fname: 'نام',
  lname: 'نام خانوادگی',
  email: 'ایمیل',
  mobile: 'موبایل',
  since: 'تاریخ عضویت',
  isAdmin: 'ادمین',
}

export default class ProductsPanel extends Component {
  render() {
    return (
      <div className="rc-panel__tableContainer">
        <table class="pt-html-table .modifier">
          <thead>
            <tr>
              <th>{`${t.fname}`}</th>
              <th>{`${t.lname}`}</th>
              <th>{`${t.email}`}</th>
              <th>{`${t.mobile}`}</th>
              <th>{`${t.since}`}</th>
              <th>{`${t.isAdmin}`}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blueprint</td>
              <td>CSS framework and UI toolkit</td>
              <td>Sass, TypeScript, React</td>
            </tr>
            <tr>
              <td>TSLint</td>
              <td>Static analysis linter for TypeScript</td>
              <td>TypeScript</td>
            </tr>
            <tr>
              <td>Plottable</td>
              <td>Composable charting library built on top of D3</td>
              <td>SVG, TypeScript, D3</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}