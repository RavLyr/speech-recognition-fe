'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";



const TranscriptContext = createContext<TranscriptContextType | undefined>(undefined);

export const TranscriptProvider = ({ children }: { children: ReactNode }) => {
  const [transcript, setTranscript] = useState("");

  return (
    <TranscriptContext.Provider value={{ transcript, setTranscript }}>
      {children}
    </TranscriptContext.Provider>
  );
};

export const useTranscript = () => {
  const context = useContext(TranscriptContext);
  if (!context) {
    throw new Error("useTranscript must be used within a TranscriptProvider");
  }
  return context;
};
