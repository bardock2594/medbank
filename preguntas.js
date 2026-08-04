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

{
    id:119,
    tema:"Fisiología: Fisiología del sistema locomotor",
    pregunta:"¿Cuál es la proteína que consume la mayor cantidad de ATP durante la contracción muscular en el músculo estriado?",
    opciones:["Miosina","Actina","Troponina","Distrofina"],
    correcta:0,
    explicacion:"Las cabezas de miosina poseen actividad ATPasa y utilizan ATP para separarse de la actina, recargarse y generar ciclos de puente cruzado durante la contracción muscular."
},

{
    id:120,
    tema:"Fisiología: Fisiología respiratoria",
    pregunta:"Mujer de 52 años, agricultora que vive a 3700 m s. n. m., consulta por fiebre, tos productiva y disnea. Radiografía de tórax: consolidación en el lóbulo inferior derecho. Gasometría arterial en aire ambiente: PaO₂ 45 mmHg, PaCO₂ 32 mmHg y gradiente alveolo-arterial de O₂ aumentado. ¿Cuál es el mecanismo que explica esta hipoxemia?",
    opciones:["Desajuste ventilación/perfusión tipo shunt por ocupación alveolar","Hipoventilación alveolar secundaria por parálisis diafragmática","Reducción de la presión inspirada de O₂ por gran altitud","Disminución de la difusión de los gases por fibrosis intersticial"],
    correcta:0,
    explicacion:"La consolidación alveolar por neumonía perfunde zonas poco o nada ventiladas, generando un efecto de cortocircuito intrapulmonar. Esto aumenta el gradiente alveolo-arterial y produce hipoxemia."
},

{
    id:121,
    tema:"Fisiología: Fisiología respiratoria",
    pregunta:"Mujer de 36 años con antecedente de asma. Espirometría sin broncodilatador: CVF 93% del predicho, VEF1 63% del predicho y VEF1/CVF 58%. ¿Qué patrón ventilatorio presenta?",
    opciones:["Restrictivo","Mixto","Normal","Obstructivo"],
    correcta:3,
    explicacion:"En el patrón obstructivo disminuyen el VEF1 y la relación VEF1/CVF, mientras que la capacidad vital forzada puede ser normal o poco alterada. Este patrón es característico del asma."
},

{
    id:122,
    tema:"Fisiología: Fisiología respiratoria",
    pregunta:"Adulto presenta inspiraciones breves y entrecortadas con transición rápida a la espiración, la cual es relativamente normal. La PaCO₂ es normal. ¿Qué centro del control respiratorio explica este patrón?",
    opciones:["Ventral respiratorio","Apneústico","Neumotáxico pontino","Dorsal respiratorio"],
    correcta:2,
    explicacion:"El centro neumotáxico, ubicado en el puente, limita la duración de la inspiración y facilita el cambio a la espiración. Su actividad elevada causa inspiraciones cortas y una frecuencia respiratoria mayor."
},

{
    id:123,
    tema:"Fisiología: Fisiología del sistema excretor y medio interno",
    pregunta:"Varón de 80 años con enfermedad de Alzheimer se niega a ingerir líquidos desde hace varios días. Presenta mucosas secas, hematocrito 53% y Na⁺ sérico 160 mEq/L. ¿Cuál es la alteración del equilibrio de líquidos corporales?",
    opciones:["Hipoosmolaridad, hipervolemia en el LEC y deshidratación intracelular","Hipoosmolaridad, hipovolemia en el LEC y edema intracelular","Hiperosmolaridad, hipovolemia en el LEC y edema intracelular","Hiperosmolaridad, hipovolemia en el LEC y deshidratación intracelular"],
    correcta:3,
    explicacion:"La pérdida de agua sin reposición eleva el sodio y la osmolaridad plasmática. El agua sale de las células hacia el líquido extracelular, causando deshidratación intracelular; a la vez, disminuye el volumen extracelular."
},

{
    id:124,
    tema:"Fisiología: Fisiología cardiovascular",
    pregunta:"Varón de 35 años con síndrome nefrótico y proteinuria masiva presenta edema generalizado. ¿Cuál es el principal mecanismo hemodinámico responsable?",
    opciones:["Aumento de la permeabilidad capilar inflamatoria","Aumento de la presión hidrostática capilar sistémica","Disminución de la presión oncótica plasmática","Retención de sodio a nivel tubular"],
    correcta:2,
    explicacion:"La pérdida urinaria de albúmina reduce la presión oncótica del plasma. Como consecuencia, disminuye la reabsorción de líquido desde el intersticio hacia el capilar y se desarrolla edema."
},

{
    id:125,
    tema:"Fisiología: Fisiología cardiovascular",
    pregunta:"Mujer de 64 años con hipertensión no tratada presenta hipertrofia concéntrica del ventrículo izquierdo, disminución del llenado diastólico y un S4 patológico. ¿Cuál es el mecanismo que explica la presencia del S4?",
    opciones:["Cierre retrasado de la válvula mitral durante la telediástole","Apertura súbita de la válvula aórtica durante la eyección","Vibración del flujo rápido que entra al ventrículo durante la fase de llenado rápido","Contracción auricular ante ventrículo rígido por disminución de la distensibilidad"],
    correcta:3,
    explicacion:"El cuarto ruido cardíaco se genera durante la sístole auricular cuando la aurícula impulsa sangre contra un ventrículo poco distensible. Es típico de hipertrofia ventricular izquierda por hipertensión arterial crónica."
},

