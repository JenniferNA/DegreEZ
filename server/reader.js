
const { PdfReader } = require("pdfreader");


all = "";
major = "";
minor = "";


const minor_reqs = [];//
const math_min_categories = []

const major_reqs = [];//
//0 if satisfied, 1 if not for gen eds
const gen_ed_reqs = [];//0 = math, 1 = writing, 2 = arts, 3 = humanities, 4 = nat sci, 5 = soc sci, 6 = hist, 7 = intern persp, 8 = for lang, 9 = chall 21
const gen_ed_strings = ["MATHEMATICS AND STATISTICS","WRITING AND CRITICAL INQUIRY","Note: Courses cannot double count with Humanities","Note: Courses cannot double count with Arts", "NATURAL SCIENCES", "SOCIAL SCIENCES", "U.S. HISTORY","INTERNATIONAL PERSPECTIVES","FOREIGN LANGUAGE","CHALLENGES FOR THE 21ST CENTURY"];

const comp_sci_categories = ['NOTE: A "C" or "S" or better grade required',"Social Aspects of Computing - select one course:","Computer Science Electives - select 9 credits:","Mathematics - select 17 credits:","Physics - select 4 courses:","Option"];

new PdfReader().parseFileItems("jens_degree_audit.pdf", (err, item) => {
    if (err) console.error("error:", err);
    else if (!item) {
        if (all.search('MAJOR:') != -1) {
            major = all.slice(all.search('MAJOR:')+14,all.search("MAJOR:")+17);
        }
        if (all.search('MINOR:') != -1) {
            minor = all.slice(all.search('MINOR:')+14,all.search("MINOR:")+20);
        }
        //Populate gen_ed_reqs array with info
        for (let i = 0; i < gen_ed_strings.length; i++) {
          reqtext = all.slice(all.search(gen_ed_strings[i])+80,all.search(gen_ed_strings[i])+130);
          if (reqtext.indexOf("+     COMPLETED") != -1) gen_ed_reqs[i] = 1;
          else gen_ed_reqs[i] = 0;
        }
        //Populate major_reqs array with info
        major_text = all.slice(all.search("CHECK RESIDENCE REQUIREMENT>>>>")+80,all.search("300-599 Advance Course Check"));
        for (let i = 0; i < comp_sci_categories.length; i++) {
          reqtext = major_text.slice(major_text.search(comp_sci_categories[i])-10,major_text.search(comp_sci_categories[i])+200);
          if (!reqtext) console.log("not found");
          if (reqtext.indexOf("+") != -1) major_reqs[i] = 1;
          else gen_ed_reqs[i] = 0;
        }

        math_minor = all.slice(all.search("Mathematics Minor"))
        
        console.log(major_reqs);
        console.log(gen_ed_reqs);
        console.log("Major: ",major);
        console.log("Minor: ",minor);

    }
    else if (item.text) all+=item.text+"\n";
    
});


