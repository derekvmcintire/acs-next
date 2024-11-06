import React, { createContext, ReactNode, useContext, useState } from 'react';
import { GetRaceResultsResponse } from '@/src/_api/get/race/get-race-results-response-type';
import { GetRiderResponse } from '@/src/_api/get/riders/get-riders-response-type';
import { ExtendedRace } from '@/src/_types/extended-types';

interface RaceContextType {
  race?: ExtendedRace | undefined;
  setRace: (race: any) => void;
  results: GetRaceResultsResponse[];
  setResults: (result: any) => void;
  winner?: GetRiderResponse;
  setWinner: (winner: GetRiderResponse) => void;
  errors: string[];
  setErrors: (errors: string[]) => void;
}

export const defaultRaceContextValue: RaceContextType = {
  race: undefined,
  setRace: () => {},
  results: [],
  setResults: () => {},
  winner: undefined,
  setWinner: () => {},
  errors: [],
  setErrors: () => {},
};

const RaceContext = createContext<RaceContextType>(defaultRaceContextValue);

interface RaceProviderProps {
  children: ReactNode;
  initialRace?: ExtendedRace;
  initialResults?: GetRaceResultsResponse[];
  initialWinner?: GetRiderResponse;
}

export const RaceProvider: React.FC<RaceProviderProps> = ({
  children,
  initialRace = defaultRaceContextValue.race,
  initialResults = defaultRaceContextValue.results,
  initialWinner = defaultRaceContextValue.winner,
}) => {
  const [race, setRace] = useState<ExtendedRace | undefined>(initialRace);
  const [results, setResults] = useState<GetRaceResultsResponse[]>(initialResults);
  const [winner, setWinner] = useState<GetRiderResponse | undefined>(initialWinner);
  const [errors, setErrors] = useState<string[]>([]);

  return (
    <RaceContext.Provider
      value={{ race, setRace, results, setResults, errors, setErrors, winner, setWinner }}
    >
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
