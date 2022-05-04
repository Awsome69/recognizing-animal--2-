function startClassification()
{
navigator.mediaDevices.getUserMedia({ aduio: true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gwyZIEY7P/model.json", modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}