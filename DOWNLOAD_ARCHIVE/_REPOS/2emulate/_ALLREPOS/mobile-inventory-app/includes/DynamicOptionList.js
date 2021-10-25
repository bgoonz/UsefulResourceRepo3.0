// *****************************************************************
// File:       DynamicOptionList.js	
// 
// Created by: Wenlong Wang (wwang@vicr.com)
// Some basic functions: Modified from Matt Kruse
// 
// Date:       03/18/2002
// Copyright by Vicor 2002
//
// Version history
// r1.21 W.W 11/12/02  Add a populate function, populate_unique(), to
//                     populae the list without the duplicates. create
//                     the populate_unique() for check box too.
// r1.1 W.W  06/28/02  Adding new functionality, The target list is
//                     updated by click the check box or radio button
// r1.0 W.W  04/08/02  The target list is updated dynamically by click
//                     other list(s)
// *****************************************************************

// ===================================================================
// 
// The following are the usage instructions. For CIMNET application,
// Please put the init() in the <body > tag and disable the 
// Generic.js or initiate Generic.js after init()
// If the source (dependent) is selection list, call populate(), init()
//    function.
// If the source (dependent) is checkbox or radio button, call
//    populate_from_chkbox() and init_from_chkbox()
// 
// ===================================================================

/* 
DynamicOptionList.js

DESCRIPTION: This library allows you to create dynamic select list contents,
when the options in a list depend on which item is selected 
in another list or checkbox, or radio button. It correctly supports multiple
selection lists, checkbox, and radio button, including maintaining the
selected state of dynamic options.


USAGE:
// Create a new DynamicOptionList object
// Pass it the NAME of its select list, then the NAME of each list that it
// is dependent on. In this example, the contents of the SELECT list named
// "oper_id" is being defined, and its contents depend on this value selected in
// list "prod_line"

var list_oper_id = new DynamicOptionList("oper","prod_line");

// Add options to the list
// The contents of this list depend on the value selected in "prod_line".So, the 
// first argument to this function is the value of "prod_line" which these values
// correspond to. Then text/value pairs follow as the other arguments.
// In this example, if list "prod_line" has "VI300" selected as its value, then 
// the contents of list "oper_id" will be "10" and "990".
// You can add as many options as you wish in this call, or you may separate
// it into just one option added per call to addOptions()

list_oper_id.addOptions("VI300","oper10_desc","10","oper990_desc","990");

// When the new list is generated, you can set which of the options will be
// the default selected value. The first argument to this function is the
// value of the parent list that this default corresponds to.
// In this example, if list "prod_line" as "VI300" selected then list "oper_id" 
// will be populated with "10" as the default option.

list_oper_id.setDefaultOption("VI300","10");

// This example creates a third-level list
// The contents of list "cell_id" depend on the values selected 
// in both list "prod_line"
// and list "oper_id". So when the new DynamicOptionList object is created, it
// is passed both "prod_line" and "oper_id" as the parent select lists

var list_cell_id = new DynamicOptionList("cell_id","prod_line","oper_id");

// The contents of list "cell_id" depend on both "prod_line" 
// and "oper_id". So when the contents of list "cell_id" are defined,
// they must be given for each possible combination of the selected
// values of "prod_line" and "oper_id". This is done by combining the values
// with a delimiter character. The default delimiter is "|" - this may be
// changed by calling setDelimiter(value).
// In this example, list "cell_id" will contain the options "986" and 
// "985" if the value of list "prod_line" is "VI300" 
/  and the value of list "oper_id" is
// "990". Similar style is used when defining the default option.

list_cell_id.addOptions("VI300|990","cell985_desc","985","cell986_desc","986");

// Once the lists are defined (presumably in the HEAD of your HTML document)
// then several changes need to be made in the HTML itself to trigger the
// population of the lists.

//If the dependencies are list you must use the following init function
// Add calls in the onLoad of your BODY tag to initialize the dynamic lists.
// Pass a reference to the FORM that they belong to. This must be done onLoad
// of the document because before that point the FORM object does not exist.

<BODY onLoad="list_oper_id.init(document.forms[0]); list_cell_id.init(document.forms[0]);">

//If the dependencies are checkboxes you must use the following init function
// Add calls in the onLoad of your BODY tag to initialize the dynamic lists.
// Pass a reference to the FORM that they belong to. This must be done onLoad
// of the document because before that point the FORM object does not exist.

<BODY onLoad="list_oper_id.init_from_chkbox(document.forms[0]); 
list_cell_id.init_from_chkbox(document.forms[0]);">


// In each of the parent select lists, add an onChange handler to trigger the
// population of the child lists. populate() must be called on each list that
// depends on this select element. Since list "oper_id" 
// depends on "prod_line" and list "cell_id" depends on both "prod_line" 
// and "oper_id", both must be populated when "prod_line" is changed.
// When list "oper_id" is changed, only list "cell_id" needs to be populated.

<SELECT NAME="prod_line" onChange="list_oper_id.populate(); list_cell_id.populate();">
...
<SELECT NAME="oper_id" onChange="list_cell_id.populate();">

// Netscape<6 does not create new Options correctly. If you have no OPTION 
// tags in your SELECT list, newly-created OPTIONS will not display correctly.
// Also, Netscape does not change the size of the SELECT list depending on its
// contents. So if it is empty by default and then is populated with options,
// it will not expand to fit the whole text in the option space.
// To work around these bugs, blank OPTION tags are generated for Netscape.
// The last OPTION tag is given display text equal to the longest possible 
// OPTION text value that the list will ever hold. This ensures that there will
// be enough room to display all possible values in the SELECT list.
// Call printOptions() inside the SELECT list to generate these blank OPTION
// tags. For browsers other than Netscape<=4.x, this will not do anything.
// NOTE: In this example, the SCRIPT and /SCRIPT are split up because
// otherwise Netscape gets confused. In your actual source, do NOT include the
// space between R and I.

<SELECT NAME="oper_id" onChange="list_cell_id.populate();">
	<SCR IPT LANGUAGE="JavaScript">list_oper_id.printOptions();</SCR IPT>
</SELECT>

//If the dependencies are checkboxes you must use the following init function
// Add calls in the onLoad of your BODY tag to initialize the dynamic lists.
// Pass a reference to the FORM that they belong to. This must be done onLoad
// of the document because before that point the FORM object does not exist.

<BODY onLoad="list_oper_id.init_from_chkbox(document.forms[0]); 
list_cell_id.init_from_chkbox(document.forms[0]);">

// In each of the parent checkboxes, add an onClick handler to trigger the
// population of the child lists. populate_from_chkbox() must be called 
// on each list that
// depends on this checkbox element. However, this functionality does not
// support 3 or 3+ level mixed dependencies. This means that the multiple
// dependents are always checkboxes, not the mixture of checkbox and 
// selection list.

<SELECT NAME="prod_line" onChange="list_oper_id.populate(); list_cell_id.populate();">




// That's it!  Contact Wenlong if you have any questions or
// comments

NOTES:
	None

*/ 


