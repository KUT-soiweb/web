//var target;
//var scrollx;
//var target_width;
var specality_timer = null;
var lab_name_timer = null;


function textloop(target, scrollx, target_width, target_boxwidth, timer_name) {
	target.style.left = --scrollx + "px";

	if (scrollx < -target_width) {
		scrollx = target_boxwidth;
	}

	switch (timer_name) {
	case "specality_timer":
		specality_timer = setTimeout(function () {
			textloop(target, scrollx, target_width, target_boxwidth, timer_name);
		}, 20);
		break;

	case "lab_name_timer":
		lab_name_timer = setTimeout(function () {
			textloop(target, scrollx, target_width, target_boxwidth, timer_name);
		}, 20);
	}
}

function bindevent() {
	var event_target = document.getElementsByClassName('faculty');

	for (var i = 0; i < event_target.length; i++) {
		event_target[i].addEventListener('mouseenter', marquee, false);
		event_target[i].addEventListener('mouseleave', unmarquee, false);
	}
}

function marquee() {
	var scrollx = 0;
	var specality = this.getElementsByClassName('specality');
	var lab_name = this.getElementsByClassName('lab_name');

	if (specality.length > 0) {
		var specality_width = specality[0].offsetWidth;
		var specality_boxwidth = specality[0].parentNode.clientWidth;

		if (specality_width > specality_boxwidth) {
			textloop(specality[0], scrollx, specality_width, specality_boxwidth, "specality_timer");
		}
	}

	if (lab_name.length > 0) {
		var lab_name_width = lab_name[0].offsetWidth;
		var lab_name_boxwidth = lab_name[0].parentNode.clientWidth;

		if (lab_name_width > lab_name_boxwidth) {
			textloop(lab_name[0], scrollx, lab_name_width, lab_name_boxwidth, "lab_name_timer");
		}
	}
}

function unmarquee() {
	if (specality_timer != null) {
		var specality = this.getElementsByClassName('specality')[0];
		specality.style.left = "0px";
		clearTimeout(specality_timer);
		specality_timer = null;
	}

	if (lab_name_timer != null) {
		var lab_name = this.getElementsByClassName('lab_name')[0];
		lab_name.style.left = "0px";
		clearTimeout(lab_name_timer);
		lab_name_timer = null;
	}
}