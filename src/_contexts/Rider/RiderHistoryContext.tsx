import React, { createContext, ReactNode, useContext, useState } from 'react';
import { sortRacingDataByYear } from '../../_components/Rider/utils';
import { IRaceYear } from '../../_types';

interface IRiderHistoryContext {
  history: IRaceYear[];
  setHistory: (history: IRaceYear[]) => void;
}

const defaultRiderHistory: IRiderHistoryContext = {
  history: [],
  setHistory: () => {},
};

const RiderHistoryContext = createContext<IRiderHistoryContext>(defaultRiderHistory);

interface RiderHistoryProviderProps {
  children: ReactNode;
  initialHistory: IRaceYear[];
}

export const RiderHistoryProvider: React.FC<RiderHistoryProviderProps> = ({
  children,
  initialHistory = defaultRiderHistory.history,
}) => {
  const sortedHistory = sortRacingDataByYear(initialHistory);
  const [history, setHistory] = useState<IRaceYear[]>(sortedHistory);

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
