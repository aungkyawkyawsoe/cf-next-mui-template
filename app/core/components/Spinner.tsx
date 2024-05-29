'use client';

import appConfig from '@/core/configs/app-config';
import Box from '@mui/material/Box'
import Image from 'next/image'
import LinearProgress from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

const Container = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}))

const FallbackSpinner = () => {

  return (
    <Container>
      <Image alt={appConfig.appName} src="/logo.png" height={60} width={60} />

      <LinearProgress sx={{ mt: 6, width: 200 }} />
      <Box mt={2}>Processing Data ...</Box>
    </Container>
  )
}

export default FallbackSpinner
