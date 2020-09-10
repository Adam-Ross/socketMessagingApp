import React, { Fragment } from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";

const Conversations = () => {
  const { conversations } = useConversations();

  return (
    <Fragment>
      <ListGroup variant="flush">
        {conversations.map((conversation, index) => (
          <ListGroup.Item key={index}>
            {conversation.recipients.map((r) => r.name).join(", ")}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Fragment>
  );
};

export default Conversations;
