import React from 'react';
import { Image } from '@mantine/core';
import classes from './_styles/page.module.css';

export default function Loader() {
  return (
    <div role="alert" aria-busy="true" className={classes.loading}>
      <div>
        <Image alt="animated blue spinner" src="/spinner.svg" />
        <div>Loading...</div>
      </div>
    </div>
  );
}
