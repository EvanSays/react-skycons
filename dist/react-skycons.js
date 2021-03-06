'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Skycons = require('skycons')(window);

var ReactSkycons = function (_Component) {
  _inherits(ReactSkycons, _Component);

  function ReactSkycons(props) {
    _classCallCheck(this, ReactSkycons);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactSkycons).call(this, props));

    _this.state = {
      skycons: new Skycons({ 'color': _this.props.color })
    };
    return _this;
  }

  _createClass(ReactSkycons, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.state.skycons.add(_reactDom2.default.findDOMNode(this), Skycons[this.props.icon]);

      if (this.props.autoplay) {
        this.state.skycons.play();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.state.skycons.set(_reactDom2.default.findDOMNode(this), Skycons[nextProps.icon]);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.state.skycons.pause();
      this.state.skycons.remove(_reactDom2.default.findDOMNode(this));
    }
  }, {
    key: 'play',
    value: function play() {
      this.state.skycons.play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.state.skycons.pause();
    }
  }, {
    key: 'render',
    value: function render() {
      var props = {};

      var defaultStyle = {
      };

      for (var prop in this.props) {
        props[prop] = this.props[prop];
      }

      delete props.autoplay;

      return _react2.default.createElement('canvas', _extends({ style: defaultStyle }, props));
    }
  }]);

  return ReactSkycons;
}(_react.Component);

ReactSkycons.defaultProps = {
  color: null,
  autoplay: true
};

ReactSkycons.propTypes = {
  color: _react.PropTypes.string,
  autoplay: _react.PropTypes.bool,
  icon: _react.PropTypes.oneOf(['CLEAR_DAY', 'CLEAR_NIGHT', 'PARTLY_CLOUDY_DAY', 'PARTLY_CLOUDY_NIGHT', 'CLOUDY', 'RAIN', 'SLEET', 'SNOW', 'WIND', 'FOG'])
};

exports.default = ReactSkycons;
