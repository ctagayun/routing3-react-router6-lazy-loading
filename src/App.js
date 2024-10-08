import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";

// import Home from './pages/Home';
// import About from './pages/About';
/* 
  In this function component we have matching Link and Route components 
  from React Router for the home/ and about/ routes. Furthermore, 
  we have a so-called No Match Route loaded with the NoMatch component 
  which acts as fallback route. From here, we will explore the concept 
  of Lazy Loading.
*/

//React.lazy is an API that makes lazy loading easy. Because we already
//import both page components from another file, we can just use React's
//lazy() method as wrapper here:

//const Home = React.lazy(() => import('./pages/Home'));
//const About = React.lazy(() => import('./pages/About'));

//Lazy loading using loadable() method. No import needed at top of file
// const Home = loadable(() => import('./pages/Home'));
// const About = loadable(() => import('./pages/About'));

//Using using loadable() and loading library for React called @loadable/component
const Home = loadable(() => import("./pages/Home"), {
  resolveComponent: (components) => components.Home,
});
const About = loadable(() => import("./pages/About"), {
  resolveComponent: (components) => components.About,
});


const App = () => {
  return (
    <>
      <h1>React Router</h1>

      {/*Link Component that matches Route Component below */}

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/*Using React Suspense */}
      {/* <Routes>
        <Route index element={ 
           <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
            }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes> */}

      {/* Using loading library for React called @loadable/component. 
          This library applies React Suspense by default
       */}

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

export default App;