// CONSTRUCTOR
// Pass in the name of the element, then the names of the lists it depends on
function DynamicOptionList() 
{
	if (arguments.length < 2) 
	{ alert("Not enough arguments in DynamicOptionList()"); }
	
	// Name of the list containing dynamic values
	this.target = arguments[0];
	
	// Set the lists that this dynamic list depends on
	this.dependencies = new Array();
	for (var i=1; i<arguments.length; i++) {
	  this.dependencies[this.dependencies.length] = arguments[i];
	}
	
	// The form this list belongs to
	this.form = null;
	
	// Place-holder for currently-selected 
	// values of dependent select lists
	this.dependentValues = new Object();
	
	// Hold default values to be selected for conditions
	this.defaultValues = new Object();
	
	// Storage for the dynamic values
	this.options = new Object();
	
	// Delimiter between dependent values
	this.delimiter = "|";
	
	// Logest string currently a potential options (for Netscape)
	this.longestString = "";
	
	// The total number of options that might be displayed, 
	// to build dummy options (for Netscape)
	this.numberOfOptions = 0;
	
	// Method mappings
	this.addOptions = DynamicOptionList_addOptions;
	this.populate = DynamicOptionList_populate;
	this.populate_unique = DynamicOptionList_populate_unique;
	this.populate_from_chkbox = DynamicOptionList_populate_from_chkbox;
	this.populate_unique_from_chkbox = DynamicOptionList_populate_unique_from_chkbox;
	this.setDelimiter = DynamicOptionList_setDelimiter;
	this.setDefaultOption = DynamicOptionList_setDefaultOption;
	this.printOptions = DynamicOptionList_printOptions;
	this.init = DynamicOptionList_init;
	this.init_from_chkbox = DynamicOptionList_init_from_chkbox;
	this.init_from_desinated_chkbox = DynamicOptionList_init_from_desinated_chkbox;
        this.populate_from_desinated_chkbox = 
	       DynamicOptionList_populate_from_desinated_chkbox; 
}

