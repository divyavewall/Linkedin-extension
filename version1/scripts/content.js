let ulHeader =  document.querySelector("ul.global-nav__primary-items");

let liViewPosts = document.createElement("li");
liViewPosts.classList.add("global-nav__primary-item");

let anchorViewPosts = document.createElement("a");
anchorViewPosts.setAttribute("target", "_blank");
anchorViewPosts.setAttribute("href", "https://www.linkedin.com/my-items/saved-posts/");
anchorViewPosts.classList.add("app-aware-link", "global-nav__primary-link");


let outerDiv = document.createElement("div");
outerDiv.classList.add("ivm-image-view-model", "global-nav__icon-ivm");

let innerDiv = document.createElement("div");
innerDiv.classList.add("ivm-view-att__img-wrapper", "display-flex");

let img = document.createElement("img");
img.setAttribute("src", chrome.runtime.getURL("images/save.png"));
img.setAttribute("id", "savedPostsImg")

innerDiv.appendChild(img);
outerDiv.appendChild(innerDiv);
anchorViewPosts.appendChild(outerDiv);

let spanViewPosts = document.createElement("span");
spanViewPosts.classList.add("t-12", "break-words", "block", "t-black--light", "t-normalglobal-nav__primary-link-text");
spanViewPosts.innerHTML = "Saved";

anchorViewPosts.appendChild(spanViewPosts);
liViewPosts.appendChild(anchorViewPosts);
ulHeader.appendChild(liViewPosts);


let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.lang = "en-in";
speechRecognition.start();

speechRecognition.onresult = (event) =>{
    let transcript = event.results[event.resultIndex][0].transcript;
    console.log(event);
    if(transcript.trim().toLowerCase().includes("open post")){
        anchorViewPosts.click();
    }
};