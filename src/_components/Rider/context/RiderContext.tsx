// RiderContext.tsx
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { IRiderInfo } from '@/src/_types';
import { DEFAULT_RIDER_NOT_FOUND } from '@/src/global-constants';

interface RiderContextType {
  riderInfo: IRiderInfo;
  setRiderInfo: (info: IRiderInfo) => void;
  riderTeamMembers: IRiderInfo[];
  setRiderTeamMembers: (members: IRiderInfo[]) => void;
}

const defaultRiderContext: RiderContextType = {
  riderInfo: DEFAULT_RIDER_NOT_FOUND,
  setRiderInfo: () => {},
  riderTeamMembers: [],
  setRiderTeamMembers: () => {},
};

const RiderContext = createContext<RiderContextType>(defaultRiderContext);

interface RiderProviderProps {
  children: ReactNode;
  initialRiderInfo: IRiderInfo;
  initialRiderTeamMembers: IRiderInfo[];
}

export const RiderProvider: React.FC<RiderProviderProps> = ({
  children,
  initialRiderInfo = DEFAULT_RIDER_NOT_FOUND,
  initialRiderTeamMembers,
}) => {
  const [riderInfo, setRiderInfo] = useState<IRiderInfo>(initialRiderInfo);
  const [riderTeamMembers, setRiderTeamMembers] = useState<IRiderInfo[]>(initialRiderTeamMembers);

  return (
    <RiderContext.Provider
      value={{ riderInfo, setRiderInfo, riderTeamMembers, setRiderTeamMembers }}
    >
      {children}
    </RiderContext.Provider>
  );
};

export const useRider = (): RiderContextType => {
  const context = useContext(RiderContext);
  if (!context) {
    throw new Error('useRider must be used within a RiderProvider');
  }
  return context;
};
