var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import * as React from 'react';
import { StyledForm, StyledFormItem, StyledInputHelper, Div, StyledLabelForm, StyledLabel } from './style';

import { isChild } from '../helpers/typeUtils';

var FormItem = function FormItem(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ['children']);

  return React.createElement(
    StyledFormItem,
    rest,
    rest.label && React.createElement(
      StyledLabelForm,
      { layout: rest.layout },
      React.createElement(
        StyledLabel,
        { required: rest.required },
        rest.label
      )
    ),
    React.createElement(
      Div,
      null,
      !isChild(children) && React.createElement(children.type, Object.assign({}, children.props, rest)),
      rest.helper && React.createElement(
        StyledInputHelper,
        { validateStatus: rest.validateStatus },
        rest.helper
      )
    )
  );
};

FormItem.defaultProps = {
  required: false,
  layout: 'horizontal'
};

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      var hasChild = !isChild(children);

      return React.createElement(
        StyledForm,
        rest,
        hasChild && children
      );
    }
  }]);

  return Form;
}(React.Component);

Form.Item = FormItem;


export default Form;