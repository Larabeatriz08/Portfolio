export interface LoadingStepData {
  id: number;
  text: string;
}

export const loadingSteps: LoadingStepData[] = [
  {
    id: 1,
    text: "Initializing kernel..."
  },
  {
    id: 2,
    text: "Loading user interface..."
  },
  {
    id: 3,
    text: "Loading assets..."
  },
  {
    id: 4,
    text: "Registering applications..."
  },
  {
    id: 5,
    text: "Preparing workspace..."
  },
  {
    id: 6,
    text: "Launching LaraOS..."
  }
];