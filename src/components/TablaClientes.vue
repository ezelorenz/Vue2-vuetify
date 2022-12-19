<template>
    <div>
        <ModalClienteVue :dialog="dialog" @dialog="dialog = $event" :Item="itemSeleccionado"/>
        <v-card>
            <v-card-title>
                {{Titulo}}
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details></v-text-field>
                <v-spacer></v-spacer>
                <v-btn color="primary" dark class="mb-2 mt-5" @click="nuevoCliente()">
                    Nuevo Contacto
                </v-btn>
            </v-card-title>
            <v-data-table :headers="Cabecera" :items="Items" :items-per-page="5" class="elevation-1">
                <template v-slot:[`item.actions`]="{item}">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon 
                                small class="mr-2" 
                                @click="editarCliente(item)" 
                                v-bind="attrs" 
                                v-on="on">
                                    mdi-pencil
                            </v-icon>
                        </template>
                        <span>Editar</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon 
                                small 
                                @click="eliminar(item)"
                                v-bind="attrs" 
                                v-on="on">
                                    mdi-delete
                            </v-icon>
                        </template>
                        <span>Eliminar</span>
                    </v-tooltip>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import ModalClienteVue from './ModalCliente.vue';
export default {

    props: ['Titulo', 'Cabecera', 'Items'],
    components: {
        ModalClienteVue
    },
    data() {
        return {
            search: '',
            dialog: false,
            itemSeleccionado: {
            }
        }
    },
    methods: {
        ...mapActions('ClientesCrud', ['eliminarCliente']),
        
        nuevoCliente() {
            this.itemSeleccionado = {
                id: 0,
                nombre: "",
                apellido: "",
                email: "",
                telefono: "",
                direccion: "",
            }
            this.dialog = true;  
        },

        editarCliente(Item) {
            this.itemSeleccionado = Item;
            this.dialog = true; 
        },

        eliminar(item) {
            this.$alertify.confirm(
                'Desea eliminar el Cliente: '+item.nombre +' ' +item.apellido+'?',
                () => {
                    this.eliminarCliente(item);
                    this.$alertify.success('Cliente eliminado')
                },
                () => this.$alertify.error('Operacion cancelada')
            );
        },        
    }
}
</script>