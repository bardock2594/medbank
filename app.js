//=====================================================
// BANKMED v2.0
// APP.JS
// PARTE 1/5
//=====================================================

//===============================
// VARIABLES
//===============================

let preguntasExamen = [];
let preguntasIncorrectas = [];

let indicePregunta = 0;
let puntaje = 0;

let modoRevision = false;
let respuestasSesion = [];
let temaSesion = "";

const CLAVE_ESTADISTICAS = "bankmed_estadisticas_v1";

//===============================
// PANTALLAS
//===============================

const pantallaInicio =
document.getElementById("pantallaInicio");

const pantallaSeleccion =
document.getElementById("pantallaSeleccion");

const pantallaPregunta =
document.getElementById("pantallaPregunta");

const pantallaResultados =
document.getElementById("pantallaResultados");

const pantallaEstadisticas =
document.getElementById("pantallaEstadisticas");

//===============================
// BOTONES
//===============================

const btnEstudiar =
document.getElementById("btnEstudiar");

const btnAprender =
document.getElementById("btnAprender");

const btnEstadisticas =
document.getElementById("btnEstadisticas");

const btnIniciar =
document.getElementById("btnIniciar");

const btnResponder =
document.getElementById("btnResponder");

const btnRevisar =
document.getElementById("btnRevisar");

const btnReintentar =
document.getElementById("btnReintentar");

const btnNuevoExamen =
document.getElementById("btnNuevoExamen");

const btnVolverInicio =
document.getElementById("btnVolverInicio");

const btnVolverEstadisticas =
document.getElementById("btnVolverEstadisticas");

const btnBorrarEstadisticas =
document.getElementById("btnBorrarEstadisticas");

//===============================
// CONTROLES
//===============================

const selectTema =
document.getElementById("sistema");

const selectCantidad =
document.getElementById("cantidad");

//===============================
// PREGUNTA
//===============================

const progreso =
document.getElementById("progreso");

const textoPregunta =
document.getElementById("textoPregunta");

const opciones =
document.getElementById("opciones");

const barra =
document.getElementById("barraProgreso");

//===============================
// EXPLICACIÓN
//===============================

const cuadroExplicacion =
document.getElementById("explicacion");

const textoExplicacion =
document.getElementById("textoExplicacion");

//===============================
// RESULTADOS
//===============================

const resultadoPuntaje =
document.getElementById("resultadoPuntaje");

const resultadoPorcentaje =
document.getElementById("resultadoPorcentaje");

const resultadoCorrectas =
document.getElementById("resultadoCorrectas");

const resultadoIncorrectas =
document.getElementById("resultadoIncorrectas");

const mensajeResultado =
document.getElementById("mensajeResultado");

const contenidoEstadisticas =
document.getElementById("contenidoEstadisticas");

//===============================
// INICIO
//===============================

window.onload = iniciarAplicacion;

function iniciarAplicacion(){

    cargarTemas();

    mostrarPantalla("inicio");

}

//===============================
// CAMBIAR PANTALLAS
//===============================

function mostrarPantalla(nombre){

    pantallaInicio.style.display="none";
    pantallaSeleccion.style.display="none";
    pantallaPregunta.style.display="none";
    pantallaResultados.style.display="none";
    pantallaEstadisticas.style.display="none";

    switch(nombre){

        case "inicio":

            pantallaInicio.style.display="block";
            break;

        case "seleccion":

            pantallaSeleccion.style.display="block";
            break;

        case "pregunta":

            pantallaPregunta.style.display="block";
            break;

        case "resultado":

            pantallaResultados.style.display="block";
            break;

        case "estadisticas":

            pantallaEstadisticas.style.display="block";
            break;

    }

}

//===============================
// CARGAR TEMAS
//===============================

function cargarTemas(){

    selectTema.innerHTML="";

    const temas =
    [...new Set(

        bancoPreguntas.map(

            p=>p.tema

        )

    )];

    temas.sort();

    temas.forEach(function(tema){

        const total =
        bancoPreguntas.filter(

            p=>p.tema===tema

        ).length;

        const option =
        document.createElement("option");

        option.value=tema;

        option.textContent=
        tema+" ("+total+")";

        selectTema.appendChild(option);

    });

}

//===============================
// BOTONES
//===============================

btnEstudiar.onclick=function(){

    mostrarPantalla("seleccion");

}

btnAprender.onclick=function(){

    iniciarSimulacro();

}

