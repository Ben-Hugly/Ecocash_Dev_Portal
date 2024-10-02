import React from "react";

const Agreement = ({ agreementData }) => {
  return (
    <div className="font-poppins text-sm text-textBlack dark:text-textWhite ml-4 max-w-[1344px] flex flex-col gap-3">
      {agreementData.map((section, index) => (
        <Section
          key={section.number}
          title={section.title}
          number={section.number}
          intro={index === 0 ? section.intro : null}
          content={section.content}
        />
      ))}
    </div>
  );
};

const Section = ({ title, number, intro, content }) => (
  <div className="flex flex-col gap-3 pt-3">
    <div className="flex flex-row gap-3 text-[16px]">
      <span className="text-textBrightBlue">{number}</span>
      <span className="font-medium">{title}</span>
    </div>
    {intro && (
      <div className="flex flex-row gap-3 max-w-[1280px] px-6 font-thin opacity-90 text-[14px]">
        <span>1.1</span>
        <span>{intro}</span>
      </div>
    )}
    {content.map((item) =>
      item.term ? (
        <Definition
          key={item.number}
          number={item.number}
          term={item.term}
          description={item.description}
        />
      ) : (
        <Description
          key={item.number}
          number={item.number}
          description={item.description}
        />
      )
    )}
  </div>
);

const Definition = ({ number, term, description }) => (
  <div className="flex flex-row gap-3 max-w-[1280px] px-10 font-thin opacity-85 text-[13px]">
    <span>{number}</span>
    <span>
      <strong>"{term}" means</strong> {description}
    </span>
  </div>
);

const Description = ({ number, description }) => (
  <div className="flex flex-row gap-3 max-w-[1280px] px-6 font-thin opacity-80 text-[14px]">
    <span>{number}</span>
    <span>{description}</span>
  </div>
);

export default Agreement;
