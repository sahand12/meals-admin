import React, {Component} from 'react';
import {Tab, Tabs} from '@blueprintjs/core';
import ListPanel from './ListPanel';
import CreatePanel from './CreatePanel';
import SearchPanel from './SearchPanel';
import './UsersPanel.css';

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

export default class UsersPanel extends Component {
  render() {
    return (
      <div class='rc-panel'>
        <section className="rc-panel__box">
          <h2>{`${t.title}`}</h2>
          <hr/>
          <div className="rc-">
            <Tabs>
              <Tab id="list" title={`${t.list}`} panel={<ListPanel />}></Tab>
              <Tab id="new" title={`${t.create}`} panel={<CreatePanel />}></Tab>
              <Tab id="search" title={`${t.search}`} panel={<SearchPanel />}></Tab>
            </Tabs>
          </div>
        </section>
      </div>
    );
  }
}