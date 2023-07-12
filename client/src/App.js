import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes } from "react-router-dom";
import './App.css';

import MainNavigation from './shared/navigation/MainNavigation'
import { LanguageProvider } from "./shared/context/Language";
// import Footer from './shared/footer/Footer'


//const Main = React.lazy(() => import("./main/Main.js"));

function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  let routes = (
    <React.Fragment>
      {/* <Route exact path="/" element={<Main />} />
      <Route path="*" element={<Main />} /> */}
    </React.Fragment>
  );

  return (
    <div className="root-wrapper">
      <LanguageProvider>
        <BrowserRouter>
          <MainNavigation />
          <Suspense
            fallback={
              <div className='suspense_container'>
                {/* <LoadingSpinner /> */}
              </div>
            }
          >
            <Routes>{routes}</Routes>
            {/* <Footer /> */}
          </Suspense>
        </BrowserRouter>

      </LanguageProvider>
    </div>
  );
}

export default App;

