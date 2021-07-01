import { Component } from "react";

// this.props.language = 'en', 'ru', 'by'
export class OpenClose extends Component {
  state = {
    open: false,
  };

  toggle = () => this.setState((prevState) => ({ open: !prevState.open }));

  render() {
    let open;
    let close;
    switch (this.props.language) {
      case "en":
        open = "Open";
        close = "Close";
        break;
      case "ru":
        open = "Открыто";
        close = "Закрыто";
        break;
      case "by":
        open = "Адчынена";
        close = "Зачынена";
        break;
      case "ua":
        open = "Вiдчинено";
        close = "Зачинено";
        break;
      default:
        open = "Open";
        close = "Close";
        break;
    }

    return (
      <div>
        <button onClick={this.toggle}>{this.state.open ? open : close}</button>
      </div>
    );
  }
}
