import React from 'react';

export const AccountStatus = () => {
  const stages = [
    {name: 'Submitted', completed: true},
    {name: 'Review', completed: true},
    {name: 'Quote', completed: true},
    {name: 'Bind', completed: true},
    {name: 'Issue', completed: true},
    {name: 'Renew', completed: false},
  ];

  return (
    <>
      <section className='flex flex-col gap-[10px] '>
        <h3 className='text-[24px]'>Account Status</h3>

        <div className='flex items-center justify-between max-w-[720px] 2xl:w-[720px] bg-[#1E2233] p-4 rounded-2xl'>
          {stages.map((stage, index) => (
            <React.Fragment key={stage.name}>
              <div className='flex flex-col items-center gap-[5px] '>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    stage.completed
                      ? 'border border-green-400 text-green-400'
                      : 'border border-dashed border-gray-400 text-gray-400'
                  }`}
                >
                  <span>&#10003;</span>
                </div>

                <div key={stage.name} className='text-normal text-center'>
                  {stage.name}
                </div>
              </div>

              {index !== stages.length - 1 && (
                <div
                  className={`flex-1 border-t-[1.5px] self-start mt-[12px] border-dashed ${
                    stages[index + 1].completed ? 'border-green-400' : 'border-gray-400'
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};
