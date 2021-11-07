import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import levenSort from 'leven-sort';
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  InputBase,
  MenuItem,
  FormControl,
  Select,
  Divider,
  IconButton,
  Button,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
// import FormHelperText from '@material-ui/core/FormHelperText';

import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    display: "inline-flex",
    marginRight: 15,
    fontSize: 18,
  },
  paper: {
    padding: "2px 4px",
    display: "inline-flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 16,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    marginLeft: 15,
    fontSize: 18,
    textTransform: "none",
  },
  select: {
    minWidth: 250,
    maxWidth: 250,
    fontSize: 17,
  },
  productContainer: {
    marginTop: 75,
  },
  textField: {
    fontSize: 16,
  },
}));

function Search() {
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState("");
  const [selectedFlipkartProduct, setSelectedFlipkartProduct] =
    React.useState(-1);
  const [selectedAmazonProduct, setSelectedAmazonProduct] = React.useState(-1);
  const [flipkartProducts, setFlipkartProducts] = React.useState([]);
  const [amazonProducts, setAmazonProducts] = React.useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClear = () => {
    setInputValue("");
  };
  const handleSearch = (searchQuery) => {
    console.log("keyword:-", searchQuery);
    const flipkartBaseURL = "https://www.flipkart.com";
    const amazonBaseURL = "https://www.amazon.in";

    // Flipkart Search
    const flipkartClient = axios.create({
      baseURL: flipkartBaseURL,
      timeout: 10000,
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
    const endPointFlipkart =
      "/search?q=" +
      searchQuery +
      "&marketplace=FLIPKART&otracker=start&as-show=on&as=off";
    flipkartClient
      .get(endPointFlipkart)
      .then(function (response) {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(response.data, "text/html");
        const allProducts = [];
        if (htmlDocument) {
          const rootElements = htmlDocument.querySelectorAll("div._2kHMtA");
          rootElements.forEach((rootElem) => {
            const headingElement = rootElem.querySelector("div._4rR01T");
            const priceElement = rootElem.querySelector("div._30jeq3._1_WHN1");
            const linkElement = rootElem.querySelector("a._1fQZEK");
            if (headingElement && priceElement && linkElement) {
              allProducts.push({
                title: headingElement.textContent,
                price: priceElement.textContent,
                link: flipkartBaseURL + linkElement.getAttribute("href"),
              });
            }
          });
        }
        setFlipkartProducts(allProducts);
        setSelectedFlipkartProduct(0);
      })
      .catch(function (error) {
        console.log(error);
      });
    // Amazon Search
    const amazonClient = axios.create({
      baseURL: amazonBaseURL,
      timeout: 10000,
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
    const endPointAmazon =
      "/s?k=" +
      searchQuery +
      "&s=relevanceblender&sprefix=" +
      searchQuery +
      "&ref=nb_sb_noss";
    amazonClient
      .get(endPointAmazon)
      .then(function (response) {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(response.data, "text/html");
        const allProducts = [];
        if (htmlDocument) {
          const rootElements = htmlDocument.querySelectorAll(
            "div.s-main-slot.s-result-list.s-search-results div.sg-col-inner"
          );
          rootElements.forEach((rootElem) => {
            const headingElement = rootElem.querySelector(
              "span.a-size-medium.a-color-base.a-text-normal"
            );
            const priceSymbol = rootElem.querySelector("span.a-price-symbol");
            const priceElement = rootElem.querySelector("span.a-price-whole");
            const linkElement = rootElem.querySelector(
              "a.a-link-normal.a-text-normal"
            );
            if (headingElement && priceElement && linkElement) {
              allProducts.push({
                title: headingElement.textContent,
                price: priceSymbol.textContent + priceElement.textContent,
                link: amazonBaseURL + linkElement.getAttribute("href"),
              });
            }
          });
        }
        setAmazonProducts(allProducts);
        // setAmazonProducts(levenSort(allProducts, searchQuery, 'title'));
        setSelectedAmazonProduct(0);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(inputValue);
  };

  const handleFlipkartProduct = (event) => {
    setSelectedFlipkartProduct(event.target.value);
  };
  const handleAmazonProduct = (event) => {
    setSelectedAmazonProduct(event.target.value);
  };

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  React.useEffect(() => {
    const searchQuery = query.get("q");
    setInputValue(searchQuery);
    handleSearch(searchQuery);
  }, []);

  return (
    <div className="main-container">
      <div className="search-header">
        <div className={classes.root}>
          <div className={classes.label}>Enter the product: </div>
          <Paper
            component="form"
            className={classes.paper}
            onSubmit={handleSubmit}
          >
            <InputBase
              id="search-input"
              className={classes.input}
              placeholder="Search for products"
              inputProps={{ "aria-label": "search for products" }}
              value={inputValue}
              onChange={handleChange}
              required
              autoFocus
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              className={classes.iconButton}
              aria-label="clear"
              onClick={handleClear}
            >
              <ClearIcon />
            </IconButton>
          </Paper>
        </div>
        <div className={classes.productContainer}>
          <div className={classes.root}>
            <div className={classes.label}>Flipkart product title: </div>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                id="flipkart-select-product"
                className={classes.select}
                value={selectedFlipkartProduct}
                onChange={handleFlipkartProduct}
              >
                <MenuItem value="-1">
                  <em>Select Product</em>
                </MenuItem>
                {flipkartProducts.map((product, index) => (
                  <MenuItem key={index} value={index}>
                    {product.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className={classes.label}>
              Not this? Try out suggestions by clicking on the title
            </div>
          </div>
          <div className={classes.root}>
            <div className={classes.label}>Flipkart product price: </div>
            <TextField
              value={
                selectedFlipkartProduct !== -1
                  ? flipkartProducts[selectedFlipkartProduct].price
                  : ""
              }
              InputProps={{
                readOnly: true,
                className: classes.textField,
              }}
              variant="outlined"
            />
            <Button
              variant="contained"
              className={classes.button}
              href={
                selectedFlipkartProduct !== -1
                  ? flipkartProducts[selectedFlipkartProduct].link
                  : "#"
              }
              target="_blank"
              disabled={selectedFlipkartProduct === -1}
            >
              Visit Site
            </Button>
          </div>
          <div className={classes.root}>
            <div className={classes.label}>Amazon product title: </div>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                id="amazon-select-product"
                className={classes.select}
                value={selectedAmazonProduct}
                onChange={handleAmazonProduct}
              >
                <MenuItem value="-1">
                  <em>Select Product</em>
                </MenuItem>
                {amazonProducts.map((product, index) => (
                  <MenuItem key={index} value={index}>
                    {product.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className={classes.label}>
              Not this? Try out suggestions by clicking on the title
            </div>
          </div>
          <div className={classes.root}>
            <div className={classes.label}>Amazon product price: </div>
            <TextField
              value={
                selectedAmazonProduct !== -1
                  ? amazonProducts[selectedAmazonProduct].price
                  : ""
              }
              InputProps={{
                readOnly: true,
                className: classes.textField,
              }}
              variant="outlined"
            />
            <Button
              variant="contained"
              className={classes.button}
              href={
                selectedAmazonProduct !== -1
                  ? amazonProducts[selectedAmazonProduct].link
                  : "#"
              }
              target="_blank"
              disabled={selectedAmazonProduct === -1}
            >
              Visit Site
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
