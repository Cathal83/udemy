document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "data.txt", true);

  // OPTIONAL - used for spinners/loaders
  xhr.onprogress = function() {
    console.log("READYSTATE", xhr.readyState);
  };

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  /** 
   * Older Version of onload
   * 
        xhr.onreadystatechange = function(){
            if(this.status === 200 && this.readState ===4){
                console.log(this.responseText);
            }
        }
    */

  xhr.onerror = function() {
    console.log("Request error...");
  };
  xhr.send();
}
