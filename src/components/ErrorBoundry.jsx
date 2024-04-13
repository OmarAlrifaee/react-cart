import { Component } from "react";
import Loader from "../components/Loader";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <p className="text-center text-capitalize fw-bold text-danger">
            sorry something went wronge...
          </p>
          <Loader />
        </>
      );
    } else return this.props.children;
  }
}
export default ErrorBoundry;
