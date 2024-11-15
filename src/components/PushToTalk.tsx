'use client'

import React, { useEffect, useState, useCallback } from "react";
import { Button } from "./ui/button";
import Microphone from "./microphone/Mic";
import MicOff from "./microphone/MicOff";
import { useTranscript } from "./TranscriptContext";
import axios from "axios";

const PushToTalk = () => {
  const { addMessage } = useTranscript();
  const [isListening, setIsListening] = useState<boolean>(false);

  const sendDataToApi = async (data: string) => {
    try {
      const response = await axios.post('https://47596c45-c829-4953-bd4b-24f2bf8eff14.mock.pstmn.io/api/asks', { question: data });
      const result = response.data;
      const botResponse = result.data.bot_response;

      // Add User and Bot messages
      addMessage({ role: 'User ', content: data });
      addMessage({ role: 'Bot', content: botResponse });
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };

  const handleSpeechRecognition = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "id-ID";
    recognition.interimResults = false;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcriptResult = event.results[0][0].transcript;
      sendDataToApi(transcriptResult);
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
  }, [isListening]);

  useEffect(() => {
    handleSpeechRecognition();
  }, [handleSpeechRecognition]);

  const handleButtonClick = () => {
    setIsListening((prev) => !prev);
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