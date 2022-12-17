import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";
export const YoutubeContext = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setmobileMenu] = useState(false);


  useEffect(() => {
    // const fetchSelectedCategoryData = (query) => {
    //   setLoading(true);
    //   fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {

    //       setSearchResults(contents);
    //       setLoading(false);
    //   });
    // };
    fetchSelectedCategoryData()
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <YoutubeContext.Provider
      value={
        {
          loading,
          setLoading,
          searchResults,
          selectCategories,
          setSelectCategories,
          mobileMenu,
          setmobileMenu
        }
      }
    >
      {props.children}
    </YoutubeContext.Provider>
  );
};
