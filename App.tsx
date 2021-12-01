import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HomeScreen } from './src/pages';
import { theme } from './src/theme';

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
          <HomeScreen />
        </SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
