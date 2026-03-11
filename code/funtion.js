
const input = document.getElementById("fileInput");
const chat = document.getElementById("chat");

input.addEventListener("change", function(){

const file = this.files[0];
const reader = new FileReader();

reader.onload = function(){

const lines = reader.result.split("\n");

chat.innerHTML="";

lines.forEach(line=>{

const regex = /(.*?)- (.*?): (.*)/;
const match = line.match(regex);

if(match){

const time = match[1].trim();
const name = match[2].trim();
const message = match[3].trim();

const msgDiv = document.createElement("div");
msgDiv.classList.add("msg");

if(name.toLowerCase().includes("hridoy")){
msgDiv.classList.add("user");
}
else{
msgDiv.classList.add("other");
}

msgDiv.innerHTML = `
<div class="bubble">${message}</div>
<div class="time">${time} - ${name}</div>
`;

chat.appendChild(msgDiv);

}

});

chat.scrollTo({
top: chat.scrollHeight,
behavior:'smooth'
});

}

reader.readAsText(file);

});
