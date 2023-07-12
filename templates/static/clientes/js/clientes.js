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
    
    if(isNaN(v[v.length-1] || v == )){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += "."; 
    if (v.length == 4) {
        i.value = v.substring(0,3) + '.' + v.substring(3,4)}
    if (v.length == 8) {
        i.value = v.substring(0,7) + '.' + v.substring(7,8)}
    if (v.length == 12) {
            i.value = v.substring(0,11) + '-' + v.substring(11,12)}
    if (v.length == 11) i.value += "-";
    
}