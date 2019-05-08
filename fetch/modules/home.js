import {fetch, fetch_json} from '../api'
export default {
  /* 获取中央apps */
  home_get_center_app_list (params) {
    return fetch('/sw_portal/apply/central_standard', params)
  },
  /* 获取地方apps */
  home_get_local_app_list (params) {
    return fetch_json('/sw_portal/apply/local_standard', params)
  }
}