{
    id:126,
    tema:"Fisiología: Fisiología del sistema excretor y medio interno",
    pregunta:"Mujer de 72 años con hipertensión y enfermedad renal crónica inicia ibuprofeno. A los cinco días presenta oliguria, creatinina elevada y reducción marcada de la TFG. ¿Cuál es el mecanismo de la caída de la TFG inducida por AINEs?",
    opciones:["Aumento de la presión hidrostática capsular","Vasodilatación de la arteriola eferente","Aumento del coeficiente de filtración","Vasoconstricción de la arteriola aferente"],
    correcta:3,
    explicacion:"Los AINEs inhiben la síntesis de prostaglandinas, que normalmente dilatan la arteriola aferente. Al perder este efecto, disminuye el flujo sanguíneo renal y la presión de filtración glomerular, reduciendo la TFG."
},

{
    id:127,
    tema:"Fisiología: Fisiología del sistema excretor y medio interno",
    pregunta:"Varón de 63 años con estenosis severa de la arteria renal derecha presenta hipertensión persistente. El riñón contralateral funciona normalmente. ¿Cuál es el mecanismo de la activación exagerada del sistema renina-angiotensina-aldosterona?",
    opciones:["Supresión del tono simpático renal por hipertensión sistémica","Disminución de la presión en la arteriola aferente del riñón estenótico","Aumento del sodio en mácula densa que incrementa la secreción de renina","Vasodilatación eferente que reduce la formación de angiotensina II"],
    correcta:1,
    explicacion:"La estenosis reduce la perfusión renal distal. Las células yuxtaglomerulares perciben la disminución de presión en la arteriola aferente y liberan renina, activando el sistema renina-angiotensina-aldosterona y elevando la presión arterial."
},

{
    id:128,
    tema:"Fisiología: Fisiología digestiva",
    pregunta:"Varón de 37 años con pancreatitis crónica presenta heces grasosas y voluminosas, además de pérdida de peso. ¿La deficiencia de cuál enzima pancreática explica principalmente la esteatorrea?",
    opciones:["Lipasa","Tripsina","Elastasa","Amilasa"],
    correcta:0,
    explicacion:"La lipasa pancreática es la principal enzima encargada de digerir triglicéridos. Su deficiencia ocasiona mala absorción de grasas y esteatorrea, caracterizada por heces voluminosas, grasosas y fétidas."
},

{
    id:129,
    tema:"Fisiología: Fisiología digestiva",
    pregunta:"Varón de 30 años con hepatopatía crónica presenta ictericia y sangrado fácil. Tiene albúmina 2,0 g/dL, tiempo de protrombina prolongado y bilirrubina total 4,8 mg/dL. ¿Qué función hepática alterada explica la hemorragia?",
    opciones:["Transporte de ácidos grasos libres","Participación en la coagulación sanguínea","Regulación del equilibrio ácido-base","Mantenimiento de la presión oncótica"],
    correcta:1,
    explicacion:"El hígado sintetiza la mayoría de los factores de coagulación. En la hepatopatía crónica disminuye su producción, lo que prolonga el tiempo de protrombina y favorece el sangrado."
},

{
    id:130,
    tema:"Fisiología: Fisiología digestiva",
    pregunta:"Varón de 45 años presenta ictericia, coluria y acolia; la bilirrubina total está elevada con predominio de la fracción directa. ¿Cuál es el mecanismo fisiopatológico más probable?",
    opciones:["Disminución de la captación hepatocelular de bilirrubina no conjugada","Aumento de la producción de bilirrubina no conjugada por hemólisis","Obstrucción del flujo biliar que impide la excreción de bilirrubina conjugada","Deficiencia de la enzima glucuroniltransferasa con falla de conjugación"],
    correcta:2,
    explicacion:"La obstrucción biliar impide que la bilirrubina conjugada llegue al intestino. Esta pasa a la sangre y se elimina por orina, causando coluria; la falta de pigmentos biliares en heces produce acolia."
},

{
    id:131,
    tema:"Fisiología: Fisiología digestiva",
    pregunta:"Hombre de 55 años es sometido a gastrectomía total. Tres meses después presenta diarrea acuosa postprandial, pérdida de peso y palpitaciones, sudoración y mareo 30 minutos después de las comidas. ¿Cuál es el mecanismo primario que explica esta condición?",
    opciones:["Síndrome de dumping por vaciamiento gástrico rápido e hiperosmolaridad yeyunal","Malabsorción biliar por interrupción de la circulación enterohepática","Síndrome de asa ciega por sobrecrecimiento bacteriano en asa aferente","Insuficiencia pancreática exocrina por pérdida del estímulo secretina-CCK"],
    correcta:0,
    explicacion:"Tras una gastrectomía total, el contenido alimentario llega rápidamente al yeyuno. Su elevada osmolaridad atrae agua hacia la luz intestinal, causando diarrea, distensión y síntomas vasomotores. La ausencia de factor intrínseco explica, además, el déficit de vitamina B12."
},

