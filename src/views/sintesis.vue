<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Evaluar y mantener la seguridad de la información en una organización es un proceso permanente, que debe realizarse en todas las organizaciones sin importar el tamaño, naturaleza o ubicación, dado que las amenazas pueden afectar los activos, buscando como aprovecharse de la falta de controles.
    p Estos procesos que aparentemente son complejos, hoy en día con la ayuda de las metodologías y las herramientas especializadas, permiten realizar estos ejercicios en pasos sencillos y sin complicaciones, además, brindan toda la información necesaria para tomar decisiones y establecer los planes necesarios para la gestión de las vulnerabilidades y amenazas.
    p.mb-5 Queda en manos de las mismas organizaciones destinar el recurso, tiempo y personal para realizarlo y así evitar pérdidas que afecten el desarrollo de las operaciones.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la figura de la síntesis se tiene la evaluación de la seguridad de la información en organizaciones, que es un proceso que se desarrolla permanentemente en las organizaciones, además permite evaluar eficiencia, eficacia y efectividad, igualmente se tienen las acciones y controles implementados para la gestión de la información.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
