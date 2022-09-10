



      function enableTab(id) {
    var el = document.getElementById(id);
    el.onkeydown = function(e) {
        if (e.keyCode === 9) { // tab was pressed

            // get caret position/selection
            var val = this.value,
                start = this.selectionStart,
                end = this.selectionEnd;

            // set textarea value to: text before caret + tab + text after caret
            this.value = val.substring(0, start) + '\t' + val.substring(end);

            // put caret at right position again
            this.selectionStart = this.selectionEnd = start + 1;

            // prevent the focus lose
            return false;

        }
    };
}

// Enable the tab character onkeypress (onkeydown) inside textarea...
// ... for a textarea that has an `id="my-textarea"`
enableTab('codearea');



     function submitFormData(checker=false) {
        console.log(checker)




            var http = new XMLHttpRequest();

            var url = '/runcode';
            var code= document.getElementById('codearea').value;
            var params = 'codearea=' + code
            http.open('POST', url, true);

            //Send the header information
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            http.onreadystatechange = function() {
                if (http.readyState == 4 && http.status == 200) {
                 //    console.log("Form submitted successfully");
                 //    document.getElementById("post-form").reset();
                 // document.querySelectorAll('.autoRun')[0].checked = false;

                    document.getElementById('output').value = http.responseText;
                    document.getElementById('codearea').value= code.trimRight()
                    
                }
            }

            // Send params with request
            http.send(params);
        }
          // window.onload = setInterval(submitFormData,3000);




 function checkerFFF(){
      let checker = document.querySelectorAll('.autoRun')[0].checked;
      if (checker == true){
submitFormData(checker);
              checker= false;
              console.log(checker)
              }}


        window.onload = setInterval(checkerFFF,5000);




