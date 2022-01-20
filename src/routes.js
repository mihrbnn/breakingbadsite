import Home from "./components/pages/Home";
import About from "./components/pages/About";
import CharacterDetail from "./components/pages/CharacterDetail";
import Characters from "./components/pages/Characters";
import { Quotes } from "./components/pages/Quotes";
import SearchPage from "./components/pages/SearchPage";
import NotFound from "./components/pages/NotFound";

const routes = [
  { title: "Home", path: "/", element: Home, isNav: true },
  { title: "About", path: "about", element: About, isNav: true },
  {
    title: "Character Detail",
    path: "characters/:characterId",
    element: CharacterDetail,
    isNav: false,
  },
  {
    title: "Character Detail",
    path: "search/:characterId",
    element: CharacterDetail,
    isNav: false,
  },
  { title: "Characters", path: "characters", element: Characters, isNav: true },
  { title: "Quotes", path: "quotes", element: Quotes, isNav: true },
  { title: "Search", path: "search", element: SearchPage, isNav: false },
  { title: "Not Found", path: "*", element: NotFound, isNav: false },
];

export default routes;
