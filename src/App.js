import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import Notes from "./pages/Notes";
// import dummyNotes from "./dummy_notes";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <main id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
