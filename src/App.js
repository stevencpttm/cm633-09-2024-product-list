import React, { Component } from "react";
import ListItem from "./ListItem";
import ThemeContext from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

class App extends Component {
  state = {
    products: ["iPhone", "iPad", "Mac", "Apple TV", "HomePod"],
    selectedProducts: [],
    theme: "light",
  };

  itemOnChangeHandler = (productName) => {
    let newSelectedProducts;

    if (this.state.selectedProducts.includes(productName)) {
      // Should remove 'productName'
      newSelectedProducts = this.state.selectedProducts.filter((product) => {
        return product !== productName;
      });
    } else {
      // Should add 'productName'
      newSelectedProducts = [...this.state.selectedProducts];
      newSelectedProducts.push(productName);
    }

    this.setState({
      selectedProducts: newSelectedProducts,
    });
  };

  toggleThemeHandler = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light",
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleThemeHandler,
        }}
      >
        <div className="dark min-h-screen flex justify-center items-center bg-slate-200">
          <div className="flex max-w-3xl mx-auto w-full gap-x-8">
            <div className="w-1/2">
              <h2 className="text-2xl font-bold">Apple Products</h2>
              <ul className="mt-4 flex flex-col gap-y-3">
                {this.state.products.map((product) => {
                  return (
                    <ListItem
                      key={product}
                      name={product}
                      onChange={this.itemOnChangeHandler}
                      active={this.state.selectedProducts.includes(product)}
                    />
                  );
                })}
              </ul>
              <p className="mt-3 text-slate-400 text-sm">
                {this.state.selectedProducts.length} item(s) selected
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-bold text-slate-400">
                Selected Products
              </h2>
              <p className="mt-4 text-slate-800 text-lg">
                {this.state.selectedProducts.join(", ")}
              </p>
            </div>
            <ThemeSwitcher className="fixed top-12 right-12" />
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
