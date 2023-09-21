export default function SubMenuItem({ section }) {
  return (
    <>
      <div className="group inline-block">
        <button className="outline-none focus:outline-none px-3 py-1  rounded-sm flex items-center min-w-[8rem]">
          <span className="hover:font-semibold flex-1 text-left py-2">
            {section.SectionName}
          </span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul className="bg-white border top-11 max-h-[15rem] overflow-y-scroll rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-[8rem]">
          {section.Screens.map((screen) => {
            return (
              <li
                key={screen.ScreenId}
                className="rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-semibold"
              >
                <button>{screen.ScreenName}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
