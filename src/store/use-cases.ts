import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImagePickerAsset } from 'expo-image-picker';
import { ComplianceUseCase } from './../types';
import { RootState } from '.';
import { IconVariant } from '@/components/atoms/IconBackground';
import { StatusVariants } from '@/components/atoms/Status';

interface UseCaseState {
  id: number;
  title: string;
  icon: IconVariant;
  useCase: ComplianceUseCase;
  images: ImagePickerAsset[];
  status: StatusVariants;
  message?: string;
  comments: string;
}

const initialState: UseCaseState[] = [];

const useCaseSlice = createSlice({
  name: 'useCase',
  initialState,
  reducers: {
    updateUseCase(state, action: PayloadAction<Partial<UseCaseState>>) {
      const useCase = state.find(
        (item) => item.id === action.payload.id || item.useCase === action.payload.useCase,
      );

      if (useCase) {
        Object.assign(useCase, action.payload);
      } else {
        state.push(action.payload as UseCaseState);
      }
    },
    addUseCase(state, action: PayloadAction<UseCaseState>) {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    resetUseCases() {
      return initialState;
    },
  },
});

export const selectUseCase = (state: RootState) => state.useCases;

export const { updateUseCase, resetUseCases, addUseCase } = useCaseSlice.actions;
export default useCaseSlice.reducer;
