import { useContext, useEffect } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Resume: React.FC = () => {
    const { history, rerender } = useContext(termContext);
    const pdfUrl = "./Diptayan_Resume.pdf"; // Replace with the URL of your PDF

    useEffect(() => {
        /* ===== get current command ===== */
        const currentCommand = _.split(history[0], " ");

        /* ===== check current command shows resume ===== */
        if (rerender && (currentCommand[0].toLowerCase() === "resume")) {
            window.open(pdfUrl);
        }
    }, [history, rerender]);

    return <span></span>;
};

export default Resume;

// import React, { useContext, useEffect, useRef } from "react";
// import _ from "lodash";
// import { termContext } from "../Terminal";

// const Resume: React.FC = () => {
//     const { history, rerender } = useContext(termContext);
//     const iframeRef = useRef<HTMLIFrameElement | null>(null);

//     useEffect(() => {
//         /* ===== get current command ===== */
//         const currentCommand = _.split(history[0], " ");

//         /* ===== check current command shows resume ===== */
//         if (rerender && (currentCommand[0].toLowerCase() === "resume")) {
//             // Replace "Diptayan_Resume.pdf" with the actual path to your resume file
//             const resumePath = "Diptayan_Resume.pdf";

//             if (iframeRef.current) {
//                 iframeRef.current.src = resumePath;
//             }
//         }
//     }, [history, rerender]);

//     return (
//         <div>
//             {/* Add an iframe to embed the PDF */}
//             <iframe
//                 ref={iframeRef}
//                 title="Resume"
//                 width="100%"
//                 height="800px"  // Adjust the height as needed
//                 frameBorder="0"
//             />
//         </div>
//     );
// };

// export default Resume;