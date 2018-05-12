import React, {Component} from 'react';
import './SearchPanel.css';
const classes = {
  container: '',
  heading: '',
  subSection: '',
  subSectionHeading: '',
};

export default class SearchPanel extends Component {
  render() {
    return (
      <section className={classes.container}>
        <h1 className={classes.heading}></h1>
        <hr/>
        <section className={classes.subSection}>
          <h1 className={classes.subSectionHeading}></h1>
        </section>
      </section>
    );
  }
}