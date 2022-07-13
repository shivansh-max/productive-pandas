import { Dispatch, SetStateAction } from "react";

export interface CmdProps{
    second: boolean,
    setSecond: Dispatch<SetStateAction<boolean>>
}