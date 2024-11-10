import React, { createContext, ReactNode, useContext, useState } from 'react';
import { GetRiderResponse } from '@/src/_api/get/riders/fetch-riders-response-type';
import { DEFAULT_RIDER_NOT_FOUND } from '@/src/global-constants';

interface RiderContextType {
  riderInfo: GetRiderResponse;
  setRiderInfo: (info: GetRiderResponse) => void;
  riderTeamMembers: GetRiderResponse[];
  setRiderTeamMembers: (members: GetRiderResponse[]) => void;
  errors: string[];
  setErrors: (errors: string[]) => void;
}

const defaultRiderContext: RiderContextType = {
  riderInfo: DEFAULT_RIDER_NOT_FOUND,
  setRiderInfo: () => {},
  riderTeamMembers: [],
  setRiderTeamMembers: () => {},
  errors: [],
  setErrors: () => {},
};

const RiderContext = createContext<RiderContextType>(defaultRiderContext);

interface RiderProviderProps {
  children: ReactNode;
  initialRiderInfo: GetRiderResponse;
  initialRiderTeamMembers: GetRiderResponse[];
}

export const RiderProvider: React.FC<RiderProviderProps> = ({
  children,
  initialRiderInfo = DEFAULT_RIDER_NOT_FOUND,
  initialRiderTeamMembers,
}) => {
  const [riderInfo, setRiderInfo] = useState<GetRiderResponse>(initialRiderInfo);
  const [riderTeamMembers, setRiderTeamMembers] =
    useState<GetRiderResponse[]>(initialRiderTeamMembers);
  const [errors, setErrors] = useState<string[]>([]);

  return (
    <RiderContext.Provider
      value={{ riderInfo, setRiderInfo, riderTeamMembers, setRiderTeamMembers, errors, setErrors }}
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
