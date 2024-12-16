<script setup>
import { defineProps } from 'vue';
const props = defineProps(['label','placeholder','type'])

</script>
<template>
    <div class="grow">
        <p class="font-montserrat font-bold text-foreground">{{ props.label }}</p>
        <input class="w-full p-2.5 rounded-md " :type=props.type :placeholder=props.placeholder>
    </div>
</template>