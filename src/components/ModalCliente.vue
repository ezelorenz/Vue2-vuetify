<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                        <span v-if="Item.id == 0" class="text-h5">Nuevo Cliente</span>
                        <span v-else class="text-h5">Editar Cliente</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field 
                                    label="Nombre" 
                                    required
                                    v-model="Item.nombre"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field 
                                    label="Apellido"
                                    v-model="Item.apellido"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field 
                                    label="Email*"
                                    required
                                    v-model="Item.email"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field 
                                    label="Telefono*" 
                                    required
                                    hint="Sin 0 ni 15"
                                    v-model="Item.telefono"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field 
                                    label="Direccion*" 
                                    required
                                    v-model="Item.direccion"></v-text-field>
                                </v-col>
                                
                            </v-row>
                        </v-container>
                        <small>*Campos requeridos</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="cerrarModal()">
                            Cerrar
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="guardarCliente()">
                            Guardar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props:['dialog', 'Item'],
    data() {
        return {
            
        }
    },
    methods: {
        ...mapActions('ClientesCrud', ['agregarCliente', 'editar']),
        guardarCliente() {
            this.$alertify.confirm(
                this.Item.id == 0 ? 'Desea agregar el Cliente?' : 'Desea editar el Cliente?',
                () => {
                    if (this.Item.id == 0) {
                        this.agregarCliente(this.Item);
                        this.cerrarModal();
                        this.$alertify.success('Cliente agregado');
                    }
                    else {
                        console.log(this.Item);
                        
                        this.editar(this.Item);
                        this.cerrarModal();
                        this.$alertify.success('Cliente actualizado');
                    }
                    // this.Item.id == 0 ? this.agregarCliente(this.Item) : this.editar(this.Item);
                    // this.cerrarModal();
                    // this.$alertify.success(this.Item.id == 0 ? 'Cliente agregado' : 'Cliente actualizado');
                },
                () => {
                    this.$alertify.error('Operacion cancelada');

                } 
            );
            
        },
        cerrarModal() {
            this.$emit('dialog', false)
        }
    }
}
</script>