// Set the delimiter to something other than 
// when defining condition values
function DynamicOptionList_setDelimiter(val) 
{
	this.delimiter = val;
}

// Set the default option to be selected when the list is painted
function DynamicOptionList_setDefaultOption(condition, val) 
{
	this.defaultValues[condition] = val;
}

// Init call to map the form to the object and populate it
// This init func is only used if the dependent(s) are list(s)
// It can't be used from checkbox initialization
function DynamicOptionList_init(theform) 
{
	alert('Bang!');
        this.form = theform;
	this.populate();
}

// Init call to map the form to the object and populate it
// This init func is only used if the dependent(s) are checkbox(es)
// It can't be used from list initialization
function DynamicOptionList_init_from_chkbox(theform) 
{
	this.form = theform;
	this.populate_from_chkbox();
}

// Init call to map the form to the object and populate it
// This init func is only used if the dependent(s) are checkbox(es)
// It can't be used from list initialization
function DynamicOptionList_init_from_desinated_chkbox(theform, dest) 
{
	var v_dest = dest;
	this.form = theform;
	this.populate_from_desinated_chkbox(v_dest);
}

// Add options to the list.
// Pass the condition string, then the list of 
//text/value pairs that populate the list	
function DynamicOptionList_addOptions(dependentValue) 
{
   if (typeof this.options[dependentValue] != "object") 
   { this.options[dependentValue] = new Array(); }

   for (var i=1; i<arguments.length; i+=2) 
   {
       // Keep track of the longest potential string, 
       // to draw the option list
       if (arguments[i].length > this.longestString.length) {
			this.longestString = arguments[i];
       }
       this.numberOfOptions++;
       this.options[dependentValue][this.options[dependentValue].length] = 
                                                               arguments[i];
       this.options[dependentValue][this.options[dependentValue].length] = 
                                                             arguments[i+1];
   }
}

// Print dummy options so Netscape behaves nicely
function DynamicOptionList_printOptions() 
{
   // Only need to write out "dummy" options for Netscape
   if ((navigator.appName == 'Netscape') 
        && (parseInt(navigator.appVersion) <= 4))
   {
      var ret = "";
      for (var i=0; i<this.numberOfOptions; i++) { 
	 ret += "<OPTION>";
      }
      ret += "<OPTION>"
      for (var i=0; i<this.longestString.length; i++) {
       	 ret += "_";
      }
      document.writeln(ret);
    }
}

