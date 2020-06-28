document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('darkInput');
    console.log(button.value)
    // button.addEventListener('click',   
    button.onclick = function toggle(event) {
        // console.log(event)
        if (button.value == "TOGGLE DARK THEME") {
            // console.log("OFF")
            button.value = "TOGGLE LIGHT THEME";
            var my_body = document.body;
            if (my_body.className == 'web'){
                my_body.className = 'web dark'
                }
        } else {
            // console.log("ON")
            button.value = "TOGGLE DARK THEME";
            var my_body = document.body;
            if (my_body.className == 'web dark'){
                my_body.className = 'web'
                }
        }
      }
    
    
    // function() {
  
    //   chrome.tabs.getSelected(null, function(tab) {
    //     d = document;
    //     var flag = 0
  
    //     // var f = d.createElement('form');
    //     // f.action = 'http://gtmetrix.com/analyze.html?bm';
    //     // f.method = 'post';
    //     // var i = d.createElement('input');
    //     // i.type = 'hidden';
    //     // i.name = 'url';
    //     // i.value = tab.url;
    //     // f.appendChild(i);
    //     // d.body.appendChild(f);
    //     // f.submit();
    //   });
    // }
    // , false);
  }, false);