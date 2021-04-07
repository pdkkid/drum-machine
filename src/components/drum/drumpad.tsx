import React, { Fragment, useEffect } from "react";
import { useRecoilState } from "recoil";
import { KeyAtom } from "../../state";
import { StyledPad } from "./drum.styles";
import { DrumPadProps } from "./drum.types";
export const DrumPad = (props: DrumPadProps): JSX.Element => {
  const { onClick, bank } = props;
  const [keys, setKeys] = useRecoilState(KeyAtom);
  const temp: string[] = [];

  const Entires = bank.map((pad) => {
    temp.push(pad.keyTrigger);
    return (
      <StyledPad onClick={() => onClick(pad.id)}>
        <div id={pad.id}>
          <audio id={pad.keyTrigger} src={pad.url} />
          {pad.keyTrigger}
        </div>
      </StyledPad>
    );
  });
  
  const handleKeys= (val: string[]): void => {
    setKeys(val);
  }

  useEffect(() => {
    if (temp.length < 9) {
      handleKeys(temp)
    }
  }, [temp]);
  return <Fragment>{Entires}</Fragment>;
};
