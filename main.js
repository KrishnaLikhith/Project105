//https://teachablemachine.withgoogle.com/models/Oryk00WEh/
Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_img" src="' + data_uri + '">';
    });
}
console.log('ml5 version is ' + ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Oryk00WEh/model.json',modelloaded);
function modelloaded(){
    console.log("Model is Loaded");

}
function check(){
    img = document.getElementById("capture_img");
    classifier.classify(img, gotresult);
}
function gotresult(error,results){
    if (error){
console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}