{
    id:132,
    tema:"Fisiología: Fisiología digestiva",
    pregunta:"Mujer de 55 años con carcinoma nasofaríngeo recibió radioterapia de cabeza y cuello. Presenta xerostomía y se prescribe pilocarpina. ¿Cuál es la principal estructura diana cuya estimulación restaura la función alterada?",
    opciones:["Músculo dilatador del iris","Glándulas salivales","Músculo ciliar","Glándulas sudoríparas ecrinas"],
    correcta:1,
    explicacion:"La pilocarpina es un agonista muscarínico que estimula las glándulas salivales y aumenta la secreción de saliva. Se utiliza para aliviar la xerostomía producida por radioterapia o síndrome de Sjögren."
},

{
    id:133,
    tema:"Fisiología: Fisiología del sistema endocrino, sistemas reproductor femenino y masculino",
    pregunta:"Mujer de 24 años presenta ciclos de 40 a 45 días, estradiol bajo en fase folicular, FSH ligeramente elevada y ausencia de pico de LH. Ecografía: folículos pequeños sin desarrollo dominante. ¿Cuál es el mecanismo que explica la ausencia de ovulación?",
    opciones:["Supresión hipotalámica de GnRH por hiperprolactinemia","Aumento sostenido de progesterona en fase folicular temprana","Inhibición del crecimiento folicular por exceso de andrógenos ováricos","Falta de retroalimentación positiva del estradiol sobre la LH"],
    correcta:3,
    explicacion:"El aumento sostenido de estradiol producido por el folículo dominante induce retroalimentación positiva sobre el eje hipotálamo-hipófisis y genera el pico de LH. Sin dicho pico no ocurre la ovulación."
},

{
    id:134,
    tema:"Fisiología: Fisiología del sistema endocrino, sistemas reproductor femenino y masculino",
    pregunta:"Mujer de 29 años presenta hiperfagia, intolerancia al calor, taquicardia, temblor fino, hiperreflexia, T3 y T4 elevadas y TSH suprimida. ¿Cuál es el mecanismo que explica la taquicardia y los reflejos hiperactivos?",
    opciones:["Disminución de la velocidad de conducción en nervios periféricos","Mayor sensibilidad de tejidos a catecolaminas por incremento de receptores β","Reducción del número de bombas Na⁺/K⁺-ATPasa en tejidos excitables","Disminución del gasto energético basal por inhibición mitocondrial"],
    correcta:1,
    explicacion:"Las hormonas tiroideas aumentan la expresión y sensibilidad de los receptores β-adrenérgicos. Esto explica la taquicardia, el temblor fino, la hiperreflexia y otros signos de hiperactividad simpática en el hipertiroidismo."
},

{
    id:135,
    tema:"Patología: Patología del sistema hematopoyético",
    pregunta:"Varón de 52 años con fatiga progresiva, pancitopenia y esplenomegalia sin adenopatías. El frotis muestra linfocitos con prolongaciones citoplasmáticas finas y uniformes; la citometría es positiva para CD11c, CD25 y CD103. ¿Qué neoplasia B madura corresponde a este perfil?",
    opciones:["Linfoma esplénico de la zona marginal","Tricoleucemia","Leucemia linfocítica crónica","Mielofibrosis primaria"],
    correcta:1,
    explicacion:"La tricoleucemia se caracteriza por linfocitos B con proyecciones citoplasmáticas finas, esplenomegalia y pancitopenia. Su inmunofenotipo típico incluye CD11c, CD25 y CD103."
},

{
    id:136,
    tema:"Patología: Patología del aparato reproductor y de la mama",
    pregunta:"Mujer de 52 años con placa eritematosa y descamativa en pezón y areola izquierdos. En la biopsia se observan células grandes atípicas con citoplasma pálido, confinadas a la epidermis y respetando la membrana basal. ¿Cuál es el diagnóstico más probable?",
    opciones:["Eccema crónico","Carcinoma inflamatorio","Metaplasia apocrina","Enfermedad de Paget"],
    correcta:3,
    explicacion:"La enfermedad de Paget mamaria se manifiesta como una lesión eccematosa del pezón y se caracteriza por células malignas grandes y pálidas en la epidermis. Suele asociarse a carcinoma ductal subyacente."
},

{
    id:137,
    tema:"Patología: Patología de la piel",
    pregunta:"Varón de 80 años, trasplantado renal con inmunosupresión crónica, presenta un nódulo cutáneo violáceo de rápido crecimiento en el antebrazo. ¿Cuál es el mecanismo patogénico más probable?",
    opciones:["Mutaciones inducidas por radiación ultravioleta en TP53","Mutaciones inactivantes del gen PTCH","Activación constitutiva de la vía Hedgehog","Infección por poliomavirus de células de Merkel"],
    correcta:3,
    explicacion:"El carcinoma de células de Merkel es un tumor cutáneo agresivo asociado a inmunosupresión, edad avanzada y poliomavirus de células de Merkel. Puede presentarse como un nódulo violáceo de crecimiento rápido."
},

{
    id:138,
    tema:"Patología: Patología del sistema hematopoyético",
    pregunta:"Paciente con síndrome de Sjögren presenta infiltrado linfocítico periductal en glándula salival con formación de centros germinales. ¿Cuál es el linfoma asociado más frecuente?",
    opciones:["MALT de glándula salival","Difuso de células B grandes","Anaplásico de células grandes","De células del manto"],
    correcta:0,
    explicacion:"La inflamación crónica autoinmune del síndrome de Sjögren favorece la proliferación linfoide B y aumenta el riesgo de linfoma extranodal de la zona marginal del tejido linfoide asociado a mucosa, conocido como linfoma MALT."
},

