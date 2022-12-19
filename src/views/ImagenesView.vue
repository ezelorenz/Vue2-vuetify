<template>
    <div>
        <h1 class="text-center">IMAGENES</h1>
        <TarjetaImagenes :items="Items"/>
    </div>

</template>

<script>

import TarjetaImagenes from '../components/TarjetaImagen.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "Imagenes",

    components: {
        TarjetaImagenes
    },
    created() {
        this.cargarImagen();
    },
    data() {
        return {
        }  
    },
    methods: {
        ...mapActions('TarjetaImagenes', ['cargarImagen'])
    },
    computed: {
        ...mapGetters('TarjetaImagenes', ['Items'])
    }
}
</script>
