const create = () => {
    document.querySelector('.task-input-div').style.display = 'block';
}

document.querySelector('.cursor-pointer').addEventListener('click' , () => {
    document.querySelector('.task-input-div').style.display = 'none'; 
})

let dataNum = localStorage.length + 1

const submit = () => {
    const input_value = document.querySelector('input').value;
    if(input_value){
        document.querySelector('.task-input-div').style.display = 'none' ;
        document.querySelector('input').value = '';
    }
    else{
        document.querySelector('input').placeholder = 'write something';
        return;
    }

    function createData(){
        localStorage.setItem(JSON.stringify(dataNum) , JSON.stringify(input_value));
        dataNum += 1;
    }
    createData();
}
    for(let i = 1; i <= localStorage.length; i++){
        let list = document.createElement('li');
        list.style.padding = '5px';
        list.style.margin = '5px';
        list.style.backgroundColor = 'rgba(185, 28, 28, 0.7)';
        list.innerHTML = JSON.parse(localStorage.getItem(i));
        document.querySelector('ul').appendChild(list);
    }
