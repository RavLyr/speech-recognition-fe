// src/global.d.ts

interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
}

interface TranscriptContextType {
  transcript: string;
  setTranscript: (text: string) => void;
}

interface SpeechRecognitionErrorEvent extends Event {
    error: string;
}

interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
  
  declare var SpeechRecognition: {
    prototype: SpeechRecognition;
    new (): SpeechRecognition;
  };
  
  declare var webkitSpeechRecognition: {
    prototype: SpeechRecognition;
    new (): SpeechRecognition;
  };
  