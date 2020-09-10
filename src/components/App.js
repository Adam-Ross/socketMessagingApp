import React, { Fragment } from "react";
import Login from "./Login";
import useLocalStorage from "./hooks/useLocalStorage";
import DashBoard from "./DashBoard";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
import { ContactsProvider } from "../contexts/ContactsProvider";
function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <DashBoard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return <Fragment>{id ? dashboard : <Login onIdSubmit={setId} />}</Fragment>;
}

export default App;
