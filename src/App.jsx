import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ContextProvider from "./context/ContextProvider";
import Products from "./pages/Products";
import ErrorBoundry from "./components/ErrorBoundry";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundry>
          <Shop />
        </ErrorBoundry>
      ),
    },
    {
      path: "cart",
      element: (
        <ErrorBoundry>
          <Cart />
        </ErrorBoundry>
      ),
    },
    {
      path: "products/:id",
      element: (
        <ErrorBoundry>
          <Products />
        </ErrorBoundry>
      ),
    },
  ]);
  return (
    <div className="App bg-dark">
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </div>
  );
}

export default App;
