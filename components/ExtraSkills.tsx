import React from 'react';

interface ExtraSkillsProps {
  title: string[];
  results: string[];
  mainTitle?: string;
}

const ExtraSkills = ({ title, results, mainTitle }: ExtraSkillsProps) => {
  return (
    <section className="flex flex-col items-start mb-5">

      <h3 className="font-semibold text-lg mb-3">
        {mainTitle}
      </h3>

      {title.map((item, index) => (
        <div className="flex flex-row justify-start w-full flex-wrap mb-2" key={index}>

          <span className="text-base w-6/12 mb-0.5">
            {item}
          </span>
          <span className="text-base w-6/12 text-right mb-0.5">
            {results[index]}
          </span>


        </div>
      ))}
    </section>
  );
}

export { ExtraSkills };
