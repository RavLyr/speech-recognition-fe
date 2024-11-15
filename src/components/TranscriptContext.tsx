'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";

type Message = {
  role: 'User ' | 'Bot';
  content: string;
};

type TranscriptContextType = {
  messages: Message[];
  addMessage: (message: Message) => void;
};

const TranscriptContext = createContext<TranscriptContextType | undefined>(undefined);

export const TranscriptProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <TranscriptContext.Provider value={{ messages, addMessage }}>
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