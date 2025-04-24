 let Cont = 0;
 let Input = document.getElementById('InputTarefa');
 let BtnAdd = document.getElementById('Btn-Add');
 let Main = document.getElementById('List');

 function AddTarefa() {
    let ValInput = Input.value;

    ++Cont;

    if ((ValInput !== "") && (ValInput !== null) && (ValInput !== undefined)) { 


        let NewItem = ` 
        <div id="${Cont}" class="Item">

            <div onclick="MarkTaf(${Cont})" class="Item-Icon">
                <i id="icone_${Cont}" class="fa-regular fa-square"></i>

            </div>
            <div onclick="MarkTaf(${Cont})" class="Item-Name">
                ${ValInput}

            </div>
            <div class="Item-Buton">
                <button onclick="Deletar(${Cont})" class="Delet"><i class="fa-solid fa-trash-can"></i>Deletar</button>

            </div>
        </div>`;


        Main.innerHTML += NewItem;

        Input.value = "";
        Input.focus();

    }

 }

 function Deletar(id){
    var Taf = document.getElementById(id);
    Taf.remove();
 }

 function MarkTaf(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);


    if(classe == "Item"){
        item.classList.add('Click');


       var icone =  document.getElementById('icone_' + id );
       icone.classList.remove('fa-square');
       icone.classList.add('fa-square-check');

       item.parentNode.appendChild(item);

    } else {
        item.classList.remove('Click');


        var icone =  document.getElementById('icone_' + id );
        icone.classList.remove('fa-square-check');
        icone.classList.add('fa-square');

    }
 }

 Input.addEventListener("keyup", function(event){

    if (event.keyCode === 13){
        event.preventDefault();
        BtnAdd.click();

    }
 })