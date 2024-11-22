import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import { AppEvent } from "../../../app/types/events";
import { sampleData } from "../../../app/api/sampleData";
import { useEffect, useState } from "react";

export default function EventDashboard() {
  const [events, setEvents] = useState<AppEvent[]>([])
  

  useEffect(() => {
    setEvents(sampleData);
  }, [])


  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events}/>
      </Grid.Column>
      <GridColumn width={6}>
        <h2>Filters</h2>
      </GridColumn>
    </Grid>
  )
}