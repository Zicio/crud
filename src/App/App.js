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
    const cards = await fetchApi();
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
      const response = await fetchApi(form);
      if (response.status === 204) {
        loadData();
        setForm((prevForm) => ({
          content: "",
        }));
      }
    }
  };

  return (
    <main className="app">
      <div className="app__title">
        <h1 className="title-text">Notes</h1>
        <button className="app__update">🗘</button>
      </div>
      <div className="app__cards">
        {cards.map((el) => {
          return <Card key={el.id} {...el} />;
        })}
      </div>
      <Form {...form} onChange={handleChange} onSubmit={handleSubmit} />
    </main>
  );
}

export default App;
