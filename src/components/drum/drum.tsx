import { DrumPad } from '.';
import { bankOne } from '../../constants';
import { Box, Main } from './drum.styles';
import useSound from 'use-sound';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AudioAtom, KeyAtom } from '../../state';
import KeyboardEventHandler from 'react-keyboard-event-handler';

export const Drum = (): JSX.Element => {
    const [ audio, setAudio ] = useRecoilState(AudioAtom);
    const keys = useRecoilValue(KeyAtom);
    const [ play ] = useSound(audio)

    console.log(keys)
    // const getKeys: string[] = bankOne.forEach((value: Bank) => {
    //     var temp: string[]
    //     bankOne.forEach((value: Bank) => {
        
    //         temp.push(value.keyTrigger)
    //     })
    //     return temp
    // })

    const clickHandler = (drum: string) => {   
        setAudio(bankOne.filter(x => x.id === drum)[0].url)
        play()
    }
   
    return (
        <Main>
             <KeyboardEventHandler handleKeys={["b"]} onKeyEvent={(key: string, e: Event) => console.log(`do something upon keydown event of ${key}`)} />
            <Box>
                <DrumPad onClick={clickHandler} bank={bankOne}/>
            </Box>
        </Main>
    );
}