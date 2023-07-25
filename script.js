let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let ScreenValue = '';
for(item of buttons){
    item.addEventListener('click' , (e) =>{
        buttonText = e.target.innerText;
        console.log('Button text is' , buttonText);
        if(buttonText =='x'){
            buttonText = '*';
            ScreenValue += buttonText ;
            screen.value  = ScreenValue ;

        }else if(buttonText == 'AC'){
            ScreenValue = "" ;
            screen.value = ScreenValue;
        }else if(buttonText == '='){
            screen.value = eval(ScreenValue);
        }else if (buttonText == 'back'){
            screen.value = ScreenValue(0 , screen.value-1);
            screen.value = ScreenValue;
        }
        else{
            ScreenValue += buttonText ;
            screen.value = ScreenValue ;
        }
    })

}