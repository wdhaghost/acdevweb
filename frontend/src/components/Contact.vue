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
    <div class="flex flex-col gap-5 w-full px-36 pt-10 pb-20 content-center">
        <p class="font-montserrat font-bold text-4xl text-center">Discutons de votre projet</p>
        <div class="text-center">
            <p class="font-robboto" >Nous proposons des solutions personnalisées pour aider les petits commerces à réussir leur transition digitale</p>
        </div>
        <div class="bg-background rounded-sm shadow-md p-5 back-opacity-30">
            <div class="w-full flex gap-2.5">
                <Input 
                label="Nom"
                type="text"
                placeholder="Nom"
                />
                <Input 
                label="Prénom"
                type="text"
                placeholder="Prénom"
                />
            </div>
            <div class="w-full flex gap-2.5">
                <Input 
                label="Ma Société"
                type="text"
                placeholder="Ma société"
                />
                <Input 
                label="Mail"
                type="email"
                placeholder="@"
                />
            </div>
                <TextArea
                label="Votre besoin"
                placeholder="Je vous écoute"
                />
        </div>
    </div>
    </template>