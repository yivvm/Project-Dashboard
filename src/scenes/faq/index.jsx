import { Box, Typography, useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Header from '../../components/Header'
import { tokens } from '../../theme'

export default function FAQ() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)


  return (
    <Box m='20px'>
        <Header title='FAQ' subtitle='Frequently Asked Question Page' />

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quam incidunt exercitationem vel est qui iusto.
                </Typography>
            </AccordionDetails>
        </Accordion>
      
    </Box>
  )
}
