import React, { Fragment, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

const NewConversationModal = ({ closeModal }) => {
  const { contacts } = useContacts();
  const { createConversation } = useConversations();
  const [selectedContactIds, setSelectedContactIds] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create conversation based on contactId
    createConversation(selectedContactIds);

    closeModal();
  };

  const handleCheckboxChange = (contactId) => {
    setSelectedContactIds((prevSelectedContactIds) => {
      // Check to see if selected contact is in the selectedContactIds
      if (selectedContactIds.includes(contactId)) {
        // If selectedContactIds contains selected contact id, remove it.
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        // Put checked contact into selectedContactIds if not found.
        return [...prevSelectedContactIds, contactId];
      }
    });
  };

  return (
    <Fragment>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </Fragment>
  );
};

export default NewConversationModal;
