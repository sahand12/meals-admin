import React, {Component} from 'react';
import {Tab, Tabs} from '@blueprintjs/core';
import './ResourcePanel.css';
import './rc-panel.css';
import UsersPanel from './UsersPanel';
import ProductsPanel from './ProductsPanel';
import PurchasesPanel from './PurchasesPanel';
import MenuPanel from './MenuPanel';
import MealsPanel from './MealsPanel';

const t = {
  users: 'کاربران',
  meals: 'غذاها',
  menu: 'منو',
  purchases: 'خرید‌ها',
  locations: 'مکان‌ها',
  products: 'مواد اولیه',
};

export default class ResourcePanel extends Component {

  render() {
    return (
      <div className="rc-ResourcePanel">
        <Tabs>
          <Tab id="users" title={`${t.users}`} panel={<UsersPanel />}></Tab>
          <Tab id="products" title={`${t.products}`} panel={<ProductsPanel />}></Tab>
          <Tab id="meals" title={`${t.meals}`} panel={<MealsPanel />}></Tab>
          <Tab id="menu" title={`${t.menu}`} panel={<MenuPanel />}></Tab>
          <Tab id="purchases" title={`${t.purchases}`} panel={<PurchasesPanel />}></Tab>
        </Tabs>
      </div>
    );
  }
}