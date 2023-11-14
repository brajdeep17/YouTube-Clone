import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppContext } from "./context/contextApi";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import SearchResult from "./Components/SearchResult";
import VideoDetails from "./Components/VideoDetails";
import Feeds from "./Components/Feeds";
import Body from "./Components/Body";
import VideoCard from "./Components/VideoCard";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Feeds />,
      },
      {
        path: "watch",
        element: <VideoCard />,
      },
      {
        path: "/searchResult/:searchQuery",
        element: <SearchResult />,
      },
      {
        path: "/video/:id",
        element: <VideoDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <AppContext>
    <div className="App">
      {/* <Header /> */}
      <RouterProvider router={appRouter} />
    </div>
    </AppContext>
  );
}

export default App;
