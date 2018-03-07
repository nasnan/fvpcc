
import {highlightPage} from '.\\global.js';

function change3rdmg()
{
	var sections=document.getElementsByTagName("section");
	for (var j=0;j<sections.length;j++)
		{
			var divs=sections[j].getElementsByTagName("div");
				var count=0;
				for(var i=0;i<divs.length;i++)
				{
					if (divs[i].className=="emp")
					{
		
						count++;
					}
					if(count%3==0)
					{
						divs[i].style.marginRight="0";
					}
				}
			}
}

function showSection(id)
{
	var main=document.getElementById("main");
	var section=main.getElementsByTagName("section");
	for(var i=0;i<section.length;i++)
	{
		if(section[i].getAttribute("id")!=id)
		{
			section[i].style.display="none";
		}
		else
		{
			section[i].style.display="block";
		}
	}
}

function prepareInternalemp()
{
	var main=document.getElementById("main");
	if(main.length==0) return false;
	var navs=main.getElementsByTagName("nav");
	if(navs.length==0) return false;
	var nav=navs[0];
	var links=nav.getElementsByTagName("a");
	for(var i=0;i<links.length;i++)
	{
		var sectionId=links[i].getAttribute("href").split("#")[1];
		if (!document.getElementById(sectionId)) continue;				
		document.getElementById(sectionId).style.display="none";
		links[i].destination=sectionId;
		links[i].onclick=function()
		{
			showSection(this.destination);
			return false;
		}
	}
}



window.onload=function()
{
	highlightPage();
	change3rdmg();
	prepareInternalemp();
}