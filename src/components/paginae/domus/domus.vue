<script setup lang="ts"> 
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useFavoritosStore } from '@/stores/useFavoritos';
import { Heart } from '@lucide/vue';
import { storeToRefs } from 'pinia';
import { ref,  } from 'vue';
import { useRouter } from 'vue-router';

const dialogApertaEst = ref<boolean>(false)
const quaestio = ref<string>("")

const router = useRouter()

const cumKeyPressumEnter = (eventus: KeyboardEvent) => {
    if (eventus.key === "Enter") {
        const textusIntinerans = quaestio.value.trim()

        if (textusIntinerans.length > 0 && textusIntinerans.endsWith("?")) {
           dialogApertaEst.value = false
           quaestio.value = ""
           router.push({
            path: '/indecision',
            state: {quaestio: textusIntinerans}
           })
        }

    }
}

const favoritosStore = useFavoritosStore()
const {totalFavoritos} = storeToRefs(favoritosStore)
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

        <!--<Button variant="domus" class="mr-2">
            <RouterLink to="/indecision">Sí o No</RouterLink>
        </Button>-->
        <Dialog
            :open="dialogApertaEst"
            @update:open="dialogApertaEst = $event"
        >
            <DialogTrigger as-child>
                <Button variant="domus" class="mr-2">
                Sí o no
                </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px] bg-domus-navy text-white border-domus-cyan">
                <DialogHeader>
                <DialogTitle class="text-white">Pregúntame</DialogTitle>
                <DialogDescription class="text-gray-300">
                    No sigas con tus dudas, yo te responderé SÍ o NO.
                </DialogDescription>
                </DialogHeader>
                <div class="mt-4">
                    <Input 
                    class="bg-domus-navy-input text-white placeholder:text-gray-400" placeholder="Escribe aquí tu pregunta..."
                    v-model="quaestio"
                    @keydown="cumKeyPressumEnter"
                    />
                </div>
            </DialogContent>
    </Dialog>

    <Button variant="domus" class="mr-2">
            <RouterLink to="/batman">Batman</RouterLink>
    </Button>
    <Button variant="domus" class="mr-2">
            <RouterLink to="/simpsons">Simpsons</RouterLink>
    </Button>
    <Button variant="domus" class="mr-2">
            <a href="http://www.upv.es">UPV</a>
    </Button>

    <Button variant="default" class="relative mr-2 bg-simpsons-red md:py-5 md:px-6 md:text-lg hover:bg-simpsons-red/80 transition-all">
        <RouterLink to="" class="flex items-center gap-2">
            <Heart class="w-5 h-5 fill-current" />
            Favoritos
            <span class="absolute w-6.5 h-6.5 bg-yellow-400 text-black text-base font-bold rounded-full flex items-center justify-center -top-3 -right-2">
                {{ totalFavoritos }}
            </span>
        </RouterLink>
    </Button>
    </div>
</div>
</template>

