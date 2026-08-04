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
let cursoSeleccionado = "";

const CLAVE_ESTADISTICAS = "bankmed_estadisticas_v1";
const CLAVE_NOMBRE_USUARIO = "bankmed_nombre_usuario";

// Mantiene visibles los subtemas planificados aunque todavía no tengan preguntas.
const SUBTEMAS_PLANIFICADOS = {
    "Anatomía":[
        "Anatomía: Generalidades",
        "Anatomía: Locomotor",
        "Anatomía: Cabeza",
        "Anatomía: Cuello",
        "Anatomía: Sistema nervioso",
        "Anatomía: Tórax",
        "Anatomía: Abdomen",
        "Anatomía: Retroperitoneo",
        "Anatomía: Pelvis"
    ],
    "Histología":[
        "Histología: Tejidos básicos",
        "Histología: Sistema linfoide cardio-respiratorio",
        "Histología: Órganos metabólicos",
        "Histología: Aparato reproductor femenino y masculino",
        "Histología: Órganos de los sentidos",
        "Histología: Sistema tegumentario"
    ],
    "Bioquímica":[
        "Bioquímica: Estructura y función a nivel celular",
        "Bioquímica: Señalización celular",
        "Bioquímica: Metabolismo general",
        "Bioquímica: Metabolismo tisular",
        "Bioquímica: Bioquímica de las hormonas"
    ],
    "Fisiología":[
        "Fisiología: Fisiología neuromuscular",
        "Fisiología: Fisiología respiratoria",
        "Fisiología: Equilibrio hídrico, intercambio capilar y circulación",
        "Fisiología: Fisiología renal",
        "Fisiología: Fisiología digestiva y hepática",
        "Fisiología: Fisiología endocrina y reproductiva"
    ],
    "Patología":[
        "Patología: Patología neoplásica",
        "Patología: Patología vascular e inmunopatología",
        "Patología: Patología inflamatoria e infecciosa"
    ]
};

SUBTEMAS_PLANIFICADOS["Fisiología"]=[
    "Fisiología: Fisiología cardiovascular",
    "Fisiología: Fisiología respiratoria",
    "Fisiología: Fisiología digestiva",
    "Fisiología: Fisiología del sistema excretor y medio interno",
    "Fisiología: Fisiología del sistema endocrino, sistemas reproductor femenino y masculino",
    "Fisiología: Sistema hemato-inmune",
    "Fisiología: Fisiología del sistema nervioso",
    "Fisiología: Fisiología del sistema locomotor",
    "Fisiología: Integración fisiológica"
];

SUBTEMAS_PLANIFICADOS["Patología"]=[
    "Patología: Adaptación, lesiones y muerte celular",
    "Patología: Inflamación y reparación",
    "Patología: Trastornos hemodinámicos",
    "Patología: Inmunopatología",
    "Patología: Neoplasias",
    "Patología: Enfermedades medioambientales",
    "Patología: Patología infecciosa",
    "Patología: Patología cardiovascular",
    "Patología: Patología del sistema hematopoyético",
    "Patología: Patología del sistema respiratorio",
    "Patología: Patología del sistema digestivo",
    "Patología: Patología renal y de vías urinarias",
    "Patología: Patología del aparato reproductor y de la mama",
    "Patología: Patología del sistema endocrino",
    "Patología: Patología de la piel",
    "Patología: Patología ósea y de tejidos blandos",
    "Patología: Patología del sistema nervioso periférico y central"
];

SUBTEMAS_PLANIFICADOS["Microbiología y Parasitología"]=[
    "Microbiología y Parasitología: Bacteriología",
    "Microbiología y Parasitología: Micología",
    "Microbiología y Parasitología: Virología",
    "Microbiología y Parasitología: Helmintos",
    "Microbiología y Parasitología: Protozoos",
    "Microbiología y Parasitología: Artrópodos"
];

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

