import { useState } from "react"

export function TimerDial({ isPause, isStop, dialRef }) {
    const [minute, setMinute] = useState(90);
    const isDisable = isPause || isStop;

    function getTime(minutes) {
        //make it a hook it is used more.
        //ouput on HH:MM:SS, take minutes as input
        const hours = Math.floor(minutes / 60)
        const mins = Math.floor(minutes % 60)
        const seconds = Math.floor((minutes * 60) % 60)
        const format = (num) => {
            if (num !== 0) return String(num).padStart(2, "0")
            return "00"
        }
        const timeArr = []
        for (const n of [hours, mins, seconds]) {
            const res = format(n);
            timeArr.push(res)
            //work on this validation later

        }
        //time
        return timeArr.join(":")
    }



    //!add validation to make sure the value is between 25 and 120 later
    {/* <h2 className="text-[clamp(48px,8vw,64px)] hidden font-poppins font-bold text-white">
            12:45
          </h2> */}
    const className = "text-[clamp(48px,8vw,64px)] w-1/2 disabled:w-full disabled:user-select-none disabled:caret-transparent text-white focus:outline-none focus:ring-1 font-bold text-center rounded-sm ring-[#858585] font-poppins"
    return (
        <input ref={dialRef} onChange={(e) => {
            const value = e.currentTarget.value
            if (value.length <= 3) setMinute(e.currentTarget.value)
        }} type="string" value={isDisable ? getTime(minute) : minute} disabled={isDisable} className={className} min="25" max="120" required />

    )
}
