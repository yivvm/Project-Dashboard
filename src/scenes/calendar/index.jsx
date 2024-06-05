import { useState } from 'react'
import FullCalendar, { formatDate } from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Box, List, ListItem, ListItemText, MenuList, Typograpphy, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'

export default function Calendar() {
    const theme = useTheme()
    const colors = tokens(theme.colors.mode)
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected) => {
        const title = prompt('Please enter a new title for the event')
        const calendarApi = selected.view.calendar
        calendarApi.unselect()

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    }

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove()
        }
    }

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interative Page"/>

      <Box display='flex' justifyContent='space-between'>
        {/* CALENDAR SIDEBAR */}
        <Box 
            flex="1 1 20%" 
            backgroundColor={colors.primary[400]}
            p='15px'
            borderRadius={'4px'}
        >
            <Typograpphy variant='h5'>Events</Typograpphy>
            <List>
                {currentEvents.map((event) => (
                    <ListItem
                        key={event.id}
                        sx={{ backgroundColor: colors.greenAccent[500], margin: '10px 0', borderRadius: '2px' }}
                    >
                        <ListItemText
                            primary={event.title}
                            secondary={
                                <Typograpphy>
                                    {formatDate(event.start, {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })}
                                </Typograpphy>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>

      </Box>
    </Box>
  )
}