{
    id:139,
    tema:"Patología: Patología del aparato reproductor y de la mama",
    pregunta:"Mujer de 42 años con citología de lesión de alto grado, VPH-18 positivo y biopsia que confirma NIC 2 extensa con compromiso endocervical. ¿Cuál es el fundamento biológico para indicar una conización cervical?",
    opciones:["Prevención de recurrencia futura mediante resección amplia","Riesgo de carcinoma invasivo oculto en lesiones de alto grado","Tratamiento de la inflamación crónica del cuello uterino","Erradicación directa de la infección por VPH mediante escisión"],
    correcta:1,
    explicacion:"Una lesión intraepitelial de alto grado, especialmente con compromiso endocervical, puede coexistir con microinvasión no detectada en una biopsia limitada. La conización permite obtener una muestra completa para diagnóstico y tratamiento."
},

{
    id:140,
    tema:"Patología: Patología del aparato reproductor y de la mama",
    pregunta:"Mujer de 35 años con sangrado vaginal. Biopsia de cérvix: proliferación de células epiteliales atípicas en el epitelio escamoso de la zona de transformación, sin invasión de la membrana basal. ¿Cómo se denomina esta alteración histológica?",
    opciones:["Metaplasia escamosa benigna","Carcinoma escamoso invasivo","Displasia moderada del epitelio escamoso","Carcinoma in situ"],
    correcta:2,
    explicacion:"La displasia moderada corresponde a neoplasia intraepitelial cervical grado 2, en la que las células atípicas comprometen aproximadamente los dos tercios inferiores del epitelio, pero sin atravesar la membrana basal."
},

{
    id:141,
    tema:"Patología: Patología del sistema nervioso periférico y central",
    pregunta:"Niña de 11 años con cefalea progresiva y papiledema. La resonancia muestra una masa sólida en el cuarto ventrículo con hidrocefalia; la histología presenta pseudorrosetas perivasculares. ¿Cuál es el diagnóstico más probable?",
    opciones:["Meningioma","Ependimoma","Astrocitoma pilocítico","Meduloblastoma"],
    correcta:1,
    explicacion:"El ependimoma suele localizarse cerca del cuarto ventrículo en niños y puede causar hidrocefalia obstructiva. Sus pseudorrosetas perivasculares son el hallazgo histológico característico."
},

{
    id:142,
    tema:"Patología: Trastornos hemodinámicos",
    pregunta:"Mujer de 50 años con inmovilización en cama durante 10 días presenta dolor y edema en una pierna; el Doppler confirma trombosis venosa profunda. ¿Qué elemento de la tríada de Virchow explica principalmente este evento?",
    opciones:["Estasis venosa","Lesión endotelial por traumatismo local","Flujo sanguíneo turbulento","Hipercoagulabilidad hereditaria"],
    correcta:0,
    explicacion:"La inmovilización prolongada disminuye el retorno venoso de las extremidades inferiores y favorece la estasis sanguínea. Esta es uno de los tres componentes de la tríada de Virchow y predispone a trombosis venosa profunda."
},

{
    id:143,
    tema:"Patología: Inmunopatología",
    pregunta:"Niño de 9 años con dolor abdominal tipo cólico, artralgias, púrpura palpable en miembros inferiores y hematuria microscópica. La biopsia muestra vasculitis leucocitoclástica de pequeños vasos con depósitos granulares. ¿Cuál es el mecanismo inmunopatológico primario?",
    opciones:["Necrosis de vasos medianos sin glomerulonefritis","Vasculitis pauciinmune mediada por ANCA","Crioglobulinas mixtas asociadas a hepatitis C","Depósitos de IgA con activación del complemento"],
    correcta:3,
    explicacion:"El cuadro corresponde a vasculitis por IgA. Se produce depósito de complejos inmunes con IgA en vasos pequeños, piel, articulaciones, tubo digestivo y glomérulos, lo que explica la púrpura, artralgias, dolor abdominal y hematuria."
},

{
    id:144,
    tema:"Patología: Patología ósea y de tejidos blandos",
    pregunta:"Mujer de 35 años con dolor e hinchazón simétricos en manos y muñecas, rigidez matutina prolongada y erosiones marginales metacarpofalángicas. ¿Cuál es el hallazgo histopatológico característico en la membrana sinovial?",
    opciones:["Depósitos de cristales de urato monosódico con reacción granulomatosa","Depósitos de cristales de pirofosfato cálcico con condrocalcinosis","Sinovitis inespecífica sin formación de pannus","Pannus inflamatorio con hiperplasia sinovial, angiogénesis e infiltrado linfoplasmocitario"],
    correcta:3,
    explicacion:"La artritis reumatoide se caracteriza por sinovitis crónica proliferativa. El pannus invade cartílago y hueso, produciendo las erosiones marginales típicas de esta enfermedad."
},

{
    id:145,
    tema:"Patología: Patología del sistema hematopoyético",
    pregunta:"Varón de 30 años presenta disnea, palidez, ictericia leve y orina oscura dos semanas después de tratamiento por neumonía. Tiene reticulocitos aumentados, bilirrubina indirecta elevada, VCM 103 fL y Coombs directa positiva. ¿Qué tipo de anemia presenta?",
    opciones:["Macrocítica hemolítica autoinmune","Microcítica ferropénica","Normocítica asociada a enfermedad crónica","Macrocítica megaloblástica perniciosa"],
    correcta:0,
    explicacion:"La prueba de Coombs directa positiva indica hemólisis mediada por anticuerpos. La elevación de reticulocitos puede aumentar el VCM; por ello, la macrocitosis en este contexto no implica necesariamente anemia megaloblástica."
},

