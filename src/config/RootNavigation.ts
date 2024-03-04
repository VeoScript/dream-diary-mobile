import {createNavigationContainerRef} from '@react-navigation/native';

interface NavigationInterface {
  navigationRef: {
    navigate: (screen: string, params?: Record<string, unknown>) => void;
    goBack: () => void;
    isReady: Boolean;
  };
}

export const navigationRef = createNavigationContainerRef<NavigationInterface>();

export function navigate(screen: any, params?: Record<string, unknown>) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen, params);
  }
}

export function useGoBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}
