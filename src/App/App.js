import "./App.scss";
import { useState, useEffect } from "react";
import Card from "../Components/Card/Card";
import Form from "../Components/Form/Form";
import fetchApi from "../fetchApi";

function App() {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState({
    content: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetchApi("GET");
    const cards = await response.json();
    setCards(cards);
  };

  const handleChange = (name, value) => {
    if (value) {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.content) {
      const response = await fetchApi("POST", form);
      if (response.status === 204) {
        loadData();
        setForm({
          content: "",
        });
      }
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    const response = await fetchApi("DELETE", null, id);
    if (response.status === 204) {
      loadData();
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    loadData();
  };

  return (
    <main className="app">
      <div className="app__title">
        <h1 className="title-text">Notes</h1>
        <button className="app__update" onClick={handleUpdate}>
          🗘
        </button>
      </div>
      <div className="app__cards">
        {cards.map((el) => {
          return <Card key={el.id} onDelete={handleDelete} {...el} />;
        })}
      </div>
      <Form {...form} onChange={handleChange} onSubmit={handleSubmit} />
    </main>
  );
}

export default App;
