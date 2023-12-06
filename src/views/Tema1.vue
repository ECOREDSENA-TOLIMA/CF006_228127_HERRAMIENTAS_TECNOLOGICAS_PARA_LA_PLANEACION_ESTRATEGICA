<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión de vulnerabilidades

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En un mundo cada vez más digitalizado, la seguridad de la información se ha convertido en un componente esencial para el funcionamiento efectivo de las organizaciones. La gestión de vulnerabilidades se erige como una práctica crucial en este contexto, ya que permite identificar, evaluar y mitigar los riesgos asociados a las amenazas cibernéticas que pueden comprometer la integridad, confidencialidad y disponibilidad de los datos y sistemas de una entidad.
    
    p.mb-3(data-aos="flip-left") Por otra parte, la gestión de las vulnerabilidades es un proceso, visto desde la óptica de la ciberseguridad, el cual debe de realizarse de manera permanente y con el que se busca identificar aquellas fragilidades que pueden afectar a los activos de información de una organización, estos ejercicios serán primordiales para mejorar los niveles de seguridad, dado que permite a partir de un proceso evaluativo, identificar los puntos fuertes que deben de mantenerse, así como los puntos débiles en los cuales debe trabajar la organización.
    p.mb-5(data-aos="flip-left") A continuación, se reconoce un poco mejor estos procedimientos.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Metodologías

    p.mb-5(data-aos="flip-left") Gestionar las vulnerabilidades que pueden convertirse en una amenaza para una organización, es un trabajo complejo que requiere identificar, clasificar, priorizar y resolver las vulnerabilidades o debilidades dentro de los sistemas operativos, aplicaciones empresariales, aplicaciones de usuario final y navegadores web de una organización. La complejidad de este proceso depende del tamaño de la organización y de la cantidad de sus activos de información. En la siguiente figura se caracterizan dichos activos de información.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Activos de información</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-1a.svg', alt='En la figura 1, se representan como activo de información el equipo auxiliar, datos, aplicaciones, personas, servicios, tecnología e infraestructura locativa.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-1b.svg', alt='En la figura 1, se representan como activo de información el equipo auxiliar, datos, aplicaciones, personas, servicios, tecnología e infraestructura locativa.') 
          figcaption Nota: adaptado de #[a(href="https://jmpovedar.files.wordpress.com/2011/03/mc3b3dulo-7.pdf" style="color:blue" target="_blank") https://jmpovedar.files.wordpress.com/2011/03/mc3b3dulo-7.pdf] 

    p.mb-3(data-aos="flip-left") Los ejercicios para la gestión de vulnerabilidades pueden ser varios, de acuerdo al tipo de organización y el enfoque que se le quiera dar a la gestión, es muy distinto realizar una gestión de vulnerabilidades en una institución financiera o crítica frente a una pequeña o mediana empresa.
    p.mb-5(data-aos="flip-left") El procedimiento para su desarrollo ha sido basado en 7 etapas principales que abordan esta gestión, como se presentan en la figura 2, entre los que se encuentran:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Etapas generales de la gestión de vulnerabilidades</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-2a.svg', alt='Etapas generales de la gestión de vulnerabilidades: Planeación: Definición de activos, Planeación de la evaluación. Descubrimiento: Recopilación de Información, Mapeo de elementos. Análisis y evaluación del riesgo: Identificación de brechas, Determinar impacto. Definición de plan de acción: Diseño plan de mitigación, Determina controles. Ejecución de Plan de acción: Implementa controles y acciones. Verificación de la efectividad: Verifica planes y acciones. Lecciones aprendidas: Revaluar y mejorar el proceso de gestión de vulnerabilidades.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-2b.svg', alt='Etapas generales de la gestión de vulnerabilidades: Planeación: Definición de activos, Planeación de la evaluación. Descubrimiento: Recopilación de Información, Mapeo de elementos. Análisis y evaluación del riesgo: Identificación de brechas, Determinar impacto. Definición de plan de acción: Diseño plan de mitigación, Determina controles. Ejecución de Plan de acción: Implementa controles y acciones. Verificación de la efectividad: Verifica planes y acciones. Lecciones aprendidas: Revaluar y mejorar el proceso de gestión de vulnerabilidades.') 
          figcaption Nota: adaptado de #[a(href="https://www.b-secure.co/recursos/infografias/proceso-de-gestion-de-vulnerabilidades-seguridad" style="color:blue" target="_blank") https://www.b-secure.co/recursos/infografias/proceso-de-gestion-de-vulnerabilidades-seguridad] 

    p.mb-5(data-aos="flip-left") Dicho procedimiento, junto con cada una de las etapas, se explica a continuación:

    .tarjeta.color-primario.mb-5.p-4(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Planeación
            p Etapa en donde se define el alcance del procedimiento de gestión de vulnerabilidades, se identifica cual será el campo de evaluación o cuales activos serán objetos de la revisión.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-2.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Descubrimiento
            p En esta etapa se realiza la recolección de información sobre las aplicaciones, sistemas o información y de las vulnerabilidades que se encuentran presentes, a partir de ejercicios de escaneos que permita validar sus debilidades; como resultado de esta etapa, se debe de generar un mapeo de los elementos involucrados.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-3.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Análisis y evaluación del riesgo
            p En esta etapa se establecen las brechas a la seguridad, identificando el impacto de estas sobre cada uno de los activos de información y como esta puede afectar la organización; en este ejercicio se deben de identificar y priorizar aquellas vulnerabilidades que se consideren críticas.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-4.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Definición de planes de acción
            p Esta etapa debe consolidar el plan para la adopción de acciones correctivas para el control de las vulnerabilidades, estas acciones se pueden consolidar en:
            p #[b Controles correctivos:] controles aplicados directamente sobre sistemas o aplicaciones vulnerables.
            p #[b Controles compensatorios:] controles aplicados indirectamente sobre los sistemas vulnerables.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-5.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Ejecución de plan de acción
            p En esta etapa se deben de desplegar e implementar las acciones propuestas en el plan de acción, bajo los tiempos y condiciones establecidas.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-6.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Verificación de la efectividad
            p Consistente en realizar la evaluación de las acciones aplicadas para determinar su validez y asertividad en la reducción a las brechas de seguridad; en algunas ocasiones se requerirá de evaluar nuevamente o aplicar otras técnicas con el fin de garantizar su efectividad.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-7.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Lecciones aprendidas
            p En esta última etapa, busca que el trabajo realizado sea material de insumo para la mejora del mismo proceso, a partir de los casos acertados como de los que no fueron.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-8.png', alt='')

    p.mb-5(data-aos="flip-left") A partir de estas etapas anteriormente descritas, han surgido diferentes alternativas para este ejercicio, como se puede apreciar en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-12.col-lg-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Metodologías para la gestión de vulnerabilidades</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-3a.png', :alt='altImg3')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-3b.png', :alt='altImg3') 
          figcaption Nota: Imágenes tomadas de sitios oficiales.

    p.mb-4(data-aos="flip-left") De las cuales vamos a reconocer algunas de ellas:

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex NIST- Instituto Nacional de Estándares y Tecnología
      div.titulo-herramientas.d-block.d-md-none NIST- Instituto Nacional de Estándares y Tecnología

    p.mb-3(data-aos="flip-left") Este marco de trabajo para la mejora de la seguridad cibernética en infraestructuras críticas, el cual ha sido generado por el gobierno de los Estados Unidos a mediados del año 2014, brinda a las organizaciones la metodología para la reducción de riesgos cibernéticos a partir de una adecuada gestión de riesgos.
    p.mb-5(data-aos="flip-left") Así mismo, propone la gestión desde una serie de funciones, las cuales se desarrollan de manera simultánea y continua: #[b identificar, proteger, detectar, responder y recuperar,] como se puede observar en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Framework (infraestructura) de NIST</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-4a.svg', alt='En la figura se representa que la estructura está basada en identificar, proteger, detectar, responder y recuperar.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-4b.svg', alt='En la figura se representa que la estructura está basada en identificar, proteger, detectar, responder y recuperar.') 
          figcaption Nota: tomado de #[a(href="https://www.nist.gov/cyberframework" target="_blank" style="color:blue") https://www.nist.gov/cyberframework]

    p.mb-5(data-aos="flip-left") Estas funciones del marco de trabajo, conlleva a desarrollar una serie de actividades basadas en categorías, encaminadas a reducir los riesgos que se pueden presentar y afectar la información de una organización, a continuación, se puede observar un resumen de estas categorías y actividades que se desarrollan para la adecuada gestión de vulnerabilidades.

    .row.justify-content-center.mb-4
      .col-12.col-lg-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Funciones del framework de NIST</i>
        .tabla-a.color-acento-contenido.mb-4
          table(style="min-width:768px")
            caption Nota: Adaptado de #[a(href="https://www.nist.gov/cyberframework" target="_blank" style="color:blue") https://www.nist.gov/cyberframework]
            thead
              tr
                th Función identificador único 
                th Funciones 
                th Categoría identificador único 
                th(style="width:40%") Categorías 
            tbody
              tr(style="background-color:#F6F6F6")
                th ID
                td.text-center Identificador
                td.text-center 
                  p.mb-1 ID.AM
                  p.mb-1 ID.BE
                  p.mb-1 ID.GV
                  p.mb-1 ID.RA
                  p.mb-1 ID.RM
                  p.mb-1 ID.SC
                td 
                  p.mb-1 • Gestión de activos.
                  p.mb-1 • Ambiente de negocios
                  p.mb-1 • Gobernanza.
                  p.mb-1 • Evaluación de riesgos.
                  p.mb-1 • Estrategia de gestión de riesgo.
                  p.mb-1 • Gestión del riesgo de la cadena de suministros.
              tr(style="background-color:#FDFDE3")
                th PR
                td.text-center Proteger
                td 
                  p.mb-1 PR.AC
                  p.mb-1 PR.AT
                  p.mb-1 PR.DS
                  p.mb-1 PR.IP
                  p.mb-1 PR.MA
                  p.mb-1 PR.OPT
                td 
                  p.mb-1 • Gestión de identidad, autenticación y control de acceso.
                  p.mb-1 • Conciencia y capacitación.
                  p.mb-1 • Seguridad de datos.
                  p.mb-1 • Procesos y procedimientos de protección de la información.
                  p.mb-1 • Mantenimiento.
                  p.mb-1 • Tecnología de protección.
              tr(style="background-color:#E1F5D6")
                th DE
                td.text-center Detectar
                td 
                  p.mb-1 DE.AE
                  p.mb-1 DE.CM
                  p.mb-1 DE.DP
                td 
                  p.mb-1 • Anomalías y eventos.
                  p.mb-1 • Monitoreo continuo de seguridad.
                  p.mb-1 • Procesos de detección.
              tr(style="background-color:#DEE9F0")
                th RS
                td.text-center Responder
                td 
                  p.mb-1 RS.RP
                  p.mb-1 RS.CO
                  p.mb-1 RS.AN
                  p.mb-1 RS.MI
                  p.mb-1 RS.IM
                td 
                  p.mb-1 • Planificación de respuesta.
                  p.mb-1 • Comunicaciones.
                  p.mb-1 • Análisis.
                  p.mb-1 • Mitigación.
                  p.mb-1 • Mejoras.
              tr(style="background-color:#ECDBF5")
                th RC
                td.text-center Recuperar
                td 
                  p.mb-1 RC.RP
                  p.mb-1 RC.IM
                  p.mb-1 RC.CO
                td 
                  p.mb-1 • Planificación de recuperación.
                  p.mb-1 • Mejoras.
                  p.mb-1 • Comunicaciones.

    p.mb-5(data-aos="flip-left") Aunque este ha sido propuesto para infraestructuras críticas, se puede observar que es aplicable a cualquier tipo de organización, lo que lo hace un método muy llamativo para entidades del gobierno, en material complementario se puede consultar la versión completa del documento desde su sitio oficial.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex OWASP - #[em Open Web Application Security Project]
      div.titulo-herramientas.d-block.d-md-none OWASP - #[em Open Web Application Security Project]

    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-lg-9.col-12.mb-3.mb-lg-0
        p.mb-3(data-aos="flip-left") Organización sin fines lucrativos, la cual busca ayudar a visibilizar las vulnerabilidades en aplicaciones para el mejoramiento de la seguridad, a partir de una adecuada gestión del riesgo, siendo este un pilar fundamental para el desarrollo y aplicación de su metodología.
        p.mb-4(data-aos="flip-left") Owasp, provee de #[em framework] abierto el cual permite aplicar auditorias en aplicaciones en especial de tipo web, basados principalmente en pruebas de caja blanca y caja negra y a partir de su ejercicio identificar las vulnerabilidades más representativas y presentes en la actualidad en su Owasp top 10.
        .p-4.cajon.color-primario.mb-5(data-aos="fade-down-right")
          p Lo anterior permite generar reportes sobre las vulnerabilidades que más se encuentran en las aplicaciones web, en su reporte el #[em Owasp Top] 10 2021, se puede apreciar la clasificación frente al informe previo del año 2017, consultando en material complementario de esta guía.
          p.mb-0 En este reporte se observa el comportamiento de las vulnerabilidades identificadas, teniendo en cuenta:
      .col-lg-3.col-10
        figure
          img(src="@/assets/curso/temas/tema1/tema1-9.png", alt="")

    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Pérdida del control de acceso (<em>Broken Access Control</em>)") 
            p El control de acceso permite cumplir una política de permisos y roles, es decir, que un usuario pueda acceder a determinados lugares. Estas restricciones implican que los usuarios no puedan actuar fuera de los permisos y, además, llevar un control de quien accede a cada recurso. La vulnerabilidad #[em Broken Access Control], permite que un usuario sin privilegios pueda acceder a un recurso al que no tendría que acceder. 
            p ¿Qué impacto puede tener esto en mi empresa?
            p.ms-3.mb-1 • Un ciberdelincuente podría actuar en el sistema con permisos de usuario o administrador.
            p.ms-3 • Acceso a registros, directorios o archivos confidenciales para su posterior posible divulgación.
          div(numero="2" titulo="Fallos criptográficos (<em>Cryptographic Failures</em>)") 
            p Hay ciertos datos que deben estar cifrados, como credenciales de acceso, datos bancarios, información confidencial de la empresa, etc., ya que aparte de que la ley lo exige, lo que un ciberdelincuente pueda hacer con ellos, puede ser catastrófico para la empresa. En resumen, para que estos sean vistos únicamente por las personas autorizadas de la empresa hay que aplicarles un cifrado con algoritmos y protocolos estándares y robustos. 
            p ¿Qué impacto puede tener esto en mi empresa?
            p.ms-3 • Exposición de datos sensibles a un ciberdelincuente (datos personales, críticos o estratégicos para la empresa; credenciales…).
          div(numero="3" titulo="Inyección (<em>Injection</em>)") 
            p Esto sucede cuando un ciberdelincuente puede enviar datos dañinos a un intérprete. Como novedad desde el año pasado, el #[em Cross-site Scripting] forma parte de esta categoría. Para ello, hay que tener API seguras y controles de verificación a la hora de introducir los datos. 
            p ¿Qué impacto puede tener esto en mi empresa?
            p.ms-3.mb-1 • Exposición y posible modificación de datos sensibles por parte de un ciberdelincuente. 
            p.ms-3 • Bajo ciertas circunstancias podría permitir al ciberdelincuente tomar el control del servidor.
          div(numero="4" titulo="Diseño inseguro (<em>Insecure Desing</em>)") 
            p A la hora de desarrollar una aplicación web es primordial incluir la seguridad de la aplicación desde la fase del diseño, ya que este año se ha incluido esta nueva categoría debido a la gran cantidad de aplicaciones que no la cumplen. Muchas aplicaciones cuentan con defectos en el diseño de las mismas. 
            p ¿Qué impacto puede tener esto en mi empresa?
            p.ms-3.mb-1 • Exposición y posible modificación de datos por un ciberdelincuente.
            p.ms-3 • Acceso al servidor/aplicación por parte de un ciberdelincuente con permisos de administrador o usuario. 
          div(numero="5" titulo="Configuración de seguridad defectuosa (<em>Security Misconfiguration</em>)") 
            p En el entorno de la aplicación web los ciberdelincuentes intentarán acceder mediante cuentas por defecto, versiones obsoletas con vulnerabilidades sin actualizar, directorios desprotegidos, etc. Por ello, tiene que estar todo bien configurado y evitar usar credenciales por defecto, como puede ser en el caso de nuestro servidor, aplicaciones o dispositivos. 
            p ¿Qué impacto puede tener esto en mi empresa?
            p.ms-3 • Acceso no autorizado al sistema por parte del ciberdelincuente.
          div(numero="6" titulo="Componentes vulnerables y obsoletos (<em>Vulnerable and Outdated Components</em>)") 
            p Un ciberdelincuente podrá comprometer un sistema mediante vulnerabilidades ya conocidas en componentes comunes, como por ejemplo la versión del sistema operativo o aplicaciones instaladas en el servidor, entre otras.
            p ¿Qué impacto puede tener esto en mi empresa?
            p.ms-3 • Algunas de estas vulnerabilidades pueden tener un impacto pequeño, pero las mayores brechas de seguridad se han producido mediante la explotación de este tipo de vulnerabilidades.
          div(numero="7" titulo="Fallos de identificación y autenticación (<em>Identification and Authentication Failures</em>)") 
            p Esto sucede cuando en las interfaces de acceso no se controla el número de intentos de autenticación, hay una baja complejidad de las contraseñas o no se implanta un sistema multifactor “2FA”. Esto podría permitir a un ciberdelincuente realizar ataques de fuerza bruta o diccionario para ingresar en él o cuando su aplicación permite utilizar contraseñas débiles.
            p ¿Qué impacto puede tener esto en mi empresa?
            p.ms-3 • Los ciberdelincuentes tendrán acceso a cuentas administrativas o de empleados en la aplicación.
          div(numero="8" titulo="Fallos en el software y en la integridad de los datos (<em>Software and Data Integrity Failures</em>)") 
            p Muchas aplicaciones se actualizan de manera automática. Cuando estas actualizaciones no son verificadas los ciberdelincuentes podrían modificarlas cargando sus propias actualizaciones y distribuyéndolas. 
            p ¿Qué impacto puede tener esto en mi empresa?
            p.ms-3 • Inclusión de código no deseado por un ciberdelincuente en mi aplicación.
          div(numero="9" titulo="Fallos en el registro y la supervisión de la seguridad (<em>Security Logging and Monitoring Failures</em>)") 
            p La falta de registros sobre eventos, los denominados logs, en la aplicación o en el sistema, como inicios de sesión (tanto válidos como fallidos). Por ejemplo: que estos registros no se almacenen remotamente impide que se puedan detectar las infracciones.
            p ¿Qué impacto puede tener esto en mi empresa?
            p.ms-3.mb-1 • Desconocimiento sobre inicios de sesión no autorizados.
            p.ms-3 • Desconocimiento sobre los actos de un ciberdelincuente en nuestro sistema.
          div(numero="10" titulo="Falsificación de solicitud del lado del servidor (<em>Server-side Request Forguery o SSRF</em>)") 
            p Cuando la aplicación web obtiene un recurso externo y este no valida la URL, un ciberdelincuente podría modificarla con fines malintencionados y realizar peticiones no autorizadas.
            p ¿Qué impacto puede tener esto en mi empresa?
            p.ms-3.mb-1 • Robo de datos sensibles de la empresa.
            p.ms-3 • Acceso a sistemas internos de la empresa.

    p.mb-4(data-aos="flip-left") Dado lo anterior, Owasp, se ha vuelto una metodología practica para la identificación de vulnerabilidades en las aplicaciones web más utilizada por los equipos de desarrollo en los últimos años; quienes quieran explorar y hacer uso de esta metodología, en el material complementario se puede consultar su documento oficial.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex ISSAF - #[em Information Systems Security Assessment Framework]
      div.titulo-herramientas.d-block.d-md-none ISSAF - #[em Information Systems Security Assessment Framework]

    p.mb-5(data-aos="flip-left") Este marco de trabajo para el testeo e identificación de vulnerabilidades de seguridad, la cual está estructurada en 3 fases como son:

    .tarjeta--container.row.mb-5(data-aos="zoom-in-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-10.svg', alt='')
        h4.text-center Planeación y preparación
        p La cual establece los pasos iniciales para el desarrollo de la auditoria y ejercicios de testeo.
        p Entre las actividades relacionadas se encuentran: identificación de interesados, reuniones de apertura, definición de enfoque y metodología y cronograma de tiempo.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-11.svg', alt='')
        h4.text-center Evaluación
        p En esta fase, se desarrollan las validaciones de acuerdo a las siguientes 9 capas:
        ul.lista-ul.ms-2
          li.mb-1
            span ● 
            | Recolección de información.
          li.mb-1
            span ● 
            | Mapeo de la red de trabajo.
          li.mb-1
            span ● 
            | Identificación de vulnerabilidades.
          li.mb-1
            span ● 
            | Penetración.
          li.mb-1
            span ● 
            | Obtención de acceso y escalamiento de privilegios.
          li.mb-1
            span ● 
            | Enumeración.
          li.mb-1
            span ● 
            | Compromiso de usuarios y sitios remotos.
          li.mb-1
            span ● 
            | Mantener el acceso.
          li.mb-1
            span ● 
            | Cubrir rastros.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-12.svg', alt='')
        h4.text-center Reportes, limpieza y destrucción de objetos
        p Fase donde se analizan las pruebas, se consolidan resultados y se presentan los reportes a los interesados.
        p Esta metodología está enfocada en realizar análisis de seguridad a partir de los resultados obtenidos, a continuación, podemos observar un esquema general de sus fases. Se puede consultar en material complementario la metodología ISSAF.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex OSSTMM - #[em Open Source Security Testing Methodology Manual]
      div.titulo-herramientas.d-block.d-md-none OSSTMM - #[em Open Source Security Testing Methodology Manual]

    p.mb-5(data-aos="flip-left") Esta metodología para pruebas de seguridad también es muy utilizada y debido a su aplicación tan extensa, se ha convertido en un estándar de facto para el desarrollo de auditorías de seguridad, ya que proporciona un marco de trabajo que describe las actividades a desarrollar, las cuales están comprendidas como se presentan a continuación.

    .row.justify-content-center.mb-4
      .col-12.col-lg-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 2. </b> <i>Secciones y revisiones de la metodología OSSTMM 2.1</i>
        .tabla-a.color-acento-contenido.mb-4
          table(style="min-width:768px")
            caption Nota: Adaptado de #[a(href="https://www.isecom.org/" target="_blank" style="color:blue") https://www.isecom.org/]
            thead
              tr
                th(style="width:35%") SECCIÓN 
                th REVISIÓN 
            tbody
              tr
                th Sección A -Seguridad de la información
                td
                  p.mb-1 • Revisión de la inteligencia competitiva.
                  p.mb-1 • Revisión de privacidad.
                  p.mb-1 • Recolección de documentos.
              tr
                th Sección B - Seguridad de los procesos
                td
                  p.mb-1 • Testeo de solicitud
                  p.mb-1 • Testeo de sugerencia dirigida.
                  p.mb-1 • Testeo de las personas confiables.
              tr
                th Sección C - Seguridad en las tecnologías de internet
                td
                  p.mb-1 • Logística y controles
                  p.mb-1 • Exploración de red.
                  p.mb-1 • Identificación de los servicios del sistema.
                  p.mb-1 • Búsqueda de información competitiva.
                  p.mb-1 • Revisión de privacidad.
                  p.mb-1 • Obtención de documentos.
                  p.mb-1 • Búsqueda y verificación de vulnerabilidades.
                  p.mb-1 • Testeo de aplicaciones de internet.
                  p.mb-1 • Enrutamiento.
                  p.mb-1 • Testeo de sistemas confiados.
                  p.mb-1 • Testeo de control de acceso.
                  p.mb-1 • Testeo de sistema de detección de intrusos.
                  p.mb-1 • Testeo de medidas de contingencia.
                  p.mb-1 • Descifrado de contraseñas.
                  p.mb-1 • Testeo de denegación de servicios.
                  p.mb-1 • Evaluación de políticas de seguridad.
              tr
                th Sección D - Seguridad en las comunicaciones
                td
                  p.mb-1 • Testeo de PBX.
                  p.mb-1 • Testeo del correo de voz.
                  p.mb-1 • Revisión del FAX.
                  p.mb-1 • Testeo del modem.
              tr
                th Sección E - Seguridad inalámbrica
                td
                  p.mb-1 • Verificación de Radiación Electromagnética (EMR).
                  p.mb-1 • Verificación de redes inalámbricas [802.11].
                  p.mb-1 • Verificación de redes #[em bluetooth].
                  p.mb-1 • Verificación de dispositivos de entrada inalámbricos.
                  p.mb-1 • Verificación de dispositivos de mano inalámbricos.
                  p.mb-1 • Verificación de comunicaciones sin cable.
                  p.mb-1 • Verificación de dispositivos de vigilancia inalámbricos.
                  p.mb-1 • Verificación de dispositivos de transacción inalámbricos.
                  p.mb-1 • Verificación de RFID.
                  p.mb-1 • Verificación de sistemas infrarrojos.
                  p.mb-1 • Revisión de privacidad.
              tr
                th Sección F - Seguridad física
                td
                  p.mb-1 • Revisión de perímetro.
                  p.mb-1 • Revisión de monitoreo.
                  p.mb-1 • Evaluación de controles de acceso.
                  p.mb-1 • Revisión de respuesta de alarmas.
                  p.mb-1 • Revisión de ubicación.
                  p.mb-1 • Revisión de entorno.s

    p.mb-5(data-aos="flip-left") Detalles de esta metodología, pueden ser consultados en material complementario.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex PTES - #[em Penetration Testing Execution Standard]
      div.titulo-herramientas.d-block.d-md-none PTES - #[em Penetration Testing Execution Standard]
    
    p.mb-3(data-aos="flip-left") Se consolida como estándar para pruebas de penetración y testing y que puede ser aplicado en cualquier organización, entre sus objetivos se encuentra el de disponer de un marco de trabajo para la realización de auditorías técnicas de seguridad en sistemas de información.
    p.mb-5(data-aos="flip-left") Se desarrolla en 7 fases, como se presenta en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Fases de la metodología PTES</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-5a.svg', alt='En la figura 5, se observan las fases: interacción previa, recopilación de información, análisis de vulnerabilidades, explotación, post-explotación, reporting.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-5b.svg', alt='En la figura 5, se observan las fases: interacción previa, recopilación de información, análisis de vulnerabilidades, explotación, post-explotación, reporting.') 
          figcaption Nota: adaptado de #[a(href="http://www.pentest-standard.org/index.php/PTES_Technical_Guidelines" target="_blank" style="color:blue") http://www.pentest-standard.org/index.php/PTES_Technical_Guidelines]

    p.mb-3(data-aos="flip-left") Esta metodología puede ser consultada en material complementario.
    p.mb-5(data-aos="flip-left") Las metodologías anteriormente descritas permitirán realizar un análisis de vulnerabilidades, establecer planes de acciones y un proceso importante: adoptar planes de mejoramiento al interior, dado que el proceso de gestión de vulnerabilidades debe ser un proceso continuo.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Herramientas

    p.mb-3(data-aos="flip-left") Los procedimientos a desarrollar en la búsqueda de vulnerabilidades, puede ser un proceso engorroso y en muchas ocasiones demorado, dado la cantidad de revisiones y validaciones que se deben realizar por cada uno de los activos de información que existen en la organización, es aquí donde podemos apoyar este ejercicio con herramientas especializadas que permitan buscar y evaluar las vulnerabilidades de manera sistemática o automatizada.
    p.mb-5(data-aos="flip-left") En este aspecto se encuentra una amplia gama de posibilidades, algunas de tipo comercial, así como #[em open source] que pueden ser muy útiles para el desarrollo de estas actividades, a continuación, se reconocen algunas de estas herramientas, se resaltan sus beneficios y capacidades para el desarrollo de este ejercicio de búsqueda.     

    .tarjeta.color-primario.mb-5.p-4(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 #[em Inviciti]
            p Esta herramienta es un escáner para la búsqueda de vulnerabilidades de tipo #[em sql injection en API’s] y aplicaciones web, esta herramienta permite reconocer las vulnerabilidades verificando que estas no sean falsos positivos.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-13.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 #[em Acunetix]
            p Es una de las herramientas más conocidas especializadas en búsqueda de vulnerabilidades en aplicaciones web, API’s y servicios web, permite automatizar una gran cantidad de pruebas y cruzarla con su base de datos la cual almacena más de 7000 vulnerabilidades.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-14.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 #[em Intruder]
            p Esta herramienta también permite realizar búsquedas de vulnerabilidades en aplicaciones web, a partir de la verificación de aproximadamente 10.000 controles de seguridad basados en estándares y marcos de seguridad, además, cuenta con capacidades de integración a entornos de trabajo de equipos de desarrollo de #[em software].
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-15.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 #[em SolarWinds]
            p Esta herramienta a diferencia de las nombradas anteriormente, está enfocada en la gestión de vulnerabilidades en infraestructura de redes y todos los elementos que la componen, cuenta con tecnología que le permite monitorear, administrar y proteger la configuración de los equipos de red, y sugerir ajustes para optimizar la seguridad de los entornos conectados.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-16.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 #[em AppTrana]
            p Este también es un escáner de vulnerabilidades en aplicaciones web y API’s, el cual aplica evaluaciones asociado al top 10 de Owasp, lo que lo convierte en un #[em WAF] adecuado para la vigilancia y monitoreo de las aplicaciones y portales web.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-17.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 #[em OpenVas]
            p Esta herramienta distribuida bajo licencia #[em open source], es uno de los proyectos más utilizados para la búsqueda de vulnerabilidades en sistemas operativos, servicios, y aplicaciones reconocidas generalmente, cuenta con una amplia gama de compatibilidades y escaneos personalizados.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-18.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 #[em Nessus]
            p Este también es un escáner de vulnerabilidades, la cual es muy utilizada para la búsqueda de vulnerabilidades en aplicaciones web, fallas de configuración, y debilidades reconocidas y documentadas, se puede integrar a entornos de trabajo local como en la nube.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='')

    p.mb-3(data-aos="flip-left") Las anteriores son tan solo una muestra pequeña de la gran cantidad de herramientas disponibles para el desarrollo de ejercicios de evaluación de la seguridad en sistemas de información de las organizaciones, y es importante reconocer que aunque la mayoría de estas herramientas son bajo licencia comercial dado la funcionalidad, beneficios, tableros de control integraciones y reportes, también hay herramientas de tipo #[em open source] distribuidas para evaluación, pero se recomienda primero antes de aplicarlo en un entorno de producción, verificar que estas no presenten algún riesgo para la información como perdidas, eliminación o corrupción.
    p.mb-5(data-aos="flip-left") A continuación, se comparte un listado de herramientas útiles que pueden ser utilizadas en entornos de producción, siempre y cuando sean obtenidas en su sitio oficial o desde alguno de sus sitios de publicación. 

    .row.justify-content-center.mb-4
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 3. </b> <i>Otras herramientas útiles para la evaluación de seguridad</i>
        .tabla-a.color-acento-contenido.mb-4
          table(style="min-width:768px")
            thead
              tr
                th Nombre herramienta 
                th Nombre herramienta 
                th Nombre herramienta 
            tbody
              tr.text-center
                td #[em Nexpose]
                td #[em Nikto]
                td #[em Tripwire IP360]
              tr.text-center
                td #[em Wireshark]
                td #[em Aircrack-NG]
                td #[em Retina CS]
              tr.text-center
                td #[em Microsoft Baseline Security Analyzer]
                td #[em Secunia Personal Software Inspector]
                td #[em Probely]
              tr.text-center
                td #[em Vulnerability Manager Plus]
                td #[em Nmap]
                td #[em Metasploit]
              tr.text-center
                td #[em Veracode]
                td #[em Nipper Studio]
                td #[em GFI LanGuard]
              tr.text-center
                td #[em Core Impact]
                td #[em Qualys]
                td #[em SAINT]
              tr.text-center
                td #[em Safe3WVS]
                td #[em WebReaver]
                td #[em AVDS]
              tr.text-center
                td #[em AppScan]
                td #[em Clair]
                td #[em OWASP Zed Attack Proxy (ZAP)]
              tr.text-center
                td #[em Burp Suite]
                td #[em SqlMap]
                td Muchas más

    p.mb-5(data-aos="flip-left") Estas herramientas permitirán realizar una gran cantidad de pruebas, de manera rápida, además de presentar los resultados en informes enriquecidos, que permitirá tomar decisiones para la gestión de la seguridad en una organización.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Activos de información

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Antes de iniciar con los ejercicios de evaluación, es importante que se tenga claridad sobre cuáles serán los activos de información que se evaluaran, y en cuales deberá presentar una gran atención, es por ellos que reconocer los activos, permite en primer lugar, reconocer la importancia para la organización, así como establecer la herramienta y técnica a utilizar para su evaluación.
          br
          br
          | De acuerdo a la “#[b Guía para la Gestión y Clasificación de Activos de Información]”, de MinTic (2016), las organizaciones deberían de realizar un reconocimiento y clasificación de sus activos de información, con el fin de ser utilizados en los diferentes ejercicios de evaluación de seguridad, este reconocimiento busca primordialmente:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-12.col-lg-10.col-md-11(data-aos="fade-down")
        ul.lista-ul.mb-2
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Identificar los activos de la organización, esta identificación busca el reconocimiento de los aspectos básicos del activo como: nombre, observación, proceso al cual sirve, propietario, custodio, personas a las cuales tienen acceso y que tipo de acceso, entre otros.
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Identificar el propietario de la información.
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Mantener una clasificación de acuerdo a su valor para la organización, la criticidad, la susceptibilidad y en función a su responsabilidad legal.
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Establecer un etiquetado de la información, que permita identificar claramente el activo por cualquier integrante de la organización.
    
    p.mb-4(data-aos="flip-left") Para lo cual se recomienda estructurar la información de la siguiente manera:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-12.col-md-8(data-aos="fade-down")
        ul.lista-ul.mb-2.mb-md-0.ms-3
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Identificador:] código único dentro de la organización y que identifica únicamente un activo de información.
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Proceso:] proceso o procesos a los cuales pertenece el activo de información.
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Nombre activo:] nombre del activo de información.
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Descripción / Observación:] descripción o notas que se consideren importantes para identificar en el activo.
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Tipo:] establece el tipo de recurso, entre los cuales se pueden utilizar: información, #[em software], recurso humano, servicio, #[em hardware], otros.
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Ubicación:] ubicación tanto física como electrónica donde se almacena el activo de información.
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Clasificación:] hace referencia a la protección de información de acuerdo a confidencialidad, integridad y disponibilidad.
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Justificación:] establece para cada valoración el impacto que causaría una afectación del activo.
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Criticidad:] valor general del activo para la organización, la cual puede ser: alta, media o baja.
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Propietario:] persona u organización responsable de suministrar los datos.
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Custodio:] persona o proceso responsable por tratar y custodiar la información en la organización.
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Acceso:] usuarios o procesos que deberían tener acceso, especificando el tipo de acceso.
          li.mb-1
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | #[b Fecha de ingreso y salida del activo:] fechas en las cuales ha sido utilizado un activo de información.
      .col-md-4.col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-21.png', alt='')

    .tarjeta.color-primario.p-4(data-aos="zoom-in-down")
      p Una vez se haya reconocido estos activos, y para el ejercicio de evaluación de seguridad, es necesario el reconocimiento de la infraestructura tecnológica, aplicaciones y demás elementos que la conforman para realizar la evaluación, en este caso será necesario reconocer:
      .row.justify-content-center
        .col-12.col-md-8.col-lg-6(data-aos="fade-down")
          figure
            img(src='@/assets/curso/temas/tema1/tema1-22.png', alt='')
        .col-md-4.col-12
          ul.lista-ul.mb-2.mb-md-0.ms-3
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Producto.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Versión.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Arquitectura.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Marca.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Modelo.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Ultimo mantenimiento.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Estado de garantías.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Cláusulas de contrato de mantenimiento.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Última actualización.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Responsable.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Ubicación.
          p Entre otros aspectos.
        p Esta información, permitirá reconocer la información que deberá ser evaluada, así como los sistemas de información que serán objetos de auditoría.
      
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Técnicas de recolección de información

    p.mb-5(data-aos="flip-left") Contar con insumos verídicos y reales para la evaluación de la seguridad de la información, es primordial para obtener un resultado confiable, es por ello que se debe hacer uso de una o varias técnicas que permitan corroborar la verificación propuesta.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1a.svg' alt='')
        h4 Observación
        p La cual permite recopilar información a partir de una inspección visual, que permitirá documentar una apreciación personal de parte del auditor, esta técnica es muy útil al verificar cumplimiento de procesos u operaciones.
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1b.svg' alt='')
        h4 Comparación o confrontación
        p Técnica que permite corroborar un registro frente a otro, y es útil para verificar el cumplimiento y la veracidad de la información documentada.
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1c.svg' alt='')
        h4 Revisión selectiva
        p Esta técnica posibilita tomar al azar información documentada y confrontarla contra registros, resultados u operaciones, para verificar la confiabilidad de la información, por ejemplo: verificación de los registros de la información financiera con los registros del banco.
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1d.svg' alt='')
        h4 Indagación
        p Facilita obtener información a partir de consultas e indagaciones sobre algún aspecto en particular, por ejemplo: consulta sobre errores en programas.
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1e.svg' alt='')
        h4 Comprobación
        p Estas técnicas son las más utilizadas en ciberseguridad, dado que permite hacer uso de herramientas o técnicas para corroborar alguna verificación, por ejemplo:
        ul.lista-ul.mb-2.mb-md-0.ms-3
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Pruebas de caja negra, blanca y/o gris.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Pruebas dinámicas.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Pruebas estáticas.
            li.mb-0
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | Ejercicios de #[em pentesting].

    p.mb-5(data-aos="flip-left") Dependiendo del activo de información y de la validación a realizar, el auditor puede seleccionar la técnica que más se ajustes y permita recolectar la información necesaria para establecer un resultado confiable.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    altImg3: `En la figura se tienen los sitios oficiales de:
NIST National Institute of Standards and Technology:
Instituto Nacional de Estándares y Tecnología (nist.gov)
OWASP Open Web Aplication Security Projects:
OWASP Foundation, la base de código abierto para la seguridad de las aplicaciones | Fundación OWASP
ISSAF Information Systems Security Assesment (www.oissg.org) 
OSSTMM Open Source Security Testing Methodology
OSSTMM, Manual de la Metodología Abierta de Testeo de Seguridad - DragonJAR
PTES Penetratiion Testing Excecution Standard
El estándar de ejecución de pruebas de penetración (pentest-standard.org)
WASC-TC Web Aplication Security Consortium Threat Classification
El Consorcio de Seguridad de Aplicaciones Web / Clasificación de Amenazas (webappsec.org)`,
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
