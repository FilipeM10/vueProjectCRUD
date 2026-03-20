<script setup>
import ActionBtn from './ActionBtn.vue'

const emit = defineEmits(['atualizarDelete'])

const prop = defineProps({
    resut: {
        type: Array,
    }
})

function valorAtualizado(value) {
    emit('atualizarDelete', value)
}

</script>

<template>
    
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in resut" :key="item.id">
                    <td>{{ item.nome }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.status }}</td>
                    <th>
                        <ActionBtn
                            @atualizarDelete-btn="valorAtualizado"
                            :obj="{
                                id: item.id,
                                nome: item.nome,
                                email: item.email,
                                status: item.status
                            }"
                            action="actBTN"
                        />
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

* {
    color: black;
    text-align: left;
    margin: 0;
}

table{
    background-color: aliceblue;
    border-radius: 10px;
}

thead tr {
    background-color: rgb(193, 193, 193);
}

</style>