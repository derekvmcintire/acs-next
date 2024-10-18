import React from 'react';
import classes from './_styles/page.module.css';

export default function Loader() {
  return (
    <div role="alert" aria-busy="true" className={classes.loading}>
      <div>
        <img alt="animated blue spinner" src="/spinner.svg" />
        <div>Loading...</div>
      </div>
    </div>
  );
}
