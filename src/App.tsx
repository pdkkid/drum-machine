import React, { Fragment } from "react";
import { Title, Source, Section } from './app.styles';
import { Drum } from "./components";

export const App = (): JSX.Element => {
  return (
    <Section>
      <Title>Drum Machine</Title>
      <Drum/>
      <Source>
         <a href="https://github.com/pdkkid/drum-machine/"
          target="_blank"
          rel="noreferrer noopener"
          >Source</a>
      </Source>
    </Section>
  );
};