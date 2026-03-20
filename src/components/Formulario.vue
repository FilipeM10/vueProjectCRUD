<script setup>
import { ref } from 'vue'
import { cadastrarUser } from './actions'

const emit = defineEmits(['atualizacaoCreate'])
const nameUser = ref('')
const emailUser = ref('')
const statusUser = ref('')


const cadastrar = async () => {
    const data = {
        nome: nameUser.value,
        email: emailUser.value,
        status: statusUser.value
    }
    
    const response = await cadastrarUser(data)
    emit('atualizacaoCreate', response)
}

</script>

<template>
    <div>
        <form class="form" @submit.prevent="cadastrar">
            <div class="formsCamps">
                <label for="name">Nome</label>
                <input v-model="nameUser" id="name" type="text" required>
            </div>

            <div class="formsCamps">
                <label for="email">Email</label>
                <input v-model="emailUser" id="email" type="email" required>
            </div>

            <div class="formsCamps">
                <label for="status">Status</label>
                <select v-model="statusUser" id="status" required>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                </select>
            </div>

            <button type="submit" class="btnCadastrar">Cadastrar</button>
        </form>
    </div>
</template>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        gap: 10px
    }
    .formsCamps {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .btnCadastrar {
        background: linear-gradient(to right, #d6e3ff, rgb(149, 251, 255));
        height: 30px;
        border-radius: 8px;
        font-weight: 800;
    }
    input, select {
        border-radius: 10px;
        width: 100%;
        height: 25px;
        padding: 4px;
    }
    label {
        font-size: 13px;
    }
</style>