"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <TextRevealCard
      text="You host the Events"
      revealText="We'll get the Crowd!"
    >
      <TextRevealCardTitle>Get those Participants In!</TextRevealCardTitle>
    </TextRevealCard>
  );
}
