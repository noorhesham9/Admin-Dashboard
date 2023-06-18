import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { formatDate } from "@fullcalendar/core";
const Callender = () => {
  //   const nn = document.querySelectorAll(".fc-button-group button");
  //   for (let i = 0; i < nn.length; i++) {
  //     if (nn[i].title === "") {
  //       nn[i].style.display = "none";
  //     }
  //   }

  //   // }
  //   console.log(nn);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for new event");
    const calenderApi = selected.view.calendar;
    calenderApi.unselect();
    if (title) {
      calenderApi.addEvent({
        id: `${selected.dateStr} - ${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want toi delete the event "${selected.event.title}"`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m={"20px"}>
      <Header title={"CALENDAR"} subtitle={"Full calendar interative Page"} />
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box
          flex={"1 1 20%"}
          backgroundColor={colors.primary[400]}
          p={"15px"}
          borderRadius={"4px"}>
          <Typography variant="h5"> Events</Typography>
          <List>
            {currentEvents.map((event) => {
              return (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}>
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          month: "short",
                          year: "numeric",
                          day: "numeric",
                        })}
                      </Typography>
                    }></ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box flex={"1 1 100%"} ml={"15px"}>
          <FullCalendar
            height={"75vh"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable
            selectMirror
            dayMaxEvents
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => {
              setCurrentEvents(events);
            }}
            initialEvents={[
              { id: "5555", title: "All-day event", date: "2022-09-14" },
              { id: "1515", title: "Noor birth", date: "2002-04-15" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Callender;
