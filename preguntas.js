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
]
