import { useRef, useState } from "react";
import { ProgressRing } from "./ProgressRing";
import { TimerControls } from "./TimerControls";
import { TimerDial } from "./TimerDial";
//!also ensure there is timer off variation the sound i mean.
export function Timer({ running, onToggle }) {
  const dialRef = useRef(null)
  const [isPause, setIsPause] = useState(false)
  const [isStop, setIsStop] = useState(false)




  /* function toggleTimer(isStart) {
    const dial = dialRef.current
    const value = Number(dial.value)
    dial.disabled = isStart ? true : false
    dial.classList[isStart ? "add" : "remove"]("user-select-none", 'caret-transparent')
    //--
    if (isStart) {
      dial.value = getTime(value)
    }


  } */


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const btnId = e.nativeEvent.submitter.id
        // const isStart = btnId === "start"
        // console.log(btnId, isStart)


        // toggleTimer(isStart)





      }}
      className="w-fit flex flex-col items-center"
      aria-label="Deep focus timer"
    >
      <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#858585]">
        <span
          className="size-1.5 rounded-full bg-[#858585]"
          aria-hidden="true"
        />
        <strong>DEEP FOCUS ACTIVE</strong>
      </div>

      <div className="relative mt-8">
        <ProgressRing className="size-70 stroke-[4px] md:size-75" />
        <div className="text-center absolute inset-0 flex flex-col gap-y-1 items-center justify-center ">

          <TimerDial isPause={isPause} isStop={isStop} dialRef={dialRef} />
          <b className="text-[11px] md:text-xs font-medium text-[#8E8E93]">
            REMAINING TIME
          </b>
        </div>
      </div>

      <TimerControls isPause={isPause} setIsPause={setIsPause} setIsStop={setIsStop} isStop={isStop} />
    </form>
  );
}
