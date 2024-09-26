import React from "react";

const RightSideBar = ({ components }) => {
  return (
    <div className="dark:bg-backgroundDark bg-white shadow-md w-[250px] overflow-y-auto text-textBlack dark:text-textWhite">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4 text-left ml-2">On this page</h2>
        <ul className=" ml-10 flex flex-col gap-4 text-left bg-rounded-2xl">
          {components.map((component) => (
            <li key={component.name}>
              <a
                href={`#${component.id}`}
                className="text-sm font-poppins text-gray-700 dark:text-textWhite opacity-80"
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
