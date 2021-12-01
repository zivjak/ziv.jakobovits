var imgs = [
    "DSC_0001.JPG",
    "DSC_0002.JPG",
    "DSC_0003.JPG",
    "DSC_0004.JPG",
    "DSC_0005.JPG",
    "DSC_0006.JPG",
    "DSC_0007.JPG",
    "DSC_0008.JPG",
    "DSC_0009.JPG",
    "DSC_0010.JPG"
];

var i=0;
function play(){
    setTimeout(()=> {
        document.getElementById("img").src = imgs[i];
        i++;
        if(i < imgs.length) {
            play();
        } else {
            i = 0;
        }
    }, 500)
}

var person = {
    fName: "Alma",
    lName: "Shacham",
    FullName: function(){
        return this.fname + '' + this.lName;
    }
}
console.log(person.FullName());
