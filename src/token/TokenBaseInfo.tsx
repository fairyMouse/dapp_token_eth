import { Stack } from "@mui/material"
import ContentRow from "../components/ContentRow"

const TokenBaseInfo = () => {
  return (
    <Stack spacing={3}>
      <ContentRow title="合约地址" content="xxx" />
      <ContentRow title="Token 名称" content="xxx" />
      <ContentRow title="Token 符号" content="xxx" />
      <ContentRow title="Token 精度" content="xxx" />
      <ContentRow title="Token 总供应量" content="xxx" />
    </Stack>
  )
}

export default TokenBaseInfo
