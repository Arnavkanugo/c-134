objects=[];
status="";
function draw()
{
   image(video,0,0,380,380);

   if(status!=""){
       r=random(5);
       g=random(5);
       b=random(255);
       objectDetector.detect(video,gotResult);
       for(i=0;i<objects.length;i++){
           document.getElementById("status").innerHTML="status:object detected";
           document.getElementById("number_of_object").innerHTML="number_of_object_detected_are_: "+objects.length;

           fill(r,g,b);
           percent=floor(objects[i].confidence*100);
           text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
           noFill();
           stroke(r,g,b);
           rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
       }
   }
}
function preload()
{
       img=loadImage("mu team.webp");
}
function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();

objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="status detecting object";
}
function modelloaded(){
console.log("modelloaded");
status=true;


}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }


 console.log(results);
 objects=results;

}
