import { GET_NEWS, TOGGLE_NEWS_FETCHING_STATE } from "../actionTypes";
import axios from "axios";

const fetchTrendingNews = () => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_NEWS_FETCHING_STATE });
    const response = await axios(
      "https://bing-news-search1.p.rapidapi.com/news/trendingtopics?cc=in&textDecorations=true&setLang=en&textFormat=Raw&safeSearch=Off",
      {
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
    console.log(response.data);
    dispatch({ type: GET_NEWS, payload: response.data });
  } catch (error) {
    console.error("error");
  } finally {
    dispatch({ type: TOGGLE_NEWS_FETCHING_STATE });
  }
};

export default etchTrendingNews;
