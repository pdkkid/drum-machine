import { bankOne, bankTwo } from '../../constants'
export type Bank = {
    keyCode: number;
    keyTrigger: string;
    id: string;
    url: string;
}

export type DrumPadProps = {
    onClick: (id: string) => void;
    bank: Bank[];
};