

const input = document.getElementById('inputdata');
const submit = document.getElementById('btnSubmit');
var boo=false
var incTaskHolder = document.getElementById("incomplete-tasks");

const test=(()=>{


let createLi=(taskString)=>{
	var boo=false;
	let li = document.createElement('li');
	let label = document.createElement('label');
	let btn = document.createElement('button');
	let del=document.createElement('button');

	label.innerHTML=taskString
	btn.innerHTML='edit'
	btn.className='edit'

	del.innerHTML='delete'
del.addEventListener('click',()=>{

		deleteLi(li)




})



	btn.addEventListener('click',()=>{
		edit(li,label,btn)

	})
	li.appendChild(label)
	li.appendChild(btn)
	li.appendChild(del)

return li

}


let addLi=()=>{

let listItem=createLi(input.value);

incTaskHolder.appendChild(listItem)

}


let edit=(li,label,btn)=>{
boo=!boo


if(boo){
	var newinput = `<input type='text' class='newnew' value=${label.innerHTML}>`
	label.innerHTML=newinput
	btn.innerHTML='save';
	btn.className='save';

}

if(boo===false)
{
var y= document.querySelector('.newnew').value

label.innerHTML=y;
	btn.innerHTML='edit';
}



}



let deleteLi=(li)=>{

incTaskHolder.removeChild(li)




}


return{

add:()=>{


	addLi()
},

edits:()=>{

edit();


}


}

})()