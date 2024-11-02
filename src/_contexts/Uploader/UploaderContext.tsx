import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IUploaderContext {
  selectedRace: any;
  setSelectedRace: (selectedRace: any) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  errors: string[];
  setErrors: (errors: string[]) => void;
  successMessage: string;
  setSuccessMessage: (successMessage: string) => void;
}

export const defaultUploaderContextValue: IUploaderContext = {
  selectedRace: '',
  setSelectedRace: () => {},
  isLoading: false,
  setIsLoading: () => {},
  errors: [],
  setErrors: () => {},
  successMessage: '',
  setSuccessMessage: () => {},
};

const UploaderContext = createContext<IUploaderContext>(defaultUploaderContextValue);

interface UploaderContextProviderProps {
  children: ReactNode;
  initialValue?: IUploaderContext;
}

export const UploaderContextProvider: React.FC<UploaderContextProviderProps> = ({
  children,
  initialValue = defaultUploaderContextValue,
}) => {
  const [selectedRace, setSelectedRace] = useState<any>(initialValue.selectedRace);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>(initialValue.errors);
  const [successMessage, setSuccessMessage] = useState<string>(initialValue.successMessage);

  return (
    <UploaderContext.Provider
      value={{
        selectedRace,
        setSelectedRace,
        isLoading,
        setIsLoading,
        errors,
        setErrors,
        successMessage,
        setSuccessMessage,
      }}
    >
      {children}
    </UploaderContext.Provider>
  );
};

export const useUploaderContext = (): IUploaderContext => {
  const context = useContext(UploaderContext);
  if (!context) {
    throw new Error('useUploaderContext must be used within a UploaderContextProvider');
  }
  return context;
};
