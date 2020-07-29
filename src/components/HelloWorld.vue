<template>
  <div>
    <Top /> 
    <!-- <Inicio /> -->
    <Sobre/>
    <Down />
  </div>
</template>

<script>
import Top from "./Top.vue";
import Down from "./Down.vue";
//import Inicio from "./templates/Inicio.vue";
import Sobre from "./templates/Sobre.vue"


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Top,
    Down,
   // Inicio,
    Sobre
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
