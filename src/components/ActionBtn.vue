<script setup>
import { deletar } from './actions'

const emit = defineEmits(['atualizarDelete-btn'])

function rowDelete() {
    const valor = deletar(prop.obj.id)
    emit('atualizarDelete-btn', valor)
}

const prop = defineProps({
    obj: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div class="actions">
        <button @click="rowDelete">🗑️</button>
        <button @click="rowEdit">🖋️</button>
    </div>
</template>

<style scoped>

.actions {
    display: flex;
    gap: 5px;
}
button {
    border: 0;
    font-size: 20px;
}

</style>