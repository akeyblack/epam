function httpGet(url) {
    return new Promise((res,rej) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if(this.status==200) 
                res(this.response);
            else {
                let error = new Error(this.statusText);
                error.code = this.status;
                rej(error);
            }
        }
        xhr.onerror = () => {
            rej(new Error("Rejected request"));
        }
        xhr.send();
    });
}
let struct = document.getElementsByClassName("struct")[0];
let spinner = document.getElementById("spinner");

function updateUsers(users)
{
    users.forEach(element => {
        let newEl = document.createElement('img');
        newEl.src = element.picture.large;
        newEl.className="photo";
        struct.appendChild(newEl);
    });
}

let isLoading = false;
function getPhotos (num) {
    httpGet(`https://randomuser.me/api/?results=${num}`)
    .then ( res => {
        spinner.hidden=true;
        updateUsers(JSON.parse(res).results);
	    isLoading=false;
    })
}    
getPhotos(50);

document.addEventListener('scroll', () => {
    if (!isLoading && document.documentElement.scrollTop>=document.documentElement.scrollHeight-document.documentElement.clientHeight) {
        spinner.hidden=false;
        isLoading = true;
        getPhotos(25);
    }
});
