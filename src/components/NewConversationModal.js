import React, { Fragment, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";

const NewConversationModal = ({ closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create conversation based on contactId
    // createConversation(selectedContactIds);

    closeModal();
  };

  const { contacts } = useContacts();
  const [selectedContactIds, setSelectedContactIds] = useState([]);

  const handleCheckboxChange = (contactId) => {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (selectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
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
            <Form.Grop controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Grop>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </Fragment>
  );
};

export default NewConversationModal;