{
    id:146,
    tema:"Patología: Inmunopatología",
    pregunta:"Adolescente de 15 años presenta disnea intensa, hipotensión, taquicardia y urticaria generalizada minutos después de ingerir mariscos. ¿Cuál es el tipo de hipersensibilidad predominante?",
    opciones:["I","III","II","IV"],
    correcta:0,
    explicacion:"La anafilaxia es una reacción de hipersensibilidad inmediata tipo I, mediada por IgE. La reexposición al alérgeno produce degranulación de mastocitos y basófilos, con liberación de histamina y otros mediadores."
},

{
    id:147,
    tema:"Patología: Patología del sistema endocrino",
    pregunta:"Mujer de 38 años con dolor cervical anterior intenso, febrícula y tirotoxicosis transitoria tres semanas después de una infección viral respiratoria. ¿Cuál es el patrón histopatológico característico?",
    opciones:["Tiroiditis linfocítica indolora sin granulomas","Infiltrado linfocítico con centros germinales y metaplasia oxífila","Granulomas con células gigantes multinucleadas y restos de coloide por destrucción folicular","Fibrosis densa que reemplaza el parénquima y se extiende más allá de la cápsula"],
    correcta:2,
    explicacion:"El cuadro corresponde a tiroiditis subaguda granulomatosa de De Quervain, a menudo posterior a una infección viral. La destrucción de folículos libera hormonas tiroideas preformadas y produce tirotoxicosis transitoria con dolor cervical."
},

{
    id:148,
    tema:"Patología: Patología del sistema digestivo",
    pregunta:"Mujer de 46 años con obesidad presenta episodios recurrentes de dolor en hipocondrio derecho e intolerancia a alimentos grasos. Ecografía: pared vesicular engrosada y múltiples cálculos. ¿Cuál es el hallazgo histopatológico más probable?",
    opciones:["Senos de Rokitansky-Aschoff con fibrosis de la pared y escaso infiltrado crónico","Infiltrado neutrofílico transmural con edema agudo y necrosis focal","Activación intraductal de tripsina con necrosis grasa peripancreática","Dilatación del colédoco con patrón colestásico"],
    correcta:0,
    explicacion:"El dolor recurrente asociado a cálculos y engrosamiento de la pared sugiere colecistitis crónica. Histológicamente se observan fibrosis mural, infiltrado inflamatorio crónico y senos de Rokitansky-Aschoff."
},

{
    id:149,
    tema:"Patología: Patología del sistema respiratorio",
    pregunta:"En una biopsia pulmonar se observan tapones polipoides de tejido de granulación que ocupan luces alveolares y bronquiolares, llamados cuerpos de Masson, con preservación de la arquitectura. ¿Qué neumonía se asocia a este hallazgo?",
    opciones:["Organizada criptogenética","Asociada a tabaquismo","Intersticial linfoide","Intersticial descamativa"],
    correcta:0,
    explicacion:"La neumonía organizada criptogénica se caracteriza por cuerpos de Masson: tapones de tejido de granulación dentro de alvéolos, conductos alveolares y bronquiolos. La arquitectura pulmonar suele permanecer preservada."
},

{
    id:150,
    tema:"Patología: Patología infecciosa",
    pregunta:"Varón de 24 años presenta derrame pleural y una biopsia de pleura con granuloma caseificante. ¿Qué célula gigante multinucleada, con núcleos periféricos en herradura, es característica?",
    opciones:["Langerhans","Langhans","Virchow","Malpighi"],
    correcta:1,
    explicacion:"Las células gigantes de Langhans presentan núcleos dispuestos periféricamente en forma de herradura. Son características de granulomas, especialmente de tuberculosis, donde puede observarse necrosis caseosa."
},

{
    id:151,
    tema:"Farmacología: Antimicrobianos",
    pregunta:"Niño con pústulas superficiales en el dorso de la mano. Del exudado se aisló Staphylococcus aureus sensible a meticilina, productor de penicilinasa y sin factores de riesgo para MRSA. ¿Cuál es el antibiótico oral más apropiado?",
    opciones:["Cefalexina","Amoxicilina","Penicilina G","Aztreonam"],
    correcta:0,
    explicacion:"La cefalexina es una cefalosporina de primera generación activa frente a S. aureus sensible a meticilina. Es resistente a la penicilinasa estafilocócica y se utiliza por vía oral en infecciones cutáneas no complicadas."
},

{
    id:152,
    tema:"Farmacología: Antimicrobianos",
    pregunta:"Mujer en tratamiento estable con warfarina por fibrilación auricular consulta por vulvovaginitis por Candida. ¿Cuál tratamiento habitual incrementa el riesgo de hemorragia al potenciar el efecto de la warfarina por inhibición de su metabolismo hepático?",
    opciones:["Nistatina","Clotrimazol","Fluconazol","Terbinafina"],
    correcta:2,
    explicacion:"El fluconazol inhibe enzimas del citocromo P450, especialmente CYP2C9, implicada en el metabolismo de la warfarina. Esto incrementa el INR y eleva el riesgo de hemorragia."
},

