<script setup lang="ts">
import { House, Menu } from '@lucide/vue';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Toggle } from '@/components/ui/toggle'
import { onMounted, onUnmounted, ref } from 'vue';

interface MenuItems {
  label: string
  href: string
  onClick?: () => void
}

interface Props {
  items: MenuItems[]
  homeRoute?: string
}

withDefaults (defineProps<Props>(), {
  homeRoute: '/',
})

const videreMenu = ref<boolean>(true)

const handleResize = () => {
  videreMenu.value = window.innerWidth >= 640
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})


</script>

<template>
    <div>
<Toggle
    v-model="videreMenu"
    class="fixed top-2 right-2 z-20 bg-white/70 sm:hidden"
    aria-label="Mostrar u ocultar el menú"
  >
    <Menu />
  </Toggle>

  <nav
    class="extra-nav flex-col sm:flex-row sm:items-center justify-between px-3"
    :class="videreMenu ? 'flex' : 'hidden sm:flex'"
  >
    <RouterLink :to="homeRoute" aria-label="Inicio">
      <House class="icon-home"/>
    </RouterLink>

    <NavigationMenu>
    <NavigationMenuList class="flex flex-col sm:flex-row">

      <NavigationMenuItem v-for="item in items" :key="item.label">
        <NavigationMenuLink
          :href="item.href"
          :class="[navigationMenuTriggerStyle(), 'text-base hover:bg-brand-purple hover:text-white transition-colors']"
          @click.prevent="item.onClick?.()"
        >
          {{ item.label }}
        </NavigationMenuLink>
      </NavigationMenuItem>

    
    </NavigationMenuList>
    </NavigationMenu>
  </nav>
    </div>
</template>



<style scoped>
.icon-home{
    color: slateblue;
    width: 3rem;
    height: 3rem;
}

.icon-home:hover {
    color: white;
    background-color:slateblue;
}

.toggle-menu {
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 2;
  background-color: white;
}

.extra-nav {
  background-color: white;
  opacity: 0.7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1;
}

@media (min-width: 640px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }
}

</style>