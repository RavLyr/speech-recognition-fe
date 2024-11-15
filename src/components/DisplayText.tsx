'use client'

import React from "react";
import { useTranscript } from "./TranscriptContext";

const TextDisplay = () => {
  const { messages } = useTranscript();

  return (
    <div className="text-display h-96 w-full bg-gray-900 text-blue-400 p-4 rounded-md break-words overflow-y-auto">
      {messages.map((msg, index) => (
        <p key={index} className="p-1">
          <strong>{msg.role}:</strong> {msg.content}
        </p>
      ))}
    </div>
  );
};

export default TextDisplay;