// Populate the target list from other lists
function DynamicOptionList_populate() 
{
   var theform = this.form;
   var i,j,obj,obj2;

   

   // Get the current value(s) of 
   //all select lists this list depends on
   this.dependentValues = new Object;
   var dependentValuesInitialized = false;
   for (i=0; i<this.dependencies.length;i++) 
   {
      var sel = theform[this.dependencies[i]];
      var selName = sel.name;
      
      // If this is the first dependent list, 
      // just fill in the dependentValues
      if (!dependentValuesInitialized) 
      {
 	 dependentValuesInitialized = true;
	 for (j=0; j<sel.options.length; j++) 
	 {
	    if (sel.options[j].selected) 
	    {
	       this.dependentValues[sel.options[j].value] = true;
	    }
	 }
       }
       
       // Otherwise, add new options for every existing option
       else 
       {
	  var tmpList = new Object();
	  var newList = new Object();
	  for (j=0; j<sel.options.length; j++) 
	  {
	     if (sel.options[j].selected) 
	     {
		tmpList[sel.options[j].value] = true;
	     }
	  }
	  for (obj in this.dependentValues) 
	  {
	     for (obj2 in tmpList) 
	     {
		newList[obj + this.delimiter + obj2] = true;
	     }
	  }
	  this.dependentValues = newList;
      }
   }

   var targetSel = theform[this.target];
		
   // Store the currently-selected values of the target list 
   // to maintain them (in case of multiple select lists)
   var targetSelected = new Object();
   for (i=0; i<targetSel.options.length; i++) 
   {
      if (targetSel.options[i].selected) 
      {
	 targetSelected[targetSel.options[i].value] = true;
      }
   }
   targetSel.options.length = 0; // Clear all target options
		
   for (i in this.dependentValues) 
   {
      if (typeof this.options[i] == "object") 
      {
	var o = this.options[i];
	for (j=0; j<o.length; j+=2) 
	{
	   var text = o[j];
	   var val = o[j+1];

	   targetSel.options[targetSel.options.length] = 
	            new Option(text, val, false, false);
	   if (this.defaultValues[i] == val) 
	   {
	      targetSelected[val] = true;
	   }
	}
      }
   }
      
   targetSel.selectedIndex=-1;
	
   // Select the options that were selected before
   for (i=0; i<targetSel.options.length; i++) 
   {
      if (targetSelected[targetSel.options[i].value] != null 
	 && targetSelected[targetSel.options[i].value]==true) 
      {
	targetSel.options[i].selected = true;
      }
   }
}

// Populate the target list without duplicates from other lists
function DynamicOptionList_populate_unique() 
{
   var theform = this.form;
   var i,j,obj,obj2;

   // Get the current value(s) of 
   //all select lists this list depends on
   this.dependentValues = new Object;
   var dependentValuesInitialized = false;
   for (i=0; i<this.dependencies.length;i++) 
   {
      var sel = theform[this.dependencies[i]];
      var selName = sel.name;
      
      // If this is the first dependent list, 
      // just fill in the dependentValues
      if (!dependentValuesInitialized) 
      {
 	 dependentValuesInitialized = true;
	 for (j=0; j<sel.options.length; j++) 
	 {
	    if (sel.options[j].selected) 
	    {
	       this.dependentValues[sel.options[j].value] = true;
	    }
	 }
       }
       
       // Otherwise, add new options for every existing option
       else 
       {
	  var tmpList = new Object();
	  var newList = new Object();
	  for (j=0; j<sel.options.length; j++) 
	  {
	     if (sel.options[j].selected) 
	     {
		tmpList[sel.options[j].value] = true;
	     }
	  }
	  for (obj in this.dependentValues) 
	  {
	     for (obj2 in tmpList) 
	     {
		newList[obj + this.delimiter + obj2] = true;
	     }
	  }
	  this.dependentValues = newList;
      }
   }

   var targetSel = theform[this.target];
		
   // Store the currently-selected values of the target list 
   // to maintain them (in case of multiple select lists)
   var targetSelected = new Object();
   for (i=0; i<targetSel.options.length; i++) 
   {
      if (targetSel.options[i].selected) 
      {
	 targetSelected[targetSel.options[i].value] = true;
      }
   }
   targetSel.options.length = 0; // Clear all target options
		
   for (i in this.dependentValues) 
   {
      if (typeof this.options[i] == "object") 
      {
	var o = this.options[i];
	for (j=0; j<o.length; j+=2) 
	{
	   var text = o[j];
	   var val = o[j+1];

	   targetSel.options[targetSel.options.length] = 
	            new Option(text, val, false, false);
	   if (this.defaultValues[i] == val) 
	   {
	      targetSelected[val] = true;
	   }
	}
      }
   }
      
   targetSel.selectedIndex=-1;
	
   // Select the options that were selected before
   for (i=0; i<targetSel.options.length; i++) 
   {
      if (targetSelected[targetSel.options[i].value] != null 
	 && targetSelected[targetSel.options[i].value]==true) 
      {
	targetSel.options[i].selected = true;
      }
   }

   //remove the duplicate
   for (i=0; i<targetSel.options.length; i++) 
   {
      for (k=0; k<i; k++)
      {
        if(targetSel.options[i].value == targetSel.options[k].value)
        {
           targetSel.remove(i);
	   i--;
	   break;

	}
      }
   }

   //sort by value

  // disabled if there are performance issues
   var temp_text;
   var temp_value;
   var temp_defaultSelected;
   var temp_selected;
   for (i=0; i<targetSel.options.length-1; i++) 
   {
      for(j=0; j< targetSel.options.length -1 -i; j++)
      {
        if(targetSel.options[j].value == "All")
	  continue;
        if(targetSel.options[j].value > targetSel.options[j+1].value
	   || targetSel.options[j+1].value == "All")
	{
           temp_text = targetSel.options[j].text;
	   temp_value = targetSel.options[j].value;
	   temp_defaultSelected = targetSel.options[j].defaultSelected;
	   temp_selected = targetSel.options[j].selected;

	   targetSel.options[j].text = targetSel.options[j+1].text;
	   targetSel.options[j].value = targetSel.options[j+1].value;
	   targetSel.options[j].defaultSelected = targetSel.options[j+1].defaultSelected; 
	   targetSel.options[j].selected = targetSel.options[j+1].selected;
	
	   targetSel.options[j+1].text = temp_text;
	   targetSel.options[j+1].value = temp_value;
	   targetSel.options[j+1].defaultSelected = temp_defaultSelected; 
	   targetSel.options[j+1].selected = temp_selected;
	
	}
      }
   }

   //
}

