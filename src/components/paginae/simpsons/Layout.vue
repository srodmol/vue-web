<script setup lang="ts">
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import Button from '@/components/ui/button/Button.vue';


</script>

<template>
    <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <header class="bg-simpsons-yellow w-full border-b border-black">
            <div class="flex flex-col md:flex-row justify-between items-center gap-3 p-3 mx-auto max-w-page">
                <LogoSimpsons estilus="w-[8rem] h-auto mx-auto md:mx-0" />
                <nav class="flex items-center gap-6">
                    <RouterLink to="/simpsons/gallery" active-class="font-bold">
                        Characters
                    </RouterLink>
                    <RouterLink to="/simpsons/about" active-class="font-bold">
                        About
                    </RouterLink>
                    <Button as-child variant="tertiarius" size="elogantis" class="bg-simpsons-red text-white hover:bg-simpsons-yellow hover:text-black focus:bg-simpsons-yellow focus:text-black">
                        <RouterLink to="/">Exit</RouterLink>
                    </Button>
                </nav>
            </div>
        </header>
        <main>
            <RouterView />
        </main>
        <footer class="bg-simpsons-yellow text-center py-6 border-t border-black flex flex-col gap-1">
            <div>
                <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2027
            </div>
            <small>
                This app was done by Fernando Cordón
            </small>
        </footer>
    </div>
</template>

<style scoped>

</style>
