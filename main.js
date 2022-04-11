function setup() {
  canvas = createCanvas(250,250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded(){
  console.log("Model Loaded");
}
 function draw(){
   image(video,0,0,300,300);
   classifier.classify(video,gotResult);
 }

 var previous_result="";

 function gotResult(error,result){
if(error){
  console.log("error");
}else{
  if((result[0].confidence >0.5)&&(previous_result[0].label));
  console.log(result);
  previous_result=result[0].label;
  var synth=window.speechSynthesis;
  speak_data='object detected is '+result[0].label;
  var utterthis=new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterthis);

  document.getElementById("result_object").innerHTML=result[0].label;
  document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(3);
}

 }

