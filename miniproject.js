
// example of event bubbling
// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let lis = document.querySelector('li');
// div.addEventListener("click",function(event)
// {
//     event.stopPropagation();
//     console.log("div was clicked");
// });

// ul.addEventListener("click",function(event)
// {
//     event.stopPropagation();
//     console.log("ul weas clicked");
// });

// for(li of lis)
// {
//     li.addEventListener("click",function(event)
// {
//     event.stopPropagation();
//     console.log("li was clicked")
// });
// }

// to do with dom
let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul  = document.querySelector('ul');
let li = document.querySelector('li');

btn.addEventListener("click",function()
{
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = '';

    
    let btn1 = document.createElement('button');
    btn1.innerText = "delete";
    btn1.classList.add("delete");
    item.appendChild(btn1);


});

ul.addEventListener("click",function(event)
{
    //event.targer gives tageted value means which element trigger like which button clicked 
    //event.target.nodename gives targeted value which clicked like button clicked wh9ich button cloicked that
    //does nopt matter but btnh clicked or li clicked which is does not matter
    if(event.target.nodeName = 'BUTTON')
    {
       let listitem = event.target.parentElement;
       listitem.remove();
    }

});

// let delbtns = document.querySelectorAll('.delete');
// for(delbtn of delbtns)
// {
// delbtn.addEventListener("click",function()
// {
//     let par = this.parentElement;
//     par.remove();
// })
// }

