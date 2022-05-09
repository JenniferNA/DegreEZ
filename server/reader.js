
const { PdfReader } = require("pdfreader");

all = "";
major = "";
minor = "";


const required = [];
const priority = [];
const suggested = [];
const minor_reqs = [];//
const math_min_categories = []

const major_reqs = [];//
//0 if satisfied, 1 if not for gen eds
const gen_ed_reqs = [];//0 = math, 1 = writing, 2 = arts, 3 = humanities, 4 = nat sci, 5 = soc sci, 6 = hist, 7 = intern persp, 8 = for lang, 9 = chall 21
const gen_ed_strings = ["MATHEMATICS AND STATISTICS","WRITING AND CRITICAL INQUIRY","Note: Courses cannot double count with Humanities","Note: Courses cannot double count with Arts", "NATURAL SCIENCES", "SOCIAL SCIENCES", "U.S. HISTORY","INTERNATIONAL PERSPECTIVES","FOREIGN LANGUAGE","CHALLENGES FOR THE 21ST CENTURY"];



const major_map = new Map();
cat_map = new Map();
const classes_map = new Map();
//Each major must be added to the map
var fs = require('fs'); 
const { parse } = require('csv-parse');
var parser = parse({relax_column_count: true, quote: '', ltrim: true, rtrim: true, delimiter: ',' },function (err, records) {
  if (err) console.error("error:", err);
  for (i = 0; i < records.length; i++) major_map.set(records[i][0],records[i].slice(1,records[i].length-1))
});
fs.createReadStream('major_info.csv').pipe(parser);

var parser = parse({relax_column_count: true, quote: '', ltrim: true, rtrim: true, delimiter: ',' },function (err, records) {
  if (err) console.error("error:", err);
  for (i = 0; i < records.length; i++) classes_map.set(records[i][0],records[i][1])
});
fs.createReadStream('classes.csv').pipe(parser);



new PdfReader().parseFileItems("quinten_audit.pdf", (err, item) => {
    if (err) console.error("error:", err);
    else if (!item) {
      //Major information
        if (all.search('MAJOR:') != -1) {
            major = all.slice(all.search('MAJOR:')+6,all.search("MAJORS:")-5).trim();
        }
        if (all.search('MINOR:') != -1) {
            minor = all.slice(all.search('MINOR:')+6,all.search("MINORS:")-5).trim();
        }
        //Populate gen_ed_reqs array with info
        for (let i = 0; i < gen_ed_strings.length; i++) {
          reqtext = all.slice(all.search(gen_ed_strings[i])+80,all.search(gen_ed_strings[i])+130);
          if (reqtext.indexOf("+     COMPLETED") != -1) gen_ed_reqs[i] = 1;
          else gen_ed_reqs[i] = 0;
        }
        //Populate major_reqs array with info
        major_text = all.slice(all.search("CHECK RESIDENCE REQUIREMENT>>>>")+80,all.search("ADVANCE COURSE CHECK IS COMPLETE"));
        total = 0;
        for (let i = 0; i < (major_map.get(major)).length; i++) {
          reqtext = major_text.slice(major_text.search(major_map.get(major)[i])-10,major_text.search(major_map.get(major)[i])+200);
          if (!reqtext) console.log("not found: "+major_map.get(major)[i]);
          if (reqtext.indexOf("+") != -1) major_reqs[i] = 1;
          else if (reqtext.indexOf("+") == -1){
            major_reqs[i] = 0;
            const catrecords = [];
            var cat_parser = parse({relax_column_count: true, quote: '', ltrim: true, rtrim: true, delimiter: ',' },function (err, records) {
              if (err) console.error("error:", err);
              for (let j = 0; j < major_reqs.length; j++) {
                var a = records[j][1].split('+');
                for (let k = 0; k < a.length; k++) {
                  if(!(a[k] === '') && required.includes(a[k]) == false && all.slice(all.search("====  UALBANY ACADEMIC SUMMARY  ====")+80,all.indexOf("****  LEGEND  ****")).indexOf(a[k]) == -1) {
                    required.push(a[k]);
                  }
                }
              }
              if (i=== (major_map.get(major)).length-1) {
                //Here get suggested classes
                console.log("remaining classes:");
                console.log(required)
                for (let classindex = 0; classindex < required.length; classindex++) {
                  //check if class has prereq
                  if (classes_map.has(required[classindex])) {
                    var prereqs = classes_map.get(required[classindex]).split('+');
                      for (let reqi = 0; reqi < prereqs.length; reqi++) {
                        if (required.includes(prereqs[reqi])) {
                          priority.push(prereqs[reqi]);
                        }
                      }
                  }
                }
                console.log("Priority classes:");
                console.log(priority);

                for (let classindex = 0; classindex < required.length; classindex++) {
                  if (priority.includes(required[classindex]) && classes_map.has(required[classindex]) == false) {
                    suggested.push(required[classindex]);
                  }
                  else if (priority.includes(required[classindex]) && classes_map.has(required[classindex]) == true) {
                    var prereqs = classes_map.get(required[classindex]).split('+');
                    var a = true;
                    for (let reqi = 0; reqi < prereqs.length; reqi++) {
                      if (required.includes(prereqs[reqi])) {
                        a = false;
                      }
                    }
                    if (a == true) {
                      suggested.push(required[classindex]);
                    }
                  }
                }
                console.log("Suggested classes:");
                console.log(suggested);
              }
              else catrecords.push(records);
            });
            fs.createReadStream(major+'.csv').pipe(cat_parser);
          }
        }
        

        math_minor = all.slice(all.search("Mathematics Minor"))
        
        console.log(major_reqs);
        console.log(gen_ed_reqs);
        console.log("Major: ",major);
        console.log("Minor: ",minor);

    }
    else if (item.text) all+=item.text+"\n";
    
});


