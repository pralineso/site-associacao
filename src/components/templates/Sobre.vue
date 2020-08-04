<template>
  <div>
    <Top />

    <div class="container pt-5">
      <div class="row justify-content-center">
        <div class="col-md-10 align-self-center">
          <h2>Sobre a APEQ-ES</h2>
        </div>
      </div>

      <div class="container pt-5">
        <div class="row justify-content-center">
          <div class="col-sm-12 col-md-10 align-self-center">
            <h3>Quem Somos</h3>
            <br />
            <blockquote class="blockquote">
              <p class="text-justify">
                A associação dos Profissionais de Engenharia Química do Espírito Santo (APEQ-ES)
                tem como principal objetivo representar seus profissionais no Conselho Regional
                de Engenharia e Agronomia (CREA-ES) com o intuito de defender e garantir os
                interesses da classe; integrar estudantes, profissionais e empresas do ramo;
                incentivar a qualificação técnica de seus associados através de promoção de eventos
                e parcerias institucionais e fortalecer a profissão frente ao mercado de trabalho
                no Estado do Espírito Santo.
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      <div class="container pt-5">
        <div class="row justify-content-center">
          <div class="col-md-10 col-sm-12 align-self-center">
            <h3>Nossa História</h3>
            <br />
            <blockquote class="blockquote">
              <p class="text-justify mb-0">
                A partir da necessidade de maior representatividade para os profissionais de
                Engenharia Química no estado do Espírito Santo, inspirados pela APEA-ES e por
                inúmeras ações voluntárias do conselheiro do CREA-ES, Filipe Machado, a iniciativa
                surgiu através da comoção entre profissionais e estudantes da área com intuito de
                promover a união entre a classe, buscar recursos para elevar a qualificação técnica
                de seus associados, garantir os direitos dos mesmos e, de forma análoga, lutar pelo
                reconhecimento da profissão no estado.
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      <div class="container pt-5">
        <div class="row justify-content-center">
          <div class="col-md-10 align-self-center">
            <h3>Membros</h3>
          </div>
          <div class="row justify-content-around text-center pt-5">
            <div class="col-md-4 col-sm-12 mb-auto">
              <img
                src="../../assets/logoapeq.png"
                alt="Pessoa 1"
                class="rounded-circle img-thumbnail img-size"
              />
              <blockquote class="blockquote">
                <p>Pessoa 1</p>
              </blockquote>
            </div>

            <div class="col-md-4 col-sm-12 mb-auto">
              <img
                src="../../assets/logoapeq.png"
                alt="Pessoa 2"
                class="rounded-circle img-thumbnail img-size"
              />
              <blockquote class="blockquote">
                <p>Pessoa 2</p>
              </blockquote>
            </div>

            <div class="col-md-4 col-sm-12 mb-auto">
              <img
                src="../../assets/logoapeq.png"
                alt="Pessoa 3"
                class="rounded-circle img-thumbnail img-size"
              />
              <blockquote class="blockquote">
                <p>Pessoa 3</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div class="container pt-5">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <h3>Apoiadores</h3>
          </div>

          <div class="row pt-5 justify-content-around text-center">
            <div class="col-md-4 col-sm-12">
              <img
                src="../../assets/apeaes.png"
                alt="Pessoa 1"
                class="rounded-circle img-thumbnail img-size"
              />
            </div>
            <div class="col-md-4 col-sm-12 mt-3 mb-3">
              <img
                src="../../assets/crea.png"
                alt="Pessoa 2"
                class="rounded-circle img-thumbnail img-size"
              />
            </div>
            <div class="col-md-4 col-sm-12">
              <img
                src="../../assets/coroa.png"
                alt="Pessoa 3"
                class="rounded-circle img-thumbnail img-size"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Down />
  </div>
</template>

<script>
import Top from "../Top.vue";
import Down from "../Down.vue";

export default {
  name: "Sobre",
  components: {
    Top,
    Down,
  },
};
</script>

<style>
.img-size {
  width: 200px;
  height: 200px;
}
</style>
