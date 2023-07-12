function add_carro() {
    container = document.getElementById("form-carro");
  
    html = `
        <br>
        <div class="row">
            <div class="col-md">
            <input type="text" placeholder="carro" class="form-control" name="carro">
            </div>
            <div class="col-md">
            <input type="text" placeholder="Placa" class="form-control" name="placa">
            </div>
            <div class="col-md">
            <input type="number" placeholder="ano" class="form-control" name="ano">
            </div>
        </div>
    `;
  
    container.insertAdjacentHTML('afterend', html)
  }

function mascara1(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    switch(){ 
    case v.length == 3 || v.length == 7):
         i.value += "."
         break
    
    case v.length == 4: 
        i.value = v.substring(0,3) + '.' + v.substring(3,4)
        break

    case v.length == 8:
        i.value = v.substring(0,7) + '.' + v.substring(7,8)
        break
    
    case v.length == 12:
        i.value = v.substring(0,11) + '-' + v.substring(11,12)
        break
    
    case v.length == 11:
      i.value += "-"
      break
    }
}

function exibir_form(tipo){
    
    att_cliente = document.getElementById('atualizar_cliente')
    add_cliente = document.getElementById('adicionar_cliente')

    if (tipo == 1){
        att_cliente.style.display = 'none'
        add_cliente.style.display = 'block'
    }
    else if (tipo == 2) {
        att_cliente.style.display = 'block'
        add_cliente.style.displat = 'none'
    }
}