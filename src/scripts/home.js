
import {highlightPage} from '.\\global.js';


function imagelist()
{
	var box=document.getElementById("imageBox");
	var imglist=box.getElementsByTagName("imageList")[0];
	var img=box.getElementsByTagName("img");
	var timer,playTimer;
	var index=0;
	var temp=[];
	var bnotlast=true;
	var displaytime=3000;
	if(img.length<2) return false;
	var imghight=img[1].offsetTop-img[0].offsetTop;

	//加数字
	for(var i=0;i<img.length;i++)
	{
		temp.push("<li>"+(i+1)+"</li>");
	}
	var imageCount=document.createElement("ul");
	imageCount.className="imageCount";
	imageCount.innerHTML=temp.join("");
	box.appendChild(imageCount);
	var countBtn=box.getElementsByTagName("ul")[1].getElementsByTagName("li");


	//初始化
	countAgain();


	//数字按钮
	for(var i=0;i<countBtn.length;i++)
	{
		countBtn[i].index=i;
		countBtn[i].dist=-imghight*i;
		countBtn[i].onmouseover=function()
		{
			index=this.index;
			countAgain();
		}
	}

	//移动到下一个并修改当前的类名
	function countAgain()
	{
		for(var i=0;i<countBtn.length;i++)
		{
			countBtn[i].className="";
		}
		countBtn[index].className="current";
		moveElement("imagelist",0,(-index*imghight),5);
	}

	//找出下一个
	function next()
	{
		if(index>=countBtn.length-1)
		{
			bnotlast=false;
		}
		bnotlast?index++:index=0;
		if(index<=0)
		{
			index=0;
			bnotlast=true;
		}
		countAgain();
	}

	playTimer=setInterval(next,displaytime);

	box.onmouseover=function()
	{
		clearInterval(playTimer);
	}

	box.onmouseout=function()
	{
		playTimer=setInterval(next,displaytime);
	}

}


window.moveElement= function (moveId,final_x,final_y,interval)
{

	if(!document.getElementById) return false;
	if(!document.getElementById(moveId)) return false;
	var elem=document.getElementById(moveId);
	if(elem.movement) 
		clearTimeout(elem.movement);
	if(!elem.style.left) 
		elem.style.left="0";
	if(!elem.style.top) 
		elem.style.top="0";
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	var dist=0;
	if(xpos==final_x&&ypos==final_y) return true;

	if(xpos<final_x)
		{
			dist=Math.ceil((final_x-xpos)/10);
			xpos+=dist;
		}
	if(xpos>final_x)
	{
		dist=Math.ceil((xpos-final_x)/10);
		xpos-=dist;
	}
	if(ypos<final_y)
	{
		dist=Math.ceil((final_y-ypos)/10);
		ypos+=dist;
	}
	if(ypos>final_y)
	{
		dist=Math.ceil((ypos-final_y)/10);
		ypos-=dist;
	}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";

	var repeat="moveElement('"+moveId+"',"+final_x+","
	+final_y+","+interval+")";
	elem.movement=setTimeout(repeat,interval);
}




window.onload=function()
{
	highlightPage();
	imagelist();
}