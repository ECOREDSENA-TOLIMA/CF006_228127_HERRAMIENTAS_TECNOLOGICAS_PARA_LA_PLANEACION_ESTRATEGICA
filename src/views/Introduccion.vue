<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mb-4(data-aos="zoom-down") 
      p Un factor importante que deben tener presente hoy en día las organizaciones, es estar un paso adelante de cualquier situación que ponga en riesgo sus activos de información, es por eso que adoptar procesos de evaluación de la seguridad de la información de manera permanente, permite recolectar información importante para la aplicación de acciones correctivas en su infraestructura tecnológica, sistemas de información e incluso ajuste en sus procedimientos operativos en donde se ubican las personas que operan los sistemas, pero que lastimosamente suelen ser el factor más débil de la cadena de a ciberseguridad.

    figure.mb-4(data-aos="zoom-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_9nJU2zpUEg" title="Evaluación de la seguridad de la información en las organizaciones" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
 
    .mb-5(data-aos="zoom-down") 
      p En el presente componente formativo, se identifican las metodologías y como se evalúa la información obtenida, para establecer un nivel de seguridad de la información en la organización.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
