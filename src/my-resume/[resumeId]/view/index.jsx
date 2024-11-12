// import Header from "@/components/custom/Header";
// import { Button } from "@/components/ui/button";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import ResumePreview from "@/dashboard/resume/components/ResumePreview";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import GlobalApi from "./../../../../service/GlobalApi";
// import { RWebShare } from "react-web-share";

// function ViewResume() {
//   const [resumeInfo, setResumeInfo] = useState();
//   const { resumeId } = useParams();

//   useEffect(() => {
//     GetResumeInfo();
//   }, []);

//   const GetResumeInfo = () => {
//     GlobalApi.GetResumeById(resumeId).then((resp) => {
//       console.log(resp.data.data);
//       setResumeInfo(resp.data.data);
//     });
//   };

//   const HandleDownload = () => {
//     window.print();
//   };

//   return (
//     <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
//       <div id="no-print">
//         <Header />

//         <div className="my-10 mx-10 md:mx-20 lg:mx-36">
//           <h2 className="text-center text-2xl font-medium">
//             Congrats! Your Ultimate AI generated Resume is ready!
//           </h2>
//           <p className="text-center text-gray-400">
//             Now you are ready to download your resume and share the unique
//             resume URL with your friends and family.
//           </p>
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-44 my-10">
//             <Button onClick={HandleDownload} className="w-full md:w-auto">
//               Download
//             </Button>

//             <RWebShare
//               data={{
//                 text: "Hello Everyone, This is my resume please open the URL to see it",
//                 url: `${import.meta.env.
//                     VITE_BASE_URL}my-resume/${resumeId}/view`,
//                 title: `${resumeInfo?.firstName} ${resumeInfo?.lastName} resume`,
//               }}
//               onClick={() => console.log("Shared successfully!")}
//             >
//               <Button className="w-full md:w-auto">Share</Button>
//             </RWebShare>
//           </div>
//         </div>
//       </div>

//       <div className="my-10 mx-10 md:mx-20 lg:mx-36">
//         <div id="print-area">
//           {/* Pass the theme color to ResumePreview */}
//           <ResumePreview
//             themeColor={resumeInfo?.themeColor || "#defaultColor"}
//           />
//         </div>
//       </div>
//     </ResumeInfoContext.Provider>
//   );
// }

// export default ViewResume;


import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import ResumePreview from "@/dashboard/resume/components/ResumePreview";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../service/GlobalApi";
import { RWebShare } from "react-web-share";

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState(null); // Start with null, not undefined
  const { resumeId } = useParams();

  useEffect(() => {
    GetResumeInfo();
  }, []);

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId)
      .then((resp) => {
        console.log(resp.data.data);
        setResumeInfo(resp.data.data);
      })
      .catch((error) => {
        console.error("Failed to fetch resume:", error);
        // Add error handling (e.g., show a message to the user)
      });
  };

  const HandleDownload = () => {
    window.print();
  };

  if (!resumeInfo) {
    return <div>Loading...</div>; // Show a loading state until resumeInfo is fetched
  }

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />

        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Congrats! Your Ultimate AI-generated Resume is ready!
          </h2>
          <p className="text-center text-gray-400">
            Now you are ready to download your resume and share the unique resume URL with your friends and family.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-44 my-10">
            <Button onClick={HandleDownload} className="w-full md:w-auto">
              Download
            </Button>

            <RWebShare
              data={{
                text: "Hello Everyone, This is my resume please open the URL to see it",
                url: `${import.meta.env.VITE_BASE_URL}my-resume/${resumeId}/view`,
                title: `${resumeInfo.firstName} ${resumeInfo.lastName} resume`,
              }}
              onClick={() => console.log("Shared successfully!")}
            >
              <Button className="w-full md:w-auto">Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>

      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <div id="print-area">
          {/* Pass the theme color to ResumePreview */}
          <ResumePreview themeColor={resumeInfo.themeColor || "#defaultColor"} />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
