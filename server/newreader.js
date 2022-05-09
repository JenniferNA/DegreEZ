
const fs = require('fs');
const pdf = require('pdf-parse');

export default function processAudit(){

  let dataBuffer = fs.readFileSync('/uploads/Audit.pdf');

  let text = await pdf(dataBuffer).then(function(data) {

      const major = /MAJOR:\s*\w*/;
      const addlmajors = /ADDL\sMAJORS:\s*\w*\n/;
      const minor = /MINOR:\s*\w*/;
      const addlminors = /ADDL\sMINORS:\s*\w*\n/;

      // number of pages
      //console.log(data.numpages);
      // number of rendered pages
      //console.log(data.numrender);
      // PDF info
      //console.log(data.info);
      // PDF metadata
      //console.log(data.metadata); 
      // PDF.js version
      // check https://mozilla.github.io/pdf.js/getting_started/
      //console.log(data.version);
      // PDF text
      console.log(data.text); 

      return data.text;

      //get major
      let matches = major.exec(data.text)[0];
      matches = cleanString(matches, 1);
      console.log("Major: " + matches);

      //get addl majors
      matches = addlmajors.exec(data.text)[0];
      matches = cleanString(matches, 2);
      console.log("Addl Majors: " + matches);

      //get minor
      matches = minor.exec(data.text)[0];
      matches = cleanString(matches, 1);
      console.log("Minor: " + matches);

      //get addl minors
      matches = addlminors.exec(data.text)[0];
      matches = cleanString(matches, 2);
      console.log("Addl Minors: " + matches);
      
  });

  console.log(text);
  return text;
}


function cleanString(string, index){
  string = string.replace(/\s+/g,' ').trim();
  return string.split(" ")[index] ? string.split(" ")[index] : "None";
}