import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AdminContext } from "../contexts/AdminProvider";
import {
  Container,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";

function AdminEditPage() {
  const { getWatchToEdit, watchToEdit, saveEditedWatch } =
    React.useContext(AdminContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [year, setYear] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [counrty, setCountry] = React.useState("");

  const handleSubmit = () => {
    const editedWatch = {
      name,
      brand,
      price,
      year,
      photo,
      counrty,
      id,
    };
    for (let i in editedWatch) {
      if (typeof editedWatch[i] === "string") {
        if (!editedWatch[i].trim()) {
          alert("Заполните поле");
          return;
        }
      }
    }
    saveEditedWatch(editedWatch);
    navigate("/admin");
  };

  React.useEffect(() => {
    if (watchToEdit) {
      setName(watchToEdit.name);
      setBrand(watchToEdit.brand);
      setPrice(watchToEdit.price);
      setYear(watchToEdit.year);
      setPhoto(watchToEdit.photo);
      setCountry(watchToEdit.counrty);
    }
  }, [watchToEdit]);

  React.useEffect(() => {
    getWatchToEdit(id);
  }, []);

  return (
    <div className="admin-edit-page">
      <Container>
        <h2>Редактировать</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Названрие"
            variant="standard"
          />
          <TextField
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            label="Бранд"
            variant="standard"
          />
          <TextField
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            type="number"
            label="Цена"
            variant="standard"
          />
          <TextField
            value={year}
            onChange={(e) => setYear(e.target.value)}
            type="date"
            label="Дата произвадства"
            variant="standard"
          />
          <TextField
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            label="Картинка"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel>Страна</InputLabel>
            <Select
              value={counrty}
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem value="china">Китай</MenuItem>
              <MenuItem value="japan">Япония</MenuItem>
              <MenuItem value="german">Германия</MenuItem>
              <MenuItem value="italy">Италия</MenuItem>
              <MenuItem value="switzerland">Швеция</MenuItem>
              <MenuItem value="czech">Чехия</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" type="submit">
            Сохранить
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default AdminEditPage;
