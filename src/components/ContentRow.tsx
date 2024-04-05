import { Stack, Typography } from "@mui/material"

interface IContentRowProps {
  title: string
  content: string
}

const ContentRow = (props: IContentRowProps) => {
  const { title, content } = props
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ width: 600 }}
    >
      <Typography variant="subtitle1">{title}：</Typography>
      <Typography variant="body1">{content}</Typography>
    </Stack>
  )
}

export default ContentRow
