import React, { useState } from "react";
import ListItem from "./ListItem";
import ThemeContext from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

function App() {
  const [products, setProducts] = useState([
    "iPhone",
    "iPad",
    "Mac",
    "Apple TV",
    "HomePod",
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [theme, setTheme] = useState("light");

  const itemOnChangeHandler = (productName) => {
    let newSelectedProducts;

    if (selectedProducts.includes(productName)) {
      // Should remove 'productName'
      newSelectedProducts = selectedProducts.filter((product) => {
        return product !== productName;
      });
    } else {
      // Should add 'productName'
      newSelectedProducts = [...selectedProducts];
      newSelectedProducts.push(productName);
    }

    setSelectedProducts(newSelectedProducts);
  };

  const toggleThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleThemeHandler,
      }}
    >
      <div className="dark min-h-screen flex justify-center items-center bg-slate-200">
        <div className="flex max-w-3xl mx-auto w-full gap-x-8">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold">Apple Products</h2>
            <ul className="mt-4 flex flex-col gap-y-3">
              {products.map((product) => {
                return (
                  <ListItem
                    key={product}
                    name={product}
                    onChange={itemOnChangeHandler}
                    active={selectedProducts.includes(product)}
                  />
                );
              })}
            </ul>
            <p className="mt-3 text-slate-400 text-sm">
              {selectedProducts.length} item(s) selected
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-slate-400">
              Selected Products
            </h2>
            <p className="mt-4 text-slate-800 text-lg">
              {selectedProducts.join(", ")}
            </p>
          </div>
          <ThemeSwitcher className="fixed top-12 right-12" />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
