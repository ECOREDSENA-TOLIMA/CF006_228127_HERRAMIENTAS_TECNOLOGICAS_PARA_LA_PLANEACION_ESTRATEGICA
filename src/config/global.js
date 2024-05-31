export default {
  global: {
    componenteFormativo:
      'Evaluación de la seguridad de la información en organizaciones',
    descripcionCurso:
      'La seguridad de la información en las organizaciones es un proceso que se sugiere, todas deben realizarlo con el fin de evaluar las estrategias adoptadas para la gestión de las vulnerabilidades y que estas no puedan afectarla, generando incidentes que pueden terminar en hechos más complejos para la misma organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestión de vulnerabilidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Metodologías',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Activos de información',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Técnicas de recolección de información',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evaluación de la seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Establecimiento del alcance',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Identificación de activos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Identificación de vulnerabilidades',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Identificación de amenazas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Establecimiento de salvaguardas',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Evaluación del riesgo',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Tratamiento del riesgo',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_06_228127_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1 Metodologías',
      referencia:
        '<em>NIST National Institute of Standards and Technology. (2023). CYBERSECURITY FRAMEWORK</em>',
      tipo: 'Web',
      link: 'https://www.nist.gov/cyberframework/framework',
    },
    {
      tema: '1.1 Metodologías',
      referencia:
        '<em>OWASP Open Web Aplication Security Projects. (2023). WSTG - Stable.</em>',
      tipo: 'Web',
      link: 'https://owasp.org/www-project-web-security-testing-guide/stable/',
    },
    {
      tema: '1.1 Metodologías',
      referencia:
        '<em>ISSAF. (2006). Information Systems Security Assessment Framework ISSAF Draft 0.2.1</em>',
      tipo: 'Documento',
      link:
        'http://cuchillac.net/archivos/pre_seguridad_pymes/2_hakeo_etico/lects/metodologia_oissg.pdf',
    },
    {
      tema: '1.1 Metodologías',
      referencia:
        '<em>ISECOM. OSSTMM Open Source Security Testing Methodology. (s.f). The open source security testing methodology manual.</em>',
      tipo: 'Documento',
      link: 'https://www.isecom.org/OSSTMM.3.pdf',
    },
    {
      tema: '1.1 Metodologías',
      referencia:
        '<em>PTES Penetration Testing Excecution Standard. (2012). PTES Technical Guidelines.</em>',
      tipo: 'Guía',
      link:
        'http://www.pentest-standard.org/index.php/PTES_Technical_Guidelines',
    },
    {
      tema: '1.1 Metodologías',
      referencia:
        '<em>OWASP TOP 10. ¿Qué ha cambiado en el Top 10 para 2021?</em>',
      tipo: 'Web',
      link: 'https://owasp.org/Top10/',
    },
    {
      tema: '1.1 Metodologías',
      referencia:
        '<em>Metodología ISSAF. Approach & Methodology. Página 14.</em>',
      tipo: 'Web',
      link:
        'http://cuchillac.net/archivos/pre_seguridad_pymes/2_hakeo_etico/lects/metodologia_oissg.pdf',
    },
    {
      tema: '1.3. Activos de información',
      referencia: 'MinTIC. (2020). Instrumento de evaluación MSPI. ',
      tipo: 'Hoja de cálculo',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_Instrumento_Evaluacion_MSPI.xlsx',
    },
    {
      tema: '2.5. Establecimiento de salvaguardas',
      referencia:
        '<em>Center for Internet Security. (2023). CIS Critical Security Controls.</em>',
      tipo: 'Web',
      link: 'https://www.cisecurity.org/controls',
    },
    {
      tema: '2.5. Establecimiento de salvaguardas',
      referencia:
        '<em>Center for Internet Security. (2023). CIS Benchmarks List. Lista de puntos de referencia de la CIE.</em>',
      tipo: 'Web',
      link: 'https://www.cisecurity.org/cis-benchmarks/',
    },
    {
      tema: '2.5 Establecimiento de salvaguardas',
      referencia:
        'Universidad Nacional de Colombia (2018). Guía técnica colombiana ISO 19011: 2018.',
      tipo: 'Libros digitales',
      link:
        'http://siga.unal.edu.co/images/Modulos/Ova/Capacitacion_Guia_tecnica_auditoria_NTC_ISO_19011_2018.pdf',
    },
    {
      tema: '2.5 Establecimiento de salvaguardas',
      referencia:
        'Norma Internacional ISO 31000. (2018). Administración/ Gestión de riesgos – Lineamientos guía.',
      tipo: 'Libros digitales',
      link:
        'https://www.ramajudicial.gov.co/documents/5454330/14491339/Norma.ISO.31000.2018.Espanol.pdf/cb482b2c-afd9-4699-b409-0732a5261486',
    },
    {
      tema: '2.5 Establecimiento de salvaguardas',
      referencia:
        'ICONTEC (2018). NTC-ISO-IEC 27001:2013 - Tecnología de la información. Técnicas de seguridad. Sistemas de gestión de la seguridad de la información. Requisitos.',
      tipo: 'Libros digitales',
      link:
        'https://serviciocivil.gov.co/sites/default/files/marco-legal/2006_03_22_NTC-ISO-IEC%2027001.pdf',
    },
    {
      tema: '2.5 Establecimiento de salvaguardas',
      referencia:
        'Fernández Rivero, P. P. & Gómez Fernández, L. (2018). Cómo implantar un SGSI según UNE-EN ISO/IEC 27001 y su aplicación en el Esquema Nacional de Seguridad. AENOR - Asociación Española de Normalización y Certificación. (pp 36-57). ',
      tipo: 'Libros digitales',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/53624?page=36',
    },
    {
      tema: '2.5 Establecimiento de salvaguardas',
      referencia:
        'Formato registro de salvaguardar para la gestión del riesgo.',
      tipo: 'Hoja de cálculo',
      link:
        'https://f.hubspotusercontent30.net/hubfs/4444632/Declaraci%C3%B3n%20de%20aplicabilidad%20Excel%20-%20Anexo%20ISO%20270012013.xlsx',
    },
    {
      tema: '2.6 Evaluación del riesgo',
      referencia:
        'MinTIC. Formato Instrumentos de evaluación de la seguridad de la información. ',
    },
  ],
  glosario: [
    {
      termino: '<em>Bug</em>',
      significado:
        'Error en un paquete de <em>software</em>, que puede generar fallos en el procesamiento de la información.',
    },
    {
      termino: 'Evidencia',
      significado: 'Conjunto de información que respaldan un hecho o evento.',
    },
    {
      termino: 'Hallazgo de auditoría',
      significado:
        'son los eventos o registros que sirven para reconocer si un control se está aplicando adecuadamente o no.',
    },
    {
      termino: 'Indicador',
      significado:
        'Son unidades de medición que facilitan la evaluación de una acción realizada.',
    },
    {
      termino: '<em>Pentesting</em>',
      significado:
        'También llamado pruebas de penetración consiste en el conjunto de técnicas de acceso no autorizado a sistemas de información, con el fin de identificar posibles vulnerabilidades.',
    },
    {
      termino: 'Registros',
      significado:
        'Conjunto de datos, que sirve para almacenar la información de un hecho, evento, persona u objeto.',
    },
  ],
  referencias: [
    {
      referencia:
        'INCIBE (2017). Gestión de riesgos - Una guía de aproximación para el empresario.',
      link:
        'https://www.incibe.es/sites/default/files/contenidos/guias/doc/guia_ciberseguridad_gestion_riesgos_metad.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Estándares y Tecnología. (2018). Marco para la mejora de la seguridad cibernética en infraestructuras críticas.',
      link:
        'https://www.nist.gov/system/files/documents/2018/12/10/frameworkesmellrev_20181102mn_clean.pdf',
    },
    {
      referencia: 'ISO27001. (2020). Evaluación del desempeño en ISO 27001.',
      link: 'https://normaiso27001.es/evaluacion-del-desempeno-en-iso-27001/',
    },
    {
      referencia:
        'MINTIC. (2016). Seguridad y Privacidad de la Información - Guía de gestión de riesgos.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf',
    },
    {
      referencia:
        'OSSTMM 3. (2022). The Open Source Security Testing Methodology Manual.',
      link: 'https://www.isecom.org/OSSTMM.3.pdf',
    },
    {
      referencia:
        'Tamayo Saborit, M. & González Capote, D. (2020). La gestión de riesgos: herramienta estratégica de gestión empresarial. Editorial Universo Sur.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/131885',
    },
    {
      referencia: 'Tithink. (2015). Gestión de Riesgos Magerit.',
      link: 'https://www.tithink.com/publicacion/MAGERIT.pdf',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2018). Guía técnica colombiana ISO- 19011:2018.',
      link:
        'http://siga.unal.edu.co/images/Modulos/Ova/Capacitacion_Guia_tecnica_auditoria_NTC_ISO_19011_2018.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernando José Peña Hidalgo',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Juan Guillermo Zuluaga Saavedra',
          cargo: 'Expero Temático',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñadora Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producctor y Animador Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producctor y Animador Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Producctor y Animador Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
