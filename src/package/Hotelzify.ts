import { fetchHotel } from "../store/slices";
import { store } from "../store/store";

export class Hotelzify {
  private slug: string;
  constructor(slug: string) {
    this.slug = slug;
  }

  init() {
    store.dispatch(fetchHotel({ websiteSlug: this.slug }));
  }
}
