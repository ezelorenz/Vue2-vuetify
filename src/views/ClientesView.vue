<template>
    <div>
        <h1 class="text-center mb-5">Clientes</h1>
        <TablaClientesVue Titulo="Clientes" :Cabecera="Cabecera" :Items="Items"/>
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TablaClientesVue from '@/components/TablaClientes.vue';
export default {
    name: "Clientes",

    components: {
        TablaClientesVue
    },
    created() {
        this.cargarClientes();
    },
    data() {
        return {
            Cabecera: [
                { text: 'Nombre', value:'nombre'},
                { text: 'Apellido', value:'apellido'},
                { text: 'Email', value:'email'},
                { text: 'Telefono', value:'telefono'},
                { text: 'Direccion', value:'direccion'},
                { text: 'Acciones', value:'actions'}
            ]
        }
    },
    methods: {
        ...mapActions('ClientesCrud', ['cargarClientes'])
    },
    computed: {
        ...mapGetters('ClientesCrud', ['Items'])
    }
}
</script>