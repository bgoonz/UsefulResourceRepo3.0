var total_op = -1;
var good_to_submit_on_enter = false;
var operation_form_control_buttons = ".operations-form .form-actions"


$(document).ready(function(){
	
	// Only allow numbers in the textfields	
	filterForNumericTypes();
	
	// hide done button (it's activated when the users is done)
	$(operation_form_control_buttons).hide();
	
	// current operation
	var current = 0;
	
	// start button
	$("#start-btn").click(function(){
		
		console.log("click start");
		// TODO show at the end $(".form-actions").show();
		$("#op"+current).show().addClass("focus");
		$("#op"+(current+1)).show(1000);
		
		total_op = -1;
		// set event to display next operation when text change in the current operation
		$(".operation").each(function(){
			total_op++;
			var id = $(this).attr("id");
			var num = parseInt($(this).attr("id").substring(2));
			
			console.log("id = "+id+"; results_"+num);
			
			$("#results_"+num).change(function(){
				console.log("change for "+$(this).attr("id")+"; "+id+".removeClass");
				showNext(num);
			});
			
		});
			
		// start timer
		$("#start-btn").hide();
		createTimerHTML();
		startTimer();
	});
});

function showNext(current_op){
	console.log("showNext.op => "+current_op+" / "+ total_op)
	setUserProgres(parseInt(100*parseInt(current_op)/parseInt(total_op)));
	
	// TODO this is bubby (if the user jump a textbox it lose the right track)
	$("#op"+current_op).removeClass("focus",1000);
	$("#op"+(current_op+1)+" input").focus();
	$("#op"+(current_op+1)).addClass("focus",1000);
	$("#op"+(current_op+2)).show(1000);
	if (current_op === total_op){
		good_to_submit_on_enter = true;
		$(operation_form_control_buttons).show();
		$("#done_btn").focus();
	}
}

function filterForNumericTypes(){
	$('*[type="number"]').keyup(function() {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	});
}

function startTimer(){
	setTimeout(function(){
		var actual = parseFloat($("#timer").text());
		$("#timer").text((actual+1.0).toFixed(0)+" s.");
		$("#elapsed_time").val(actual+1.0);
		startTimer();
	},1000);
}


function createTimerHTML(){
	var sidebar = $("div.span3 div.sidebar-nav-fixed");
	$("div.non-admin").show();
	sidebar.show();
	if(sidebar.find('h3').size()===0){
		sidebar.append("<h3></h3><ul class=\"nav nav-list\"></ul>");
		console.log("h3 created");
	}
	sidebar.find('h3').text("Your Progress");
	console.log("show progress");
	var c = sidebar.find('ul');
	c.html('');
	c.append('<hr />')
	c.append('<h4>Time</h4>');
	c.append('<i class="icon-time"></i><span id="timer" style="margin-left:5px;">0</span>');
	c.append('<hr />')
	c.append('<h4>Operations Completed</h4>');
	c.append('<div class="progress progress-striped active"><div id="user_progress" class="bar" style="width: 40%;"><span id="completed_percentage"></span></div></div>');
	setUserProgres(0);
	
}

function setUserProgres(percentage){
	console.log("setUserProgres = "+ percentage);
	$('#user_progress').attr('style','width:'+percentage+'%');
	$('#completed_percentage').text(percentage+'%');
}