function iniciarSimulacro(){

    indicePregunta=0;

    puntaje=0;

    preguntasIncorrectas=[];

    respuestasSesion=[];

    modoRevision=false;

    temaSesion="Simulacro general";

    // Se toma una muestra aleatoria de todo el banco, sin filtrar por tema.
    preguntasExamen=[...bancoPreguntas];

    mezclarPreguntas();

    preguntasExamen=preguntasExamen.slice(0,20);

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

btnEstadisticas.onclick=function(){

    mostrarEstadisticas();

    mostrarPantalla("estadisticas");

}

btnIniciar.onclick=function(){

    iniciarExamen();

}

//===============================
// CREAR EXAMEN
//===============================

function iniciarExamen(){

    indicePregunta=0;

    puntaje=0;

    preguntasIncorrectas=[];

    modoRevision=false;

    respuestasSesion=[];

    temaSesion=selectTema.value;

    preguntasExamen=

    bancoPreguntas.filter(function(p){

        return p.tema===selectTema.value;

    });

    mezclarPreguntas();

    if(selectCantidad.value!="Todas"){

        preguntasExamen=
        preguntasExamen.slice(

            0,

            parseInt(selectCantidad.value)

        );

    }

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

//===============================
// MEZCLAR
//===============================

function mezclarPreguntas(){

    preguntasExamen.sort(function(){

        return Math.random()-0.5;

    });

}

//=====================================================
// PARTE 2/5
// MOSTRAR PREGUNTA Y CORREGIR
//=====================================================

function mostrarPregunta(){

    cuadroExplicacion.style.display="none";
    textoExplicacion.innerHTML="";

    btnResponder.disabled=false;
    btnResponder.innerHTML="✅ Responder";
    btnResponder.onclick=corregirPregunta;

    const pregunta=preguntasExamen[indicePregunta];

    progreso.innerHTML=
    "Pregunta "+
    (indicePregunta+1)+
    " de "+
    preguntasExamen.length;

    // Barra de progreso

    barra.style.width=
    (
        (indicePregunta+1)
        /
        preguntasExamen.length
    )*100+"%";

    textoPregunta.innerHTML=
    pregunta.pregunta;

    opciones.innerHTML="";

    pregunta.opciones.forEach(function(opcion,i){

        opciones.innerHTML+=`

<label
class="opcion"
id="opcion${i}">

<input
type="radio"
name="respuesta"
value="${i}">

<strong>${String.fromCharCode(65+i)}.</strong>

${opcion}

</label>

`;

    });

    // Toda la tarjeta selecciona el radio

    document
    .querySelectorAll(".opcion")
    .forEach(function(card){

        card.onclick=function(){

            this.querySelector("input").checked=true;

        }

    });

}

//=====================================================

function corregirPregunta(){

    const seleccion=

    document.querySelector(

        'input[name="respuesta"]:checked'

    );

    if(!seleccion){

        alert("Seleccione una respuesta.");

        return;

    }

    const respuesta=

    parseInt(seleccion.value);

    const pregunta=

    preguntasExamen[indicePregunta];

    // Bloquear respuestas

    document
    .querySelectorAll(

        'input[name="respuesta"]'

    )
    .forEach(function(r){

        r.disabled=true;

    });

    // Pintar correcta

    document
    .getElementById(

        "opcion"+pregunta.correcta

    )
    .classList.add("correcta");

    // Si falló

    if(respuesta!=pregunta.correcta){

        document
        .getElementById(

            "opcion"+respuesta

        )
        .classList.add("incorrecta");

        preguntasIncorrectas.push(

            pregunta

        );

    }

    else{

        puntaje++;

    }

    // La revisión de errores no altera el historial de rendimiento.
    if(!modoRevision){

        respuestasSesion.push({
            id:pregunta.id,
            tema:pregunta.tema,
            correcta:respuesta===pregunta.correcta
        });

    }

    // Mostrar explicación

    cuadroExplicacion.style.display="block";

    if(pregunta.explicacion){

        textoExplicacion.innerHTML=

        pregunta.explicacion;

    }

    else{

        textoExplicacion.innerHTML=

        "No existe explicación disponible para esta pregunta.";

    }

    // Cambiar botón

    btnResponder.innerHTML="➡️ Siguiente";

    btnResponder.onclick=siguientePregunta;

}

//=====================================================

function siguientePregunta(){

    indicePregunta++;

    if(indicePregunta>=preguntasExamen.length){

        finalizarExamen();

        return;

    }

    mostrarPregunta();

}

//=====================================================
// PARTE 3/5
// RESULTADOS
//=====================================================

function finalizarExamen(){

    if(!modoRevision){

        guardarSesionEnEstadisticas();

    }

    mostrarPantalla("resultado");

    const total = preguntasExamen.length;

    const porcentaje =
    Math.round((puntaje/total)*100);

    resultadoPuntaje.innerHTML =
    puntaje + " / " + total;

    resultadoPorcentaje.innerHTML =
    porcentaje + "%";

    resultadoCorrectas.innerHTML =
    "✅ Correctas: " + puntaje;

    resultadoIncorrectas.innerHTML =
    "❌ Incorrectas: " + (total-puntaje);

    if(porcentaje==100){

        mensajeResultado.innerHTML =
        "🏆 ¡Excelente!";

    }

    else if(porcentaje>=80){

        mensajeResultado.innerHTML =
        "🎯 Muy buen desempeño";

    }

    else if(porcentaje>=60){

        mensajeResultado.innerHTML =
        "👍 Buen trabajo";

    }

    else{

        mensajeResultado.innerHTML =
        "📚 Necesitas reforzar el tema";

    }

}

//=====================================================
// REVISAR EQUIVOCADAS
//=====================================================

btnRevisar.onclick=function(){

    if(preguntasIncorrectas.length==0){

        alert("No existen preguntas incorrectas.");

        return;

    }

    preguntasExamen=[...preguntasIncorrectas];

    indicePregunta=0;

    modoRevision=true;

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

//=====================================================
// REINTENTAR EQUIVOCADAS
//=====================================================

btnReintentar.onclick=function(){

    if(preguntasIncorrectas.length==0){

        alert("No existen preguntas incorrectas.");

        return;

    }

    preguntasExamen=[...preguntasIncorrectas];

    preguntasIncorrectas=[];

    indicePregunta=0;

    puntaje=0;

    modoRevision=false;

    mezclarPreguntas();

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

//=====================================================
// NUEVO EXAMEN
//=====================================================

btnNuevoExamen.onclick=function(){

    mostrarPantalla("seleccion");

}

//=====================================================
// VOLVER AL INICIO
//=====================================================

btnVolverInicio.onclick=function(){

    mostrarPantalla("inicio");

}

//=====================================================
// PARTE 4/5
// MEJORAS DEL EXAMEN
//=====================================================

//===============================
// MEZCLAR ALTERNATIVAS
//===============================

function mezclarOpciones(pregunta){

    const opciones = pregunta.opciones.map(function(texto,indice){

        return{

            texto:texto,
            correcta:(indice===pregunta.correcta)

        };

    });

    opciones.sort(function(){

        return Math.random()-0.5;

    });

    pregunta.opciones =
    opciones.map(o=>o.texto);

    pregunta.correcta =
    opciones.findIndex(o=>o.correcta);

}

//=====================================================
// PREPARAR EXAMEN
//=====================================================

function prepararExamen(){

    preguntasExamen.forEach(function(p){

        mezclarOpciones(p);

    });

}

//=====================================================
// MODIFICAR iniciarExamen()
//=====================================================
//
// Dentro de iniciarExamen(),
// justo después de:
//
// mezclarPreguntas();
//
// agrega:
//
// prepararExamen();
//
//=====================================================


//=====================================================
// MENSAJE CORRECTO / INCORRECTO
//=====================================================

function mostrarMensajeResultado(acerto){

    let mensaje =
    document.getElementById("mensajePregunta");

    if(!mensaje){

        mensaje =
        document.createElement("div");

        mensaje.id="mensajePregunta";

        mensaje.style.fontSize="26px";
        mensaje.style.fontWeight="bold";
        mensaje.style.marginBottom="20px";
        mensaje.style.textAlign="center";

        textoPregunta.parentNode.insertBefore(

            mensaje,

            textoPregunta

        );

    }

    if(acerto){

        mensaje.innerHTML="✅ ¡Correcto!";

        mensaje.style.color="#198754";

    }

    else{

        mensaje.innerHTML="❌ Incorrecto";

        mensaje.style.color="#dc3545";

    }

}

//=====================================================
// OCULTAR MENSAJE
//=====================================================

function ocultarMensaje(){

    const mensaje=

    document.getElementById(

        "mensajePregunta"

    );

    if(mensaje){

        mensaje.innerHTML="";

    }

}

//=====================================================
// MODIFICAR mostrarPregunta()
//=====================================================
//
// Al inicio de mostrarPregunta()
// agrega:
//
// ocultarMensaje();
//
//=====================================================


//=====================================================
// MODIFICAR corregirPregunta()
//=====================================================
//
// Donde tienes:
//
// puntaje++;
//
// agrega:
//
// mostrarMensajeResultado(true);
//
//
//
// y donde agregas la pregunta incorrecta:
//
// preguntasIncorrectas.push(pregunta);
//
// agrega:
//
// mostrarMensajeResultado(false);
//
//=====================================================


//=====================================================
// DESHABILITAR TARJETAS
//=====================================================

function bloquearTarjetas(){

    document
    .querySelectorAll(".opcion")
    .forEach(function(card){

        card.style.pointerEvents="none";

    });

}

function habilitarTarjetas(){

    document
    .querySelectorAll(".opcion")
    .forEach(function(card){

        card.style.pointerEvents="auto";

    });

}

//=====================================================
//
// En corregirPregunta()
// después de deshabilitar los radios:
//
// bloquearTarjetas();
//
//
//
// En mostrarPregunta()
// al final:
//
// habilitarTarjetas();
//
//=====================================================


//=====================================================
// PARTE 5/5
// FUNCIONES FINALES
//=====================================================

//===============================
// REINICIAR EXAMEN
//===============================

function reiniciarExamen(){

    indicePregunta = 0;

    puntaje = 0;

    preguntasIncorrectas = [];

    barra.style.width = "0%";

    cuadroExplicacion.style.display = "none";

    textoExplicacion.innerHTML = "";

}

//===============================
// BOTÓN NUEVO EXAMEN
//===============================

btnNuevoExamen.onclick = function(){

    reiniciarExamen();

    mostrarPantalla("seleccion");

}

//===============================
// BOTÓN VOLVER AL INICIO
//===============================

btnVolverInicio.onclick = function(){

    reiniciarExamen();

    mostrarPantalla("inicio");

}

//===============================
// BOTÓN REVISAR EQUIVOCADAS
//===============================

btnRevisar.onclick = function(){

    if(preguntasIncorrectas.length==0){

        alert("No existen preguntas incorrectas.");

        return;

    }

    preguntasExamen=[...preguntasIncorrectas];

    indicePregunta=0;

    modoRevision=true;

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

//===============================
// BOTÓN REINTENTAR
//===============================

btnReintentar.onclick=function(){

    if(preguntasIncorrectas.length==0){

        alert("No existen preguntas incorrectas.");

        return;

    }

    preguntasExamen=[...preguntasIncorrectas];

    preguntasIncorrectas=[];

    indicePregunta=0;

    puntaje=0;

    modoRevision=false;

    respuestasSesion=[];

    mezclarPreguntas();

    prepararExamen();

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

//===============================
// ATAJOS DE TECLADO
//===============================

document.addEventListener("keydown",function(e){

    if(pantallaPregunta.style.display!="block"){

        return;

    }

    switch(e.key){

        case "1":

            seleccionarOpcion(0);

            break;

        case "2":

            seleccionarOpcion(1);

            break;

        case "3":

            seleccionarOpcion(2);

            break;

        case "4":

            seleccionarOpcion(3);

            break;

        case "Enter":

            btnResponder.click();

            break;

    }

});

//===============================
// SELECCIONAR OPCIÓN
//===============================

function seleccionarOpcion(numero){

    const radios=document.querySelectorAll(
        'input[name="respuesta"]'
    );

    if(radios[numero]){

        radios[numero].checked=true;

    }

}

//===============================
// EVITAR ERRORES DE EXPLICACIÓN
//===============================

function obtenerExplicacion(pregunta){

    if(
        pregunta.explicacion===undefined ||
        pregunta.explicacion===null ||
        pregunta.explicacion==""
    ){

        return "No existe explicación disponible para esta pregunta.";

    }

    return pregunta.explicacion;

}

//===============================
// REEMPLAZAR EN corregirPregunta()
//===============================
//
// Cambia:
//
// textoExplicacion.innerHTML =
// pregunta.explicacion;
//
//
//
// por:
//
// textoExplicacion.innerHTML =
// obtenerExplicacion(pregunta);
//
//===============================

//=====================================================
// ESTADÍSTICAS LOCALES
//=====================================================

function leerEstadisticas(){

    try{

        const datos=JSON.parse(localStorage.getItem(CLAVE_ESTADISTICAS));

        return Array.isArray(datos) ? datos : [];

    }

    catch(error){

        return [];

    }

}

function guardarSesionEnEstadisticas(){

    if(respuestasSesion.length===0){

        return;

    }

    const historial=leerEstadisticas();

    historial.push({
        fecha:new Date().toISOString(),
        tema:temaSesion || selectTema.value,
        puntaje:puntaje,
        total:preguntasExamen.length,
        respuestas:respuestasSesion
    });

    // Limita el historial para no llenar el almacenamiento del navegador.
    localStorage.setItem(CLAVE_ESTADISTICAS, JSON.stringify(historial.slice(-200)));

}

function escaparHTML(texto){

    const elemento=document.createElement("div");

    elemento.textContent=texto;

    return elemento.innerHTML;

}

function mostrarEstadisticas(){

    const historial=leerEstadisticas();

    if(historial.length===0){

        contenidoEstadisticas.innerHTML=`
            <div class="estadoVacio">
                <div>📚</div>
                <h3>Aún no tienes exámenes registrados</h3>
                <p>Completa un examen para ver tu rendimiento por tema y tus preguntas más difíciles.</p>
            </div>`;

        return;

    }

    const respuestas=historial.flatMap(sesion=>
        Array.isArray(sesion.respuestas) ? sesion.respuestas : []
    );
    const correctas=respuestas.filter(respuesta=>respuesta.correcta).length;
    const porcentaje=respuestas.length ? Math.round((correctas/respuestas.length)*100) : 0;
    const porTema={};
    const erroresPorPregunta={};

    respuestas.forEach(function(respuesta){

        if(!porTema[respuesta.tema]){

            porTema[respuesta.tema]={total:0,correctas:0};

        }

        porTema[respuesta.tema].total++;

        if(respuesta.correcta){

            porTema[respuesta.tema].correctas++;

        }

        else{

            erroresPorPregunta[respuesta.id]=
            (erroresPorPregunta[respuesta.id] || 0)+1;

        }

    });

    const filasTemas=Object.entries(porTema)
    .sort((a,b)=>(a[1].correctas/a[1].total)-(b[1].correctas/b[1].total))
    .map(function([tema,datos]){

        const rendimiento=Math.round((datos.correctas/datos.total)*100);

        return `<div class="filaTema">
            <div class="temaFila"><strong>${escaparHTML(tema)}</strong><span>${datos.correctas}/${datos.total} correctas</span></div>
            <div class="miniBarra"><span style="width:${rendimiento}%"></span></div>
            <strong>${rendimiento}%</strong>
        </div>`;

    }).join("");

    const preguntasDificiles=Object.entries(erroresPorPregunta)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,5)
    .map(function([id,fallos]){

        const pregunta=bancoPreguntas.find(p=>String(p.id)===String(id));

        if(!pregunta){

            return "";

        }

        return `<li><strong>${escaparHTML(pregunta.tema)}</strong><br>${escaparHTML(pregunta.pregunta)}<span>${fallos} fallo${fallos===1 ? "" : "s"}</span></li>`;

    }).join("");

    const ultimasSesiones=historial.slice(-5).reverse().map(function(sesion){

        const fecha=new Date(sesion.fecha).toLocaleDateString("es-PE", {
            day:"2-digit", month:"short", year:"numeric"
        });
        const nota=Math.round((sesion.puntaje/sesion.total)*100);

        return `<li><strong>${escaparHTML(sesion.tema)}</strong><span>${fecha} · ${sesion.puntaje}/${sesion.total} (${nota}%)</span></li>`;

    }).join("");

    contenidoEstadisticas.innerHTML=`
        <div class="resumenEstadisticas">
            <div class="datoEstadistica"><strong>${historial.length}</strong><span>exámenes</span></div>
            <div class="datoEstadistica"><strong>${porcentaje}%</strong><span>acierto global</span></div>
            <div class="datoEstadistica"><strong>${correctas}/${respuestas.length}</strong><span>respuestas correctas</span></div>
        </div>
        <section class="bloqueEstadistica">
            <h3>Rendimiento por tema</h3>
            ${filasTemas}
        </section>
        <section class="bloqueEstadistica">
            <h3>Preguntas para reforzar</h3>
            ${preguntasDificiles ? `<ul class="listaEstadistica">${preguntasDificiles}</ul>` : "<p>¡No has fallado preguntas todavía!</p>"}
        </section>
        <section class="bloqueEstadistica">
            <h3>Últimos exámenes</h3>
            <ul class="listaEstadistica">${ultimasSesiones}</ul>
        </section>`;

}

btnVolverEstadisticas.onclick=function(){

    mostrarPantalla("inicio");

}

btnBorrarEstadisticas.onclick=function(){

    if(confirm("¿Deseas borrar todo tu historial de estadísticas?")){

        localStorage.removeItem(CLAVE_ESTADISTICAS);

        mostrarEstadisticas();

    }

}

