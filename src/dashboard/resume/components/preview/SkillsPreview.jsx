import React from 'react';

function SkillsPreview({ resumeInfo }) {
  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Skills
      </h2>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      <div className="my-4">
        {resumeInfo?.skills?.map((skill, index) => (
          <div key={index} className="my-2">
            <div className="flex justify-between">
              <h2 className="text-xs">{skill?.name}</h2>
              <h2 className="text-xs">{skill?.rating * 20}%</h2>
            </div>
            <div className="h-2 bg-gray-200 w-[120px]">
              <div
                className="h-2"
                style={{
                  backgroundColor: resumeInfo?.themeColor,
                  width: skill?.rating * 20 + '%',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
