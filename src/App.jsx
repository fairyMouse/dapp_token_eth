import { Box, Button, Stack } from "@mui/material"
import "virtual:windi.css"

function App() {
  return (
    <Stack>
      <Box className="flex-row-c" sx={{ bgcolor: "#0f1114", p: 2 }}>
        <Button variant="contained" sx={{ ml: "auto" }}>
          开始
        </Button>
      </Box>
    </Stack>
  )
}

export default App
