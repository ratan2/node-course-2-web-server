//********************************************
var budgetCont=(function (){
var expense=function(id,description,value){
this.id=id;
this.description=description;
this.value=value;
};

var income=function(id,description,value){
this.id=id;
this.description=description;
this.value=value;
};

 var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };
	
	return{
	addnewitem:function(type,des,val){
	var newitem,id=0;
	if(type==='exp')
	newitem=new expense(id,des,val);
	else if(type==='inc')
	newitem=new income(id,des,val);
	data.allItems[type].push(newitem);
	return newitem;
	
	
	}
	
	};




})();

//************************************************************************************

var uiCont=(function(){



return{
getInput:function(){
return{
type: document.querySelector('.s_aa_v').value,
description: document.querySelector('.inpu_data').value,
value: parseFloat( document.querySelector('.inpu_number').value)
};
},
//*******************
addlistitem:function(obj,type){
var html;

 html='<div class="item clear int" ><div class="item__description">+%description%</div><!-- <div class="right clearfix">--><div class="item__value">%value%</div></div>';
 html=html.replace('%description%',obj.description);
 html=html.replace('%value%',obj.value);
if(type==='exp'){
document.querySelector('.expense_list').insertAdjacentHTML('beforeend',html);
}

else if(type==='inc')
{document.querySelector('.income_list').insertAdjacentHTML('beforeend',html);
}}};



})();



//******************************************************************************************

var cont=(function(budcntr,uicntrl){
var sum=0;

var contrlfu=function(){
var newitee

//**********************
var input=uicntrl.getInput();
console.log(input);

//*****************8
newitee=budcntr.addnewitem(input.type,input.description,input.value);
//*************
uicntrl.addlistitem(newitee,input.type);

if(input.type==='inc')
{
sum=sum+input.value;


}
else if(input.type==='exp')
{
sum=sum-input.value;
}
document.querySelector('.value').textContent=sum;
};
document.querySelector('.add__btn').addEventListener('click',contrlfu);
document.addEventListener('keypress',function(event){
if(event.keycode===13 )
contrlfu();
}
);

})(budgetCont,uiCont);
