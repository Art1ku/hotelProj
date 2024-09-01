import { createStore } from "zustand";

export const CardStore = createStore((set) => ({
  data: [] || null,
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null })
    try {
      const response = await fetch('https://kamil123456780.pythonanywhere.com/api/hotel_rooms/')
      if (!response.ok) {
        throw new Error('Failed to fetch data from API')
      }
      const data = await response.json()
      set({data: data, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  }
}))