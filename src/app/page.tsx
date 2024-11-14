import React from "react";
import Container from "@/components/Container";
import PushToTalk from "@/components/PushToTalk";
import TextDisplay from "@/components/DisplayText";
import { TranscriptProvider } from "@/components/TranscriptContext"; // Sesuaikan path-nya

export default function HomePage() {
  return (
    <main>
      <TranscriptProvider>
        <Container>
          <TextDisplay />
          <div className="flex justify-center mt-3">
            <PushToTalk />
          </div>
        </Container>
      </TranscriptProvider>
    </main>
  );
}
