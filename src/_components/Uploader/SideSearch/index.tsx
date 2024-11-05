'use client';

import React from 'react';
import InfoBlock from '../../UI/InfoBlock/InfoBlock';
import RaceSearch from './RaceSearch';
import SuggestedRaces from './SuggestedRaces';
import classes from './side-search.module.css';

export default function SideSearch() {
  return (
    <InfoBlock leftHanded className={classes.raceSearchInfoBlock} title="Search for a Race">
      <RaceSearch />
      <SuggestedRaces />
    </InfoBlock>
  );
}
