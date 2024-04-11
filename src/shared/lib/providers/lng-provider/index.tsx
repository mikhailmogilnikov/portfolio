import { createContext, useContext } from 'react';

const LangContext = createContext({});

type Props = {
  children: React.ReactNode;
  lng: string;
};

export const LanguageProvider = ({ children, lng }: Props) => (
  <LangContext.Provider value={lng}>{children}</LangContext.Provider>
);

export const useLangContext = () => useContext(LangContext);
