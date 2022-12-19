<template>
    <div>
        <h1 class="text-center mt-5">Alertas</h1>
        <v-btn class="mb-5" color="primary" @click="visible()">Mostrar</v-btn>
        <appAlerta v-if="success" type="success" mensaje="Esto es una alerta" @salir="success=$event"></appAlerta>
        <appAlerta v-if="error" type="error" mensaje="Esto es una alerta" @salir="error=$event"></appAlerta>
        <appAlerta v-if="warning" type="warning" mensaje="Esto es una alerta" @salir="warning=$event"></appAlerta>

    </div>
</template>


<script>
import appAlerta from '../components/Alertas.vue'

export default {
    name: "usuarios",
    data() {
        return {
            success: false,
            error: false,
            warning: false
        }
    },
    components: {
        appAlerta
    },
    methods: {
        visible() {
            this.success = true;
            this.error = true;
            this.warning = true;
        }
    },
    watch: {
        
    }
}
</script>
