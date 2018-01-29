import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Nav, Footer } from './../components';
import Helmet from 'react-helmet'
import QueueAnim from 'rc-queue-anim';
import throttle from 'lodash/throttle';
import classNames from 'classnames';

import './../sass/app.scss'

const titleCostants = {
  '/': 'Page index',
  '/service': 'Page service',
  '/contact': 'Page contact',
  '/about': 'Page about'
}

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    // mobile Nav toggle & Header bg
    this.state = {
      menuVisible: false,
      bgDeep: true
    }
  }
  componentDidMount() {
    this.throttle = throttle(this.handleScroll, 150);
    window.addEventListener('scroll', this.throttle);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttle);
  }

  onHandleChange = (key, value) => (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      [key]: value
    });
  }
  handleScroll = (e) => {
    const window = e.target.defaultView;
    const bodyScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (!!(bodyScrollTop < 100) !== this.preSetBg) {
      this.preSetBg = !!(bodyScrollTop < 100)
      this.setState({
        bgDeep: !!(bodyScrollTop < 100)
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.scrollToTop();
    }
  }
  scrollToTop() {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 0)
  }
  render() {
    return (
      <div id="root">
        <Helmet
          htmlAttributes={{
            lang: "zh-hants"
          }}
          title={titleCostants[this.props.location.pathname]}
          meta={[
            { name: 'description', content: 'react gatsby sample' },
            { name: 'keywords', content: 'sample, website' },
          ]}
        />
        <Nav
          visible={this.state.menuVisible}
          activePage={this.props.location.pathname}
          onHandleChange={this.onHandleChange} />
        <Header
          activePage={this.props.location.pathname}
          bgDeep={this.state.bgDeep}
          isOpen={this.state.menuVisible}
          onHandleChange={this.onHandleChange} />
        <div id="mainContent" className={classNames({ menuOpen: this.state.menuVisible })}>
          <QueueAnim key='queueAnim' type="left" duration={300} interval={300}>
            {this.props.children()}
            <Footer key="3" />
          </QueueAnim>
        </div>
      </div>
    );
  }
}
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
