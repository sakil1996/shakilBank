//login button eventLesiner
const loginbtn = document.getElementById('login')
loginbtn.addEventListener("click",function(){
  const logingArea =document.getElementById('login-area');
  logingArea.style.display ='none';
  const transec =document.getElementById('transection');
  transec.style.display ='block';
    })
   // deposit area
   const depositbtn =document.getElementById('adddeposit');
   depositbtn.addEventListener('click',function(){

    //const depositAmaount =document.getElementById('depositammount').value;
    //const depositNumber=parseFloat(depositAmaount)
    const depositNumber =getInputNumber("depositammount")




    
   spnText("curent",depositNumber);
spnText("curentBlance",depositNumber);
   document.getElementById('depositammount').value= "";
   })
        //withdraw blance
        const withdraw =document.getElementById('addwithdraw');
        withdraw.addEventListener('click',function(){
 const withdrawNumber =getInputNumber("withdrawAmmount");
spnText('currentDeposit',withdrawNumber);
spnText('curentBlance',-1 * withdrawNumber);
document.getElementById('withdrawAmmount').value='';

        })


function getInputNumber(id){
  const ammounts =document.getElementById(id).value;
          const ammountsNumber=parseFloat(ammounts);

          return ammountsNumber;
}
   function spnText(id,depositNumber){
    const curentBlance =document.getElementById(id).innerText;
    const curentBlanceNumber=parseFloat(curentBlance);
    const totalBlance =curentBlanceNumber+depositNumber;
    document.getElementById(id).innerText=totalBlance;
   }