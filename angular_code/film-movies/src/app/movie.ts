export class Movie {
  id: number;
  name: string = '';
  year_released: string;
  rating: number;


  load_from_api(json_response) {
    this.id = json_response.id;
    this.name = json_response.name;
    this.year_released = json_response.year_released;
    this.rating = json_response.rating;
    return this;
  }

  send_params_to_api() {

  }
}
