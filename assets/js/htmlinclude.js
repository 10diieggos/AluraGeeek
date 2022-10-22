/* You can use 
  <script src="https://unpkg.com/htmlincludejs"></script> 
instead this htmlinclude.js*/
document.addEventListener("DOMContentLoaded", function () {
  let includes = document.getElementsByTagName('include');
  for(var i=0; i<includes.length; i++){
      let include = includes[i];
      load_file(includes[i].attributes.src.value, function(text){
          include.insertAdjacentHTML('afterend', text);
          include.remove();
      });
  }
  function load_file(filename, callback) {
    fetch(filename).then(response => response.text()).then(text => callback(text))
      .then(() => {document.dispatchEvent(includeEvent)})
  }

  const includeEvent = new Event('includeEvent', {
    bubbles: true,
    cancelable: true,
    composed: false
  })
/*   setTimeout(() => {
    let loginButton = document.querySelector('header .login-link')
    console.log(loginButton)
  }, 200) */
});

/* https://devdojo.com/tnylea/include-html-inside-of-html */