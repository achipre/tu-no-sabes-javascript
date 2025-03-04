export const ButtonAside = ({handleAside}) => {

  return (
    <button onClick={handleAside} className={`items-center fill-amber-900 hover:fill-[#f6e4c5] dark:hover:fill-amber-900 dark:fill-[#f6e4c5] p-2 text-lg font-bold rounded-sm hover:bg-amber-900 dark:hover:bg-[#FFF8E8] transition-all duration-500`}>
      <svg width="24px" height="24px" viewBox="0 0 24 24">
        <path d="M2.25,5A.75.75,0,0,1,3,4.25H16a.75.75,0,0,1,0,1.5H3A.75.75,0,0,1,2.25,5ZM21,11.25H3a.75.75,0,0,0,0,1.5H21a.75.75,0,0,0,0-1.5Zm-9,7H3a.75.75,0,0,0,0,1.5h9a.75.75,0,0,0,0-1.5Z"/>
      </svg>
    </button>
  )
}
