<script setup>
import { onMounted, ref } from 'vue';
import Formulario from '@/components/Formulario.vue';
import Tablela from '@/components/Tablela.vue';
import { getTable } from '@/components/actions';

const requisicao = ref([])

async function alertaUpdate() {
  requisicao.value = await getTable()
  console.log('requisição feita no app', requisicao.value)
}

onMounted(() => {
  alertaUpdate()
})

</script>

<template>
  <div class="body-app">
    <Formulario @atualizacaoCreate="alertaUpdate"/>
    <Tablela @atualizarDelete="alertaUpdate" :resut="requisicao" />
  </div>
</template>

<style>
  .body-app{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
