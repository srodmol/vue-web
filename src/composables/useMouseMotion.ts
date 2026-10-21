import { ref } from "vue"

interface Coordinatas {
  x: number
  y: number
}

export const useMouseMotion = (factor = 0.1) => {
  const mousePosition = ref<Coordinatas>({ x: 0, y: 0 })

  const cumMouseMove = (e: MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    mousePosition.value = {
      x: (centerX - e.clientX) * factor,
      y: (centerY - e.clientY) * factor
    }
  }

  const cumMouseLeave = () => {
    mousePosition.value = { x: 0, y: 0 }
  }

  return {
    mousePosition,
    cumMouseMove,
    cumMouseLeave
  }
}
