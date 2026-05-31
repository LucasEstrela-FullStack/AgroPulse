import { create } from "zustand";

type AppState = {
  selectedPropertyId: string | null;
  setSelectedPropertyId: (propertyId: string | null) => void;
};

export const useAppStore = create<AppState>((set) => ({
  selectedPropertyId: null,
  setSelectedPropertyId: (selectedPropertyId) => set({ selectedPropertyId })
}));
