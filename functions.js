var x = window.matchMedia("(max-width: 700px)");
var ind;
var type;

function preloader()
{
	var loader = document.getElementById('startLoad');
	loader.style.display='none';
}

function view(n,type)
{
	if(x.matches)
	{
		mobile_view(n,type);
	}
	else
	{
		desktop_view(n,type);
	}
}

function desktop_view(n,type)
{
	var view_img = document.getElementById("view_img");
	var view_bg = document.getElementById("view_bg");
	var screen = document.getElementById("whole_screen");
	var cross = document.getElementById("cross");
	var loader = document.getElementById("loader");

	view_img.src="skins/gallery/"+type+"/"+n+".png";

	if(type=="logo")
		{view_img.style.maxWidth = "40vw";}
	if(type=="pic")
		{view_img.style.maxHeight = "80vh";}

	view_bg.style.display="block";
	screen.style.position='fixed';
	loader.style.display="block";
	view_img.style.display="block";

	var start = document.getElementById("view_img");
	start.scrollIntoView();
}

function mobile_view(n,type)
{
	ind=n;
	localStorage.setItem("picIndex", ind);
	localStorage.setItem("fileType", type);
	window.location.href="view.html";
}

function ExitView()
{
	var view_img = document.getElementById("view_img");
	var view_bg = document.getElementById("view_bg");
	var screen = document.getElementById("whole_screen");
	var loader = document.getElementById("loader");

	view_img.src="";
	view_bg.style.display="none";
	screen.style.position="static";
	cross.style.display="none";
	loader.style.display="none";
	view_img.style.display="none";

	var start = document.getElementById("whole_screen");
	start.scrollIntoView();
}

function menuExpand()
{
	var blackBG = document.getElementById("menu_blackBG");
	var left_nav = document.getElementById("left_nav");

	blackBG.style.visibility="visible";
	blackBG.style.opacity="1";
	left_nav.style.left = "0px";
}

function ExitMenu()
{
	var blackBG = document.getElementById("menu_blackBG");
	var left_nav = document.getElementById("left_nav");

	blackBG.style.opacity="0";
	left_nav.style.left = "-250px";
	blackBG.style.visibility="hidden";
}