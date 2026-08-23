function FocusSidebar() {
  const items = [
    <svg key="timer" viewBox="0 0 24 24" fill="none" className="size-[18px]" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8.5v3.8l2.2 1.4M9.5 3.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>,
    <svg key="home" viewBox="0 0 24 24" fill="none" className="size-[18px]" aria-hidden="true">
      <path d="m5 11 7-6 7 6v7.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.5 19.5v-5h5v5" stroke="currentColor" strokeWidth="1.5" />
    </svg>,
    <svg key="history" viewBox="0 0 24 24" fill="none" className="size-[18px]" aria-hidden="true">
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8.5V12l2.2 1.5M5.5 10.5 4 12l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="settings" viewBox="0 0 24 24" fill="none" className="size-[18px]" aria-hidden="true">
      <path d="m12 4 1 2.2 2.3.8 2.2-1 1.5 1.5-1 2.2.8 2.3 2.2 1v2.1l-2.2 1-.8 2.3 1 2.2-1.5 1.5-2.2-1-2.3.8-1 2.2H9.9l-1-2.2-2.3-.8-2.2 1-1.5-1.5 1-2.2-.8-2.3-2.2-1v-2.1l2.2-1 .8-2.3-1-2.2 1.5-1.5 2.2 1 2.3-.8 1-2.2H12Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="11" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>,
    <svg key="profile" viewBox="0 0 24 24" fill="none" className="size-[18px]" aria-hidden="true">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 19.5c.8-3.1 3-4.7 6.5-4.7s5.7 1.6 6.5 4.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,
  ]

  return (
    <nav className="absolute left-6 top-1/2 z-10 flex w-12 -translate-y-1/2 flex-col items-center overflow-hidden rounded-[22px] bg-[#1f1f1f] py-2 text-[#7e7e7e] shadow-[0_2px_10px_rgba(0,0,0,0.12)] max-sm:left-4" aria-label="Primary navigation">
      {items.map((icon, index) => (
        <button
          key={index} 
          type="button"
          aria-label={['Timer', 'Home', 'History', 'Settings', 'Profile'][index]}
          className={`flex h-12 w-12 items-center justify-center border-0 bg-transparent ${index === 0 ? 'text-[#222]' : 'text-[#7e7e7e]'}`}
        >
          <span className={`flex size-7 items-center justify-center rounded-[7px] ${index === 0 ? 'bg-[#f4f4f4]' : ''}`}>
            {icon}
          </span>
        </button>
      ))}
    </nav>
  )
}

export default FocusSidebar
