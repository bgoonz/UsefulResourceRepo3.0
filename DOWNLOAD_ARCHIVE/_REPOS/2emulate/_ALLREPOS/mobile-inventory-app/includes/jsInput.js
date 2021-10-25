
function prepInput( id,text ) {
	if (!document.getElementById(id)) { return false; }	
		var elem = document.getElementById(id);
		elem.setAttribute('value', text);
    // store class name
		var origClass = elem.className;
        elem.onfocus = function() {
    // append 'focus' to class, emulates :focus pseudo-class for IE 
        this.className += " focus";
        this.select();
    }
    // return class name to origClass after element loses focus
    elem.onblur = function() {
     this.className = origClass;	
     }
    }	
    function classChange(styleChange,item){
    item.className = styleChange;
    }
	function idChange(styleChange,item){
    item.id = styleChange;
    }

 var req;
 /*
  * Get the second options by calling a Struts action
  */
 function retrieveSecondOptions(){
    
    firstBox = document.getElementById('firstBox');
    
    //Nothing selected
    if(firstBox.selectedIndex==0){
      return;
    }
    selectedOption = firstBox.options[firstBox.selectedIndex].value;
    //get the (form based) params to push up as part of the get request
    url="retrieveSecondOptionsAjaxAction.do?selectedOption="+selectedOption;
  
    //Do the Ajax call
    if (window.XMLHttpRequest){ // Non-IE browsers
      req = new XMLHttpRequest();
      //A call-back function is define so the browser knows which function to call after the server gives a reponse back
      req.onreadystatechange = populateSecondBox;
      try {
      	req.open("GET", url, true); //was get
      } catch (e) {
         alert("Cannot connect to server);
      }
      req.send(null);
    } else if (window.ActiveXObject) { // IE      
      req = new ActiveXObject("Microsoft.XMLHTTP");
      if (req) {
        req.onreadystatechange = populateSecondBox;
        req.open("GET", url, true);
        req.send();
      }
    }
  }
  
  //Callback function
  function populateSecondBox(){
  	document.getElementById('secondBox').options.length = 0;

    if (req.readyState == 4) { // Complete
      if (req.status == 200) { // OK response
         textToSplit = req.responseText
         if(textToSplit == '803'){
alert("No select option available on the server")
}
          //Split the document
          returnElements=textToSplit.split("||")
          
          //Process each of the elements 	
          for ( var i=0; i<returnelements .length; i++ ){
             valueLabelPair = returnElements[i].split("|")
             document.getElementById('secondBox').options[i] = new Option(valueLabelPair[0], valueLabelPair[1]);
          }
        }
      } else {  
            alert("Bad response by the server");
        }    
    }
    }


    