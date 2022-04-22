
var taken_classes=['icsi201'];

topics_classes = [
    ["icsi201","icsi213"],
    ["icsi311"],
    ["icsi499"],
  ];

for (let i = 0; i < topics_classes.length; i++) {
    for (let j = 0; j < topic_classes[i]; j++) {
        if (topic_classes[i][j] in taken_classes) {
            //I have taken that class already.
        }
    }
}

console.log(topics_classes);