import React from "react";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Slider,
  Pagination,
} from "@mui/material";
import { ClientContext } from "../contexts/ClientProvider";

function MainPage() {
  const {
    getWatches,
    watches,
    filterByPrice,
    setFilterByPrice,
    pagesCount,
    currerntPage,
    setCurruntPage,
    addWatchToBusket,
  } = React.useContext(ClientContext);

  React.useEffect(() => {
    getWatches();
  }, [filterByPrice, currerntPage]);

  return (
    <div className="main-page">
      <Container>
        <h2>Весь каталог часов</h2>
        <div className="filter-block">
          <h4>Фильтрация</h4>
          <Slider
            max={999999}
            min={0}
            valueLabelDisplay="auto"
            value={filterByPrice}
            onChange={(e, newValue) => setFilterByPrice(newValue)}
          />
        </div>
        <div className="prodacts">
          {watches.map((item) => (
            <Card key={item.id} className="product-card">
              <CardMedia component="img" height={140} image={item.photo} />
              <CardContent>
                <Typography
                  className="product-card-title"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {item.name}
                </Typography>
                <ul className="product-card-ul">
                  <li>
                    <span>Бранд:</span>
                    <span>{item.brand}</span>
                  </li>
                  <li>
                    <span>Дата выпуска:</span>
                    <span>{item.year}</span>
                  </li>
                  <li>
                    <span>Страна производства:</span>
                    <span>{item.counrty}</span>
                  </li>
                  <li>
                    <span>Цена:</span>
                    <span>{item.price} сом</span>
                  </li>
                </ul>
                <Button
                  onClick={() => addWatchToBusket(item)}
                  variant="outlined"
                >
                  Добавить в корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="pagination-block">
          <Pagination
            onChange={(_, newValue) => setCurruntPage(newValue)}
            count={pagesCount}
            color="primary"
          />
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
