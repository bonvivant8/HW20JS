const ulElement=document.querySelector('ul');
const btnOk=document.querySelector('.ok')
const massage=document.querySelector('.massage')
ulElement.addEventListener('click',(event)=>{
if (event.target.classList.value.includes('nav-link')){
  const activeEl=document.querySelector('.active')
  if(activeEl){
    activeEl.classList.remove('active')
  }
  event.target.classList.add('active')

  closeDropdown()
  closeDropdown2()
  event.target.nextElementSibling.classList.toggle('has-drop',)
}
  if (event.target.classList.value.includes('drop-link')){
    const activeEl=document.querySelector('.active')
    if(activeEl){
      activeEl.classList.remove('active')
    }
    event.target.classList.add('active')
    closeDropdown2()
    event.target.nextElementSibling.classList.toggle('has-drop')
  }

});

function closeDropdown(){
  const drop=document.querySelectorAll('.dropdown')
  Array.from(drop).forEach(item=>item.classList.remove('has-drop'));
}

function closeDropdown2(){
  const drop=document.querySelectorAll('.dropdown2')
  Array.from(drop).forEach(item=>item.classList.remove('has-drop'));
}
function myMassage(){
  function add(){
    massage.classList.add('has-drop')
  }
  const btn=document.querySelectorAll('.btn')
  Array.from(btn).forEach(item=>item.addEventListener('click',add))


}
myMassage()
function hideMassage(){
  massage.classList.remove('has-drop')
  closeDropdown()
  closeDropdown2()
}
btnOk.addEventListener('click',hideMassage)