

function showprocont()
{
	var main=document.getElementById("main");
	var images=main.getElementsByTagName("img");
	for(var i=0;i<images.length;i++)
	{
		images[i].iscilck=false;
		if(images[i].getAttribute("alt"))
		{
			images[i].temp=images[i].getAttribute("alt")+"more";
			images[i].onclick=function()
			{
				if(this.iscilck==false)
				{
					document.getElementById(this.temp).style.display="block";
					this.iscilck=true;
				}
				else
				{
					document.getElementById(this.temp).style.display="none";
					this.iscilck=false;
				}
			}
		}
	}
}


window.onload=function()
{
	highlightPage();
	showprocont();
}