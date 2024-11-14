'use client'

import React, { useEffect, useState, useCallback } from "react";
import { Button } from "./ui/button";
import Microphone from "./microphone/Mic";
import MicOff from "./microphone/MicOff";
import { useTranscript } from "./TranscriptContext";

const PushToTalk = () => {
  const { setTranscript } = useTranscript();
  const [isListening, setIsListening] = useState(false);
  const [apiResponse, setApiResponse] = useState('')

  const sendDataToApi = async (data:string) => {
    try {
        const response = await axios
    } catch (error) {
        
    }
  }


  const handleSpeechRecognition = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "id-ID";
    recognition.interimResults = false;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcriptResult = event.results[0][0].transcript;
        setTranscript(transcriptResult);
      };
    
      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error("Terjadi kesalahan pengenalan suara:", event.error);
      };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening, setTranscript]);

  useEffect(() => {
    handleSpeechRecognition();
  }, [handleSpeechRecognition]);

  const handleButtonClick = () => {
    setIsListening((prevState) => !prevState);
  };

  return (
    <div>
      <Button onClick={handleButtonClick} className="w-16 h-16">
        {isListening ? <Microphone /> : <MicOff />}
      </Button>
    </div>
  );
};

export default PushToTalk;