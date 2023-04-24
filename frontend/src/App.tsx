import { ThemeProvider } from "styled-components";
import { Theme } from '../styles/Theme';
import { GlobalStyles } from '../styles/Global';
import ResultsSummary from "./components/resultsSummary/ResultsSummary";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <ResultsSummary />
      </ThemeProvider >
    </QueryClientProvider>
  )
}

export default App
