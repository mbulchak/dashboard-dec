export const ComplianceDocumentation = () => {
  const complianceDocs = [
    'KYC verification',
    'Required Documentation',
    'Regulatory approval',
    'Financial Verification',
  ];
  return (
    <section>
      <div className='flex items-center gap-2 mb-[10px]'>
        <h3 className='text-[24px]'>Compliance & Documentation</h3>

        <p className='cursor-pointer text-[#3B82F6] text-[11px] shrink-0'>See history &rarr;</p>
      </div>

      <div className='max-w-[500px]  bg-[#1E2233] rounded-2xl  py-4 ps-[23px] grid grid-cols-2 gap-y-[15px]'>
        {complianceDocs.map((doc) => {
          return (
            <section key={doc} className='flex gap-[6px]'>
              <div
                className={`w-[16px] h-[16px] rounded-full flex items-center justify-center border border-green-400 text-green-400`}
              >
                <span className='text-[8px]'>&#10003;</span>
              </div>
              <p className='text-[13px]'>{doc}</p>
            </section>
          );
        })}
      </div>
    </section>
  );
};
