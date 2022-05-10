export default function processAudit(pdfText){

    const major = /MAJOR:\s*(?!ADDL)\w*/;
    const addlmajors = /ADDL\sMAJORS:\s*\w*\n/;
    const minor = /MINOR:\s*(?!ADDL)\w*/;
    const addlminors = /ADDL\sMINORS:\s*\w*\n/;


    //get major
    let matches = major.exec(pdfText)[0];
    matches = cleanString(matches, 1);
    console.log("Major: " + matches);

    //get addl majors
    matches = addlmajors.exec(pdfText)[0];
    matches = cleanString(matches, 2);
    console.log("Addl Majors: " + matches);

    //get minor
    matches = minor.exec(pdfText)[0];
    matches = cleanString(matches, 1);
    console.log("Minor: " + matches);

    //get addl minors
    matches = addlminors.exec(pdfText)[0];
    matches = cleanString(matches, 2);
    console.log("Addl Minors: " + matches);


}
function cleanString(string, index){
    string = string.replace(/\s+/g,' ').trim();
    return string.split(" ")[index] ? string.split(" ")[index] : "None";
  }