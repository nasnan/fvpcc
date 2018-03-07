import '..\\..\\src\\styles\\other.css';
import '..\\..\\src\\styles\\color.css';




var highlightPage= function ()
{
	if(!document.getElementsByTagName) return false;
	if(!document.getElementsByTagName("header")) return false;
	var header=document.getElementsByTagName("header")[0];
	var navs=header.getElementsByTagName("nav");
	if(navs.length==0) return false;
	var links=navs[0].getElementsByTagName("a");
	var linkurl;
	for(var i=0;i<links.length;i++)
	{
		linkurl=links[i].getAttribute("href");
		if(window.location.href.indexOf(linkurl)!=-1)
		{
			links[i].className="here";
		}
	}
}


export{highlightPage};


window.onload=highlightPage;