import { ProgressRing } from "./ProgressRing";

export function Timer({ running, onToggle }) {
  return (
    <section
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

      <div className="relative ">
        <ProgressRing className="size-68" />
        <div className="text-center absolute inset-0 flex flex-col gap-y-1 items-center justify-center ">
          <h2 className="text-[clamp(3.25rem,8vw,5.5rem)] font-poppins w-[calc(100% + 4px)] font-bold text-white">
            12:45
          </h2>
          <b className="text-[11px] md:text-xs font-medium text-[#8E8E93]">
            REMAINING TIME
          </b>
        </div>
      </div>
      <button
        onClick={() => {}}
        aria-label={running ? "Pause focus timer" : "Start focus timer"}
        className="mt-7 flex rounded-full bg-black shadow-md  "
      >
        {/* //pause play logic */}
      </button>
    </section>
  );
}
