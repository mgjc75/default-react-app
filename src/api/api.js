import Axios from "axios";

const SERVER_URL = "https://nc-news-mc-api.herokuapp.com/api";

export default (api = {
  _get(method, id = null, filter = null) {},
  _post(method, id = null, filter = null) {},
  _patch(method, id = null, filter = null) {},
  _put(method, id = null, filter = null) {},
  _delete(method, id = null, filter = null) {}
});
