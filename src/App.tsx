import { CssBaseline, Stack, ThemeProvider, createTheme } from "@mui/material"
import TokenIndex from "./token/TokenIndex"
import customTheme from "./theme"

function App() {
  const theme = createTheme(customTheme("light"))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TokenIndex />
    </ThemeProvider>
  )
}

export default App
