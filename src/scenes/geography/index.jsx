import { Box } from '@mui/material'
import Header from '../../components/Header'
import GeographyChart from '../../components/GeographyChart'

export default function Geography() {
  return (
    <Box m='20px'>
        <Header title='Geography Chart' subtitle='Simple Gepgraphy Chart' />
        <Box height='75vh'>
            <GeographyChart />
        </Box>
    </Box>
  )
}
