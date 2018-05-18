var name,dep,phno,email,rat,com,k=[],j=0,menteeIdNum;

var menteeArray= [];


function dispMentee()
{
	var divi = document.createElement('div');
	divi.setAttribute('id',j+'div');
	divi.setAttribute('class','divisions')
	divi.setAttribute('style','font-family : Verdana; font-size : 20px;')
	
	document.body.appendChild(divi);

	setColor(j);

	var para1 = document.createElement("P");      
	//para1.setAttribute('id','para'+k[j])                 
	
	var t = document.createTextNode('Name : ' + menteeArray[j].name + '  ||  ' + 'Rating : ' + menteeArray[j].rat);
	para1.setAttribute('id',j+"para");   
	para1.setAttribute('style','font-family : Verdana; font-size : 20px;')
	para1.appendChild(t);                                          
	document.getElementById(j+'div').appendChild(para1);

	var para2 = document.createElement('p');
	para2.setAttribute('style','font-family : Verdana; font-size : 20px;')
	var t2 = document.createTextNode('Comments : ' + menteeArray[j].com);
	para2.appendChild(t2);
	document.getElementById(j+'div').appendChild(para2);


	var btn = document.createElement("BUTTON");
	btn.setAttribute("key",j+"div");
	btn.setAttribute("id",j+"btn");     
	btn.setAttribute("onclick"," this.parentElement.style.display = 'none'; "); 
	btn.setAttribute("style","color : red; font-family : Verdana; font-size : 20px ; border-radius: 5px;");  
	var b = document.createTextNode("Del");       
	btn.appendChild(b);                                
	document.getElementById(j+'div').appendChild(btn);

	var btn2 = document.createElement("BUTTON");
	btn2.setAttribute("num",j);
	btn2.setAttribute("onclick",'console.log(this.parentElement.id);console.log(parseInt(this.parentElement.id,10));editMentee(parseInt(this.parentElement.id,10));')
	btn2.setAttribute('style','color : slateblue; font-family : Verdana; font-size : 20px; border-radius : 5px;')
	var e = document.createTextNode("Edit");
	btn2.appendChild(e);
	document.getElementById(j+"div").appendChild(btn2);


++j;

}

function getInput(x)
{
	return document.getElementById(x).value;
}


function addMentee()
{
	 name = getInput('addName');
	 rat = getInput('addRat');
	 com = getInput('addCom');
	//document.getElementById('test').innerHTML=rat;
	menteeArray.push({});
	menteeArray[j].name = name;
	menteeArray[j].rat = rat;
	menteeArray[j].com = com;
	dispMentee();
}

function delMentee()
{

}

function hideMentee()
{
	document.getElementById(this.getAttribute('key')).style.display='none'; 
}

function editMentee(idNum)
{
	menteeIdNum = idNum;
	console.log(idNum);
	document.getElementById('editName').value = menteeArray[menteeIdNum].name;
	document.getElementById('editRat').value = menteeArray[menteeIdNum].rat;
	document.getElementById('editCom').value = menteeArray[menteeIdNum].com;
	document.getElementById('editMenteeForm').style.display='block'

}

function editMenteeInput()
{ 
	

	name = getInput('editName');	
	rat = getInput('editRat');
	com = getInput('editCom');

	menteeArray[menteeIdNum].name = name;
	menteeArray[menteeIdNum].rat = rat;
	menteeArray[menteeIdNum].com = com;

	var editDiv = document.getElementById(menteeIdNum+'div');
	editDiv.innerHTML= '';
	//document.getElementById('test').innerHTML=rat;
	setColor(menteeIdNum);

	var para1 = document.createElement("P");      
	//para1.setAttribute('id','para'+k[j])                 
	
	var t = document.createTextNode('Name : ' + name + '  ||  ' + 'Rating : ' + rat);
	para1.setAttribute('id',menteeIdNum+"para");  
	para1.setAttribute('style','font-family : Verdana; font-size : 20px;') ;

	para1.appendChild(t);                                          
	document.getElementById(menteeIdNum+'div').appendChild(para1);

	var para2 = document.createElement('p');
	var t2 = document.createTextNode('Comments : ' + com);
	para2.setAttribute('style','font-family : Verdana; font-size : 20px;')
	para2.appendChild(t2);
	document.getElementById(menteeIdNum+'div').appendChild(para2);

	var btn = document.createElement("BUTTON");
	btn.setAttribute("key",menteeIdNum+"para");
	btn.setAttribute("id",menteeIdNum+"btn");     
	btn.setAttribute("onclick"," this.parentElement.style.display = 'none'; ");
	btn.setAttribute("style","color : red; font-family : Verdana; font-size : 20px; border-radius : 5px;");   
	var b = document.createTextNode("Del");       
	btn.appendChild(b);                                
	document.getElementById(menteeIdNum+'div').appendChild(btn);

	var btn2 = document.createElement("BUTTON");
	btn2.setAttribute("num",menteeIdNum);
	btn2.setAttribute("onclick",'console.log(this.parentElement.id);console.log(parseInt(this.parentElement.id,10));editMentee(parseInt(this.parentElement.id,10));')
	btn2.setAttribute("style","color : slateblue; font-family : Verdana; font-size : 20px; border-radius : 5px;");
	var e = document.createTextNode("Edit");
	btn2.appendChild(e);
	document.getElementById(menteeIdNum+"div").appendChild(btn2);
}

function setColor(pointer)
{
	var dd = document.getElementById(pointer + 'div');

	if(rat==1)
	{
		dd.setAttribute('style','border : 5px solid rgba(255,99,71,1);border-radius: 5px;padding-top: 10px;padding-bottom: 10px;background-color : rgba(255,99,71,0.8) ; margin-right : 250px;') ;
	}

	if(rat==2)
	{
		dd.setAttribute('style','border : 5px solid rgba(255,165,0,1);border-radius: 5px;padding-top: 10px;padding-bottom: 10px;background-color : rgba(255,165,0,0.8) ; margin-right : 250px;') ;
	}

	if (rat == 3) 
	{
		dd.setAttribute('style','border : 5px solid rgba(255,255,0,1);border-radius: 5px;padding-top: 10px;padding-bottom: 10px;background-color : rgba(255,255,0,0.8) ; margin-right : 250px;') ;
	}

	if (rat == 4) 
	{
		dd.setAttribute('style','border : 5px solid rgba(152,251,152,1);border-radius: 5px;padding-top: 10px;padding-bottom: 10px;background-color : rgba(152,251,152,0.8) ; margin-right : 250px;') ;
	}

	if (rat == 5) 
	{
		dd.setAttribute('style','border : 5px solid rgba(60,179,113,1);border-radius: 5px;padding-top: 10px;padding-bottom: 10px;background-color : rgba(60,179,113,0.8) ; margin-right : 250px;') ;
	}

	else
	{
		dd.setAttribute('style','border : 5px solid silver;border-radius: 5px;padding-top: 10px;padding-bottom: 10px;background-color : gray ; margin-right : 250px;') ;
	}
}