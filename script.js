const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	origen: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
	destino: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
	fecha: /^.{4,12}$/,
	cantidad:/^\d{0,1}$/,
}


const validarFormulario = (e) => {
    console.log(e.target.name);
    switch (e.target.name){
        case "origen":
            if(expresiones.origen.test(e.target.value)){
                document.getElementById("origen").classList.remove("error");
                document.getElementById("origen").classList.add("correcto");
                
            } else{
                document.getElementById("origen").classList.remove("correcto");
                document.getElementById("origen").classList.add("error");
                
            }
        break;
        case "destino":
            if(expresiones.destino.test(e.target.value)){
                document.getElementById("destino").classList.remove("error");
                document.getElementById("destino").classList.add("correcto");
            } else{
                document.getElementById("destino").classList.remove("correcto");
                document.getElementById("destino").classList.add("error");
            }
        break;
        case "ida":
            if(expresiones.fecha.test(e.target.value)){
                document.getElementById("ida").classList.remove("error");
                document.getElementById("ida").classList.add("correcto");
            } else{
                document.getElementById("ida").classList.remove("correcto");
                document.getElementById("ida").classList.add("error");
            }
        break;
        case "vuelta":
            if(expresiones.fecha.test(e.target.value)){
                document.getElementById("vuelta").classList.remove("error");
                document.getElementById("vuelta").classList.add("correcto");
            } else{
                document.getElementById("vuelta").classList.remove("correcto");
                document.getElementById("vuelta").classList.add("error");
            }
        break;
        case "adultos":
            if(expresiones.cantidad.test(e.target.value)){
                document.getElementById("adultos").classList.remove("error");
                document.getElementById("adultos").classList.add("correcto");
            } else{
                document.getElementById("adultos").classList.remove("correcto");
                document.getElementById("adultos").classList.add("error");
            }
        break;
        case "menores":
            if(expresiones.cantidad.test(e.target.value)){
                document.getElementById("menores").classList.remove("error");
                document.getElementById("menores").classList.add("correcto");
            } else{
                document.getElementById("menores").classList.remove("correcto");
                document.getElementById("menores").classList.add("error");
            }
        break;
    }
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();});

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
    });
    


const hamburguesa = document.querySelector(".hamburguesa");
const listaNav = document.querySelector(".listaNav");

hamburguesa.addEventListener("click", ()=>{
    hamburguesa.classList.toggle("active");
    listaNav.classList.toggle("active");
})

document.querySelectorAll(".linkNav").forEach(n => n.addEventListener("click",() => {
    hamburguesa.classList.remove("active");
    listaNav.classList.remove("active");
}))