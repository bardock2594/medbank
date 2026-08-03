const bancoPreguntas = [
{
    id:1,
    tema:"Farmacología del SNA I: Fármacos Colinérgicos",

    pregunta:"Un agricultor es llevado a emergencia por presentar miosis, broncorrea masiva, sialorrea, diarrea y fasciculaciones musculares luego de manipular insecticidas. Tras asegurar la vía aérea, se decide administrar el fármaco que revierte con mayor rapidez las manifestaciones responsables del compromiso respiratorio agudo. ¿Cuál es el medicamento indicado?",

    opciones:[
        "Pralidoxima",
        "Neostigmina",
        "Atropina",
        "Diazepam"
    ],

    correcta:2,
    explicacion:"La atropina es un antagonista competitivo de los receptores muscarínicos que revierte rápidamente los efectos del exceso de acetilcolina sobre bronquios y glándulas exocrinas, disminuyendo la broncorrea y el broncoespasmo responsables del compromiso respiratorio en la intoxicación por organofosforados."
},

{
    id:2,
    tema:"Anticonvulsivantes y Ansiolíticos",

    pregunta:"Paciente sometido a endoscopia digestiva recibe un sedante que aumenta la frecuencia de apertura del canal de cloro asociado al receptor GABA-A. Posteriormente desarrolla depresión excesiva del nivel de conciencia y se administra un antagonista específico. ¿Cuál es el fármaco utilizado?",

    opciones:[
        "Sugammadex",
        "Naloxona",
        "Flumazenil",
        "Neostigmina"
    ],

    correcta:2,
    explicacion: "El flumazenil es un antagonista competitivo del sitio de unión de las benzodiacepinas en el receptor GABA-A, revirtiendo rápidamente la sedación y la depresión del sistema nervioso central inducidas por estos fármacos."
},

{
    id:3,
    tema:"Anticonvulsivantes y Ansiolíticos",

    pregunta:"Paciente con epilepsia focal recibe un antiepiléptico que no actúa principalmente bloqueando canales de sodio ni potenciando directamente la neurotransmisión GABAérgica. Su efecto se relaciona con la modulación de la exocitosis de vesículas sinápticas mediante interacción con una proteína presináptica específica. ¿Cuál es el medicamento?",

    opciones:[
        "Fenobarbital",
        "Levetiracetam",
        "Carbamazepina",
        "Fenitoína"
    ],

    correcta:1,
    explicacion: "El levetiracetam se une a la proteína vesicular sináptica SV2A, modulando la liberación de neurotransmisores y disminuyendo la excitabilidad neuronal, sin actuar principalmente sobre canales de sodio ni potenciar directamente la neurotransmisión GABAérgica."
},

{
    id:4,
    tema:"Anticonvulsivantes y Ansiolíticos",

    pregunta:"Paciente con cirrosis hepática Child-Pugh B desarrolla síndrome ansioso agudo. Se decide utilizar una benzodiazepina cuyo aclaramiento sea relativamente independiente de la actividad del sistema microsomal hepático CYP450. ¿Cuál de los siguientes fármacos posee esta característica?",

    opciones:[
        "Diazepam",
        "Clonazepam",
        "Lorazepam",
        "Alprazolam"
    ],

    correcta:2,
    explicacion: "El lorazepam se metaboliza principalmente por glucuronidación, por lo que su aclaramiento depende poco del sistema CYP450. Esta característica lo convierte en la benzodiacepina de elección en pacientes con insuficiencia hepática."
},

{
    id:5,
    tema:"Anticonvulsivantes y Ansiolíticos",

    pregunta:"Paciente con ansiedad crónica requiere un tratamiento que no produzca sedación importante ni potenciación de la neurotransmisión GABAérgica. El medicamento actúa principalmente como agonista parcial de un receptor serotoninérgico. ¿Cuál es el fármaco?",

    opciones:[
        "Diazepam",
        "Midazolam",
        "Buspirona",
        "Alprazolam"
    ],

    correcta:2,
    explicacion: "La buspirona es un agonista parcial de los receptores serotoninérgicos 5-HT1A, produciendo un efecto ansiolítico sin potenciar la neurotransmisión GABAérgica, por lo que presenta escasa sedación y bajo riesgo de dependencia."
},

{
    id:6,
    tema:"Antiinflamatorios y Analgésicos Periféricos y Centrales",

    pregunta:"Paciente varón de 67 años con antecedente de infarto agudo de miocardio hace 8 meses consulta por gonalgia secundaria a osteoartrosis. Solicita tratamiento antiinflamatorio debido a persistencia del dolor. Considerando sus antecedentes cardiovasculares, ¿cuál de los siguientes fármacos debería evitarse por incrementar el riesgo de eventos tromboembólicos?",

    opciones:[
        "Tramadol",
        "Celecoxib",
        "Naproxeno",
        "Paracetamol"
    ],

    correcta:1,
    explicacion: "El celecoxib inhibe selectivamente la COX-2, disminuyendo la síntesis de prostaciclina (PGI₂) sin inhibir significativamente la producción de tromboxano A₂. Este desequilibrio favorece un estado protrombótico y aumenta el riesgo de eventos cardiovasculares."
},

{
    id:7,
    tema:"Antiinflamatorios y Analgésicos Periféricos y Centrales",

    pregunta:"Paciente con insuficiencia cardíaca crónica compensada desarrolla lumbalgia y automedicación con un AINE. Días después presenta edema periférico, aumento de peso y disnea de esfuerzo. ¿Cuál es el mecanismo farmacológico que mejor explica esta descompensación?",

    opciones:[
        "Bloqueo de la enzima convertidora de angiotensina",
        "Estimulación de la liberación de péptido natriurético auricular",
        "Disminución de natriuresis y retención de sodio",
        "Activación de receptores mineralocorticoides en el túbulo colector"
    ],

    correcta:2,
    explicacion: "Los AINE inhiben la síntesis de prostaglandinas renales, disminuyendo el flujo sanguíneo renal y la excreción de sodio. Esto favorece la retención hidrosalina, el edema y la descompensación de la insuficiencia cardíaca."
},

{
    id:8,
    tema:"Fármacos Antihipertensivos",

    pregunta:"Paciente de 72 años es hospitalizado por un infarto agudo de miocardio. Durante las primeras horas presenta presión arterial de 85/60 mmHg y desarrolla insuficiencia renal aguda con elevación progresiva de creatinina sérica. Se revisa la medicación cardiovascular y se decide evitar temporalmente un fármaco debido al riesgo de empeorar tanto la perfusión renal como la hipotensión. ¿Cuál de los siguientes medicamentos está contraindicado en este contexto?",

    opciones:[
        "Atorvastatina",
        "Clopidogrel",
        "Enalapril",
        "Ácido acetilsalicílico"
    ],

    correcta:2,
    explicacion: "El enalapril inhibe la enzima convertidora de angiotensina y produce dilatación de la arteriola eferente glomerular, disminuyendo la presión de filtración. En pacientes con hipotensión e insuficiencia renal aguda puede agravar el deterioro de la función renal."
},

{
    id:9,
    tema:"Fármacos Vasoactivos",

    pregunta:"Paciente con shock cardiogénico recibe un inodilatador intravenoso. Tras el inicio del tratamiento se observa aumento del índice cardíaco y disminución de la presión capilar pulmonar sin incremento significativo del consumo miocárdico de oxígeno. El efecto se produce por aumento de AMPc tanto en cardiomiocitos como en músculo liso vascular. ¿Cuál es el fármaco administrado?",

    opciones:[
        "Fenilefrina",
        "Milrinona",
        "Noradrenalina",
        "Dobutamina"
    ],

    correcta:1,
    explicacion: "La milrinona inhibe la fosfodiesterasa III, aumentando las concentraciones de AMPc en cardiomiocitos y músculo liso vascular. Este mecanismo incrementa la contractilidad cardíaca y produce vasodilatación periférica."
},

{
    id:10,
    tema:"Fármacos Vasoactivos",

    pregunta:"Paciente con insuficiencia cardíaca aguda presenta bajo gasto cardíaco y adecuada presión arterial. El médico selecciona un inotrópico cuyo efecto principal es aumentar la contractilidad miocárdica con escaso efecto cronotrópico y una disminución moderada de la poscarga. ¿Cuál es el fármaco?",

    opciones:[
        "Vasopresina",
        "Fenilefrina",
        "Dobutamina",
        "Noradrenalina"
    ],

    correcta:2,
    explicacion: "La dobutamina es un agonista predominante de los receptores β₁-adrenérgicos que aumenta la contractilidad miocárdica con escaso efecto cronotrópico. Además, su leve acción sobre receptores β₂ disminuye moderadamente la resistencia vascular sistémica."
},

{
    id:11,
    tema:"Fármacos Antiarrítmicos",

    pregunta:"Varón de 64 años es hospitalizado por un infarto agudo de miocardio. Durante su evolución desarrolla episodios recurrentes de taquicardia ventricular. ¿Qué fármaco antiarrítmico presenta mayor afinidad por los canales rápidos de sodio en estado inactivo, característica que favorece su acción en tejido ventricular isquémico?",

    opciones:[
        "Verapamilo",
        "Lidocaína",
        "Procainamida",
        "Flecainida"
    ],

    correcta:1,
    explicacion: "La lidocaína es un antiarrítmico clase IB que presenta mayor afinidad por los canales rápidos de sodio en estado inactivo, predominantes en el miocardio ventricular isquémico, suprimiendo selectivamente las arritmias ventriculares."
},

{
    id:12,
    tema:"Fármacos en Insuficiencia Cardíaca",

    pregunta:"Paciente de 68 años con insuficiencia cardíaca aguda descompensada presenta bajo gasto cardíaco, extremidades frías y signos de hipoperfusión sistémica. ¿Qué fármaco intravenoso es capaz de aumentar la contractilidad miocárdica y, simultáneamente, reducir la poscarga mediante vasodilatación periférica?",

    opciones:[
        "Vasopresina",
        "Noradrenalina",
        "Milrinona",
        "Fenilefrina"
    ],

    correcta:2,
    explicacion: "La milrinona produce un efecto inotrópico positivo y vasodilatador mediante la inhibición de la fosfodiesterasa III, aumentando el AMPc independientemente de la estimulación de receptores β-adrenérgicos."
},

{
    id:13,
    tema:"Fármacos en Insuficiencia Cardíaca",

    pregunta:"Paciente con insuficiencia cardíaca aguda presenta bajo gasto cardíaco e hipotensión leve. ¿Qué fármaco incrementa la contractilidad miocárdica y produce una reducción moderada de la resistencia vascular sistémica?",

    opciones:[
        "Midodrina",
        "Dobutamina",
        "Vasopresina",
        "Fenilefrina"
    ],

    correcta:1,
    explicacion: "La dobutamina incrementa el gasto cardíaco por estimulación de receptores β₁, mejorando la contractilidad miocárdica y reduciendo moderadamente la resistencia vascular sistémica gracias a su leve actividad β₂."
},

{
    id:14,
    tema:"Fármacos en Insuficiencia Cardíaca",

    pregunta:"Paciente de 72 años con insuficiencia cardíaca aguda descompensada presenta bajo gasto cardíaco y signos de hipoperfusión sistémica. Durante la hospitalización muestra escasa respuesta a dosis crecientes de dobutamina. El equipo médico sospecha una disminución de la densidad y sensibilidad de receptores β-adrenérgicos secundaria a insuficiencia cardíaca crónica avanzada. ¿Cuál de los siguientes fármacos conseguiría un efecto inotrópico positivo en este escenario?",

    opciones:[
        "Dopamina",
        "Isoproterenol",
        "Milrinona",
        "Adrenalina"
    ],

    correcta:2,
    explicacion: "La milrinona conserva su efecto inotrópico en pacientes con insuficiencia cardíaca avanzada porque aumenta el AMPc mediante inhibición de la fosfodiesterasa III, sin depender de la densidad o sensibilidad de los receptores β-adrenérgicos."
},

{
    id:15,
    tema:"Fármacos en la Hemostasia",

    pregunta:"Paciente de 68 años con infarto agudo de miocardio requiere doble antiagregación plaquetaria. Dentro de sus antecedentes presenta úlcera duodenal en tratamiento crónico con omeprazol. ¿Qué fármaco antiagregante debe evitarse debido al riesgo de disminución de su activación metabólica y pérdida de eficacia antitrombótica?",

    opciones:[
        "Abciximab",
        "Aspirina",
        "Clopidogrel",
        "Ticagrelor"
    ],

    correcta:2,
    explicacion: "El clopidogrel es un profármaco que requiere activación por la enzima CYP2C19. El omeprazol inhibe esta isoenzima, reduciendo la formación del metabolito activo y disminuyendo el efecto antiagregante plaquetario."
},

{
    id:16,
    tema:"Fármacos en la Hemostasia",

    pregunta:"Varón de 78 años es hospitalizado por un infarto agudo de miocardio. Durante su evolución desarrolla insuficiencia renal aguda con un aclaramiento de creatinina marcadamente reducido. Se evalúan opciones de anticoagulación y se decide evitar una heparina de bajo peso molecular debido al riesgo de acumulación farmacológica y sangrado secundario a su eliminación predominantemente renal. ¿Cuál de los siguientes fármacos es el responsable de esta limitación?",

    opciones:[
        "Fondaparinux",
        "Enoxaparina",
        "Heparina no fraccionada",
        "Warfarina"
    ],

    correcta:1,
    explicacion: "La enoxaparina se elimina predominantemente por vía renal. En pacientes con insuficiencia renal grave puede acumularse, incrementando el riesgo de hemorragia, motivo por el cual suele preferirse la heparina no fraccionada."
},

{
    id:17,
    tema:"Fármacos en la Hemostasia",

    pregunta:"Paciente con fibrilación auricular valvular inicia anticoagulación oral. Al quinto día desarrolla necrosis cutánea dolorosa. Se sospecha una reducción desproporcionadamente rápida de proteínas anticoagulantes fisiológicas respecto a factores procoagulantes. ¿Qué proteína explica principalmente este fenómeno?",

    opciones:[
        "Proteína Z",
        "Proteína C",
        "Antitrombina III",
        "Plasminógeno"
    ],

    correcta:1,
    explicacion: "La warfarina disminuye rápidamente los niveles de proteína C debido a su corta vida media. Esto genera un estado transitorio de hipercoagulabilidad que puede producir necrosis cutánea durante los primeros días del tratamiento."
},

{
    id:18,
    tema:"Fármacos en la Hemostasia",

    pregunta:"Paciente con síndrome coronario agudo recibe anticoagulación parenteral. Una semana después presenta trombocitopenia y trombosis recurrente. Se decide suspender inmediatamente el anticoagulante y evitar su reexposición futura. ¿Cuál de los siguientes fármacos se asocia con mayor frecuencia a este efecto adverso?",

    opciones:[
        "Bivalirudina",
        "Heparina no fraccionada",
        "Fondaparinux",
        "Enoxaparina"
    ],

    correcta:1,
    explicacion: "La heparina no fraccionada puede inducir trombocitopenia inmunomediada por anticuerpos contra el complejo factor plaquetario 4-heparina, provocando activación plaquetaria y trombosis paradójica."
},

{
    id:19,
    tema:"Fármacos Anti Dislipidémicos",

    pregunta:"Paciente tratado con atorvastatina presenta debilidad muscular proximal y elevación de CK. El efecto adverso se relaciona con la inhibición de una ruta metabólica que genera tanto colesterol como moléculas necesarias para la función mitocondrial. ¿Cuál de los siguientes compuestos disminuye como consecuencia directa de esta inhibición?",

    opciones:[
        "Ácido araquidónico",
        "Carnitina",
        "Creatina",
        "Coenzima Q10"
    ],

    correcta:3,
    explicacion: "Las estatinas inhiben la HMG-CoA reductasa, reduciendo la síntesis de mevalonato y de coenzima Q10, componente esencial de la cadena respiratoria mitocondrial. Su disminución se relaciona con la aparición de miopatía."
},

{
    id:20,
    tema:"Fármacos Anti Dislipidémicos",

    pregunta:"Paciente tratado con gemfibrozilo presenta disminución significativa de triglicéridos plasmáticos. El efecto terapéutico se atribuye a la activación de PPAR-α. ¿Cuál de los siguientes cambios metabólicos NO es consecuencia directa de dicha activación?",

    opciones:[
        "Aumento de Apo A-I y Apo A-II",
        "Aumento de la lipólisis intravascular de VLDL",
        "Disminución de Apo C-III",
        "Inhibición de la HMG-CoA reductasa"
    ],

    correcta:3,
    explicacion: "El gemfibrozilo activa el receptor nuclear PPAR-α, aumentando la actividad de la lipoproteína lipasa, disminuyendo Apo C-III e incrementando Apo A-I y Apo A-II. No inhibe la HMG-CoA reductasa, mecanismo exclusivo de las estatinas."
},

{
    id:21,
    tema:"Antiasmáticos y Antihistamínicos - EPOC",

    pregunta:"Paciente con asma grave recibe dosis elevadas y repetidas de salbutamol durante una exacerbación. Horas después presenta temblor, taquicardia y alteraciones bioquímicas secundarias a estimulación sistémica β₂. ¿Cuál de los siguientes cambios de laboratorio sería el menos esperable?",

    opciones:[
        "Incremento del lactato sérico",
        "Disminución del potasio sérico",
        "Elevación del calcio sérico",
        "Elevación de la glucemia plasmática"
    ],

    correcta:2,
    explicacion: "El salbutamol estimula los receptores β₂-adrenérgicos, aumentando la glucogenólisis, la producción de lactato y la captación intracelular de potasio. No produce elevación del calcio sérico, por lo que este hallazgo es el menos esperable."
},

{
    id:22,
    tema:"Antiasmáticos y Antihistamínicos - EPOC",

    pregunta:"Paciente de 8 años con asma bronquial presenta episodios recurrentes de sibilancias y disnea. Se decide iniciar un broncodilatador inhalado cuyo mecanismo principal consiste en aumentar las concentraciones intracelulares de AMPc en el músculo liso bronquial, produciendo relajación rápida de la vía aérea. ¿Cuál de los siguientes fármacos es el más apropiado?",

    opciones:[
        "Ipratropio",
        "Budesonida",
        "Salbutamol",
        "Montelukast"
    ],

    correcta:2,
    explicacion: "El salbutamol es un agonista selectivo de los receptores β₂-adrenérgicos que activa la adenilato ciclasa, incrementando el AMPc en el músculo liso bronquial y produciendo broncodilatación rápida."
},

{
    id:23,
    tema:"Antiasmáticos y Antihistamínicos - EPOC",

    pregunta:"Paciente de 32 años con asma de difícil control inicia un fármaco oral broncodilatador. Posteriormente desarrolla ansiedad, insomnio, pesadillas y palpitaciones. ¿Cuál es el fármaco que causa estos efectos por inhibición de la vía fisiológica que normalmente ejerce acciones depresoras sobre el sistema nervioso central?",

    opciones:[
        "Omalizumab",
        "Montelukast",
        "Teofilina",
        "Ipratropio"
    ],

    correcta:2,
    explicacion: "La teofilina inhibe la fosfodiesterasa y antagoniza los receptores de adenosina, aumentando el AMPc y bloqueando la acción depresora fisiológica de la adenosina sobre el sistema nervioso central, lo que explica el insomnio, la ansiedad y las palpitaciones."
},

{
    id:24,
    tema:"Antiasmáticos y Antihistamínicos - EPOC",

    pregunta:"Paciente de 19 años con asma persistente presenta exacerbaciones frecuentes pese al uso adecuado de corticoides inhalados. Se añade un fármaco que disminuye la síntesis de leucotrienos al bloquear una enzima clave de la vía del ácido araquidónico. ¿Cuál de las siguientes enzimas es inhibida por este tratamiento?",

    opciones:[
        "3-lipooxigenasa",
        "5-lipooxigenasa",
        "Fosfolipasa A2",
        "Ciclooxigenasa-2"
    ],

    correcta:1,
    explicacion: "El zileutón inhibe la enzima 5-lipooxigenasa, disminuyendo la síntesis de leucotrienos derivados del ácido araquidónico y reduciendo el broncoespasmo y la inflamación de la vía aérea."
},

{
    id:25,
    tema:"Antiasmáticos y Antihistamínicos - EPOC",

    pregunta:"Paciente pediátrico con asma recibe un broncodilatador que no estimula directamente receptores adrenérgicos, pero incrementa AMPc intracelular mediante inhibición enzimática. Días después desarrolla insomnio, ansiedad y pesadillas. ¿Cuál es el fármaco más probable?",

    opciones:[
        "Salmeterol",
        "Montelukast",
        "Tiotropio",
        "Teofilina"
    ],

    correcta:3,
    explicacion: "La teofilina incrementa el AMPc intracelular mediante inhibición de la fosfodiesterasa, produciendo broncodilatación sin actuar directamente sobre receptores adrenérgicos."
},

{
    id:26,
    tema:"Antiasmáticos y Antihistamínicos - EPOC",

    pregunta:"Paciente con urticaria crónica recibe un antihistamínico de segunda generación. El receptor sobre el cual actúa normalmente activa la fosfolipasa C y aumenta la concentración intracelular de calcio. ¿A qué proteína G está acoplado dicho receptor?",

    opciones:[
        "Go",
        "Gi",
        "Gq",
        "Gs"
    ],

    correcta:2,
    explicacion: "El receptor H₁ de histamina está acoplado a la proteína Gq, cuya activación estimula la fosfolipasa C, incrementando la formación de IP₃ y DAG y aumentando la concentración intracelular de calcio."
},

{
    id:27,
    tema:"Fármacos Digestivos",

    pregunta:"Un paciente con encefalopatía hepática presenta deterioro del estado mental secundario a hiperamonemia. Se prescribe un fármaco que disminuye la absorción intestinal de amoníaco al promover su transformación en una forma ionizada que queda atrapada en la luz intestinal. ¿Cuál es el medicamento más apropiado?",

    opciones:[
        "Subsalicilato de bismuto",
        "Lactulosa",
        "Simeticona",
        "Hidróxido de aluminio"
    ],

    correcta:1,
    explicacion: "La lactulosa es fermentada por la microbiota intestinal formando ácidos orgánicos que acidifican el colon, favoreciendo la conversión del amoníaco (NH₃) en amonio (NH₄⁺), el cual queda atrapado en la luz intestinal y disminuye su absorción."
},

{
    id:28,
    tema:"Fármacos Digestivos",

    pregunta:"Paciente con infección por Helicobacter pylori inicia terapia. Parte de la eficacia del esquema se atribuye a que uno de sus componentes interfiere con la actividad de la ureasa bacteriana, disminuyendo la producción local de amoníaco y dificultando la supervivencia del microorganismo en el ambiente ácido gástrico. ¿Cuál de los siguientes fármacos es responsable principalmente de este mecanismo?",

    opciones:[
        "Omeprazol",
        "Metronidazol",
        "Subsalicilato de bismuto",
        "Tetraciclina"
    ],

    correcta:2,
    explicacion: "El subsalicilato de bismuto ejerce actividad frente a Helicobacter pylori al inhibir la ureasa bacteriana, disminuyendo la producción de amoníaco y dificultando la supervivencia del microorganismo en el ambiente ácido gástrico."
},

{
    id:29,
    tema:"Fármacos Digestivos",

    pregunta:"Paciente de 68 años con antecedente de úlcera gástrica complicada recibe pantoprazol de forma continua durante varios años. Durante el seguimiento, el médico evalúa posibles efectos adversos asociados al uso crónico del tratamiento. ¿Cuál de los siguientes hallazgos no se relaciona con el uso prolongado de pantoprazol?",

    opciones:[
        "Hipomagnesemia persistente",
        "Hipercalcemia",
        "Incremento de osteoporosis",
        "Deficiencia de vitamina B12"
    ],

    correcta:1,
    explicacion: "El uso prolongado de inhibidores de la bomba de protones puede asociarse con deficiencia de vitamina B12, hipomagnesemia y aumento del riesgo de osteoporosis, pero no produce hipercalcemia."
},

{
    id:30,
    tema:"Fármacos Digestivos",

    pregunta:"Paciente de 67 años portador de una válvula protésica mecánica recibe anticoagulación crónica con warfarina. Durante una evaluación gastroenterológica se diagnostica una úlcera duodenal activa que requiere tratamiento antisecretor. Debido al riesgo de interacciones farmacológicas que puedan alterar el INR, ¿cuál de los siguientes fármacos es la mejor opción para este paciente?",

    opciones:[
        "Pantoprazol",
        "Esomeprazol",
        "Omeprazol",
        "Cimetidina"
    ],

    correcta:0,
    explicacion: "El pantoprazol presenta menor inhibición de las enzimas CYP2C19 y CYP2C9, por lo que tiene menor potencial de interacción con la warfarina y menor riesgo de alterar el INR."
},

{
    id:31,
    tema:"Antirresortivos y Suplementos para Osteoporosis",

    pregunta:"Paciente con osteoporosis recibe tratamiento con un fármaco antirresortivo, además de suplementos de calcio y vitamina D. Días después desarrolla elevación aguda de creatinina sérica y el estudio histopatológico revela necrosis tubular aguda. El cuadro se atribuye a un efecto adverso farmacológico relacionado con:",

    opciones:[
        "Calcitonina",
        "Teriparatida",
        "Ácido zoledrónico",
        "Raloxifeno"
    ],

    correcta:2,
    explicacion: "El ácido zoledrónico, un bisfosfonato intravenoso, puede producir nefrotoxicidad por lesión tubular aguda, especialmente cuando se administra rápidamente o en pacientes con insuficiencia renal previa."
},

{
    id:32,
    tema:"Antirresortivos y Suplementos para Osteoporosis",

    pregunta:"Paciente de 62 años con osteoporosis presenta litiasis renal recurrente, calcio sérico de 11,8 mg/dL y PTH elevada. Mientras se completa el estudio etiológico, se evalúan opciones farmacológicas para disminuir el riesgo de fracturas. ¿Cuál de los siguientes tratamientos debe evitarse por su mecanismo de acción?",

    opciones:[
        "Denosumab",
        "Teriparatida",
        "Ácido zoledrónico",
        "Raloxifeno"
    ],

    correcta:1,
    explicacion: "La teriparatida es un análogo de la PTH que incrementa la resorción ósea y eleva el calcio sérico, por lo que está contraindicada en pacientes con hipercalcemia o hiperparatiroidismo."
},

{
    id:33,
    tema:"Hipoglicemiantes",

    pregunta:"Paciente de 24 años con diabetes mellitus tipo 1 presenta hiperglucemia posprandial persistente pese a recibir insulina basal adecuadamente ajustada. Se decide añadir insulina lispro antes de las comidas debido a sus características farmacocinéticas. ¿Cuál de las siguientes propiedades justifica mejor la elección de este fármaco?",

    opciones:[
        "Metabolismo hepático reducido",
        "Inicio de acción lento y duración prolongada",
        "Ausencia de absorción subcutánea",
        "Inicio de acción rápido y duración corta"
    ],

    correcta:3,
    explicacion: "La insulina lispro posee una rápida absorción subcutánea por su menor tendencia a formar hexámeros, lo que permite controlar eficazmente la glucemia posprandial con una duración corta del efecto."
},

{
    id:34,
    tema:"Hipoglicemiantes",

    pregunta:"Paciente con diabetes mellitus recibe insulina NPH. Tras la unión de la hormona a su receptor tirosina quinasa, se activa una cascada intracelular que culmina con la inserción de transportadores de glucosa en la membrana de los miocitos. ¿Cuál es el transportador involucrado en este proceso?",

    opciones:[
        "GLUT-2",
        "GLUT-4",
        "GLUT-1",
        "GLUT-3"
    ],

    correcta:1,
    explicacion: "La unión de la insulina a su receptor tirosina quinasa activa la vía IRS-PI3K-Akt, promoviendo la translocación de transportadores GLUT-4 hacia la membrana de miocitos y adipocitos para aumentar la captación de glucosa."
},

{
    id:35,
    tema:"Hipoglicemiantes",

    pregunta:"Paciente con diabetes mellitus recibe insulina para el control de la hiperglucemia. La activación del receptor de insulina desencadena múltiples efectos metabólicos destinados a favorecer el almacenamiento y utilización de nutrientes. Todos los siguientes corresponden a efectos fisiológicos de la insulina, EXCEPTO:",

    opciones:[
        "Incremento de la síntesis proteica y captación de aminoácidos",
        "Estimulación de la gluconeogénesis hepática",
        "Incremento de la síntesis de glucógeno hepático y muscular",
        "Translocación de GLUT-4 hacia la membrana celular en músculo y tejido adiposo"
    ],

    correcta:1,
    explicacion: "La insulina inhibe la gluconeogénesis hepática y favorece el almacenamiento de nutrientes mediante aumento de la síntesis de glucógeno, captación de glucosa y síntesis proteica."
},

{
    id:36,
    tema:"Hipoglicemiantes",

    pregunta:"Paciente diabético desarrolla hipoglucemia severa tras omitir varias comidas. Se identifica un fármaco que estimula la secreción pancreática de insulina mediante cierre de canales de potasio ATP-dependientes independientemente de la concentración plasmática de glucosa. ¿Cuál de los siguientes medicamentos posee mayor riesgo de producir este efecto?",

    opciones:[
        "Pioglitazona",
        "Metformina",
        "Glibenclamida",
        "Sitagliptina"
    ],

    correcta:2,
    explicacion: "La glibenclamida bloquea los canales de potasio ATP-dependientes de la célula β pancreática, estimulando la liberación de insulina independientemente de la glucemia, lo que aumenta el riesgo de hipoglucemia."
},

{
    id:37,
    tema:"Hipoglicemiantes",

    pregunta:"Paciente de 28 años con diabetes mellitus tipo 2 recientemente diagnosticada presenta HbA1c de 6,7% y ausencia de síntomas catabólicos. Antes de considerar tratamiento farmacológico, el médico plantea una intervención dirigida a disminuir la resistencia a la insulina y mejorar el control metabólico. ¿Cuál es la estrategia inicial más apropiada?",

    opciones:[
        "Monoterapia con inhibidores de DPP-4",
        "Restricción calórica y ejercicio físico",
        "Asociación de metformina y sulfonilurea",
        "Terapia intensiva con insulina basal-bolo"
    ],

    correcta:1,
    explicacion: "Las modificaciones del estilo de vida mejoran la sensibilidad a la insulina y constituyen la intervención inicial en pacientes con diabetes mellitus tipo 2 recientemente diagnosticada y sin síntomas catabólicos."
},

{
    id:38,
    tema:"Hipoglicemiantes",

    pregunta:"Paciente con diabetes mellitus tipo 2, obesidad y antecedente de hipoglucemias inicia un fármaco que activa receptores acoplados a proteína G en la célula β pancreática, incrementando la secreción de insulina de manera glucosa-dependiente. Además, produce retraso del vaciamiento gástrico y aumento de la saciedad. ¿Cuál es el medicamento que cumple esta característica farmacológica?",

    opciones:[
        "Empagliflozina",
        "Liraglutida",
        "Sitagliptina",
        "Glibenclamida"
    ],

    correcta:1,
    explicacion: "La liraglutida es un agonista del receptor GLP-1 acoplado a proteína G que aumenta la secreción de insulina de forma dependiente de la glucosa, retrasa el vaciamiento gástrico y aumenta la saciedad."
},

{
    id:39,
    tema:"Hematinicos",

    pregunta:"Paciente con anemia megaloblástica recibe vitamina B12 debido a la presencia de síntomas neurológicos. La mejoría clínica esperada se relaciona con la restauración de una vía metabólica involucrada en la integridad de la mielina. ¿Cuál de los siguientes cambios bioquímicos se espera tras un tratamiento adecuado?",

    opciones:[
        "Disminución de ferritina sérica",
        "Disminución de ácido metilmalónico sérico",
        "Disminución de eritropoyetina circulante",
        "Disminución de transferrina plasmática"
    ],

    correcta:1,
    explicacion: "La vitamina B12 es cofactor de la metilmalonil-CoA mutasa. Su administración restaura esta vía metabólica, disminuyendo la concentración de ácido metilmalónico, metabolito cuya acumulación se relaciona con el daño neurológico."
},

{
    id:40,
    tema:"Hematinicos",

    pregunta:"Paciente con anemia por enfermedad renal crónica será tratado con epoetina alfa. El médico revisa antecedentes que podrían incrementar el riesgo de la complicación más grave asociada al tratamiento. ¿Cuál de los siguientes antecedentes tiene mayor relevancia clínica?",

    opciones:[
        "Enfermedad ulcerosa péptica",
        "Osteoporosis posmenopáusica",
        "Tromboembolismo pulmonar previo",
        "Colecistectomía previa"
    ],

    correcta:2,
    explicacion: "La epoetina alfa estimula la eritropoyesis aumentando la masa eritrocitaria y la viscosidad sanguínea, lo que incrementa el riesgo de eventos tromboembólicos, especialmente en pacientes con antecedentes de trombosis."
},

{
    id:41,
    tema:"Antibacterianos I Pared Bacteriana",

    pregunta:"Paciente con neumonía por Mycoplasma pneumoniae recibe amoxicilina/ácido clavulánico sin respuesta terapéutica. La falta de eficacia se debe a la imposibilidad del antibiótico para inhibir una estructura bacteriana específica. ¿Cuál es dicha estructura?",

    opciones:[
        "ADN girasa",
        "Peptidoglicano de la pared celular",
        "ARN polimerasa dependiente de ADN",
        "Subunidad ribosomal 50S"
    ],

    correcta:1,
    explicacion: "Mycoplasma pneumoniae carece de pared celular y, por tanto, no posee peptidoglicano. Los antibióticos β-lactámicos requieren esta estructura para ejercer su acción, motivo por el cual son ineficaces frente a este microorganismo."
},

{
    id:42,
    tema:"Antibacterianos I Pared Bacteriana",

    pregunta:"Paciente con cistitis aguda recibe un antibiótico cuya acción ocurre antes de la formación de los monómeros de peptidoglicano. ¿Qué fármaco actúa inhibiendo la incorporación del fosfoenolpiruvato a un precursor de la pared celular bacteriana?",

    opciones:[
        "Vancomicina",
        "Aztreonam",
        "Fosfomicina",
        "Cefalexina"
    ],

    correcta:2,
    explicacion: "La fosfomicina inhibe la enzima MurA, bloqueando la incorporación del fosfoenolpiruvato al UDP-N-acetilglucosamina, primer paso en la síntesis de los precursores del peptidoglicano."
},

{
    id:43,
    tema:"Antibacterianos I Pared Bacteriana",

    pregunta:"Paciente de 45 años presenta una infección cutánea por Staphylococcus aureus. Se inicia tratamiento con un antibiótico que inhibe la síntesis de la pared celular bacteriana al impedir el transporte de los precursores de peptidoglicano desde el citoplasma hacia el espacio periplásmico. ¿De qué fármaco se trata?",

    opciones:[
        "Cefalexina",
        "Bacitracina",
        "Vancomicina",
        "Fosfomicina"
    ],

    correcta:1,
    explicacion: "La bacitracina inhibe la desfosforilación del bactoprenol, impidiendo el transporte de los precursores del peptidoglicano desde el citoplasma hacia la superficie de la membrana bacteriana."
},

{
    id:44,
    tema:"Antibacterianos I Pared Bacteriana",

    pregunta:"Paciente con bacteriemia por Staphylococcus aureus resistente a meticilina recibe un antibiótico glucopéptido. El fármaco ejerce su acción al unirse a un precursor del peptidoglicano, evitando el crecimiento longitudinal de la pared bacteriana. ¿Qué etapa de la síntesis de pared se encuentra principalmente inhibida?",

    opciones:[
        "Formación de UDP-N-acetilmurámico",
        "Transglicosidación",
        "Transporte por bactoprenol",
        "Transpeptidación mediada por PBP"
    ],

    correcta:1,
    explicacion: "La vancomicina se une al extremo D-Ala-D-Ala de los precursores del peptidoglicano, bloqueando principalmente la reacción de transglicosidación e impidiendo el alargamiento de la pared bacteriana."
},

{
    id:45,
    tema:"Antibacterianos II Síntesis de Proteína y Metabólicos",

    pregunta:"Paciente con infección gastrointestinal recibe un antibiótico que interfiere en la síntesis de nucleótidos bacterianos al impedir la reducción de dihidrofolato a tetrahidrofolato. ¿Cuál es el medicamento más probable?",

    opciones:[
        "Sulfametoxazol",
        "Doxiciclina",
        "Trimetoprima",
        "Rifaximina"
    ],

    correcta:2,
    explicacion: "La trimetoprima inhibe la dihidrofolato reductasa bacteriana, bloqueando la conversión de dihidrofolato en tetrahidrofolato y disminuyendo la síntesis de purinas y timidina necesarias para la producción de ADN."
},

{
    id:46,
    tema:"Antibacterianos II Síntesis de Proteína y Metabólicos",

    pregunta:"Paciente con infección urinaria alta recibe un antibiótico bactericida que actúa sobre la subunidad 30S ribosomal. Días después desarrolla necrosis tubular aguda y ototoxicidad. ¿Cuál de las siguientes estructuras celulares concentra preferentemente el fármaco y explica su toxicidad?",

    opciones:[
        "Podocitos y neuronas corticales",
        "Células mesangiales glomerulares y hepatocitos",
        "Células del túbulo proximal y células ciliadas cocleares",
        "Células yuxtaglomerulares y miocitos cardíacos"
    ],

    correcta:2,
    explicacion: "Los aminoglucósidos se acumulan preferentemente en las células del túbulo proximal renal y en las células ciliadas del oído interno, explicando su nefrotoxicidad y ototoxicidad características."
},

{
    id:47,
    tema:"Antibacterianos II Síntesis de Proteína y Metabólicos",

    pregunta:"Paciente tratado por una infección de tejidos blandos desarrolla colitis pseudomembranosa secundaria a proliferación de C. difficile. El mecanismo inicial del evento adverso se relaciona principalmente con:",

    opciones:[
        "Inhibición de la síntesis de ácido fólico",
        "Eliminación de la microbiota intestinal protectora",
        "Inhibición de la ADN girasa bacteriana",
        "Activación de toxinas citolíticas bacterianas por el antibiótico"
    ],

    correcta:1,
    explicacion: "Los antibióticos de amplio espectro alteran la microbiota intestinal normal, favoreciendo la proliferación de Clostridioides difficile y la producción de toxinas responsables de la colitis pseudomembranosa."
},

{
    id:48,
    tema:"Antimicóticos",

    pregunta:"Paciente con onicomicosis recibe un antimicótico tópico que inhibe una enzima localizada antes de la formación de lanosterol en la ruta biosintética del ergosterol. ¿Cuál es la enzima inhibida?",

    opciones:[
        "β-(1,3)-glucano sintasa",
        "Escualeno epoxidasa",
        "Quitina sintasa",
        "14-α-desmetilasa"
    ],

    correcta:1,
    explicacion: "La terbinafina inhibe la escualeno epoxidasa, enzima que participa en una etapa temprana de la síntesis de ergosterol. Esto provoca acumulación de escualeno y alteración de la membrana celular del hongo."
},

{
    id:49,
    tema:"Antimicóticos",

    pregunta:"Paciente con aspergilosis invasiva recibe un antifúngico que ejerce un efecto similar al de un detergente biológico al generar poros en la membrana fúngica. ¿Cuál de los siguientes mecanismos corresponde al fármaco administrado?",

    opciones:[
        "Inhibición de la β-(1,3)-glucano sintasa",
        "Inhibición de la escualeno epoxidasa",
        "Unión al ergosterol con formación de canales transmembrana",
        "Inhibición de la 14-α-desmetilasa dependiente de CYP450"
    ],

    correcta:2,
    explicacion: "La terbinafina inhibe la escualeno epoxidasa, enzima que participa en una etapa temprana de la síntesis de ergosterol. Esto provoca acumulación de escualeno y alteración de la membrana celular del hongo."
},

{
    id:50,
    tema:"Antimicóticos",

    pregunta:"Paciente tratado con fluconazol desarrolla toxicidad por un medicamento cuyo aclaramiento depende en gran medida de CYP2C9. La interacción farmacológica se explica por disminución de su metabolismo hepático. ¿Cuál de los siguientes fármacos presenta el mayor riesgo de esta interacción?",

    opciones:[
        "Enalapril",
        "Warfarina",
        "Insulina glargina",
        "Metformina"
    ],

    correcta:1,
    explicacion: "El fluconazol inhibe la enzima CYP2C9, disminuyendo el metabolismo de la warfarina y aumentando su concentración plasmática, con incremento del INR y del riesgo de hemorragia."
},

{
    id:51,
    tema:"Antiparasitarios",

    pregunta:"Paciente de 35 años es diagnosticado con estrongiloidiasis intestinal. Se prescribe un fármaco que también se utiliza para el tratamiento de escabiosis y pediculosis. El medicamento produce parálisis del parásito al aumentar la permeabilidad al cloro en células nerviosas y musculares del helminto. ¿De qué fármaco se trata y cuál es su mecanismo de acción?",

    opciones:[
        "Praziquantel — Incremento de la entrada de calcio con contracción muscular sostenida.",
        "Albendazol — Inhibición de la polimerización de microtúbulos mediante unión a β-tubulina.",
        "Ivermectina — Activación de canales de cloro regulados por glutamato que producen hiperpolarización y parálisis.",
        "Pirantel — Agonismo nicotínico con despolarización persistente de la placa neuromuscular."
    ],

    correcta:2,
    explicacion: "La ivermectina activa los canales de cloro regulados por glutamato presentes en los helmintos, produciendo hiperpolarización de las células nerviosas y musculares, parálisis y muerte del parásito."
},

{
    id:52,
    tema:"Antiparasitarios",

    pregunta:"Paciente con escabiosis recibe un ectoparasiticida tópico que prolonga la apertura de los canales de sodio neuronales del artrópodo, provocando descargas repetitivas seguidas de parálisis y muerte del parásito. ¿Cuál es el medicamento que cumple estas características?",

    opciones:[
        "Azufre precipitado",
        "Ivermectina",
        "Permetrina",
        "Benzoato de bencilo"
    ],

    correcta:2,
    explicacion: "El albendazol se une selectivamente a la β-tubulina del parásito, inhibiendo la polimerización de los microtúbulos, el transporte intracelular de vesículas y la captación de glucosa, lo que provoca la muerte del helminto."
},

{
    id:53,
    tema:"Antivirales y Antirretrovirales",

    pregunta:"Paciente con herpes recurrente recibe múltiples ciclos de aciclovir. A pesar del adecuado control de las reactivaciones, el virus persiste en estado latente dentro de neuronas sensitivas. ¿Cuál de las siguientes características del estado latente limita la eficacia erradicadora del fármaco?",

    opciones:[
        "Producción de cápsides resistentes al medicamento.",
        "Ausencia de síntesis activa de ADN viral.",
        "Incremento de la eliminación renal del aciclovir.",
        "Sobreexpresión de ADN polimerasa viral."
    ],

    correcta:1,
    explicacion: "La permetrina prolonga la apertura de los canales de sodio neuronales del artrópodo, produciendo despolarización persistente, parálisis y muerte del parásito."
},

{
    id:54,
    tema:"Antivirales y Antirretrovirales",

    pregunta:"Paciente con VIH recibe un medicamento que inhibe la transcriptasa inversa mediante unión alostérica directa a la enzima, sin requerir activación intracelular por fosforilación. ¿De qué fármaco se trata?",

    opciones:[
        "Lamivudina",
        "Efavirenz",
        "Tenofovir",
        "Zidovudina"
    ],

    correcta:1,
 explicacion: "El aciclovir inhibe la ADN polimerasa viral únicamente durante la replicación del virus. En el estado de latencia no existe síntesis activa de ADN viral, por lo que el fármaco no puede erradicar el virus."
},

{
    id:55,
    tema:"Metaxénicas",

    pregunta:"Paciente con leishmaniasis recibe un antimonial pentavalente. El efecto leishmanicida aparece después de la formación intracelular de un metabolito más activo que interfiere con el metabolismo energético del parásito. ¿Cuál es dicho metabolito?",

    opciones:[
        "Antimonio monovalente (Sb⁺).",
        "Antimonio trivalente (Sb³⁺).",
        "Antimonio hexavalente (Sb⁶⁺).",
        "Antimonio tetravalente (Sb⁴⁺)."
    ],

    correcta:1,
  explicacion: "Los antimoniales pentavalentes actúan como profármacos y son reducidos intracelularmente a antimonio trivalente (Sb³⁺), metabolito responsable de la actividad leishmanicida al interferir con el metabolismo energético del parásito."
},

{
    id:56,
    tema:"Metaxénicas",

    pregunta:"Paciente con bartonelosis aguda recibe un antimicrobiano cuya actividad depende de la estabilización del complejo ADN-enzima tras la inhibición de topoisomerasas bacterianas, produciendo roturas letales del ADN. ¿De qué grupo farmacológico se trata?",

    opciones:[
        "Macrólidos",
        "Sulfonamidas",
        "Fluoroquinolonas",
        "Tetraciclinas"
    ],

    correcta:2,
 explicacion: "Las fluoroquinolonas inhiben la ADN girasa y la topoisomerasa IV bacterianas, estabilizando el complejo ADN-enzima y produciendo roturas irreversibles del ADN que ocasionan la muerte bacteriana."
},

{
    id:57,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con asma recibe salbutamol inhalado. ¿Con cuál de los siguientes segundos mensajeros se asocia el efecto broncodilatador de este fármaco?",
    opciones:["AMPc.","GMPc.","IP₃.","DAG."],
    correcta:0,
    explicacion:"Los receptores β₂ se encuentran acoplados a proteína Gs, activan la adenilato ciclasa, aumentan el AMPc y producen relajación del músculo liso bronquial."
},

{
    id:58,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con anafilaxia recibe adrenalina. ¿Con cuál de las siguientes proteínas G se asocia la vasoconstricción producida por la activación del receptor α₁?",
    opciones:["Gq.","Gs.","Gi.","G12."],
    correcta:0,
    explicacion:"El receptor α₁ está acoplado a proteína Gq, la cual activa la fosfolipasa C y aumenta IP₃ y DAG, incrementando el calcio intracelular y produciendo contracción del músculo liso vascular."
},

{
    id:59,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con enfermedad de Parkinson recibe bromocriptina. ¿Con cuál de las siguientes proteínas G se asocia el receptor dopaminérgico D₂?",
    opciones:["Gi.","Gq.","Gs.","G12."],
    correcta:0,
    explicacion:"Los receptores D₂ están acoplados a proteína Gi, inhiben la adenilato ciclasa y disminuyen la concentración intracelular de AMPc."
},

{
    id:60,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con diabetes mellitus recibe insulina. ¿Con cuál de los siguientes tipos de receptores se asocia el mecanismo de acción de esta hormona?",
    opciones:["Receptor tirosina quinasa.","Receptor acoplado a proteína G.","Canal iónico dependiente de ligando.","Receptor nuclear."],
    correcta:0,
    explicacion:"El receptor de insulina posee actividad tirosina quinasa intrínseca y activa la vía PI3K/Akt, promoviendo la translocación de GLUT-4."
},

{
    id:61,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con hipotiroidismo recibe levotiroxina. ¿Con cuál de los siguientes tipos de receptores se asocia el mecanismo de acción de este fármaco?",
    opciones:["Receptor nuclear.","Receptor tirosina quinasa.","Receptor acoplado a proteína G.","Canal iónico."],
    correcta:0,
    explicacion:"Las hormonas tiroideas atraviesan la membrana celular y se unen a receptores nucleares que regulan la transcripción génica."
},

{
    id:62,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con úlcera péptica recibe pantoprazol. ¿Con cuál de las siguientes proteínas G se asocia el receptor H₂ que normalmente estimula la secreción de ácido gástrico?",
    opciones:["Gs.","Gi.","Gq.","Go."],
    correcta:0,
    explicacion:"El receptor H₂ está acoplado a proteína Gs, aumenta el AMPc y estimula la secreción de ácido por la célula parietal."
},

{
    id:63,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con glaucoma recibe pilocarpina. ¿Con cuál de las siguientes proteínas G se asocia el receptor muscarínico M₃ responsable de su efecto?",
    opciones:["Gq.","Gi.","Gs.","G12."],
    correcta:0,
    explicacion:"El receptor M₃ activa proteína Gq, incrementando IP₃, DAG y calcio intracelular, lo que favorece la contracción del músculo ciliar."
},

{
    id:64,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con insuficiencia cardíaca recibe dobutamina. ¿Con cuál de los siguientes segundos mensajeros se asocia el aumento de la contractilidad cardíaca mediado por receptores β₁?",
    opciones:["AMPc.","GMPc.","IP₃.","DAG."],
    correcta:0,
    explicacion:"Los receptores β₁ activan proteína Gs, aumentan el AMPc y favorecen la entrada de calcio al miocito, incrementando la fuerza de contracción."
},

{
    id:65,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con hipertensión recibe losartán. ¿Con cuál de las siguientes proteínas G se asocia el receptor AT₁ de angiotensina II sobre el que actúa este fármaco?",
    opciones:["Gq.","Gi.","Gs.","Go."],
    correcta:0,
    explicacion:"El receptor AT₁ está acoplado a proteína Gq, promoviendo aumento de calcio intracelular y vasoconstricción."
},

{
    id:66,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con hiperplasia prostática benigna recibe tamsulosina. ¿Con cuál de las siguientes proteínas G se asocia el receptor α₁ bloqueado por este medicamento?",
    opciones:["Gq.","Gi.","Gs.","G12."],
    correcta:0,
    explicacion:"Los receptores α₁ están acoplados a proteína Gq; su bloqueo disminuye el calcio intracelular y favorece la relajación del músculo liso prostático y del cuello vesical."
},

{
    id:67,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con diabetes mellitus recibe insulina. ¿Con cuál de los siguientes tipos de receptores se asocia su mecanismo de acción?",
    opciones:["Receptor acoplado a proteína G.","Receptor tirosina quinasa.","Canal iónico dependiente de ligando.","Receptor intracelular nuclear."],
    correcta:1,
    explicacion:"El receptor de insulina posee actividad tirosina quinasa intrínseca y activa las vías PI3K/Akt y MAPK."
},

{
    id:68,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con enfermedad de Graves recibe levotiroxina. ¿Con cuál de los siguientes tipos de receptores se asocia la acción de este fármaco?",
    opciones:["Canal iónico dependiente de ligando.","Receptor acoplado a proteína G.","Receptor intracelular nuclear.","Receptor tirosina quinasa."],
    correcta:2,
    explicacion:"Las hormonas tiroideas atraviesan la membrana celular y regulan la transcripción génica mediante receptores nucleares."
},

{
    id:69,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con asma recibe salbutamol inhalado. ¿Con cuál de los siguientes tipos de receptores se asocia su efecto broncodilatador?",
    opciones:["Receptor intracelular nuclear.","Canal iónico dependiente de ligando.","Receptor tirosina quinasa.","Receptor acoplado a proteína G."],
    correcta:3,
    explicacion:"El receptor β₂ pertenece a la familia de receptores acoplados a proteína G y activa la proteína Gs."
},

{
    id:70,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con miastenia gravis recibe neostigmina. El neurotransmisor acumulado actúa sobre un receptor presente en la placa neuromuscular. ¿Con cuál de los siguientes tipos de receptores se asocia este efecto?",
    opciones:["Canal iónico dependiente de ligando.","Receptor tirosina quinasa.","Receptor intracelular nuclear.","Receptor acoplado a proteína G."],
    correcta:0,
    explicacion:"El receptor nicotínico muscular es un canal iónico activado por acetilcolina que permite la entrada de sodio."
},

{
    id:71,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con acromegalia recibe pegvisomant. ¿Con cuál de los siguientes tipos de receptores se asocia el receptor de la hormona de crecimiento?",
    opciones:["Receptor intracelular nuclear.","Receptor asociado a JAK/STAT.","Receptor acoplado a proteína G.","Canal iónico dependiente de ligando."],
    correcta:1,
    explicacion:"El receptor de hormona de crecimiento no posee actividad enzimática propia y transmite la señal mediante la vía JAK/STAT."
},

{
    id:72,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con hipertensión recibe losartán. ¿Con cuál de los siguientes tipos de receptores se asocia el receptor AT₁ bloqueado por este fármaco?",
    opciones:["Receptor tirosina quinasa.","Receptor intracelular nuclear.","Receptor acoplado a proteína G.","Canal iónico dependiente de ligando."],
    correcta:2,
    explicacion:"El receptor AT₁ pertenece a la familia de receptores acoplados a proteína G, específicamente a Gq."
},

{
    id:73,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con hiperplasia prostática recibe tamsulosina. ¿Con cuál de los siguientes tipos de receptores se asocia el receptor bloqueado por este medicamento?",
    opciones:["Canal iónico dependiente de ligando.","Receptor tirosina quinasa.","Receptor acoplado a proteína G.","Receptor intracelular nuclear."],
    correcta:2,
    explicacion:"Los receptores α₁ son receptores acoplados a proteína Gq que incrementan el calcio intracelular."
},

{
    id:74,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con enfermedad inflamatoria recibe prednisona. ¿Con cuál de los siguientes tipos de receptores se asocia su mecanismo de acción?",
    opciones:["Receptor tirosina quinasa.","Canal iónico dependiente de ligando.","Receptor acoplado a proteína G.","Receptor intracelular nuclear."],
    correcta:3,
    explicacion:"Los glucocorticoides atraviesan la membrana celular y modifican la expresión génica mediante receptores nucleares."
},

{
    id:75,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con osteoporosis recibe denosumab. ¿Con cuál de los siguientes tipos de receptores se asocia RANK, blanco fisiológico de RANKL?",
    opciones:["Receptor acoplado a proteína G.","Receptor asociado al TNF.","Receptor tirosina quinasa.","Canal iónico dependiente de ligando."],
    correcta:1,
    explicacion:"RANK pertenece a la superfamilia de receptores del factor de necrosis tumoral y participa en la diferenciación de osteoclastos."
},

{
    id:76,
    tema:"Ciencias Básicas: Receptores y Segundos Mensajeros",
    pregunta:"Paciente con artritis reumatoide recibe etanercept. ¿Con cuál de los siguientes tipos de receptores se asocia la molécula que normalmente reconoce al TNF-α?",
    opciones:["Canal iónico dependiente de ligando.","Receptor tirosina quinasa.","Receptor asociado al TNF.","Receptor acoplado a proteína G."],
    correcta:2,
    explicacion:"El TNF-α ejerce sus efectos mediante receptores de la familia TNF, los cuales activan vías inflamatorias como NF-κB."
},

{
    id:77,
    tema:"Anatomía: Tórax",
    pregunta:"Joven de 17 años, atendida en emergencia por cuadro de exacerbación asmática caracterizado por broncoconstricción y aumento de secreciones. ¿Qué nervio aporta las fibras preganglionares al plexo pulmonar que produce los hallazgos del caso?",
    opciones:["Vago","Ramos simpáticos","Esplácnico mayor","Frénico"],
    correcta:0,
    explicacion:"El nervio vago aporta fibras parasimpáticas preganglionares al plexo pulmonar. Su activación produce broncoconstricción y aumenta la secreción de las glándulas bronquiales. Las fibras simpáticas, por el contrario, favorecen broncodilatación."
},

{
    id:78,
    tema:"Anatomía: Tórax",
    pregunta:"Mujer de 45 años presenta un tumor maligno de 1,5 cm localizado en el cuadrante superior interno de la mama derecha. ¿Hacia qué grupo de nódulos linfáticos drena más probablemente de manera inicial?",
    opciones:["Paraesternales","Axilares nivel II","Axilares nivel I","Frénicos inferiores"],
    correcta:0,
    explicacion:"Los cuadrantes mediales de la mama drenan principalmente hacia los nódulos paraesternales, situados a lo largo de los vasos torácicos internos."
},

{
    id:79,
    tema:"Anatomía: Pelvis",
    pregunta:"Un paciente con prostatitis obstructiva presenta reducción del volumen seminal. ¿Qué conducto está más afectado?",
    opciones:["Eyaculador","Deferente","Seminífero","Epididimario"],
    correcta:0,
    explicacion:"Los conductos eyaculadores atraviesan la próstata y desembocan en la uretra prostática. Una obstrucción puede impedir la salida de las secreciones de vesículas seminales y del esperma."
},

{
    id:80,
    tema:"Anatomía: Pelvis",
    pregunta:"Mujer de 19 años llevada a emergencia por dolor intenso en la fosa iliaca izquierda. Ecografía: quiste anexial izquierdo a pedículo torcido. Durante la cirugía encuentran el ovario izquierdo necrosado por compromiso de la arteria ovárica. ¿A través de qué ligamento ingresa la arteria hacia el ovario?",
    opciones:["Suspensorio del ovario","Ancho del útero","Redondo del útero","Propio del ovario"],
    correcta:0,
    explicacion:"La arteria ovárica llega al ovario a través del ligamento suspensorio del ovario, también llamado ligamento infundibulopélvico."
},

{
    id:81,
    tema:"Anatomía: Cabeza",
    pregunta:"Varón de 34 años se queja de hiperacusia después de una infección de oído medio. ¿Qué nervio es el lesionado y produce parálisis del músculo que amortigua la transmisión del sonido?",
    opciones:["Vago","Estapedio","Accesorio","Hipogloso"],
    correcta:1,
    explicacion:"El nervio para el músculo estapedio es una rama del nervio facial. El estapedio reduce las vibraciones excesivas del estribo; su parálisis genera hiperacusia."
},

{
    id:82,
    tema:"Anatomía: Cabeza",
    pregunta:"Niño de 7 años presenta ronquidos nocturnos, otitis media recurrente y respiración exclusivamente por la boca. ¿Qué estructura se encuentra hipertrofiada?",
    opciones:["Amígdala palatina","Rodete tubárico","Adenoides","Amígdala lingual"],
    correcta:2,
    explicacion:"Las adenoides corresponden a la amígdala faríngea. Su hipertrofia obstruye la vía aérea nasal y puede bloquear la abertura de la trompa auditiva, predisponiendo a otitis media recurrente."
},

{
    id:83,
    tema:"Anatomía: Cuello",
    pregunta:"Varón de 54 años presenta una espina de pescado enclavada en la mucosa de la fosa piriforme izquierda. Al extraerla se lesiona una estructura nerviosa que discurre inmediatamente profunda. ¿Cuál nervio fue lesionado con mayor probabilidad?",
    opciones:["Glosofaríngeo","Frénico","Laríngeo recurrente","Laríngeo superior"],
    correcta:3,
    explicacion:"La rama interna del nervio laríngeo superior proporciona sensibilidad a la mucosa supraglótica, incluida la región cercana a la fosa piriforme."
},

{
    id:84,
    tema:"Anatomía: Sistema nervioso",
    pregunta:"Varón de 60 años con cefalea intensa presenta un hematoma pequeño localizado en el mesencéfalo. ¿Cuál estructura se encuentra en esa región?",
    opciones:["Hipotálamo","Cuerpo geniculado lateral","Piso del cuarto ventrículo","Lámina cuadrigémina"],
    correcta:3,
    explicacion:"La lámina cuadrigémina forma parte de la cara posterior del mesencéfalo y está constituida por los colículos superiores e inferiores."
},

{
    id:85,
    tema:"Anatomía: Locomotor",
    pregunta:"Varón de 18 años sufre una caída y presenta dolor a la flexión y dificultad para la rotación interna de la rodilla flexionada. ¿Qué tendón se encuentra afectado?",
    opciones:["Bíceps femoral","Pata de ganso","Cintilla iliotibial","Vasto medial"],
    correcta:1,
    explicacion:"La pata de ganso está formada por los tendones de sartorio, grácil y semitendinoso. Estos músculos contribuyen a la flexión y rotación interna de la rodilla."
},

{
    id:86,
    tema:"Anatomía: Sistema nervioso",
    pregunta:"Varón de 24 años sufre traumatismo encéfalo craneano y presenta ceguera total unilateral del ojo izquierdo. ¿Qué estructura fue lesionada y en qué localización?",
    opciones:["Corteza visual en lóbulo occipital derecho","Nervio óptico izquierdo en el canal óptico","Quiasma óptico en la silla turca","Cintilla óptica derecha en el tálamo"],
    correcta:1,
    explicacion:"La lesión completa del nervio óptico izquierdo antes del quiasma produce pérdida total de visión del ojo izquierdo."
},

{
    id:87,
    tema:"Anatomía: Abdomen",
    pregunta:"Varón de 35 años presenta hematemesis y melena. La endoscopía muestra una úlcera en la pared posterior del bulbo duodenal. ¿Qué arteria tiene alto riesgo de lesión?",
    opciones:["Pancreática duodenal inferior","Gastroduodenal","Mesentérica superior","Gastroepiploica izquierda"],
    correcta:1,
    explicacion:"La arteria gastroduodenal discurre posteriormente a la primera porción del duodeno. Una úlcera posterior del bulbo puede erosionarla y causar hemorragia digestiva alta."
},

{
    id:88,
    tema:"Anatomía: Retroperitoneo",
    pregunta:"Mujer de 68 años presenta un cálculo en uréter derecho. ¿En cuál localización es más frecuente que se impacte el cálculo?",
    opciones:["Cáliz mayor","Unión uretero-vesical","Entre el borde pélvico y vasos ilíacos","Porción media de uréter"],
    correcta:1,
    explicacion:"La unión ureterovesical es uno de los estrechamientos fisiológicos del uréter y el sitio más frecuente de impactación de cálculos."
},

{
    id:89,
    tema:"Anatomía: Pelvis",
    pregunta:"Mujer de 38 años multípara presenta incontinencia urinaria de esfuerzo desde su último parto vaginal. ¿Qué músculo pélvico es el más probablemente lesionado?",
    opciones:["Piriforme","Elevador del ano","Coccígeo","Obturador interno"],
    correcta:1,
    explicacion:"El elevador del ano es el principal componente muscular del diafragma pélvico. Sostiene las vísceras pélvicas y ayuda a mantener la continencia urinaria."
},

{
    id:90,
    tema:"Anatomía: Pelvis",
    pregunta:"Varón de 69 años presenta disfunción eréctil seis meses después de una prostatectomía radical. ¿Cuál nervio ha sido dañado probablemente?",
    opciones:["Dorsal del pene","Esplácnico sacro","Esplácnico pélvico","Perianal"],
    correcta:2,
    explicacion:"La erección depende principalmente de las fibras parasimpáticas de los nervios esplácnicos pélvicos, de S2 a S4, que discurren cerca de la próstata."
},

{
    id:91,
    tema:"Anatomía: Cabeza",
    pregunta:"Mujer de 40 años no puede dirigir la mirada de su ojo derecho lateralmente. ¿Cuál es el nervio afectado con mayor probabilidad?",
    opciones:["Troclear","Óptico","Abducens","Oculomotor"],
    correcta:2,
    explicacion:"El nervio abducens, sexto par craneal, inerva al músculo recto lateral. Su lesión impide la abducción del ojo afectado."
},

{
    id:92,
    tema:"Anatomía: Sistema nervioso",
    pregunta:"Varón de 75 años presenta hemianopsia homónima derecha y defecto pupilar aferente relativo en el ojo derecho. ¿En qué nivel de la vía visual se localiza más probablemente la lesión?",
    opciones:["Radiaciones ópticas izquierdas","Tracto óptico izquierdo","Radiaciones ópticas derechas","Tracto óptico derecho"],
    correcta:1,
    explicacion:"Una lesión del tracto óptico izquierdo ocasiona hemianopsia homónima derecha y puede causar un defecto pupilar aferente relativo contralateral."
},

{
    id:93,
    tema:"Anatomía: Tórax",
    pregunta:"Mujer de 41 años sufre traumatismo cerrado de tórax por impacto del esternón contra el volante. Presenta derrame pericárdico y taponamiento cardiaco. ¿Qué estructura es más probable que se haya lesionado?",
    opciones:["Pared del ventrículo derecho","Borde obtuso del ventrículo izquierdo","Punta del ventrículo izquierdo","Aurícula derecha"],
    correcta:0,
    explicacion:"El ventrículo derecho forma la mayor parte de la superficie anterior del corazón y es la cámara más próxima al esternón."
},

{
    id:94,
    tema:"Anatomía: Cabeza",
    pregunta:"Varón de 22 años presenta hematoma epidural tras traumatismo cráneo encefálico. El vaso lesionado se origina de la arteria maxilar e ingresa al cráneo por el agujero espinoso. ¿Cuál es esa arteria?",
    opciones:["Meníngea accesoria","Temporal profunda anterior","Meníngea media","Facial transversa"],
    correcta:2,
    explicacion:"La arteria meníngea media es una rama de la arteria maxilar que entra a la cavidad craneal por el agujero espinoso. Su ruptura es una causa clásica de hematoma epidural."
},

{
    id:95,
    tema:"Embriología: Desarrollo embrionario temprano y teratología",
    pregunta:"Gestante de 9 semanas. La ecografía muestra gemelos con un solo saco coriónico y dos sacos amnióticos. ¿Cuál es la causa más probable?",
    opciones:["División del cigoto después del día catorce post-fertilización","División del embrión entre días cuatro y ocho post-fertilización","División del embrión entre días nueve y doce post-fertilización","División del embrión antes del segundo día post-fertilización"],
    correcta:1,
    explicacion:"La división entre los días 4 y 8 ocurre después de la formación del corion, pero antes de la formación del amnios. Por ello, los gemelos resultantes son monocoriónicos y diamnióticos."
},

{
    id:96,
    tema:"Embriología: Desarrollo embrionario temprano y teratología",
    pregunta:"Recién nacido con antecedente de exposición a teratógeno en la semana 5 presenta defectos cardíacos. ¿Qué proceso explica la alta vulnerabilidad en esta etapa?",
    opciones:["Organogénesis activa con diferenciación acelerada de tejidos","Migración reducida de células germinales primordiales","Gastrulación tardía con formación lenta del mesodermo","Implantación incompleta con trofoblasto poco funcional"],
    correcta:0,
    explicacion:"Entre las semanas 3 y 8 ocurre la organogénesis, periodo de máxima susceptibilidad a teratógenos. Una agresión durante la semana 5 puede ocasionar malformaciones estructurales graves."
},

{
    id:97,
    tema:"Embriología: Desarrollo de extremidades",
    pregunta:"Recién nacido con defectos en las extremidades presenta una alteración en FGF8. ¿Qué función cumple este factor?",
    opciones:["Inhibición de apoptosis en paladar secundario embrionario","Control de diferenciación de células gonadales primitivas","Regulación mesodérmica de conductos nefrogénicos intermedios","Señalización del ectodermo apical para elongación del miembro"],
    correcta:3,
    explicacion:"FGF8 es producido por la cresta ectodérmica apical. Mantiene la proliferación del mesénquima subyacente y permite el crecimiento proximodistal de las extremidades."
},

{
    id:98,
    tema:"Embriología: Desarrollo del aparato reproductor",
    pregunta:"En el ovario, ¿qué estructura se forma a partir de las células de la granulosa y de la teca después de la ovulación y es crucial para la producción de progesterona?",
    opciones:["Cuerpo lúteo","Folículo primordial","Folículo secundario","Folículo maduro"],
    correcta:0,
    explicacion:"Después de la ovulación, las células de la granulosa y de la teca se luteinizan y forman el cuerpo lúteo, que produce progesterona."
},

{
    id:99,
    tema:"Embriología: Desarrollo del aparato reproductor",
    pregunta:"Mujer de 20 años con problemas de fertilidad presenta duplicación completa del útero. ¿Qué mecanismo provocó esta alteración?",
    opciones:["Canalización final de la vagina durante el tercer trimestre","Separación tardía del seno urogenital distal femenino","Alteración de la fusión de los conductos paramesonéfricos en la línea media","Degeneración normal de los conductos mesonéfricos fetales"],
    correcta:2,
    explicacion:"El útero se forma por la fusión de los conductos paramesonéfricos o de Müller. La ausencia de fusión genera duplicación uterina, conocida como útero didelfo."
},

{
    id:100,
    tema:"Embriología: Desarrollo de cabeza y cuello",
    pregunta:"Niño de 6 años presenta una masa en línea media de la región cervical anterior, móvil con la deglución. ¿Qué estructura embrionaria originó este quiste?",
    opciones:["Restos del conducto tirogloso","Segmento del seno cervical","Istmo tiroideo fetal","Restos del tercer arco faríngeo"],
    correcta:0,
    explicacion:"La glándula tiroides migra desde el foramen ciego de la lengua hasta su ubicación cervical definitiva a través del conducto tirogloso. La persistencia de este conducto puede formar un quiste tirogloso."
},

{
    id:101,
    tema:"Embriología: Desarrollo cardiopulmonar",
    pregunta:"Recién nacido con dificultad respiratoria presenta hipoplasia pulmonar secundaria a hernia diafragmática. ¿Qué mecanismo explica esta alteración?",
    opciones:["Vascularización inicial del saco pleural embrionario","Cierre inadecuado del conducto pleuroperitoneal","Formación posterior del pliegue traqueoesofágico","División temprana del septo transverso embrionario"],
    correcta:1,
    explicacion:"La hernia diafragmática congénita suele deberse a un cierre defectuoso de los conductos pleuroperitoneales. Las vísceras abdominales ingresan al tórax y comprimen el pulmón en desarrollo."
},

{
    id:102,
    tema:"Embriología: Desarrollo cardiopulmonar",
    pregunta:"Niño de 4 años presenta comunicación interauricular tipo ostium secundum. ¿Cuál es el mecanismo más frecuente de este defecto?",
    opciones:["Migración caudal del septum primum hacia cojinetes","Cierre tardío del septum secundum tras el nacimiento","Reabsorción excesiva del septum primum","Fusión incompleta del septum primum y secundum"],
    correcta:2,
    explicacion:"La comunicación interauricular tipo ostium secundum aparece con mayor frecuencia por reabsorción excesiva del septum primum o por desarrollo insuficiente del septum secundum."
},

{
    id:103,
    tema:"Histología: Tejidos básicos",
    pregunta:"Paciente presenta alteraciones graves en la conducción nerviosa debido a desmielinización central. ¿Qué célula es principalmente afectada?",
    opciones:["Célula de Schwann","Oligodendrocito","Neurona bipolar","Célula satélite"],
    correcta:1,
    explicacion:"Los oligodendrocitos producen mielina en el sistema nervioso central. Las células de Schwann cumplen esa función en el sistema nervioso periférico."
},

{
    id:104,
    tema:"Histología: Tejidos básicos",
    pregunta:"Niño de 12 años con quemaduras de segundo grado. En el epitelio se identifican uniones intercelulares que anclan filamentos intermedios de queratina de células adyacentes. ¿Cómo se denominan estas estructuras?",
    opciones:["Desmosomas","Zónula adherens","Hemidesmosomas","Uniones estrechas u ocluyentes"],
    correcta:0,
    explicacion:"Los desmosomas unen células epiteliales entre sí y anclan filamentos intermedios de queratina, proporcionando resistencia al estrés mecánico."
},

{
    id:105,
    tema:"Histología: Tejidos básicos",
    pregunta:"Mujer de 76 años con osteoporosis presenta fracturas frecuentes. ¿Cuál célula es responsable del incremento de la resorción ósea?",
    opciones:["Osteocito","Osteoblasto","Osteoclasto","Condrocito"],
    correcta:2,
    explicacion:"Los osteoclastos son células multinucleadas que reabsorben tejido óseo. El predominio de su actividad sobre la formación ósea favorece la osteoporosis."
},

{
    id:106,
    tema:"Histología: Sistema linfoide cardio-respiratorio",
    pregunta:"Joven de 22 años presenta rinorrea persistente tras una infección viral. El frotis nasal evidencia pérdida de cilios y células caliciformes. ¿Qué tipo de epitelio está principalmente dañado?",
    opciones:["Cilíndrico pseudoestratificado ciliado","Cilíndrico con chapa estriada","Cilíndrico estratificado ciliado","Cúbico simple ciliado"],
    correcta:0,
    explicacion:"El epitelio respiratorio presenta células ciliadas y caliciformes. Los cilios movilizan el moco y las partículas hacia la faringe mediante la depuración mucociliar."
},

{
    id:107,
    tema:"Histología: Sistema linfoide cardio-respiratorio",
    pregunta:"¿Cuál subpoblación de linfocitos reconoce péptidos virales presentados en MHC clase I y elimina células diana mediante perforina y granzimas?",
    opciones:["Moléculas del MHC clase II","Linfocitos T CD4","Linfocitos B","Linfocitos T CD8"],
    correcta:3,
    explicacion:"Los linfocitos T CD8 reconocen antígenos presentados mediante MHC clase I y destruyen células infectadas o tumorales liberando perforina y granzimas."
},

{
    id:108,
    tema:"Histología: Órganos metabólicos",
    pregunta:"Paciente con diarrea secretora por Vibrio cholerae presenta marcada activación de los canales CFTR en el intestino delgado. ¿Qué tipo de célula intestinal está hiperestimulada?",
    opciones:["Enterocito","De Paneth","Caliciforme","Célula M"],
    correcta:0,
    explicacion:"Los enterocitos expresan CFTR en su membrana apical. La toxina colérica incrementa el AMP cíclico, activa estos canales y provoca pérdida masiva de cloro y agua hacia el lumen intestinal."
},

{
    id:109,
    tema:"Histología: Órganos de los sentidos",
    pregunta:"Varón de 50 años presenta pérdida de la audición por daño de las células ciliadas receptoras. ¿Qué estructura está comprometida?",
    opciones:["Órgano espiral de Corti","Canal semicircular superior","Trompa auditiva faríngea","Membrana timpánica externa"],
    correcta:0,
    explicacion:"El órgano de Corti, situado en el conducto coclear, contiene las células ciliadas receptoras que transforman las vibraciones sonoras en impulsos nerviosos."
},

{
    id:110,
    tema:"Histología: Sistema tegumentario",
    pregunta:"Varón de 28 años presenta irritación química que comprometió toda la epidermis hasta la membrana basal en la palma de la mano. ¿Cuántos estratos epidérmicos resultaron afectados?",
    opciones:["Dos","Tres","Cuatro","Cinco"],
    correcta:3,
    explicacion:"La piel gruesa de las palmas tiene cinco estratos epidérmicos: basal, espinoso, granuloso, lúcido y córneo. El estrato lúcido la diferencia de la piel delgada."
},

{
    id:111,
    tema:"Bioquímica: Estructura y función a nivel celular",
    pregunta:"En la anemia falciforme, una mutación puntual en el gen HBB de la cadena β de la hemoglobina provoca el reemplazo del ácido glutámico en la posición 6. ¿Cuál aminoácido lo reemplaza?",
    opciones:["Glutamina","Valina","Ácido aspártico","Histidina"],
    correcta:1,
    explicacion:"La anemia falciforme se debe a una mutación puntual en la β-globina: el ácido glutámico, cargado e hidrofílico, es reemplazado por valina, hidrofóbica. Esto favorece la polimerización de la hemoglobina desoxigenada."
},

{
    id:112,
    tema:"Bioquímica: Señalización celular",
    pregunta:"Gestante de 28 años recibe oxitocina para aumentar la contractilidad uterina. El receptor acoplado a Gq activa fosfolipasa C y hidroliza PIP₂. ¿Qué segundos mensajeros se generan?",
    opciones:["Inositol difosfato y calmodulina","Inositol trifosfato (IP₃) y diacilglicerol (DAG)","Fosfatidilcolina y fosfatidiletanolamina","AMP cíclico y GMP cíclico"],
    correcta:1,
    explicacion:"Los receptores acoplados a Gq activan fosfolipasa C, que divide PIP₂ en IP₃ y DAG. El IP₃ libera calcio y el DAG activa proteína cinasa C."
},

{
    id:113,
    tema:"Bioquímica: Señalización celular",
    pregunta:"Varón de 23 años con feocromocitoma presenta taquicardia y temblor por exceso de adrenalina. ¿La activación de cuál receptor explica estos efectos?",
    opciones:["Receptor nuclear que modula la transcripción génica","Receptor β-adrenérgico acoplado a Gs que activa la adenilil ciclasa","Receptor α1-adrenérgico acoplado a Gq que activa fosfolipasa C","Receptor tirosina quinasa que activa la vía Ras/MAPK"],
    correcta:1,
    explicacion:"La adrenalina activa receptores β-adrenérgicos, principalmente β₁ en el corazón. Estos se acoplan a Gs, aumentan el AMP cíclico y producen taquicardia y aumento de contractilidad."
},

{
    id:114,
    tema:"Bioquímica: Metabolismo general",
    pregunta:"Varón de 15 años presenta intolerancia al ejercicio, debilidad proximal y acidosis láctica tras esfuerzos mínimos. La biopsia muscular sugiere alteraciones mitocondriales. ¿Cuál alteración bioquímica es más probable?",
    opciones:["Alteración en síntesis de colágeno tipo I","Disminución de síntesis de albúmina hepática","Deficiencia de hidrolasas lisosómicas ácidas","Defecto en enzimas de la cadena respiratoria"],
    correcta:3,
    explicacion:"La cadena respiratoria mitocondrial permite la fosforilación oxidativa. Cuando falla, el músculo depende de glucólisis anaerobia, aumenta lactato y aparece intolerancia al ejercicio."
},

{
    id:115,
    tema:"Bioquímica: Metabolismo general",
    pregunta:"En un estudio FDG-PET se observa captación ávida de glucosa por células tumorales a pesar de disponibilidad de oxígeno. ¿Cómo se denomina este fenómeno?",
    opciones:["Ciclo de Cori","Efecto Warburg","Efecto Bohr","Efecto Pasteur"],
    correcta:1,
    explicacion:"El efecto Warburg describe la glucólisis aerobia de muchas células tumorales: consumen mucha glucosa y producen lactato aun en presencia de oxígeno."
},

{
    id:116,
    tema:"Bioquímica: Metabolismo general",
    pregunta:"Niño de 8 años con hipoglicemia en ayunas presenta niveles bajos de carnitina. ¿Qué paso metabólico se afecta directamente?",
    opciones:["Transporte de acilos de cadena larga a la matriz mitocondrial","Conversión de acetoacetato a β-hidroxibutirato","Oxidación peroxisomal de ácidos grasos","Conversión de acetil-CoA en malonil-CoA"],
    correcta:0,
    explicacion:"La carnitina transporta ácidos grasos de cadena larga hacia la matriz mitocondrial, donde ocurre la β-oxidación."
},

{
    id:117,
    tema:"Bioquímica: Metabolismo tisular",
    pregunta:"Varón de 50 años con consumo crónico de alcohol presenta lesión hepática. El acetaldehído es un metabolito clave. ¿Cuál mecanismo se atribuye más directamente a su acción tóxica?",
    opciones:["Incremento de NADH/NAD+ que inhibe β-oxidación","Inhibición de secreción biliar canalicular","Activación de CYP2E1 con generación de ROS","Formación de aductos con proteínas y ADN"],
    correcta:3,
    explicacion:"El acetaldehído es altamente reactivo y forma aductos con proteínas, lípidos y ADN. Estos alteran la función celular y favorecen inflamación, fibrosis y daño hepatocelular."
},

{
    id:118,
    tema:"Bioquímica: Bioquímica de las hormonas",
    pregunta:"Mujer de 42 años con síndrome metabólico presenta aumento de tejido adiposo abdominal y niveles elevados de ácidos grasos libres. ¿Qué proceso en los adipocitos libera estos ácidos grasos?",
    opciones:["Hidrólisis de triglicéridos por lipoproteinlipasa","Síntesis de ácidos grasos a partir de acetil-CoA","Lipólisis mediada por lipasa sensible a hormonas","Hidrólisis de triglicéridos por lipasa hepática"],
    correcta:2,
    explicacion:"La lipasa sensible a hormonas degrada triglicéridos almacenados en adipocitos y libera ácidos grasos libres. Es estimulada por catecolaminas y glucagón e inhibida por insulina."
},
]
