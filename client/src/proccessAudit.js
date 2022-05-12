export default function processAudit(pdfText){

    const major = /MAJOR:\s*(?!ADDL)\w*/;
    const addlmajors = /ADDL\sMAJORS:\s*\w*\n/;
    const minor = /MINOR:\s*(?!ADDL)\w*/;
    const addlminors = /ADDL\sMINORS:\s*\w*/;

    let majorMatch = '';
    let addlmajorsMatch = '';
    let minorMatch = '';
    let addlminorsMatch = '';

    const cisc_Req = [{name: "Computer Science Core", regEx: "NOTE: A \"C\" or \"S\" or better grade in courses"},
    {name: "Programming Language Principles", regEx: "NOTE: A \"C\" or \"S\" or better grade required"},
    {name: "Intensive System Software Development", regEx: "Intensive System Software Development"},
    {name: "Social Aspects of Computing", regEx: "Social Aspects of Computing - select one course:"},
    {name: "Computer Science Electives", regEx: "Computer Science Electives - select 9 credits:"},
    {name: "Mathematics", regEx: "Mathematics - select 17 credits:"},
    {name: "Physics and Laboratory Science", regEx: "Physics - select 4 courses:"},
    {name: "Science Sequence", regEx: "Option 5 - select a 2 course sequence in a second"}];


    //get major
    let matches = major.exec(pdfText)[0];
    majorMatch = cleanString(matches, 1);

    //get addl majors
    matches = addlmajors.exec(pdfText)[0];
    addlmajorsMatch = cleanString(matches, 2);

    //get minor
    matches = minor.exec(pdfText)[0];
    minorMatch = cleanString(matches, 1);

    //get addl minors
    matches = addlminors.exec(pdfText)[0];
    addlminorsMatch = cleanString(matches, 2);

    
    return {major: majorMatch, addlmajors: addlmajorsMatch, 
        minor: minorMatch, addlminors: addlminorsMatch}

}
function cleanString(string, index){
    string = string.replace(/\s+/g,' ').trim();
    return string.split(" ")[index] ? string.split(" ")[index] : "None";
  }