import React from 'react';

function SummeryPreview({ resumeInfo }) {
  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Summary
      </h2>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      <div className="my-4">
        {/* Display the summery content */}
        <p className="text-xs text-justify">{resumeInfo?.summery}</p>
      </div>
    </div>
  );
}

export default SummeryPreview;
