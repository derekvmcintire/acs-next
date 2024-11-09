'use client';

import React from 'react';
import InfoBlock from '../../ui/InfoBlock';
import RaceSearch from './RaceSearch';
import SuggestedRaces from './SuggestedRaces';
import classes from './side-search.module.css';

export default function SideSearch() {
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  return (
    <InfoBlock leftHanded className={classes.raceSearchInfoBlock} title="Search for a Race">
      {errorMessage && <div>{errorMessage}</div>}
      <RaceSearch setError={setErrorMessage} />
      <SuggestedRaces setError={setErrorMessage} />
    </InfoBlock>
  );
}
