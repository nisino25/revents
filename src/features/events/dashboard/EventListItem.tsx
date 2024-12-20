import {Item, ItemContent, ItemDescription, ItemGroup, Segment, SegmentGroup, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../../app/types/events";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/store/store";
import { deleteEvent } from "../eventSlice";

type Props = {
  event: AppEvent
}

export default function EventListItem({event}: Props) {
  const dispatch = useAppDispatch();

  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL || '/user.png'} />
            <ItemContent>
              <Item.Header>{event.title}</Item.Header>
              <ItemDescription>
                Hosted by {event.hostedBy}
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee: any) =>(
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button onClick={() => dispatch(deleteEvent(event.id))} color='red' floated='right' content='Delete' />
        <Button as={Link} to={`/events/${event.id}`} color='teal' floated='right' content='View'  />
      </Segment>
    </SegmentGroup>
  )
}