{
    id:153,
    tema:"Farmacología: Antimicrobianos",
    pregunta:"Varón de 35 años recibe isoniazida, rifampicina, pirazinamida y etambutol por tuberculosis sensible. A las nueve semanas presenta disminución progresiva bilateral de la agudeza visual y discromatopsia rojo-verde. ¿Cuál fármaco es el responsable más probable?",
    opciones:["Isoniazida","Pirazinamida","Etambutol","Rifampicina"],
    correcta:2,
    explicacion:"El etambutol puede producir neuritis óptica, manifestada por disminución de agudeza visual y alteración de la discriminación rojo-verde. Por ello, se debe monitorizar la función visual durante el tratamiento."
},

{
    id:154,
    tema:"Farmacología: Sistema nervioso y toxicología",
    pregunta:"Mujer de 18 años llega somnolienta dos horas después de ingerir 30 tabletas de clonazepam. ¿Cuál es el antídoto antagonista específico para revertir una intoxicación por benzodiacepinas?",
    opciones:["Flumazenil","N-acetilcisteína","Naloxona","Fisostigmina"],
    correcta:0,
    explicacion:"El flumazenil es un antagonista competitivo del sitio de unión de las benzodiacepinas en el receptor GABA-A. Revierte la sedación por benzodiacepinas; debe utilizarse con cautela por el riesgo de convulsiones en usuarios crónicos o intoxicaciones mixtas."
},

{
    id:155,
    tema:"Farmacología: Sistema nervioso y toxicología",
    pregunta:"Varón de 40 años con ansiedad generalizada e insomnio crónico inicia un fármaco que potencia GABA en el SNC y, a dosis terapéuticas, presenta bajo riesgo de depresión respiratoria y menor supresión del sueño REM que los barbitúricos. ¿Cuál es el fármaco indicado?",
    opciones:["Fenobarbital","Etanol","Zolpidem","Diazepam"],
    correcta:3,
    explicacion:"El diazepam es una benzodiacepina que potencia la acción de GABA-A. A dosis terapéuticas causa menor depresión respiratoria y menor supresión del sueño REM que los barbitúricos; además, posee efecto ansiolítico."
},

{
    id:156,
    tema:"Farmacología: Sistema nervioso y toxicología",
    pregunta:"Varón de 35 años sometido a apendicectomía desarrolla rigidez muscular generalizada, taquicardia y elevación rápida de temperatura minutos después de recibir succinilcolina. ¿Cuál es la complicación y el tratamiento específico inicial?",
    opciones:["Hipertermia maligna; dantroleno","Hiperpotasemia; gluconato de calcio","Bradicardia; atropina","Anafilaxia mediada por IgE; epinefrina"],
    correcta:0,
    explicacion:"La succinilcolina puede desencadenar hipertermia maligna en personas susceptibles por alteración del receptor de rianodina. El dantroleno reduce la liberación excesiva de calcio en el músculo esquelético y es el tratamiento específico."
},

{
    id:157,
    tema:"Farmacología: Sistema nervioso y toxicología",
    pregunta:"¿Cuál de los siguientes fármacos en sobredosis se metaboliza a NAPQI, un intermediario reactivo que agota el glutatión hepático y causa necrosis centrolobulillar?",
    opciones:["Diclofenaco","Ketorolaco","Paracetamol","Indometacina"],
    correcta:2,
    explicacion:"En sobredosis, el paracetamol se metaboliza en mayor proporción por CYP2E1 a NAPQI. Cuando se agotan las reservas de glutatión, este metabolito causa necrosis hepatocelular centrolobulillar."
},

{
    id:158,
    tema:"Farmacología: Sistema nervioso y toxicología",
    pregunta:"Un adulto acude 10 horas después de ingerir una dosis tóxica de paracetamol. ¿Cuál es el antídoto que repone el glutatión hepático y favorece la detoxificación del metabolito tóxico?",
    opciones:["N-acetilcisteína","Flumazenil","Atropina","Fomepizol"],
    correcta:0,
    explicacion:"La N-acetilcisteína repone las reservas hepáticas de glutatión y permite neutralizar el NAPQI. Es más eficaz cuando se administra tempranamente, pero puede aportar beneficio incluso en presentaciones tardías."
},

{
    id:159,
    tema:"Farmacología: Farmacología cardiovascular, metabólica y endocrina",
    pregunta:"Mujer de 54 años con hipercolesterolemia persistente pese a intervención dietaria. Se añade ezetimibe. ¿Cuál es su mecanismo de acción?",
    opciones:["Activa PPAR-alfa y aumenta la lipoproteinlipasa","Neutraliza PCSK9 y aumenta receptores LDL","Inhibe el transportador NPC1L1 en el borde en cepillo del enterocito","Bloquea la ATP-citrato liasa en músculo esquelético"],
    correcta:2,
    explicacion:"El ezetimibe bloquea el transportador NPC1L1, reduciendo la absorción intestinal de colesterol. Como consecuencia, disminuye el colesterol circulante y aumenta la captación hepática de LDL."
},