// Populate the target list from the ckeck box 
function DynamicOptionList_populate_from_chkbox() 
{
   var theform = this.form;
   var i,j,obj,obj2;

   // Get the current value(s) of 
   //all check boxs this list depends on
   this.dependentValues = new Object;
   var dependentValuesInitialized = false;
   
   //alert("dependencies length: " + this.dependencies.length); 
   for (i=0; i<this.dependencies.length;i++) 
   {
      var sel = theform[this.dependencies[i]];
      //var sel = this.dependencies[i] ;
      
      //alert("boxname: " + this.dependencies[i]);
      // If this is the first dependent list, 
      // just fill in the dependentValues
      
      //alert("Checkbox length: " + sel.length);
      if (!dependentValuesInitialized) 
      {
 	 dependentValuesInitialized = true;
	 for (j=0; j<sel.length; j++) 
	 {
            //alert("Checkbox i= " + j);
	    if (sel[j].checked) 
	    {
	       this.dependentValues[sel[j].value] = true;
	    }
	 }
       }
       
       // Otherwise, add new options for every existing option
       else 
       {
	  var tmpList = new Object();
	  var newList = new Object();
	  for (j=0; j<sel.length; j++) 
	  {
	     if (sel[j].checked) 
	     {
		tmpList[sel[j].value] = true;
	     }
	  }
	  for (obj in this.dependentValues) 
	  {
	     for (obj2 in tmpList) 
	     {
		newList[obj + this.delimiter + obj2] = true;
	     }
	  }
	  this.dependentValues = newList;
      }
   }

   var targetSel = theform[this.target];
		
   // Store the currently-selected values of the target list 
   // to maintain them (in case of multiple select lists)
   var targetSelected = new Object();
   for (i=0; i<targetSel.options.length; i++) 
   {
      if (targetSel.options[i].selected) 
      {
	 targetSelected[targetSel.options[i].value] = true;
      }
   }
   
   targetSel.options.length = 0; // Clear all target options
		
   for (i in this.dependentValues) 
   {
      if (typeof this.options[i] == "object") 
      {
	var o = this.options[i];
	for (j=0; j<o.length; j+=2) 
	{
	   var text = o[j];
	   var val = o[j+1];
	   targetSel.options[targetSel.options.length] = 
	            new Option(text, val, false, false);
	   if (this.defaultValues[i] == val) 
	   {
	      targetSelected[val] = true;
	   }
	}
      }
   }
      
   targetSel.selectedIndex=-1;
	
   // Select the options that were selected before
   for (i=0; i<targetSel.options.length; i++) 
   {
      if (targetSelected[targetSel.options[i].value] != null 
	 && targetSelected[targetSel.options[i].value]==true) 
      {
	targetSel.options[i].selected = true;
      }
   }
}

