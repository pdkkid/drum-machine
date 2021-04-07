import { atom } from "recoil";

export const AudioAtom = atom({
    key: 'audio',
    default: ''
});

export const KeyAtom = atom({
    key: 'keys',
    default: [""]
})
