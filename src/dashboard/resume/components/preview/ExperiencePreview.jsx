import React from 'react';

function ExperiencePreview({ resumeInfo }) {
  console.log(resumeInfo);

  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor || 'black',
        }}
      >
        Professional Experience
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor || 'black',
        }}
      />
      {resumeInfo?.Experience?.length > 0 ? (
        resumeInfo?.Experience?.map((experience, index) => (
          <div key={index} className="my-5">
            <h2
              className="text-sm font-bold"
              style={{
                color: resumeInfo?.themeColor || 'black',
              }}
            >
              {experience?.title}
            </h2>
            <h2 className="text-xs flex justify-between">
              {experience?.companyName}, {experience?.city}, {experience?.state}
              <span>
                {experience?.startDate} To {experience?.currentlyWorking ? 'Present' : experience.endDate}
              </span>
            </h2>
            <div
              className="text-xs my-2"
              dangerouslySetInnerHTML={{ __html: experience?.workSummery || '' }}
            />
          </div>
        ))
      ) : (
        <p>No experience added yet.</p>
      )}
    </div>
  );
}

export default ExperiencePreview;