// Populate the target list without duplicates from the ckeck box 
function DynamicOptionList_populate_unique_from_chkbox() 
{
   var theform = this.form;
   var i,j,obj,obj2;

   // Get the current value(s) of 
   //all check boxs this list depends on
   this.dependentValues = new Object;
   var dependentValuesInitialized = false;
   
   //alert("dependencies length: " + this.dependencies.length); 
   for (i=0; i<this.dependencies.length;i++) 
   {
      var sel = theform[this.dependencies[i]];
      //var sel = this.dependencies[i] ;
      
      //alert("boxname: " + this.dependencies[i]);
      // If this is the first dependent list, 
      // just fill in the dependentValues
      
      //alert("Checkbox length: " + sel.length);
      if (!dependentValuesInitialized) 
      {
 	 dependentValuesInitialized = true;
	 for (j=0; j<sel.length; j++) 
	 {
            //alert("Checkbox i= " + j);
	    if (sel[j].checked) 
	    {
	       this.dependentValues[sel[j].value] = true;
	    }
	 }
       }
       
       // Otherwise, add new options for every existing option
       else 
       {
	  var tmpList = new Object();
	  var newList = new Object();
	  for (j=0; j<sel.length; j++) 
	  {
	     if (sel[j].checked) 
	     {
		tmpList[sel[j].value] = true;
	     }
	  }
	  for (obj in this.dependentValues) 
	  {
	     for (obj2 in tmpList) 
	     {
		newList[obj + this.delimiter + obj2] = true;
	     }
	  }
	  this.dependentValues = newList;
      }
   }

   var targetSel = theform[this.target];
		
   // Store the currently-selected values of the target list 
   // to maintain them (in case of multiple select lists)
   var targetSelected = new Object();
   for (i=0; i<targetSel.options.length; i++) 
   {
      if (targetSel.options[i].selected) 
      {
	 targetSelected[targetSel.options[i].value] = true;
      }
   }
   
   targetSel.options.length = 0; // Clear all target options
		
   for (i in this.dependentValues) 
   {
      if (typeof this.options[i] == "object") 
      {
	var o = this.options[i];
	for (j=0; j<o.length; j+=2) 
	{
	   var text = o[j];
	   var val = o[j+1];
	   targetSel.options[targetSel.options.length] = 
	            new Option(text, val, false, false);
	   if (this.defaultValues[i] == val) 
	   {
	      targetSelected[val] = true;
	   }
	}
      }
   }
      
   targetSel.selectedIndex=-1;
	
   // Select the options that were selected before
   for (i=0; i<targetSel.options.length; i++) 
   {
      if (targetSelected[targetSel.options[i].value] != null 
	 && targetSelected[targetSel.options[i].value]==true) 
      {
	targetSel.options[i].selected = true;
      }
   }
   
   //remove the duplicate
   for (i=0; i<targetSel.options.length; i++) 
   {
      for (k=0; k<i; k++)
      {
        if(targetSel.options[i].value == targetSel.options[k].value)
        {
           targetSel.remove(i);
	   i--;
	   break;

	}
      }
   }
  
  // disabled if there are performance issues
   var temp_text;
   var temp_value;
   var temp_defaultSelected;
   var temp_selected;
   for (i=0; i<targetSel.options.length-1; i++) 
   {
      for(j=0; j< targetSel.options.length -1 -i; j++)
      {
        if(targetSel.options[j].value == "All")
	  continue;
        if(targetSel.options[j].value > targetSel.options[j+1].value
	   || targetSel.options[j+1].value == "All")
	{
           temp_text = targetSel.options[j].text;
	   temp_value = targetSel.options[j].value;
	   temp_defaultSelected = targetSel.options[j].defaultSelected;
	   temp_selected = targetSel.options[j].selected;

	   targetSel.options[j].text = targetSel.options[j+1].text;
	   targetSel.options[j].value = targetSel.options[j+1].value;
	   targetSel.options[j].defaultSelected = targetSel.options[j+1].defaultSelected; 
	   targetSel.options[j].selected = targetSel.options[j+1].selected;
	
	   targetSel.options[j+1].text = temp_text;
	   targetSel.options[j+1].value = temp_value;
	   targetSel.options[j+1].defaultSelected = temp_defaultSelected; 
	   targetSel.options[j+1].selected = temp_selected;
	
	}
      }
   }

}

