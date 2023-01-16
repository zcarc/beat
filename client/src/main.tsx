import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { ChartsPage } from "./pages/ChartsPage";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { PlaylistPage } from "./pages/PlaylistPage";
import Root from "./Root";
import { LibraryPage } from "./pages/LibraryPage";
import { MyListPage } from "./pages/MyListPage";
import ReactModal from "react-modal";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { NotRequireAuth } from "./components/NotRequireAuth/NotRequireAuth";
import { SearchListPage } from "./pages/SearchListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "charts",
        element: <ChartsPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "login",
        element: (
          <NotRequireAuth>
            <LoginPage />
          </NotRequireAuth>
        ),
      },
      {
        path: "library",
        element: (
          <RequireAuth>
            <LibraryPage />
          </RequireAuth>
        ),
        children: [
          {
            path: "playlist",
            element: (
              <RequireAuth>
                <PlaylistPage />
              </RequireAuth>
            ),
          },
        ],
      },
      {
        path: "mylist/:mylistId",
        element: (
          <RequireAuth>
            <MyListPage />
          </RequireAuth>
        ),
      },
      {
        path: "search/list",
        element: <SearchListPage />,
      },
    ],
  },
]);

ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
