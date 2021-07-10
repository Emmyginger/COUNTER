var counter = document.querySelector('.counter');
let count =7;
function changeCounter(button){
    if(button== plus){
        if(count < 50){
            count = count + 1;
        }
        
    } else if(button == minus){
        if(count > 0){
            count = count - 1;
        }
        
    }
    counter.innerHTML = count
}
