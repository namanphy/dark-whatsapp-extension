document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('darkInput');
    console.log(button.value)  
    button.onclick = function toggle(event) {
        // console.log(event)
        if (button.value == "TOGGLE DARK THEME") {
            // console.log("OFF")
            button.value = "TOGGLE LIGHT THEME";
            chrome.tabs.executeScript({
                code: `var my_body = document.body;
                if (my_body.className == 'web'){
                    my_body.className = 'web dark'
                    }`
            })
        } else {
            // console.log("ON")
            button.value = "TOGGLE DARK THEME";
            chrome.tabs.executeScript({
                code: `var my_body = document.body;
                if (my_body.className == 'web dark'){
                    my_body.className = 'web'
                    }`
            })
        }
      }
  }, false);