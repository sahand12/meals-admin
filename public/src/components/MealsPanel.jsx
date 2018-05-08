import React, {Component} from 'react';
import './ProductsPanel.css';

const t = {
  title: 'غذاها',
  products: 'مواد اولیه',
  newMeal: 'غذا جدید',
  mealSearch: 'جستجو غذا',
  name: 'نام',
  nameFa: 'نام (انگلیسی)',
  calories: 'کالری',
  protein: 'پروتین',
  carbs: 'کربوهیدرات',
  fat: 'چربی‌',
  livePrice: 'قیمت روز',
};

export default class ProductsPanel extends Component {
  render() {
    return (
      <div className='rc-panel'>
        <section className="rc-panel__box">
          <h2>{`${t.title}`}</h2>
          <hr/>
          <div className="rc-panel__btnGroup">
            <button className='pt-button pt-intent-success'>{`${t.newMeal}`}</button>
            <button className='pt-button'>{`${t.mealSearch}`}</button>
          </div>
          <div className="rc-panel__tableContainer">
            <table className="pt-html-table .modifier">
              <thead>
                <tr>
                  <th>{`${t.name}`}</th>
                  <th>{`${t.nameFa}`}</th>
                  <th>{`${t.calories}`}</th>
                  <th>{`${t.protein}`}</th>
                  <th>{`${t.carbs}`}</th>
                  <th>{`${t.fat}`}</th>
                  <th>{`${t.livePrice}`}</th>
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
        </section>
      </div>
    );
  }
}