{
    id:160,
    tema:"Farmacología: Farmacología cardiovascular, metabólica y endocrina",
    pregunta:"Varón de 35 años con crisis asmática recibe salbutamol inhalado, agonista β₂ de acción corta. ¿Cuál es un efecto adverso frecuente asociado a este fármaco?",
    opciones:["Hiperpotasemia","Bradicardia","Candidiasis orofaríngea","Taquicardia"],
    correcta:3,
    explicacion:"El salbutamol puede causar taquicardia, temblor e hipopotasemia. Estos efectos se deben a la estimulación β-adrenérgica sistémica y, en parte, a la activación de receptores β₁ cardíacos a dosis elevadas."
},

{
    id:161,
    tema:"Farmacología: Farmacología cardiovascular, metabólica y endocrina",
    pregunta:"¿Cuál de las siguientes es una insulina basal de acción ultralarga?",
    opciones:["Lispro","Degludec","Aspart","Glulisina"],
    correcta:1,
    explicacion:"La insulina degludec es una insulina basal de acción ultralarga, con efecto de más de 24 horas. Lispro, aspart y glulisina son análogos de acción rápida utilizados principalmente para el control posprandial."
},

{
    id:162,
    tema:"Farmacología: Farmacología cardiovascular, metabólica y endocrina",
    pregunta:"Varón de 45 años con hipertensión tratada con un diurético presenta dolor y edema agudo del primer dedo del pie; el ácido úrico está elevado. ¿Cuál diurético es la causa más probable?",
    opciones:["Hidroclorotiazida","Amilorida","Acetazolamida","Espironolactona"],
    correcta:0,
    explicacion:"Las tiazidas disminuyen la excreción renal de ácido úrico y pueden producir hiperuricemia, favoreciendo crisis de gota. La afectación de la primera articulación metatarsofalángica es una presentación típica."
},

{
    id:163,
    tema:"Farmacología: Farmacología cardiovascular, metabólica y endocrina",
    pregunta:"Mujer posmenopáusica con cáncer de mama receptor hormonal positivo, tratada con tamoxifeno, presenta baja formación de endoxifeno por un polimorfismo de pérdida de función. ¿Cuál se asocia con menor eficacia del tamoxifeno?",
    opciones:["CYP2D6","CYP2C19","CYP2C9","CYP3A4"],
    correcta:0,
    explicacion:"El tamoxifeno es un profármaco que requiere metabolismo por CYP2D6 para generar endoxifeno, su metabolito activo principal. Variantes de pérdida de función de CYP2D6 pueden reducir su eficacia terapéutica."
},

{
    id:164,
    tema:"Farmacología: Farmacología cardiovascular, metabólica y endocrina",
    pregunta:"Paciente con shock séptico e hipotensión refractaria tras reanimación inicial con cristaloides. Se requiere aumentar la resistencia vascular sistémica y mantener una PAM de al menos 65 mmHg. ¿Cuál es el vasopresor de primera elección?",
    opciones:["Epinefrina","Norepinefrina","Efedrina","Dobutamina"],
    correcta:1,
    explicacion:"La norepinefrina es el vasopresor de primera elección en shock séptico. Su predominio de acción α₁ produce vasoconstricción y aumenta la resistencia vascular sistémica, elevando la presión arterial media."
},

{
    id:165,
    tema:"Farmacología: Farmacología cardiovascular, metabólica y endocrina",
    pregunta:"Varón de 70 años con bradicardia sinusal sintomática recibe atropina intravenosa. ¿Cuál es el conjunto de efectos sistémicos esperados por el bloqueo muscarínico?",
    opciones:["Midriasis, cicloplejia y taquicardia","Lagrimeo, diarrea acuosa e hipotensión","Miosis, broncoespasmo y bradicardia","Hipersalivación, diaforesis y bradicardia"],
    correcta:0,
    explicacion:"La atropina bloquea receptores muscarínicos. Produce taquicardia, midriasis, cicloplejia, disminución de secreciones y reducción de la motilidad gastrointestinal."
},

{
    id:166,
    tema:"Microbiología y Parasitología: Protozoos",
    pregunta:"Varón de 28 años con diarrea de dos semanas con moco y sangre. En el examen en fresco de heces diarreicas se observan formas móviles con seudópodos y eritrocitos fagocitados. ¿Qué estadio evolutivo del parásito corresponde a esta observación?",
    opciones:["Esporozoíto","Trofozoíto","Quiste maduro","Ooquiste"],
    correcta:1,
    explicacion:"La forma móvil con seudópodos y eritrocitos fagocitados corresponde al trofozoíto de Entamoeba histolytica. La eritrofagocitosis es un dato característico de infección invasiva por este protozoo."
},

{
    id:167,
    tema:"Microbiología y Parasitología: Bacteriología",
    pregunta:"Varón de 60 años con otitis media aguda hace tres semanas consulta por cefalea, fiebre, vómitos y desorientación. El LCR es turbio, con predominio de polimorfonucleares, glucosa baja y diplococos grampositivos. ¿Cuál es el agente etiológico más probable?",
    opciones:["Neisseria meningitidis","Escherichia coli","Listeria monocytogenes","Streptococcus pneumoniae"],
    correcta:3,
    explicacion:"Streptococcus pneumoniae es un diplococo grampositivo y una causa frecuente de meningitis bacteriana en adultos. La otitis media previa es compatible y el LCR presenta un patrón bacteriano: neutrófilos elevados, glucosa baja y proteínas altas."
},

