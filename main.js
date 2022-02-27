
var recognition = new webkitSpeechRecognition();
const speakerText = document.getElementById('speakerText')
// console.log(recognition)

recognition.onresult = function(e){
    var text = e.results[0][0].transcript;
    speakerText.innerText = text;
    read(text)
}

const read = (text) => {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text == 'hello'){
        speech.text = "yes how can i help you"
    }else if(text == 'what is your name' || text == 'who are you'){
        speech.text = "this is elsa. i am a listener and your assistant"
    }else if(text == "do you love me"){
        speech.text == "no. i do not know you.do not waste your time by using me"
    }else if(text == 'what is love' ){
        speech.text = "yes it is just emotion nothing more"
    }
    else if(text == 'how many friends do you have' || text =="do you have any friends" || text =="do you have friends"){
        speech.text = "no. i have no friend. actually i am introvert"
    }
    else{
        speech.text = "please try again"
    }

    window.speechSynthesis.speak(speech);
}