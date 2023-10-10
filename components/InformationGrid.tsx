import React from 'react';

interface InformationGridProps {
  title: string[];
  results: string[];
  percentage?: number[];
  mainTitle?: string;
}

const InformationGrid = ({ title, results, percentage, mainTitle }: InformationGridProps) => {
  return (
    <section className="flex flex-col items-start mb-5">

      <h3 className="font-semibold text-lg mb-3">
        {mainTitle}
      </h3>

      {title.map((item, index) => (
        <div className="flex flex-row justify-between w-full flex-wrap mb-1.5" key={index}>

          <span className="text-base w-6/12 mb-0.5">
            {item}
          </span>
          <span className="text-base w-6/12 text-right mb-0.5">
            {results[index]}
          </span>

          {percentage && percentage[index] !== undefined && (
            <span style={{ width: `${percentage[index]}%` }} className={`bg-purple-950 h-1`}>
            </span>
          )}

        </div>
      ))}
    </section>
  );
}

export { InformationGrid };
