export const CDN_URL = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';
export const SWIGGY_RES_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0158605&lng=76.3418666&page_type=DESKTOP_WEB_LISTING";

export function restaurentMenuUrl(id) {
    return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.0158605&lng=76.3418666&restaurantId=${id}&submitAction=ENTER`;
}
