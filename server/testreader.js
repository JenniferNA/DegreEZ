export default function getText(){

    const { PdfReader } = require("pdfreader");
    let text;
    new PdfReader().parseFileItems("test.pdf", (err, item) => {
        if (err) console.error("error:", err);
        else if (!item) console.warn("end of file");
        else if (item.text) text+=item.text;
    });
    console.log(text);
    return text;

}