const pantallaQuienSoy =
document.getElementById("pantallaQuienSoy");

//===============================
// BOTONES
//===============================

const btnEstadisticas =
document.getElementById("btnEstadisticas");

const btnQuienSoy =
document.getElementById("btnQuienSoy");

const btnVolverQuienSoy =
document.getElementById("btnVolverQuienSoy");

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

const btnVolverCursos =
document.getElementById("btnVolverCursos");

const btnSimulacro =
document.getElementById("btnSimulacro");

const btnSimulacroInicio =
document.getElementById("btnSimulacroInicio");

const botonesCurso =
document.querySelectorAll(".cursoDisponible");

const mascotaSaludo =
document.getElementById("mascotaSaludo");

const mensajeMascota =
document.getElementById("mensajeMascota");

const btnMascota =
document.getElementById("btnMascota");

const modalNombre =
document.getElementById("modalNombre");

const inputNombre =
document.getElementById("inputNombre");

const btnGuardarNombre =
document.getElementById("btnGuardarNombre");

const btnOmitirNombre =
document.getElementById("btnOmitirNombre");

const saludoUsuario =
document.getElementById("saludoUsuario");

//===============================
// CONTROLES
//===============================

const selectTema =
document.getElementById("sistema");

const selectCantidad =
document.getElementById("cantidad");

const tituloSeleccion =
document.getElementById("tituloSeleccion");

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

    configurarMascota();

    btnQuienSoy.onclick=function(){

        mostrarPantalla("quienSoy");

    };

    btnVolverQuienSoy.onclick=function(){

        mostrarPantalla("inicio");

    };

}

function configurarMascota(){

    const nombreGuardado=localStorage.getItem(CLAVE_NOMBRE_USUARIO);

    actualizarSaludoMascota(nombreGuardado);

    if(!nombreGuardado){

        mostrarModalNombre();

    }

    btnMascota.onclick=function(){

        mostrarModalNombre();

    };

    btnGuardarNombre.onclick=guardarNombreUsuario;

    btnOmitirNombre.onclick=function(){

        cerrarModalNombre();
        mensajeMascota.textContent="¡Hola! Soy Guilbert. Cuando quieras, toca mi patita para saludar.";
        saludoUsuario.textContent="";

    };

    inputNombre.addEventListener("keydown",function(evento){

        if(evento.key==="Enter"){

            guardarNombreUsuario();

        }

    });

}

function actualizarSaludoMascota(nombre){

    mensajeMascota.textContent=nombre
        ? "¡Hola, "+nombre+"! Soy Guilbert. ¿Listo para aprender hoy?"
        : "¡Hola! Soy Guilbert. ¿Cómo te llamas?";

    saludoUsuario.textContent=nombre
        ? "¡Hola, "+nombre+"! ¿Qué curso te gustaría estudiar hoy?"
        : "";

}

function mostrarModalNombre(){

    inputNombre.value=localStorage.getItem(CLAVE_NOMBRE_USUARIO) || "";
    modalNombre.style.display="flex";
    mascotaSaludo.classList.add("mascotaAbierta");

    setTimeout(function(){

        inputNombre.focus();
        inputNombre.select();

    },100);

}

function cerrarModalNombre(){

    modalNombre.style.display="none";

}

function guardarNombreUsuario(){

    const nombre=inputNombre.value.trim().replace(/\s+/g," ").slice(0,30);

    if(!nombre){

        inputNombre.focus();
        return;

    }

    localStorage.setItem(CLAVE_NOMBRE_USUARIO,nombre);
    actualizarSaludoMascota(nombre);
    cerrarModalNombre();

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
    pantallaQuienSoy.style.display="none";

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

        case "quienSoy":

            pantallaQuienSoy.style.display="block";
            break;

    }

}

//===============================
// CARGAR TEMAS
//===============================

