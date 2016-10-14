function navInfo() {
	var html = "<table style='border: 1px solid #444'>";
	var info = {user_agent:navigator.userAgent,
		app_code_name:navigator.appCodeName,
		app_name:navigator.appName,
		app_version:navigator.appVersion,
		lang:navigator.language,
		plat:navigator.platform,
		product:navigator.product,
		cookies:navigator.cookieEnabled
	};

	for (var key in info) {
		html += "<tr>";
		html += "<td style='border: 1px solid #444'><strong>"+key+"</strong></td>";
		html += "<td style='border: 1px solid #444'>"+info[key]+"</td>";
		html += "</tr>";
	}

	html += "</table>"

	return html;
}

function screenInfo() {
	var html = "<table style='border: 1px solid #444'>";
	var info = {availHeight:screen.availHeight,
		availWidth:screen.availWidth,
		colorDepth:screen.colorDepth,
		height:screen.height,
		pixelDepth:screen.pixelDepth,
		width:screen.width
	};

	for (var key in info) {
		html += "<tr>";
		html += "<td style='border: 1px solid #444'><strong>"+key+"</strong></td>";
		html += "<td style='border: 1px solid #444'>"+info[key]+"</td>";
		html += "</tr>";
	}

	html += "</table>"

	return html;
}

document.write(navInfo());
document.write(screenInfo());