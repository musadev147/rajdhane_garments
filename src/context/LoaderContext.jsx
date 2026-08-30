import React, { createContext, useState, useContext } from 'react';

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Loading...');

  const showLoader = (text = 'Loading...') => {
    setLoadingText(text);
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
      {isLoading && (
        <div className="global-loader-overlay">
          <div className="loader-content">
            <div className="premium-spinner">
              <div className="spinner-circle"></div>
              <div className="spinner-circle-inner"></div>
            </div>
            <div className="loader-text">{loadingText}</div>
          </div>
        </div>
      )}
    </LoaderContext.Provider>
  );
};
