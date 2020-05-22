

function view(n)
{
	var view_img = document.getElementById("view_img");
	var view_bg = document.getElementById("view_bg");
	var screen = document.getElementById("whole_screen");
	var back = document.getElementById("back");

	view_img.src="skins/gallery/web/"+n+"a.png";

	view_bg.style.display="block";
	screen.style.position='fixed';
	back.style.display="block";
	view_img.style.display="block";

	var start = document.getElementById("whole_screen");
	start.scrollIntoView();
}

function ExitView()
{
	var view_img = document.getElementById("view_img");
	var view_bg = document.getElementById("view_bg");
	var screen = document.getElementById("whole_screen");

	view_img.src="";
	view_bg.style.display="none";
	screen.style.position="static";
	back.style.display="none";
	view_img.style.display="none";

	var start = document.getElementById("whole_screen");
	start.scrollIntoView();
}

function menuExpand()
{
	var blackBG = document.getElementById("menu_blackBG");
	var left_nav = document.getElementById("left_nav");

	blackBG.style.display="block";
	blackBG.style.opacity = "1";
	left_nav.style.left = "0px";
}

function ExitMenu()
{
	var blackBG = document.getElementById("menu_blackBG");
	var left_nav = document.getElementById("left_nav");

	blackBG.style.display="none";
	blackBG.style.opacity = "0";
	left_nav.style.left = "-250px";
}