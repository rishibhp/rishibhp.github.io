'use strict';

// const e = React.createElement;

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
      // <svg width="400" height="100">
      //   <rect width="100" height="100" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" />
      // </svg>
    );
  }
}

const domContainer = document.querySelector('#crossword_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<Grid/>);