import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import appStore from "./centralStore/appStore"// Import your Redux store
import Body from "./components/Body";
import LoginPage from "./components/LoginPage";
import Error from "./components/Error";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/main",
      element: <Body />
    },
    {
      path: "/error",
      element: <Error />
    }
  ]);

  return (
    <Provider store={appStore}> {/* Wrap your entire application with the Provider */}
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
