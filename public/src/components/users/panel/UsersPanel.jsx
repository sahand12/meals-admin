import React, {Component} from 'react';
import {Tab, Tabs} from '@blueprintjs/core';
import * as R from 'ramda';
import ListPanel from '../../ListPanel';
import CreatePanel from '../../CreatePanel';
import SearchPanel from '../../SearchPanel';
import CreateUserForm from '../create/CreateUserForm';
import './UsersPanel.css';
import {
  asPersianNumber,
  asPersianPhoneNumber,
  asJalaiDate
} from '../../../helpers/formatter';
const t = {
  create: 'ایجاد',
  edit: 'ویرایش',
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
  line: 'ردیف',
};

function toDate(str) {
  return new Date(str);
}

function increment(start) {
  let first = start;
  return function () {
    return first++;
  }
}

const tableClasses = ['rc-UserListTable'];
const userListColumns = [
  {name: 'number', format: R.compose(asPersianNumber, increment(1)), t: t.line},
  {name: 'fname', format: R.identity, t: t.fname},
  {name: 'lname', format: R.identity, t: t.lname},
  {name: 'email', format: R.identity, t: t.email},
  {name: 'mobile', format: asPersianPhoneNumber, t: t.mobile},
  {name: 'createdAt', format: R.compose(asPersianNumber, asJalaiDate, toDate), t: t.since},
  {name: 'isAdmin', format: R.identity, t: t.isAdmin},
  {name: 'id', format: R.identity, hidden: true},
  {name: 'edit', format: R.identity, derived: true, t: t.edit}
];
const users = [
  {'_id':'5af0201ecd10ba09a2e51b85','fname':'azin','lname':'shokouhi','password':'azin1','mobile':'09126150383','createdAt':'2018-05-07T09:45:02.682Z','updatedAt':'2018-05-07T09:45:02.682Z','__v':0},
  {'_id':'5af0274e72aa290a262e8e09','deleted':false,'fname':'sahand','lname':'shokouhi','password':'sahand12','mobile':'09123017212','email':'sahand.shok@gmail.com','createdAt':'2018-05-07T10:15:42.358Z','updatedAt':'2018-05-07T10:15:42.358Z','__v':0},
];
export default class UsersPanel extends Component {

  renderUserListTabPanel() {
    // const {users} = this.props;
    const UserListPanel = (<ListPanel
      cols={userListColumns}
      data={users}
      tableClasses={tableClasses}
    />);

    return (<Tab
      id='userList'
      title={`${t.list}`}
      panel={UserListPanel}
    />);
  }
  renderUserCreateTabPanel() {
    return (<Tab
      id='newUser'
      title={`${t.create}`}
      panel={<CreateUserForm />}
    />);
  }
  renderUserSearchTabPanel() {

  }
  render() {
    // const {users} = this.props;
    const UserListTabPanel = this.renderUserListTabPanel();
    const UserCreateTabPanel = this.renderUserCreateTabPanel();

    return (
      <div className='rc-panel'>
        <section className='rc-panel__box'>
          <h2>{`${t.title}`}</h2>
          <hr/>
          <div className='rc-'>
            <Tabs selectedTabId='newUser'>
              {UserListTabPanel}
              {UserCreateTabPanel}
              <Tab id='search' title={`${t.search}`} panel={<SearchPanel />}></Tab>
            </Tabs>
          </div>
        </section>
      </div>
    );
  }
}