function cargarTemas(){

    selectTema.innerHTML="";

    const preguntasDelCurso=bancoPreguntas.filter(function(pregunta){

        const cursosConPreguntas=["Anatomía","Embriología","Histología","Bioquímica","Fisiología","Patología","Microbiología y Parasitología"];

        if(cursosConPreguntas.includes(cursoSeleccionado)){

            return pregunta.tema.startsWith(cursoSeleccionado+":");

        }

        // Las preguntas sin prefijo de otro curso pertenecen a Farmacología.
        return !cursosConPreguntas.some(function(curso){

            return pregunta.tema.startsWith(curso+":");

        });

    });

    const temasBanco=preguntasDelCurso.map(p=>p.tema);
    const temasPlanificados=SUBTEMAS_PLANIFICADOS[cursoSeleccionado] || [];
    const temas=[...new Set([...temasPlanificados,...temasBanco])];

    // Mantiene el orden curricular cuando hay subtemas planificados.
    if(temasPlanificados.length===0){

        temas.sort();

    }

    temas.forEach(function(tema){

        const total =
        preguntasDelCurso.filter(

            p=>p.tema===tema

        ).length;

        const option =
        document.createElement("option");

        option.value=tema;

        const prefijoCurso=cursoSeleccionado ? cursoSeleccionado+":" : "";
        const nombreSubtema=tema.startsWith(prefijoCurso) ?
        tema.slice(prefijoCurso.length).trim() : tema;

        option.textContent=
        nombreSubtema+" ("+total+")";

        selectTema.appendChild(option);

    });

}

//===============================
// BOTONES
//===============================

botonesCurso.forEach(function(boton){

    boton.onclick=function(){

        cursoSeleccionado=this.dataset.curso;

        tituloSeleccion.textContent=cursoSeleccionado;

        cargarTemas();

        mostrarPantalla("seleccion");

    }

});

function iniciarSimulacro(){

    indicePregunta=0;

    puntaje=0;

    preguntasIncorrectas=[];

    respuestasSesion=[];

    modoRevision=false;

    temaSesion="Simulacro general · Todos los cursos";

    // Se toma una muestra aleatoria de todo el banco, sin filtrar por tema.
    preguntasExamen=[...bancoPreguntas];

    mezclarPreguntas();

    preguntasExamen=preguntasExamen.slice(0,20);

    prepararExamen();

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

    if(preguntasExamen.length===0){

        alert("Este subtema aún no tiene preguntas disponibles.");

        return;

    }

    mezclarPreguntas();

    if(selectCantidad.value!="Todas"){

        preguntasExamen=
        preguntasExamen.slice(

            0,

            parseInt(selectCantidad.value)

        );

    }

    prepararExamen();

    mostrarPantalla("pregunta");

    mostrarPregunta();

}

//===============================
// MEZCLAR
//===============================

function mezclarPreguntas(){

    preguntasExamen=mezclarArreglo(preguntasExamen);

}

btnSimulacro.onclick=function(){

    iniciarSimulacro();

}

btnSimulacroInicio.onclick=function(){

    iniciarSimulacro();

}

btnVolverCursos.onclick=function(){

    mostrarPantalla("inicio");

}

function mezclarArreglo(arreglo){

    const copia=[...arreglo];

    for(let i=copia.length-1;i>0;i--){

        const indiceAleatorio=Math.floor(Math.random()*(i+1));

        [copia[i],copia[indiceAleatorio]]=
        [copia[indiceAleatorio],copia[i]];

    }

    return copia;

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

    const opcionesMezcladas=mezclarArreglo(opciones);

    return{
        ...pregunta,
        opciones:opcionesMezcladas.map(o=>o.texto),
        correcta:opcionesMezcladas.findIndex(o=>o.correcta)
    };

}

//=====================================================
// PREPARAR EXAMEN
//=====================================================

function prepararExamen(){

    preguntasExamen=preguntasExamen.map(mezclarOpciones);

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

