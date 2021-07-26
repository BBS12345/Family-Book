var images=["https://www.pngitem.com/pimgs/m/120-1203252_clip-art-mom-png-for-mother-cartoon-png.png",
"https://www.pngitem.com/pimgs/m/120-1203252_clip-art-mom-png-for-mother-cartoon-png.png",
"https://www.pngitem.com/pimgs/m/120-1203252_clip-art-mom-png-for-mother-cartoon-png.png",
"https://cdn4.vectorstock.com/i/1000x1000/46/13/cute-grandfather-cartoon-vector-17814613.jpg"
];
var names=["Rupali Bajpai Sheryari","Riaz Boman Sheryari","Usha Bajpai","Ram Bajpai"];
var i=0;
function update(){
    i++;
    var no_of_people=4
    if (i>no_of_people){
        i=0;
    }
    var updatedImage=images[i];
    var updatedName=names[i];
    document.getElementById("album").src=updatedImage;
    document.getElementById("name").innerHTML=updatedName;
}
