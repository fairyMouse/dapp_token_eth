import { Box, Card, Stack, Tab, Tabs, Typography, alpha } from "@mui/material"
import { useState } from "react"
import TokenAppBar from "./TokenAppBar"
import TokenBaseInfo from "./TokenBaseInfo"
import TokenTransfer from "./TokenTransfer"
import TokenFaucet from "./TokenFaucet"

const tabConfig = [
  { label: "基本信息", value: "base_info" },
  { label: "转账", value: "transfer" },
  { label: "水龙头", value: "faucet" },
]

const TokenIndex = () => {
  const [currentTab, setCurrentTab] = useState("transfer")
  return (
    <Box sx={{ pb: "64px" }}>
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
            pt: "120px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            测试
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: "primary.main",
              }}
            >
              代币合约
            </Typography>
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ mt: 2, alignSelf: "center", width: "60%" }}
          >
            一个简单的代币合约，用于测试代币的基本信息、转账功能等
          </Typography>

          <Box
            className="flex-col-c"
            sx={theme => ({
              mt: 4,
              px: 6,
              py: 3,
              width: 800,
              height: 500,
              backgroundSize: "cover",
              borderRadius: "10px",
              outline: "1px solid",
              outlineColor: alpha("#BFCCD9", 0.5),
              boxShadow: `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`,
            })}
          >
            <Tabs
              sx={{ mb: 3 }}
              value={currentTab}
              onChange={(event, newValue) => setCurrentTab(newValue)}
            >
              {tabConfig.map(tab => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
            {currentTab === "base_info" && <TokenBaseInfo />}
            {currentTab === "transfer" && <TokenTransfer />}
            {currentTab === "faucet" && <TokenFaucet />}
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default TokenIndex
