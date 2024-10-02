import React from "react";

const RightSideBar = ({ components }) => {
  return (
    <div className="dark:bg-backgroundDark bg-backgroundLight overflow-y-auto text-textBlack dark:text-textWhite">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4 text-left ml-0">On this page</h2>
        <ul className=" flex flex-col gap-4 text-left bg-rounded-2xl">
          {components.map((component) => (
            <li key={component.name}>
              <a
                href={`#${component.id}`}
                className="text-sm font-poppins text-gray-700 dark:text-textWhite opacity-80 rounded-2xl  dark:hover:bg-darkBgHover py-3 px-1 hover:scale-105"
              >
                {component.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
