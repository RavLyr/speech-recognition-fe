'use client'

import React from "react";
import { useTranscript } from "./TranscriptContext";

const TextDisplay = () => {
  const { transcript } = useTranscript();

  return (
    <div className="text-display h-96 w-full bg-gray-900 text-blue-400 p-4 rounded-md break-words overflow-y-auto">
      <p className="p-4">Transkrip: {transcript}</p>
    </div>
  );
};

export default TextDisplay;