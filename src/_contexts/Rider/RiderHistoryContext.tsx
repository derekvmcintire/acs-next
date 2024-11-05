import React, { createContext, ReactNode, useContext, useState } from 'react';
import { YearlyResults } from '@/src/_types/extended-types';
import { sortRacingDataByYear } from '../../_components/Rider/utils';

interface IRiderHistoryContext {
  history: YearlyResults[];
  setHistory: (history: YearlyResults[]) => void;
}

const defaultRiderHistory: IRiderHistoryContext = {
  history: [],
  setHistory: () => {},
};

const RiderHistoryContext = createContext<IRiderHistoryContext>(defaultRiderHistory);

interface RiderHistoryProviderProps {
  children: ReactNode;
  initialHistory: YearlyResults[];
}

export const RiderHistoryProvider: React.FC<RiderHistoryProviderProps> = ({
  children,
  initialHistory = defaultRiderHistory.history,
}) => {
  const sortedHistory = sortRacingDataByYear(initialHistory);
  const [history, setHistory] = useState<YearlyResults[]>(sortedHistory);

  return (
    <RiderHistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </RiderHistoryContext.Provider>
  );
};

export const useRiderHistory = (): IRiderHistoryContext => {
  const context = useContext(RiderHistoryContext);
  if (!context) {
    throw new Error('useRacerHistory must be used within a RacerHistoryProvider');
  }
  return context;
};
