import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import file from "../resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




class Resume extends React.Component{
render(){
    return(
        <div>
            <Document 
            file={file}
            ><Page 
            pageNumber={1}
            />
            </Document>
        </div>
    )
}
}

export default Resume

