export function ProgressRing({
  time,
  className: extraClassName = "",
}) {
  // strokeDasharray → defines a draw–skip pattern along the stroke; once the pattern reaches the available stroke length, it stops.
  //strokeDashoffset → defines how far is stoke shifted from its original position along the path. 0 = no shift 20 = 20 unit shift from the original position.

  // These units are SVG units, not CSS px. Their value inside the SVG coordinate system is interpreted relative to the viewBox. For a 100-unit viewBox, 1 unit = 1% of that dimension; for a 200-unit viewBox, 1 unit = 0.5%. There is no fixed 1:1 relationship between SVG units and CSS px.
  const radius = 45; //default radius
  const circumference = 2 * Math.PI * radius; //2πr
  const progress = 0.75; //progressPercentage
  const strokeShift = circumference * (1 - progress);

  return (
    <svg viewBox="0 0 100 100" className={`-rotate-90 ${extraClassName} `}>
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#454546"
        strokeWidth="inherit"
        strokeLinecap="round"
        fill="none"
      />

      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="white"
        strokeWidth="inherit"
        strokeLinecap="round"
        fill="none"
        strokeDashoffset={strokeShift}
        strokeDasharray={circumference}
      />
    </svg>
  );
}
