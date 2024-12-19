<script setup>
import { ref } from 'vue';
import Input from './Input.vue';
import TextArea from './TextArea.vue';
const name = ref('')
const lastname = ref('')
const mail = ref('')
const societyName = ref('')
const message = ref('')

</script>
<template>
    <form @submit.prevent="onSubmit" class="flex flex-col gap-5 w-full px-36 pt-10 pb-20 content-center justify-center">
        <p class="font-montserrat font-bold text-4xl text-center">Discutons de votre projet</p>
        <div class="text-center">
            <p class="font-robboto" >Nous proposons des solutions personnalisées pour aider les petits commerces à réussir leur transition digitale</p>
        </div>
        <div class="bg-background flex flex-col items-center gap-2 rounded-sm shadow-md p-5 back-opacity-30">
            <div class="w-full flex gap-2.5">
                <Input 
                label="Nom"
                type="text"
                placeholder="Nom"
                v-model:value="name"
                />
                <Input 
                label="Prénom"
                type="text"
                placeholder="Prénom"
                v-model:value="lastname"
                />
            </div>
            <div class="w-full flex gap-2.5">
                <Input 
                label="Ma Société"
                type="text"
                placeholder="Ma société"
                v-model:value="societyName"
                />
                <Input 
                label="Mail"
                type="email"
                placeholder="@"
                v-model:value="mail"
                />
            </div>
            <TextArea
                label="Votre besoin"
                placeholder="Je vous écoute"
                v-model:value="message"
                />
            <button @click="" class=" w-[200px] px-9 py-3 bg-blue rounded font-bold">Envoyez</button>
        </div>
    </form>
    </template>