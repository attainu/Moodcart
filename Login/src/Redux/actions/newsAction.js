import { GET_NEWS, TOGGLE_NEWS_FETCHING_STATE } from "../actionTypes";
import axios from "axios";

export const fetchTrendingNews = () => async (dispatch) => {
  try {
    dispatch({ type: GET_NEWS, payload: null });
    dispatch({ type: TOGGLE_NEWS_FETCHING_STATE });
    const response = await axios(
      "https://news67.p.rapidapi.com/trending?limit=25&skip=20&langs=en",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "news67.p.rapidapi.com",
          "x-rapidapi-key":
            "230ca193demshd733f162a356309p16d1bfjsnc21b0f9ae330",
        },
      }
    );
    // console.log(response.data);
    dispatch({ type: GET_NEWS, payload: response.data });
  } catch (error) {
    console.error("error");
  } finally {
    dispatch({ type: TOGGLE_NEWS_FETCHING_STATE });
  }
};

export const fetchSearchedNews = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: GET_NEWS, payload: null });
    dispatch({ type: TOGGLE_NEWS_FETCHING_STATE });
    const response = await axios(
      `https://bing-news-search1.p.rapidapi.com/news/search?count=20&textDecorations=true&setLang=en&cc=in&freshness=Day&originalImg=true&textFormat=Raw&safeSearch=Off&q=${searchQuery}`,
      {
        // the value of last part o the url needs to set
        method: "GET",
        headers: {
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key":
            "230ca193demshd733f162a356309p16d1bfjsnc21b0f9ae330",
          "accept-language": "en",
          "x-bingapis-sdk": "true",
        },
      }
    );
    console.log(response.data.value);
    dispatch({ type: GET_NEWS, payload: response.data.value });
  } catch (error) {
    console.error("error");
  } finally {
    dispatch({ type: TOGGLE_NEWS_FETCHING_STATE });
  }
};

export const fetchCategoryWiseNews = () => async (dispatch) => {
  try {
    dispatch({ type: GET_NEWS, payload: null });
    dispatch({ type: TOGGLE_NEWS_FETCHING_STATE });
    const response = await axios(
      "https://bing-news-search1.p.rapidapi.com/news?textDecorations=true&count=30&cc=in&safeSearch=Off&category=Entertainment&textFormat=Raw",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key":
            "230ca193demshd733f162a356309p16d1bfjsnc21b0f9ae330",
          "x-bingapis-sdk": "true",
        },
      }
    );
    console.log(response.data);
    dispatch({ type: GET_NEWS, payload: response.data });
  } catch (error) {
    console.error("error");
  } finally {
    dispatch({ type: TOGGLE_NEWS_FETCHING_STATE });
  }
};
