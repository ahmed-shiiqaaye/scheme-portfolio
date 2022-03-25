function theme(){
    let body = document.body;
    body.classList.toggle('dark')
    if(body.classList.contains('dark')){
        document.querySelector('button').innerHTML = `<i class='i fa fa-moon'></i>`
    }else{
        document.querySelector('button').innerHTML = `<i class='i fa fa-sun'></i>`
    }
}