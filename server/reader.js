
const { PdfReader } = require("pdfreader");


all = "";
major = "";
minor = "";
const major_reqs = [];
const major_req_fulfillers = [];
const gen_ed_reqs = [];//0 = math, 1 = writing, 2 = arts, 3 = humanities, 4 = nat sci, 5 = soc sci, 6 = hist, 7 = intern persp, 8 = for lang, 9 = chall 21
const gen_ed_strings = ["MATHEMATICS AND STATISTICS","WRITING AND CRITICAL INQUIRY","Note: Courses cannot double count with Humanities","Note: Courses cannot double count with Arts", "NATURAL SCIENCES", "SOCIAL SCIENCES", "U.S. HISTORY","INTERNATIONAL PERSPECTIVES","FOREIGN LANGUAGE","CHALLENGES FOR THE 21ST CENTURY"];
//0 if satisfied, 1 if not

new PdfReader().parseFileItems("Dylan_VanAllen_DegAudit.pdf", (err, item) => {
    if (err) console.error("error:", err);
    else if (!item) {
        if (all.search('MAJOR:') != -1) {
            major = all.slice(all.search('MAJOR:')+14,all.search("MAJOR:")+17);
        }
        if (all.search('MINOR:') != -1) {
            minor = all.slice(all.search('MINOR:')+14,all.search("MINOR:")+20);
        }
        
        for (let i = 0; i < gen_ed_strings.length; i++) {
          reqtext = all.slice(all.search(gen_ed_strings[i])+80,all.search(gen_ed_strings[i])+230);
          console.log(reqtext);
          if (reqtext.search("COMPLETED") != -1) gen_ed_reqs[i] = 1;
          else gen_ed_reqs[i] = 0;
        }
        console.log(gen_ed_reqs);
        console.log("Major: ",major);
        console.log("Minor: ",minor);
    } 
    else if (item.text) all+=item.text+"\n";
    
});