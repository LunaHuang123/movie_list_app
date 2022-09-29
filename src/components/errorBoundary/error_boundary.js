import React from 'react';
import { Link } from 'react-router-dom';
import { PAGE_ROUTE } from '../../constants/page_route';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatchError(err) {
    // error handling
    console.log(err);
  }

  render () {
    return (
      this.state.hasError
      ?<div>
        App encountered a problem. Please return to 
        <Link path={'/'+PAGE_ROUTE.homePage}>homepage</Link>.
      </div>
      :<>
        {this.props.children}
      </>
    )
  }
}