{
    id:168,
    tema:"Microbiología y Parasitología: Helmintos",
    pregunta:"Mujer de 30 años presenta fiebre, mialgias intensas, edema periorbitario y eosinofilia de 25% después de ingerir carne de cerdo poco cocida. ¿Cuál es el agente etiológico más probable?",
    opciones:["Fasciola hepatica","Trichinella spiralis","Taenia solium","Toxocara canis"],
    correcta:1,
    explicacion:"La triquinelosis se adquiere al consumir carne de cerdo poco cocida que contiene larvas de Trichinella spiralis. Las larvas migran al músculo y causan mialgias, fiebre, eosinofilia y edema periorbitario."
},

{
    id:169,
    tema:"Microbiología y Parasitología: Protozoos",
    pregunta:"Varón de 34 años con diarrea acuosa, flatulencia, heces fétidas y grasosas después de consumir agua no tratada de un arroyo. ¿Cuál es el protozoo causante más probable?",
    opciones:["Entamoeba histolytica","Cyclospora cayetanensis","Giardia lamblia","Balantidium coli"],
    correcta:2,
    explicacion:"Giardia lamblia se adquiere por agua contaminada y causa diarrea acuosa, distensión abdominal, flatulencia y esteatorrea. Se adhiere a la mucosa del intestino delgado y altera la absorción de grasas."
},

{
    id:170,
    tema:"Microbiología y Parasitología: Bacteriología",
    pregunta:"Niño de 6 años con fiebre, cefalea, rigidez de nuca, petequias y púrpura. El LCR muestra diplococos gramnegativos intracelulares. ¿Cuál es el agente etiológico más probable?",
    opciones:["Haemophilus influenzae","Streptococcus pneumoniae","Neisseria meningitidis","Listeria monocytogenes"],
    correcta:2,
    explicacion:"Neisseria meningitidis es un diplococo gramnegativo intracelular que causa meningitis y meningococcemia. Las petequias y la púrpura son manifestaciones características de la endotoxemia por meningococo."
},

{
    id:171,
    tema:"Microbiología y Parasitología: Artrópodos",
    pregunta:"Varón de 29 años con prurito nocturno intenso, pápulas y excoriaciones en espacios interdigitales, muñecas y región periumbilical. Dos convivientes presentan prurito similar. ¿Cuál es el agente probable?",
    opciones:["Pulex irritans","Sarcoptes scabiei","Pediculus humanus","Demodex folliculorum"],
    correcta:1,
    explicacion:"Sarcoptes scabiei es un ácaro que causa escabiosis. El prurito nocturno, la afectación de espacios interdigitales y el contagio entre convivientes son hallazgos típicos."
},

{
    id:172,
    tema:"Microbiología y Parasitología: Micología",
    pregunta:"Mujer de 18 años con placas anulares eritematosas pruriginosas, borde activo descamativo y centro claro. Se sospecha tiña corporis. ¿Cuál es el procedimiento inicial más apropiado para confirmar el diagnóstico?",
    opciones:["Lámpara de Wood para buscar fluorescencia verdosa","Raspado cutáneo y examen directo con KOH al 10–20%","Frotis de Tzanck con tinción de Giemsa","Cultivo en agar Sabouraud como prueba inicial"],
    correcta:1,
    explicacion:"El examen directo con hidróxido de potasio disuelve la queratina y permite identificar hifas de dermatofitos en el material obtenido del borde activo de la lesión. Es una prueba rápida, económica y apropiada para el primer nivel de atención."
},

{
    id:173,
    tema:"Microbiología y Parasitología: Virología",
    pregunta:"Varón de 18 años con verrugas anogenitales pediculadas. La biopsia muestra hiperqueratosis, acantosis y coilocitosis, compatibles con condiloma acuminado. ¿Qué genotipo de VPH se asocia más frecuentemente?",
    opciones:["VPH 6","VPH 18","VPH 31","VPH 16"],
    correcta:0,
    explicacion:"Los condilomas acuminados se asocian principalmente con los genotipos VPH 6 y 11, considerados de bajo riesgo oncogénico. Los VPH 16 y 18 se relacionan con mayor frecuencia con lesiones intraepiteliales de alto grado y cáncer cervical."
},

{
    id:174,
    tema:"Microbiología y Parasitología: Bacteriología",
    pregunta:"Mujer tratada con clindamicina oral por celulitis presenta dolor abdominal tipo cólico y diarrea que evoluciona a deposiciones con moco y sangre. ¿Cuál es el mecanismo etiopatogénico más probable?",
    opciones:["Sobrecrecimiento de Clostridioides difficile","Reacción adversa con infiltración eosinofílica del colon","Producción de citotoxina por Klebsiella oxytoca","Hipoperfusión mesentérica no oclusiva"],
    correcta:0,
    explicacion:"La clindamicina altera la microbiota intestinal y favorece el sobrecrecimiento de Clostridioides difficile. Sus toxinas A y B lesionan la mucosa colónica y producen colitis asociada a antibióticos."
},

{
    id:175,
    tema:"Microbiología y Parasitología: Artrópodos",
    pregunta:"Paciente con dengue confirmado vive en una zona con presencia del vector. ¿Cuál es el vector principal del dengue?",
    opciones:["Aedes aegypti","Triatoma infestans","Culex","Anopheles"],
    correcta:0,
    explicacion:"El dengue es transmitido principalmente por la picadura de la hembra infectada de Aedes aegypti. Este mosquito se reproduce en recipientes con agua estancada y tiene actividad predominante durante el día."
},
]