// Populate the target list only with a check box checked 
function DynamicOptionList_populate_from_desinated_chkbox(desinatedChkBox_input) 
{
   var theform = this.form;
   var i,j,obj,obj2;
   var desinatedChkBox = desinatedChkBox_input; 

   // Get the current value(s) of 
   //all check boxs this list depends on
   this.dependentValues = new Object;
   var dependentValuesInitialized = false;
   
   //alert("dependencies length: " + this.dependencies.length); 
   
   for (i=0; i<this.dependencies.length;i++) 
   {
      var sel = theform[this.dependencies[i]];
      //var sel = this.dependencies[i] ;
      
      //alert("boxname: " + this.dependencies[i]);
      // If this is the first dependent list, 
      // just fill in the dependentValues
      
      //alert("Checkbox length: " + sel.length);
      
      //check whether the desinated check box is the only one
      var onlyDesinatedChkBoxChecked = false;
      for (j=0; j<sel.length; j++) 
      {
        if(sel[j].checked && sel[j].value != desinatedChkBox)
        {
           onlyDesinatedChkBoxChecked = false;
           break;
        }
        else if(sel[j].checked && sel[j].value == desinatedChkBox)
           onlyDesinatedChkBoxChecked = true;
        else
        {
        }
      }
      
      if (!dependentValuesInitialized) 
      {
 	 dependentValuesInitialized = true;

	 for (j=0; j<sel.length; j++) 
	 {
            //alert("Checkbox i= " + j);
	    if (sel[j].checked)  
	    {
	       this.dependentValues[sel[j].value] = true;
	    }
	 }
       }
       
       // Otherwise, add new options for every existing option
       else 
       {
	  var tmpList = new Object();
	  var newList = new Object();
	  for (j=0; j<sel.length; j++) 
	  {
	     if (sel[j].checked) 
	     {
		tmpList[sel[j].value] = true;
	     }
	  }
	  
	  for (obj in this.dependentValues) 
	  {
	     for (obj2 in tmpList) 
	     {
		newList[obj + this.delimiter + obj2] = true;
	     }
	  }
	  this.dependentValues = newList;
      }
   }

   var targetSel = theform[this.target];
		
   // Store the currently-selected values of the target list 
   // to maintain them (in case of multiple select lists)
   var targetSelected = new Object();
   for (i=0; i<targetSel.options.length; i++) 
   {
      if (targetSel.options[i].selected) 
      {
	 targetSelected[targetSel.options[i].value] = true;
      }
   }
   
   targetSel.options.length = 0; // Clear all target options
		
 if(onlyDesinatedChkBoxChecked)
 {
   for (i in this.dependentValues) 
   {
      if (typeof this.options[i] == "object") 
      {
	var o = this.options[i];
	for (j=0; j<o.length; j+=2) 
	{
	   var text = o[j];
	   var val = o[j+1];
	   targetSel.options[targetSel.options.length] = 
	            new Option(text, val, false, false);
	   if (this.defaultValues[i] == val) 
	   {
	      targetSelected[val] = true;
	   }
	}
      }
   }
      
   targetSel.selectedIndex=-1;
	
   // Select the options that were selected before
   for (i=0; i<targetSel.options.length; i++) 
   {
      if (targetSelected[targetSel.options[i].value] != null 
	 && targetSelected[targetSel.options[i].value]==true) 
      {
	targetSel.options[i].selected = true;
      }
   }
 }
}
