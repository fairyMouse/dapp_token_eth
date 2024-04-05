import { Box, Card, Stack, Tab, Tabs, Typography, alpha } from "@mui/material"
import { useState } from "react"
import TokenAppBar from "./TokenAppBar"
import TokenBaseInfo from "./TokenBaseInfo"
import TokenTransfer from "./TokenTransfer"

const tabConfig = [
  { label: "基本信息", value: "base_info" },
  { label: "转账", value: "transfer" },
  { label: "水龙头", value: "faucet" },
]

const TokenIndex = () => {
  const [currentTab, setCurrentTab] = useState("base_info")
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
          sx={{
            pt: 20,
          }}
        >
          <Typography variant="h4">测试Demo代币</Typography>
          <Tabs
            sx={{ my: 3 }}
            value={currentTab}
            onChange={(event, newValue) => setCurrentTab(newValue)}
          >
            {tabConfig.map(tab => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
          {currentTab === "base_info" && <TokenBaseInfo />}
          {currentTab === "transfer" && <TokenTransfer />}
        </Stack>
      </Box>
    </>
  )
}

export default TokenIndex
