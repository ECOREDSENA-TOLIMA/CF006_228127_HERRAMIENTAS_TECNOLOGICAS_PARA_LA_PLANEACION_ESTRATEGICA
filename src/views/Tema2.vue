<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Evaluación de la seguridad de la información

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La evaluación de la seguridad de la información es un proceso crítico en la gestión de datos y sistemas en la era digital. Su objetivo principal es identificar y mitigar posibles vulnerabilidades que podrían comprometer la confidencialidad, integridad y disponibilidad de la información. Mediante la realización de auditorías, pruebas de penetración y análisis exhaustivos, las organizaciones pueden evaluar la eficacia de sus medidas de seguridad existentes y tomar decisiones informadas para mejorar su postura de seguridad. La evaluación de la seguridad de la información es esencial en un mundo donde las amenazas cibernéticas son cada vez más sofisticadas e invasivas, garantizando así la protección de datos sensibles y la continuidad de las operaciones empresariales en un entorno digital en constante evolución.

    p.mb-3(data-aos="flip-left") Evaluar la seguridad de la información en una organización, es un ejercicio que debe tomarse con responsabilidad y pertinencia hacia la organización, ya que de esta evaluación permitirá confrontar si se está en capacidad de hacer frente a una situación que ponga en riesgo la seguridad de su información, así como el normal desarrollo de sus actividades.
    p.mb-5(data-aos="flip-left") A continuación, se revisará el procedimiento para llevar a cabo la evaluación técnica de la seguridad de la información en una organización.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Establecimiento del alcance

    p.mb-5(data-aos="flip-left") Para llevar a cabo la evaluación de la seguridad de la información, es preciso tener definido el alcance de esta, lo que permitirá establecer hasta donde llegará o cual será el objeto de la evaluación dentro de la organización, teniendo presente que se está hablando de una evaluación de seguridad de la información, será necesario evaluar como mínimo los activos que comprenden los procesos, áreas o dependencias que involucran la evaluación, de estos activos, se debe levantar la siguiente información:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.mb-4
        .tarjeta.color-secundario.p-4(data-aos="zoom-in-down")
          .row.justify-content-center
            .col-12.col-md-4.mb-2.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/tema2-2.png', alt='')
            .col-md-8.col-12
              ul.lista-ul.mb-0.ms-3
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Procesos, dependencias o áreas de la organización a la cual se desea evaluar.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Activos de información objeto de evaluación.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Información.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | #[em Software.]
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | #[em Hardware.]
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Personal.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Infraestructura de red.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Sedes o ubicaciones de la organización.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Y todos aquellos elementos que se consideren que intervienen en los procesos de la compañía.
      .col-12.col-lg-10(data-aos="fade-down")
        p Además, se debe establecer hasta donde se quiere llegar con la evaluación de seguridad, es decir, si está pensando en reconocer sus vulnerabilidades o está planeando la adquisición de alguna solución de seguridad o la subcontratación de la misma.
        p Algo que se debe de indagar, es si previamente se ha realizado algún proceso de evaluación, lo que permitirá tener un panorama previo y verificar su validez y trayectoria de las vulnerabilidades.
          
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Identificación de activos

    p.mb-5(data-aos="flip-left") Una vez definido el alcance, se debe realizar la identificación y reconocimiento de los activos que serán objeto de evaluación, también conocer quien o quienes son los responsables de cada uno de estos activos al interior de la organización, para lo cual se recomienda un levantamiento de información que permita identificar a cada uno de estos actores dentro de la organización, a continuación, se tiene un ejemplo de cómo se puede documentar esta información.

    .row.justify-content-center.mb-4
      .col-12.col-lg-10.mb-4(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 4. </b> <i>Modelo levantamiento de información sobre activos a evaluar</i>
        .tabla-a.color-acento-contenido.mb-4
          table(style="min-width:768px")
            thead
              tr
                th(style="width:30%") Tipo Activo
                th Activo
                th Responsable
            tbody
              tr
                th(rowspan="2") #[em Software]
                td Aplicación talento humano
                td Pedro Pérez - Talento humano
              tr
                td Financiero
                td Juan de la Oz - Contador
              tr
                th Información
                td Información de clientes
                td Juan Muñoz - Comercial
              tr
                th(rowspan="2") #[em Hardware]
                td Servidor de base de datos
                td Carlos Aranda - Sistemas 
              tr
                td Redes wifi
                td Carlos Aranda - Sistemas

      .col-12.col-lg-10(data-aos="fade-left")
        .row.justify-content-center
          .col-12.col-md-10.mb-2.mb-md-0
            p Esta información, debe ser documentada a partir del procedimiento del reconocimiento de los activos de información que se realiza inicialmente en la organización, así como en una exploración más en detalle con cada una de las áreas o procesos responsables de la información, lo que permitirá identificar otros aspectos objeto de evaluación.
            p Como se mencionó anteriormente sobre activos de información, se permitirá aprovechar la información recolectada para obtener los detalles de cada uno de los activos a evaluar, tales como versión, marca, arquitectura, modelo, entre otros detalles, además del establecimiento de la importancia para la organización de cada uno de estos activos.
          .col-md-2.col-12
            figure
              img(src='@/assets/curso/temas/tema2/tema2-3.png', alt='')
 
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Identificación de vulnerabilidades

    p.mb-5(data-aos="flip-left") Las amenazas se consideran cualquier debilidad o falencia que puede presentarse en un activo de información, que está presente y que podría ser aprovechada por un tercero, es así como la identificación de estas de manera temprana, permite establecer un plan de evaluación para su identificación, como se vio anteriormente hay algunas iniciativas como la del #[em Top] 10 de Owasp, el cual consolida las 10 vulnerabilidades más comunes en aplicaciones #[em web], entre las que se destacan:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.mb-4
        .tarjeta.color-primario.p-4(data-aos="zoom-in-down")
          .row.justify-content-center.align-items-center
            .col-12.col-md-4.mb-2
              figure
                img(src='@/assets/curso/temas/tema2/tema2-4.png', alt='')
            .col-md-8.col-12.mb-4
              ul.lista-ul.mb-0.ms-3
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Ausencia o debilidad de controles de seguridad.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Sistemas de información desactualizados que facilitan la explotación.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Diseño de aplicaciones complejas y poco intuitivas, que conllevan al error por parte del usuario.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Falta de políticas y controles para la gestión adecuada de credenciales de acceso.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Falta de controles para medios de almacenamiento removibles.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Ausencia de controles para riesgos eléctricos.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Medios de conexión deficientes o sin control, que permite que cualquier intruso pueda acceder a la red de datos o aplicaciones.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Sistemas de información implementados con un dimensionamiento inadecuado generando sobrecostos o fallas en operación.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Ausencia de políticas para la gestión del cambio.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Información clasificada erróneamente.
            .col-12.col-md-8.mb-2.mb-md-0
              ul.lista-ul.mb-0.ms-3
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Mecanismos de respaldo y recuperación ineficientes.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Debilidad en la seguridad física y de perímetro.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Falta de formación del personal encargado y usuarios finales.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | #[em Software] instalado no autorizado o de dudosa reputación.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Falta de evaluación de #[em software].
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Falta de políticas y controles para el acceso remoto.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Falta de control sobre los datos de entrada y de salida.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Falta de documentación de la infraestructura tecnológica.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Falta de auditorías o desarrollo débil de las mismas.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Procedimientos para limpieza de desechos tecnológicos débil o ausentes.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Sistemas de identificación y autenticación débiles.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Descargas e instalaciones de aplicaciones de internet.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Conexiones a redes públicas desprotegidas.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Falta de cultura y compromiso para el de trabajo seguro.
            .col-md-4.col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-5.png', alt='')
      .col-12.col-lg-10
        p Todas estas vulnerabilidades y muchas más pueden estar presentes en los activos de información de la organización sin darse cuenta, podrían ser la entrada para que una amenaza aproveche y se pueda materializar.
        p Su reconocimiento #[b NO] debe hacerse de manera general, sino por cada uno de los activos y valorar sus dimensiones, permitiendo caracterizarlas y realizar la evaluación acertada.

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Identificación de amenazas

    p.mb-3(data-aos="flip-left") Con las vulnerabilidades identificadas, es preciso que el reconocimiento de amenazas se realice, a partir de la validación de posibilidades de ocurrencia y del impacto que pueden generar en cada uno de los activos de información, como se dijo anteriormente, esta identificación no debe realizarse de manera general sino individual por cada activo de información.
    p.mb-5(data-aos="flip-left") Las amenazas pueden ser establecidas a partir de recomendaciones como lo hace #[em Magerit], en la cual sugiere la siguiente clasificación:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-2a.svg' alt='')
        h4 Natural
        p Todos los eventos que origina la naturaleza y puede afectar un activo de información.
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-2b.svg' alt='')
        h4 Industrial
        p Generados por efectos resultantes o asociadas a eventos industriales.
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-2c.svg' alt='')
        h4 Errores en aplicaciones
        p Vulnerabilidades técnicas en programas.
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-2d.svg' alt='')
        h4 Causadas por las personas de forma accidental
        p Originados por personas, generalmente por error u omisión.
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-2e.svg' alt='')
        h4 Causadas por las personas de forma deliberada
        p Daños por terceros, o por personas con intereses propios.

    p.mb-5(data-aos="flip-left") Estas amenazas permitirán reconocer que puede afectar a la organización, a partir del aprovechamiento de las vulnerabilidades anteriormente identificadas, y su valoración del impacto será determinante para el siguiente paso, que será el establecimiento de la salvaguarda adecuada.

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Establecimiento de salvaguardas

    p.mb-5(data-aos="flip-left") El siguiente paso es el establecimiento de las salvaguardas o controles, como también, acciones que deberá de aplicar la organización para evitar que una vulnerabilidad sea aprovechada, para ello, se tienen iniciativas existentes como la norma ISO/IEC 27001 Anexo A, el cual presenta algunos controles importantes para mejorar la seguridad de la información, como son los controles CIS:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.mb-4
        .cajon.color-primario.p-4(data-aos="zoom-in-down")
          h4 Norma ISO/IEC 27001 Anexo A
          p Esta norma presenta las propuestas de controles, representada en dominios de seguridad, los cuales permiten abarcar los diferentes frentes de un activo de información (ICONTEC, 2018).
          p A continuación, se presentan los dominios de seguridad sugeridos por la norma:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Dominios de seguridad de la norma ISO/IEC 27001:2013</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/fig-6a.svg', alt='En la figura se observa el dominio operativo y estratégico, para seguridad operativa, lógica, física, legal.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-6b.svg', alt='En la figura se observa el dominio operativo y estratégico, para seguridad operativa, lógica, física, legal.') 
          figcaption Nota: Adaptada de ISO/IEC 27001:2013 - Anexo A pp. 23. #[a(href="https://serviciocivil.gov.co/sites/default/files/marco-legal/2006_03_22_NTC-ISO-IEC%2027001.pdf" target="_blank" style="color:blue") https://serviciocivil.gov.co/sites/default/files/marco-legal/2006_03_22_NTC-ISO-IEC%2027001.pdf]

    p.mb-5(data-aos="flip-left") Estos dominios adicionalmente están distribuidos en objetivos de control, los cuales agrupan los distintos enfoques de seguridad y finalmente los controles, tal como se tiene en el componente formativo “Gestión del riesgo en las organizaciones”, del presente programa.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.mb-4
        .cajon.color-secundario.p-4(data-aos="zoom-in-down")
          h4 Controles CIS
          p Es una propuesta de código abierto realizada por un grupo o comunidad de profesionales y organizaciones que trabajan en el ámbito de la ciberseguridad. Esta norma propone 18 controles con los cuales se fortalece la infraestructura tecnológica, servicios y aplicaciones, con el fin de reducir la probabilidad de ocurrencia de un incidente (#[em CIS SECURITY], 2022). En material complementario puede consultar su página oficial.

    p.mb-5(data-aos="flip-left") Los controles CIS, están estructurados en 18 controles y 153 salvaguardas distribuidos en 3 grupos de implementación, así:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 7. </b> <i>Controles CIS V8</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/fig-7a.svg', :alt='altImg7')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-7b.svg', :alt='altImg7') 
          figcaption Nota: adaptado de: #[a(href="https://blog.segu-info.com.ar/2023/04/controles-cis-esenciales-de.html" target="_blank" style="color:blue") https://blog.segu-info.com.ar/2023/04/controles-cis-esenciales-de.html]

    p.mb-5(data-aos="flip-left") Adicionalmente, cuenta con una recopilación de sugerencias específicas para productos, en los cuales adopta dichos controles, de acuerdo a las características de cada uno de los productos, generando guías de endurecimiento que facilita a los administradores de estos sistemas de información su adaptación.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.mb-4
        .tarjeta.color-secundario.p-4(data-aos="zoom-in-down")
          .row.justify-content-center
            .col-12.col-md-4.mb-2.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/tema2-6.png', alt='')
            .col-md-8.col-12
              p Entre las guías más comunes se tienen las siguientes:
              ul.lista-ul.mb-0.ms-3
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Sistemas operativos #[em Linux] como #[em Windows].
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Servicios #[em web], bases de datos.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Hipervisores.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Servicios en la nube.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Dispositivos móviles.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Dispositivos de red.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | #[em Software] de escritorio.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Dispositivos de impresión.
      .col-12.col-lg-10.mb-0
        p Para mayor información en material complementario se puede consultar el portal oficial.
        p Las salvaguardas seleccionadas deberán ser evaluadas para garantizar su aplicación y efectividad para la gestión de posibles riesgos de amenaza, en formatos como los presentados anteriormente del SoA.
        p En material complementario se ubica el enlace para descargar el formato en Excel, del registro de salvaguardar para la gestión del riesgo.

    Separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6 Evaluación del riesgo

    p.mb-3(data-aos="flip-left") Las acciones adelantadas a partir del ejercicio de evaluación, deberán de reducir considerablemente las probabilidades de que las vulnerabilidades sean aprovechadas por las amenazas, y estas generen un incidente que lleve a la organización a un incidente que afecte sus operaciones, e incluso posibilite perder parte de su información, para garantizar que las acciones sean aplicadas adecuadamente, se debe realizar un plan de seguimiento o evaluación periódica, que permita reconocer la efectividad de las mismas (INCIBE, 2015).
    p.mb-5(data-aos="flip-left") Estas evaluaciones deben ser establecidas a partir de métricas y mediciones que permitan establecer el nivel de seguridad, las cuales deberán ser:
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tema2-7.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4 Métrica indirecta
              p Las cuales están destinadas a la mejora de la calidad, complejidad, fiabilidad, eficiencia, funcionalidad, facilidad de mantenimiento, entre otros.
      .col-md-6.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tema2-8.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4 Métrica directa
              p Esta se centra en la velocidad de ejecución, defectos encontrados en una cantidad de tiempo, costo, tamaño de memoria usada, número de líneas de código, entre otros.
                 
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.mb-4(data-aos="zoom-in-down")
        .row.justify-content-center
          .col-12.col-md-5.mb-2.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/tema2-9.png', alt='')
          .col-md-7.col-12
            p Para este caso en donde las métricas son para la medición de la seguridad, estas deben aplicarse a los controles propuestos e implementados anteriormente, lo que permitirá reconocer el grado de eficiencia de cada uno de ellos.
            p En el establecimiento de las métricas, se debe tener presente que:
            ul.lista-ul.mb-3.ms-3
              li.mb-0
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Deben ser alcanzables en un tiempo estimado.
              li.mb-0
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Debe ser expresadas en escalas de porcentaje o escalas numéricas.
              li.mb-0
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Deben explicar los componentes evaluados.
              li.mb-0
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Deben permitir identificar puntos débiles.
              li.mb-0
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Debe permitir conocer los riesgos a los que se enfrenta la organización.
            p La seguridad de la organización debe permitir evaluarse desde 3 niveles diferentes, como son: estratégico, táctico y operativo, como se muestra a continuación.   

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 8. </b> <i>Niveles de decisión de una organización</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/fig-8a.svg', alt='En la figura se observa el nivel estratégico con administración de riesgos, objetivos de negocio, cumplimiento. Nivel táctico con servicio, aplicaciones, perímetro. Nivel operativo con integridad, disponibilidad, confidencialidad.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-8b.svg', alt='En la figura se observa el nivel estratégico con administración de riesgos, objetivos de negocio, cumplimiento. Nivel táctico con servicio, aplicaciones, perímetro. Nivel operativo con integridad, disponibilidad, confidencialidad.') 

    p.mb-5(data-aos="flip-left") A continuación, se presenta una descripción más detallada de cada nivel de decisión, desde lo estratégico, táctico y operativo:

    TabsA.color-acento-botones.mb-5(data-aos="zoom-down-right")
      .tarjeta.tarjeta--azul.p-4(titulo="Métricas de nivel estratégico")
        h4 Métricas de nivel estratégico
        ul.lista-ul.mb-3.ms-3
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Conocer el % (tanto por ciento) de las cuentas inactivas de usuario deshabilitadas respecto al total de cuentas inactivas.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Conocer el valor total de los incidentes de seguridad informática respecto al presupuesto total de seguridad informática.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Conocer el % (tanto por ciento) de los nuevos funcionarios que completaron su entrenamiento de seguridad respecto al total de los nuevos funcionarios que ingresaron.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Propósito de esta métrica: desempeño de personas y procesos.
      .tarjeta.tarjeta--azul.p-4(titulo="Métricas del nivel táctico")
        h4 Métricas del nivel táctico
        ul.lista-ul.mb-3.ms-3
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Conocer el número de mensajes salientes con #[em spyware] o virus.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Número de mensajes de #[em spam] detectado respecto al número total de mensajes ignorados.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Número de estaciones de trabajo en funcionamiento configuradas correctamente respecto total de las estaciones de trabajo.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Número de #[em spyware] o virus detectados en estaciones de trabajo o servidores.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Propósito de estas métricas: desempeño de las tecnologías de seguridad informática.
      .tarjeta.tarjeta--azul.p-4(titulo="Métricas del nivel operativo")
        h4 Métricas del nivel operativo
        ul.lista-ul.mb-3.ms-3
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Número de incidentes asociados con la disponibilidad respecto al total de incidentes.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Número de incidentes asociados con la confidencialidad respecto al total de incidentes.
          li.mb-0
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Propósito de estas métricas: desempeño de la administración de incidentes.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.mb-4
        p.mb-3(data-aos="flip-left") La evaluación se deberá realizar a partir de un plan diseñado con este propósito, en donde se permita verificar la adecuada implementación, funcionamiento y pertinencia frente a las diferentes amenazas que presenta la organización.
        p.mb-3(data-aos="flip-left") Su aplicación deberá ser confrontada a través de diferentes ejercicios que demuestren la aplicabilidad y efectividad del control, algunas formas de aplicar la validación podrían ser:
      .col-12.col-lg-10.mb-4
        .tarjeta.color-secundario.p-4(data-aos="zoom-in-down")
          .row.justify-content-center
            .col-12.col-md-3.col-lg-2.mb-2.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/tema2-10.png', alt='')
            .col-md-8.col-12
              ul.lista-ul.mb-0.ms-3
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Cuestionarios.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Inspección visual.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Toma de notas.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Comparación de datos de diferentes momentos.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Muestreo.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Consulta directa a sistemas de información.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Prueba de penetración.
                li.mb-0
                  i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                  | Verificación de registros.
      .col-12.col-lg-10
        p.mb-3(data-aos="flip-left") Y los resultados deberán ser documentados para el cálculo definitivo de la evaluación a través de instrumentos como hojas de cálculo, como las que propone el MinTIC en su hoja de evaluación de MSPI que se puede descargar en formato Excel en material complementario. 

    Separador
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.7 Tratamiento del riesgo

    p.mb-3(data-aos="flip-left") Finalmente, una vez obtenido una evaluación de la ciberseguridad aplicada a los activos de información, se debe establecer el plan de mejoramiento, que se traduce en el establecimiento de nuevas acciones y estrategias que deben de plantearse para continuar sosteniendo y mejorando la seguridad de la información en la organización.
    p.mb-5(data-aos="flip-left") Estos planes de mejoramiento deberán de incluir:


    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-3a.svg' alt='')
        h4 Descripción del hallazgo
        p También se denomina descripción de la no conformidad encontrada en la evaluación, presentando claramente la verificación realizada, el resultado obtenido y la justificación de la anotación.
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-3b.svg' alt='')
        h4 Acción sugerida
        p Son las acciones para ser adoptadas por parte de la organización o el responsable asignado por la misma.
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-3c.svg' alt='')
        h4 Persona responsable del cumplimiento de la acción de mejora
        p Son las personas o responsables del cumplimiento de la acción de mejora, quienes serán responsables de realizar o coordinar las acciones necesarias.
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-3d.svg' alt='')
        h4 Tiempo de verificación
        p Es el tiempo en el cual se deberá verificar nuevamente la aplicación de la acción correctiva.
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-3e.svg' alt='')
        h4 Evidencias requeridas
        p Son las evidencias de la mejora sugerida, necesarias para dar por cumplida la mejora propuesta.

    p.mb-3(data-aos="flip-left") El desarrollo de este plan deberá ser revisado y aprobado por la dirección o responsable designado, quien presentará las mejoras propuestas.
    p.mb-3(data-aos="flip-left") El tratamiento del riesgo en las organizaciones es un proceso fundamental para garantizar su sostenibilidad y éxito a largo plazo. Implica la identificación, evaluación y posterior gestión de los riesgos que pueden afectar a la organización en sus diferentes dimensiones, desde la financiera hasta su reputación. Este enfoque proactivo permite a las organizaciones tomar decisiones informadas, implementar estrategias de mitigación y aprovechar oportunidades de manera más efectiva. Al abordar el tratamiento del riesgo de manera sistemática, las organizaciones pueden proteger sus activos, mejorar su resiliencia y mantener la confianza de sus partes interesadas, contribuyendo así a su crecimiento y éxito continuo.
    p.mb-5(data-aos="flip-left") Es importante tener presente, que estos procesos para gestionar la seguridad, se deben hacer de forma permanente y continua, lo que sugiere que debe realizarse de manera periódica y sistemática, de tal modo que pueda identificarse puntos débiles y aplicar sus correctivos, favoreciendo la mejora continua.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    altImg7: `En la figura se observa los 18 controles para salvaguardas:
1. Inventario y control de los activos empresariales.
2. Inventario y control de activos de software.
3. Protección de datos.
4. Configuración segura de activos de software.
5. Gestión de cuentas.
6. Gestión del control de acceso.
7. Gestión continua de vulnerabilidades.
8. Gestión de registro de auditoría.
9. Protección de correo electrónico y navegador web.
10. Defensas contra el malware.
11. Recuperación de datos.
12. Gestión de la infraestructura de red.
13. Supervisión y defensa de la red.
14. Concientización y capacitación en materia de seguridad.
15. Gestión de proveedores de servicios.
16. Seguridad del software de aplicación.
17. Gestión de respuesta a incidentes.
18. Pruebas de penetración.
`,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
