import { Component } from "react";

class Search extends Component {
  state = {
    search: "panda",
    type: "all",
  };

  searchHandle = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  filterHandle = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovie(this.state.search, this.state.type);
      }
    );
  };
  render() {
    return (
      <>
        <div className="input-group mt-5">
          <input
            type="search"
            className="form-control rounded-4"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            placeholder="Search"
            value={this.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.searchHandle}
          />
          <div className="input-group-append ms-2">
            <button
              className="btn btn-outline-success"
              type="button"
              id="button-addon2"
              onClick={() =>
                this.props.searchMovie(this.state.search, this.state.type)
              }
            >
              Search Movie
            </button>
          </div>
        </div>
        <div className="my-3">
          <input
            className="form-check-input "
            type="radio"
            name="type"
            data-type="all"
            onChange={this.filterHandle}
            checked={this.state.type === "all"}
          />
          <label className="form-check-label mx-2">All</label>
          <input
            className="form-check-input "
            type="radio"
            name="type"
            data-type="movie"
            onChange={this.filterHandle}
            checked={this.state.type === "movie"}
          />
          <label className="form-check-label mx-2">Movie Only</label>
          <input
            className="form-check-input "
            type="radio"
            name="type"
            data-type="series"
            onChange={this.filterHandle}
            checked={this.state.type === "series"}
          />
          <label className="form-check-label mx-2">Series Only</label>
        </div>
      </>
    );
  }
}

export default Search;
