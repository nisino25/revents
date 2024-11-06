import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { AppEvent } from "../../../app/types/events";
import { sampleData } from "../../../app/api/sampleData";
import { useEffect, useState } from "react";

type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
}

export default function EventDashboard({formOpen, setFormOpen}: Props) {
  const [events, setEvents] = useState<AppEvent[]>([])

  useEffect(() => {
    setEvents(sampleData);
  }, [])

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <GridColumn width={6}>
        {formOpen &&
        <EventForm setFormOpen ={setFormOpen} />}
      </GridColumn>
    </Grid>
  )
}