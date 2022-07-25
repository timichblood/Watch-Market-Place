import React from "react";
import {
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { AdminContext } from "../contexts/AdminProvider";

function AdminAddPAge() {
  const { sendNewWatch } = React.useContext(AdminContext);

  const [name, setName] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [year, setYear] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [counrty, setCountry] = React.useState("");

  const handleSubmit = () => {
    const newWatch = {
      name: name.trim(),
      brand: brand.trim(),
      price,
      year: year.trim(),
      photo: photo.trim(),
      counrty: counrty.trim(),
    };
    for (let i in newWatch) {
      if (!newWatch[i]) {
        alert("Заполните поля");
        return;
      }
    }
    sendNewWatch(newWatch);
    setName("");
    setBrand("");
    setPrice("");
    setYear("");
    setPhoto("");
    setCountry("");
  };

  return (
    <div className="admin-add-page">
      <Container>
        <h2>Добавить товары</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Название"
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
            label="Цена"
            variant="standard"
            type="number"
          />
          <TextField
            value={year}
            onChange={(e) => setYear(e.target.value)}
            label="Год производства"
            variant="standard"
            type="date"
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
              label="Страна"
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
            Добавить
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default AdminAddPAge;
