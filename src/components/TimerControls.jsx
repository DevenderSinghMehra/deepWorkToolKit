import { useState } from "react";
import { Icon } from "./Icon";
import { IconBtn } from "./IconBtn";

export function TimerControls({ isPause, setIsPause, setIsStop, isStop }) {
    //!later add a sliding animation there. 
    //!later add button should be disable if input is not with in the range.

    function clickHandler() {
        setIsPause(!isPause)
    }



    return (<div className={`mt-7 *:rounded-3xl *:bg-[#1C1C1E] *:px-4.5 *:py-4 ${isPause ? "flex gap-x-4" : ""}`}>

        {isPause ?

            <>
                <IconBtn
                    onClick={clickHandler}
                    id="pause"
                    aria-label="Pause focus timer"
                    iconClassName="size-6 fill-white"
                    iconName="pause"
                />
                <IconBtn
                    onClick={() => {
                        const value = !isStop
                        setIsStop(value)
                        setIsPause(value)//perhaps need to take it off
                    }}
                    type="submit"
                    id="stop"
                    aria-label="terminate current timer"
                    iconClassName="size-6 fill-white"
                    iconName="stop"
                />
            </>
            :
            <IconBtn
                onClick={clickHandler}
                id="start"
                aria-label="Start focus timer"
                iconClassName="size-6 fill-white"
                iconName="start"
            />

        }
    </div >)



}