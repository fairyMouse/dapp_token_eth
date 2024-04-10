import { LoadingButton } from "@mui/lab"
import { Box, Stack, TextField, Typography } from "@mui/material"

const TokenTransfer = () => {
  return (
    <Stack alignItems={"center"} sx={{ width: "100%", mt: 3 }} spacing={2}>
      <Typography variant="body1">当前余额：xxx</Typography>
      <TextField
        sx={{ width: "100%" }}
        size="small"
        variant="outlined"
        placeholder="请输入转账目标的地址（0x开头）"
      />
      <TextField
        sx={{ width: "100%" }}
        size="small"
        variant="outlined"
        placeholder="请输入转账金额"
      />
      <LoadingButton variant="contained" sx={{ width: 200 }}>
        确认转账
      </LoadingButton>
    </Stack>
  )
}

export default TokenTransfer
