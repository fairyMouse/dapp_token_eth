import {
  Box,
  Card,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  alpha,
} from "@mui/material"
import { useState } from "react"
import TokenAppBar from "./TokenAppBar"

const tabConfig = [
  { label: "代币信息", value: "home" },
  { label: "关于", value: "about" },
  { label: "联系", value: "contact" },
]

const TokenIndex = () => {
  const [currentTab, setCurrentTab] = useState("home")
  return (
    <>
      <TokenAppBar />

      <Box
        id="hero"
        sx={theme => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(180deg, #CEE5FD, #FFF)"
              : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        })}
      >
        <Stack
          className="flex-col-c"
          spacing={2}
          sx={{
            pt: 20,
          }}
        >
          <Typography variant="h4">我的测试代币</Typography>
          <Tabs
            value={currentTab}
            onChange={(event, newValue) => setCurrentTab(newValue)}
          >
            {tabConfig.map(tab => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
          {/* <Box
            sx={theme => ({
              p: 2,
              width: 500,
              borderRadius: "10px",
              outline: "1px solid",
              outlineColor:
                theme.palette.mode === "light"
                  ? alpha("#BFCCD9", 0.5)
                  : alpha("#9CCCFC", 0.1),
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                  : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
            })}
          >
            123
          </Box> */}
        </Stack>
      </Box>
    </>
  )
}

export default TokenIndex
