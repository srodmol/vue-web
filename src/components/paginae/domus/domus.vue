<script setup lang="ts"> 
import { Button } from '@/components/ui/button'



</script>

<template> 
<div class="bg-domus-navy h-screen text-white font-sans text-center flex flex-col items-center justify-center gap-12 fixed w-screen overflow-hidden ">

    <img class="absolute inset-0 size-full object-cover opacity-20 -z-10" src="/imágenes/tonitrui.png" />
<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold pb-5 md:pb-20 z-10 transition-all">
    <span class="text-domus-cyan">Diseño</span> Web y
    <br />
    Apps <span class="text-domus-cyan">Interactivas</span>

</h1>
<p class="text-lg md:text-2xl transition-all">
    Aprendiendo a crear aplicaciones web
</p>
    <div class="flex flex-wrap justify-center gap-2">
        <Button variant="domus">
            <RouterLink to="/indecision">Sí o No</RouterLink>
        </Button>
        <Button variant="domus">
            <RouterLink to="/batman">Batman</RouterLink>
        </Button>
        <Button variant="domus">
            <RouterLink to="/simpsons">Simpsons</RouterLink>
        </Button>
        <Button variant="domus">
            <a href="http://www.upv.es">UPV</a>
        </Button>
    </div>
</div>
</template>

