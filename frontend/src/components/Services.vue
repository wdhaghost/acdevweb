<script setup>
import ServiceCard from '@/components/service-card.vue'
import { ref } from 'vue';
const services =ref([
    {
        title:"Site Vitrine / Ecommerce",
        icone: "edz",
        text:"Un site professionnel et esthétique pour présenter votre entreprise."
    },
    {
        title:"Développement",
        icone: "edz",
        text:"Un site professionnel et esthétique pour présenter votre entreprise."
    },
    {
        title:"Maintenance",
        icone: "edz",
        text:"Un site professionnel et esthétique pour présenter votre entreprise."
    },
])
</script>
<template>
    <div class="flex flex-col gap-5 w-full px-36 pt-10 pb-20 content-center">
        <h2 class="font-montserrat font-bold text-4xl text-center">Mes services</h2>
        <div class="text-center">
            <p>Nous proposons des solutions personnalisées pour aider les petits commerces à réussir leur transition digitale</p>
        </div>
        <div class="flex w-full h-[500px] justify-between items-center">
            <ServiceCard 
                v-for="(service, index) in services" 
                :key="index" 
                :title="service.title" 
                :text="service.text" 
            />

        </div>
    </div>
</template>