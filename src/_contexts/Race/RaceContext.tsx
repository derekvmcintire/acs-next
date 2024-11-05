import React, { createContext, ReactNode, useContext, useState } from 'react';
import { GetRaceResultsResponse } from '@/src/_api/get/race/get-race-results-response-type';
import { IRace } from '@/src/_types';

interface RaceContextType {
  race?: IRace | undefined;
  setRace: (race: any) => void;
  results: GetRaceResultsResponse[];
  setResults: (result: any) => void;
  errors: string[];
  setErrors: (errors: string[]) => void;
}

const defaultValue: RaceContextType = {
  race: undefined,
  setRace: () => {},
  results: [],
  setResults: () => {},
  errors: [],
  setErrors: () => {},
};

const RaceContext = createContext<RaceContextType>(defaultValue);

interface RaceProviderProps {
  children: ReactNode;
  initialRace?: IRace;
  initialResults?: GetRaceResultsResponse[];
}

export const RaceProvider: React.FC<RaceProviderProps> = ({
  children,
  initialRace = defaultValue.race,
  initialResults = defaultValue.results,
}) => {
  const [race, setRace] = useState<IRace | undefined>(initialRace);
  const [results, setResults] = useState<GetRaceResultsResponse[]>(initialResults);
  const [errors, setErrors] = useState<string[]>([]);

  return (
    <RaceContext.Provider value={{ race, setRace, results, setResults, errors, setErrors }}>
      {children}
    </RaceContext.Provider>
  );
};

export const useRaceContext = (): RaceContextType => {
  const context = useContext(RaceContext);
  if (!context) {
    throw new Error('useRaceContext must be used within a MyContextProvider');
  }
  return context;
};
