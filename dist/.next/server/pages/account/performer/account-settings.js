module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+PMe":
/***/ (function(module, exports) {



/***/ }),

/***/ "+wvd":
/***/ (function(module, exports) {



/***/ }),

/***/ "/bfT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PERFORMER_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return USER_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return STUDIO_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIRequest; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rP/q");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XwMy");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const TOKEN = 'token';
const ROLE = 'role';
const PERFORMER_ROLE = 'performer';
const USER_ROLE = 'user';
const STUDIO_ROLE = 'studio';
const SORT = {
  descend: 'desc',
  ascend: 'asc'
};
class APIRequest {
  setAuthHeaderToken(token) {
    APIRequest.token = token;
  }
  /**
   * Parses the JSON returned by a network request
   *
   * @param  {object} response A response from a network request
   *
   * @return {object}          The parsed JSON from the request
   */


  parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }

    return response.json();
  }
  /**
   * Checks if a network request came back fine, and throws an error if not
   *
   * @param  {object} response   A response from a network request
   *
   * @return {object|undefined} Returns either the response, or throws an error
   */


  async checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    if (response.status === 403) {
      if (false) {}
    } // const error = new Error(response.statusText) as any;
    // error.response = response;
    // throw error;


    throw response.clone().json();
  }

  request(url, method, body, headers) {
    const verb = (method || 'get').toUpperCase();

    const updatedHeader = _objectSpread({
      'Content-Type': 'application/json',
      // TODO - check me
      Authorization: APIRequest.token || (false ? undefined : '')
    }, headers || {});

    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`, {
      method: verb,
      headers: updatedHeader,
      body: body ? JSON.stringify(body) : null
    }).then(this.checkStatus).then(this.parseJSON);
  }

  buildUrl(baseUrl, params) {
    if (!params) {
      return baseUrl;
    }

    const queryString = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
    return `${baseUrl}?${queryString}`;
  }

  get(url, headers) {
    return this.request(url, 'get', null, headers);
  }

  post(url, data, headers) {
    return this.request(url, 'post', data, headers);
  }

  put(url, data, headers) {
    return this.request(url, 'put', data, headers);
  }

  del(url, data, headers) {
    return this.request(url, 'delete', data, headers);
  }

  upload(url, files, options = {
    onProgress() {},

    method: 'POST'
  }) {
    const uploadUrl = Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`;
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData();
      files.forEach(f => formData.append(f.fieldname, f.file, f.file.name));
      options.customData && Object.keys(options.customData).forEach(fieldname => typeof options.customData[fieldname] !== 'undefined' && formData.append(fieldname, options.customData[fieldname]));
      req.responseType = 'json';
      req.open(options.method || 'POST', uploadUrl);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  register(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.documentVerification) {
        const documentVerificationFile = data.documentVerification.file.originFileObj;
        formData.append('documentVerification', documentVerificationFile, documentVerificationFile.name);
      }

      if (data.idVerification) {
        const idVerificationDile = data.idVerification.file.originFileObj;
        formData.append('idVerification', idVerificationDile, idVerificationDile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['documentVerification', 'idVerification'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

}

_defineProperty(APIRequest, "token", '');

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "0nqn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const filter = (value, option) => option.children.toLowerCase().indexOf(value.toLowerCase()) > -1;

const CountriesSelect = _ref => {
  let {
    defaultValue,
    onChange,
    countries
  } = _ref,
      props = _objectWithoutProperties(_ref, ["defaultValue", "onChange", "countries"]);

  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](defaultValue);

  const handleSelectChange = v => {
    setValue(v);
    onChange && onChange(v);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], _extends({}, props, {
    value: value,
    onChange: handleSelectChange,
    showSearch: true,
    filterOption: filter,
    placeholder: "Select your counties"
  }), countries.map(country => __jsx(Option, {
    key: country.code,
    value: country.code
  }, country.name)));
};

CountriesSelect.defaultProps = {
  autoFocus: false,
  disabled: false,
  mode: '',
  onChange: null
};
/* harmony default export */ __webpack_exports__["a"] = (CountriesSelect);

/***/ }),

/***/ "0wBW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/components/common/layout/page-header.tsx
var page_header = __webpack_require__("Y1dN");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/interfaces/index.ts
var interfaces = __webpack_require__("P8M3");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/components/common/base/select/countries.tsx
var select_countries = __webpack_require__("0nqn");

// EXTERNAL MODULE: ./src/components/performer/index.less
var components_performer = __webpack_require__("kpM1");

// CONCATENATED MODULE: ./src/components/performer/contact-setting-form.tsx
var __jsx = external_react_["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 4
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};

const UserProfile = ({
  firstName,
  lastName,
  onFinish,
  email,
  country,
  phone,
  city,
  loading,
  address,
  zipcode,
  state,
  countries
}) => {
  const [form] = external_antd_["Form"].useForm();
  return __jsx(external_antd_["Form"], _extends({}, formItemLayout, {
    form: form,
    onFinish: onFinish,
    name: "contactSettingForm",
    className: "performerEditForm",
    initialValues: {
      country,
      firstName,
      lastName,
      email,
      phone,
      city,
      address,
      zipcode,
      state
    },
    layout: "vertical"
  }), __jsx(external_antd_["Row"], {
    gutter: 25
  }, __jsx(external_antd_["Col"], {
    sm: 12,
    xs: 24
  }, __jsx(external_antd_["Form"].Item, {
    name: "firstName",
    label: "First Name",
    rules: [{
      pattern: new RegExp('^[a-zA-Z0-9 ]*$'),
      message: 'Alphanumeric'
    }, {
      whitespace: true,
      message: 'Please input your first name!'
    }, {
      required: true,
      message: 'Please input your first name!'
    }]
  }, __jsx(external_antd_["Input"], {
    placeholder: "First name"
  })), __jsx(external_antd_["Form"].Item, {
    name: "lastName",
    label: "Last Name",
    rules: [{
      pattern: new RegExp('^[a-zA-Z0-9 ]*$'),
      message: 'Alphanumeric'
    }, {
      whitespace: true,
      message: 'Please input your last name!'
    }, {
      required: true,
      message: 'Please input your first name!'
    }]
  }, __jsx(external_antd_["Input"], {
    placeholder: "Last name"
  })), __jsx(external_antd_["Form"].Item, {
    name: "country",
    label: "Country",
    rules: [{
      required: true,
      message: 'Please input your country!'
    }]
  }, __jsx(select_countries["a" /* default */], {
    defaultValue: country,
    countries: countries
  })), __jsx(external_antd_["Form"].Item, {
    name: "state",
    label: "State Name"
  }, __jsx(external_antd_["Input"], {
    placeholder: "samplestate"
  })), __jsx(external_antd_["Form"].Item, {
    name: "city",
    label: "City"
  }, __jsx(external_antd_["Input"], {
    placeholder: "samplecity"
  }))), __jsx(external_antd_["Col"], {
    sm: 12,
    xs: 24
  }, __jsx(external_antd_["Form"].Item, {
    name: "zipcode",
    label: "Zip"
  }, __jsx(external_antd_["Input"], {
    placeholder: "012345-678"
  })), __jsx(external_antd_["Form"].Item, {
    name: "address",
    label: "Address"
  }, __jsx(external_antd_["Input"], {
    placeholder: "Address"
  })), __jsx(external_antd_["Form"].Item, {
    name: "email",
    label: "E-mail",
    rules: [{
      type: 'email',
      message: 'The input is not valid E-mail!'
    }, {
      required: true,
      message: 'Please input your E-mail!'
    }]
  }, __jsx(external_antd_["Input"], {
    placeholder: "test@example.com"
  })), __jsx(external_antd_["Form"].Item, {
    name: "phone",
    label: "Mobile Phone",
    rules: [{
      min: 8,
      max: 14,
      message: '8-14 digits'
    }]
  }, __jsx(external_antd_["Input"], {
    placeholder: "+18000 0000"
  })))), __jsx(external_antd_["Form"].Item, tailFormItemLayout, __jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    disabled: loading,
    loading: loading
  }, "Save Changes")));
};

/* harmony default export */ var contact_setting_form = (UserProfile);
// EXTERNAL MODULE: ./src/components/payment/index.ts + 6 modules
var payment = __webpack_require__("awjA");

// EXTERNAL MODULE: ./src/components/commission/commission-card.tsx
var commission_card = __webpack_require__("S8Mw");

// EXTERNAL MODULE: ./src/components/common/base/input-item-list.tsx
var input_item_list = __webpack_require__("dNzx");

// EXTERNAL MODULE: ./src/lib/index.ts + 2 modules
var lib = __webpack_require__("psLn");

// CONCATENATED MODULE: ./src/components/performer/settings/disable-account-form.tsx
var disable_account_form_jsx = external_react_default.a.createElement;

function disable_account_form_extends() { disable_account_form_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return disable_account_form_extends.apply(this, arguments); }





const leftFormItem = [// {
//   name: 'suspendReason',
//   rules: [
//     { required: true, message: 'The suspension reason is requried' },
//     { max: 250, message: 'Max 250 words' }
//   ],
//   label: 'Suspension Reason',
//   children: <Input.TextArea />
// },
{
  name: 'password',
  rules: [{
    required: true,
    message: 'Password is requried'
  }],
  label: 'Enter your password',
  children: disable_account_form_jsx(external_antd_["Input"].Password, {
    placeholder: "Password"
  })
}, {
  name: 'confirmation',
  valuePropName: 'checked',
  rules: [{
    required: true,
    message: 'The confirmation is requried'
  }],
  children: disable_account_form_jsx(external_antd_["Checkbox"], null, "I am sure that i want to suspend my account.")
}];
/* harmony default export */ var disable_account_form = (({
  loading,
  onFinish
}) => {
  const [form] = external_antd_["Form"].useForm();
  return disable_account_form_jsx(external_antd_["Form"], disable_account_form_extends({}, lib["e" /* formItemLayout */], {
    form: form,
    layout: "vertical",
    onFinish: onFinish.bind(undefined),
    name: "disableAccountForm",
    className: "performerEditForm"
  }), disable_account_form_jsx(input_item_list["a" /* default */], {
    fields: leftFormItem
  }), disable_account_form_jsx(external_antd_["Form"].Item, lib["m" /* tailFormItemLayout */], disable_account_form_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: loading
  }, "Save Change")));
});
// CONCATENATED MODULE: ./src/components/performer/settings/default-price-form.tsx
var default_price_form_jsx = external_react_default.a.createElement;

function default_price_form_extends() { default_price_form_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return default_price_form_extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const default_price_form_leftFormItem = [{
  name: 'privateCallPrice',
  rules: [{
    validator: (_, value) => new Promise((resolve, reject) => {
      if (parseInt(value, 10) > 0) return resolve(null);
      return reject(new Error('The price must be greater than 0!'));
    })
  }],
  label: 'Private call tokens/minute',
  children: default_price_form_jsx(external_antd_["InputNumber"], {
    type: "number"
  })
}, {
  name: 'groupCallPrice',
  rules: [{
    validator: (_, value) => new Promise((resolve, reject) => {
      if (parseInt(value, 10) > 0) return resolve(null);
      return reject(new Error('The price must be greater than 0!'));
    })
  }],
  label: 'Group call tokens/minute',
  children: default_price_form_jsx(external_antd_["InputNumber"], {
    type: "number"
  })
}];
const initFormValue = {
  privateCallPrice: 0,
  groupCallPrice: 0
};
/* harmony default export */ var default_price_form = (({
  onFinish,
  privateCallPrice,
  groupCallPrice,
  loading
}) => {
  const [form] = external_antd_["Form"].useForm();
  return default_price_form_jsx(external_antd_["Form"], default_price_form_extends({}, lib["e" /* formItemLayout */], {
    form: form,
    layout: "vertical",
    onFinish: onFinish,
    name: "defaultPriceForm",
    className: "performerEditForm",
    initialValues: _objectSpread(_objectSpread({}, initFormValue), {}, {
      privateCallPrice,
      groupCallPrice
    })
  }), default_price_form_jsx(input_item_list["a" /* default */], {
    fields: default_price_form_leftFormItem
  }), default_price_form_jsx(external_antd_["Form"].Item, lib["m" /* tailFormItemLayout */], default_price_form_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: loading
  }, "Save Change")));
});
// EXTERNAL MODULE: ./src/redux/performer/actions.ts
var actions = __webpack_require__("WT8E");

// EXTERNAL MODULE: ./src/redux/auth/actions.ts
var auth_actions = __webpack_require__("kXO4");

// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__("NsEo");

// EXTERNAL MODULE: ./src/services/index.ts + 13 modules
var services = __webpack_require__("CLrh");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/components/auth/password-change.tsx
var password_change = __webpack_require__("4xUc");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./src/services/api-request.ts
var api_request = __webpack_require__("/bfT");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");

// CONCATENATED MODULE: ./src/components/performer/documents-setting-form.tsx
var documents_setting_form_jsx = external_react_["createElement"];

function documents_setting_form_extends() { documents_setting_form_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return documents_setting_form_extends.apply(this, arguments); }








const documents_setting_form_formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 4
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  }
};
const documents_setting_form_tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};

const DocumentsSettingForm = ({
  onFinish,
  loading,
  performer
}) => {
  const [idVerification, setIdVerification] = external_react_["useState"]([]);
  const [documentVerification, setDocumentVerification] = external_react_["useState"]([]);
  const [releaseForm, setRelaseForm] = external_react_["useState"]([]);
  const [idVerificationId, setIdVerificationId] = external_react_["useState"](performer.idVerificationId);
  const [documentVerificationId, setDocumentVerificationId] = external_react_["useState"](performer.documentVerificationId);
  const [releaseFormId, setReleaseFormId] = external_react_["useState"](performer.releaseFormId);
  const [form] = external_antd_["Form"].useForm();
  external_react_["useEffect"](() => {
    const {
      idVerification: idVerificationFile,
      documentVerification: documentVerificationFile,
      releaseForm: releaseFormFile
    } = performer;

    if (idVerificationFile) {
      setIdVerification([{
        uid: idVerificationFile._id,
        name: idVerificationFile.name,
        status: 'done',
        url: idVerificationFile.url
      }]);
    }

    if (documentVerificationFile) {
      setDocumentVerification([{
        uid: documentVerificationFile._id,
        name: documentVerificationFile.name,
        status: 'done',
        url: documentVerificationFile.url
      }]);
    }

    if (releaseFormFile) {
      setRelaseForm([{
        uid: releaseFormFile._id,
        name: releaseFormFile.name,
        status: 'done',
        url: releaseFormFile.url
      }]);
    }
  }, []);

  const onDocumentVerificationChange = ({
    file,
    fileList
  }) => {
    if (file.status === 'done' && file.response) {
      const {
        data
      } = file.response;
      setDocumentVerificationId(data._id);
      setDocumentVerification([{
        uid: data._id,
        name: data.name,
        status: 'done',
        url: data.url
      }]);
    } else {
      setDocumentVerification(fileList);
    }
  };

  const onIdVerificationChange = ({
    file,
    fileList
  }) => {
    if (file.status === 'done' && file.response) {
      const {
        data
      } = file.response;
      setIdVerificationId(data._id);
      setIdVerification([{
        uid: data._id,
        name: data.name,
        status: 'done',
        url: data.url
      }]);
    } else {
      setIdVerification(fileList);
    }
  };

  const onReleaseFormChange = ({
    file,
    fileList
  }) => {
    if (file.status === 'done' && file.response) {
      const {
        data
      } = file.response;
      setReleaseFormId(data._id);
      setRelaseForm([{
        uid: data._id,
        name: data.name,
        status: 'done',
        url: data.url
      }]);
    } else {
      setRelaseForm(fileList);
    }
  };

  const submit = () => {
    onFinish({
      idVerificationId,
      documentVerificationId,
      releaseFormId
    });
  };

  return documents_setting_form_jsx(external_antd_["Form"], documents_setting_form_extends({}, documents_setting_form_formItemLayout, {
    form: form,
    onFinish: submit,
    name: "documentSettingForm",
    className: "performerEditForm",
    initialValues: {
      documentVerificationId: performer.documentVerificationId,
      idVerificationId: performer.idVerificationId
    },
    layout: "vertical"
  }), documents_setting_form_jsx(external_antd_["Form"].Item, {
    name: "documentVerification",
    rules: [{
      validator: () => {
        if (idVerificationId) return Promise.resolve();
        return Promise.reject(new Error('Verification document is required!'));
      }
    }]
  }, documents_setting_form_jsx(external_antd_["Upload"], {
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: false,
      showDownloadIcon: true
    },
    name: "file",
    headers: {
      Authorization: false ? undefined : ''
    },
    disabled: loading,
    fileList: documentVerification,
    listType: "picture",
    action: services["k" /* performerService */].getDocumentsUploadUrl(),
    onChange: onDocumentVerificationChange
  }, documents_setting_form_jsx(external_antd_["Button"], {
    type: "primary"
  }, documents_setting_form_jsx(icons_["UploadOutlined"], null), ' ', "Upload Document For Verification"))), documents_setting_form_jsx(external_antd_["Form"].Item, {
    name: "idVerification",
    rules: [{
      validator: () => {
        if (idVerificationId) return Promise.resolve();
        return Promise.reject(new Error('Id Verification is required'));
      }
    }]
  }, documents_setting_form_jsx(external_antd_["Upload"], {
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: false,
      showDownloadIcon: true
    },
    name: "file",
    headers: {
      Authorization: false ? undefined : ''
    },
    fileList: idVerification,
    listType: "picture",
    disabled: loading,
    action: services["k" /* performerService */].getDocumentsUploadUrl(),
    onChange: onIdVerificationChange
  }, documents_setting_form_jsx(external_antd_["Button"], {
    type: "primary"
  }, documents_setting_form_jsx(icons_["UploadOutlined"], null), "Upload Id Verification"))), documents_setting_form_jsx(external_antd_["Form"].Item, {
    name: "releaseForm"
  }, documents_setting_form_jsx(external_antd_["Upload"], {
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: false,
      showDownloadIcon: true
    },
    name: "file",
    headers: {
      Authorization: false ? undefined : ''
    },
    fileList: releaseForm,
    listType: "text",
    action: services["k" /* performerService */].getReleaseFormUrl(),
    onChange: onReleaseFormChange,
    disabled: loading
  }, documents_setting_form_jsx(external_antd_["Button"], {
    type: "primary"
  }, documents_setting_form_jsx(icons_["UploadOutlined"], null), "Upload Release Form"))), documents_setting_form_jsx(external_antd_["Form"].Item, documents_setting_form_tailFormItemLayout, documents_setting_form_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    disabled: loading,
    loading: loading
  }, "Save Changes")));
};

/* harmony default export */ var documents_setting_form = (DocumentsSettingForm);
// CONCATENATED MODULE: ./src/components/common/base/select/timezones.tsx
var timezones_jsx = external_react_["createElement"];

function timezones_extends() { timezones_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return timezones_extends.apply(this, arguments); }





const {
  Option
} = external_antd_["Select"];

const filter = (value, option) => option.children.toLowerCase().indexOf(value.toLowerCase()) > -1;

const TimezonesSelect = _ref => {
  let props = Object.assign({}, _ref);
  const [timezones, setTimezones] = external_react_["useState"]([]);
  external_react_["useEffect"](() => {
    const getTimezoneList = async () => {
      try {
        const resp = await services["q" /* settingService */].getTimezones();
        setTimezones(resp.data);
      } catch (e) {
        const err = await Promise.resolve(e);
        external_antd_["message"].error(Object(utils["h" /* getResponseError */])(err));
      }
    };

    getTimezoneList();
  }, []);
  return timezones_jsx(external_antd_["Select"], timezones_extends({}, props, {
    showSearch: true,
    filterOption: filter,
    placeholder: "Select your timezone"
  }), timezones.length > 0 && timezones.map(zone => timezones_jsx(Option, {
    key: zone,
    value: zone
  }, zone)));
};

TimezonesSelect.defaultProps = {
  autoFocus: false,
  disabled: false
};
/* harmony default export */ var select_timezones = (TimezonesSelect);
// EXTERNAL MODULE: ./src/lib/layout.ts
var layout = __webpack_require__("62On");

// CONCATENATED MODULE: ./src/components/performer/broadcast-setting-form.tsx
var broadcast_setting_form_jsx = external_react_["createElement"];

function broadcast_setting_form_extends() { broadcast_setting_form_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return broadcast_setting_form_extends.apply(this, arguments); }




const broadcast_setting_form_formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 24
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const broadcast_setting_form_tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};

const BroadcastSetting = ({
  onFinish,
  maxParticipantsAllowed,
  loading
}) => {
  const [form] = external_antd_["Form"].useForm();
  return broadcast_setting_form_jsx(external_antd_["Form"], broadcast_setting_form_extends({}, broadcast_setting_form_formItemLayout, {
    form: form,
    onFinish: onFinish,
    name: "broadcastSettingForm",
    className: "performerEditForm",
    initialValues: {
      maxParticipantsAllowed: typeof maxParticipantsAllowed === 'number' ? maxParticipantsAllowed : 0
    },
    layout: "vertical"
  }), broadcast_setting_form_jsx(external_antd_["Row"], {
    gutter: 25
  }, broadcast_setting_form_jsx(external_antd_["Col"], {
    sm: 12,
    xs: 24
  }, broadcast_setting_form_jsx(external_antd_["Form"].Item, {
    name: "maxParticipantsAllowed",
    label: "Max Participants Allowed",
    extra: "Set 0 to unlimit participants allowed"
  }, broadcast_setting_form_jsx(external_antd_["InputNumber"], {
    type: "number",
    min: 0,
    style: {
      width: '100%'
    },
    placeholder: "Input max participants allowed"
  })))), broadcast_setting_form_jsx(external_antd_["Form"].Item, broadcast_setting_form_tailFormItemLayout, broadcast_setting_form_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    disabled: loading,
    loading: loading
  }, "Save Changes")));
};

/* harmony default export */ var broadcast_setting_form = (BroadcastSetting);
// EXTERNAL MODULE: ./pages/account/performer/account-settings/index.less
var account_settings = __webpack_require__("dgHP");

// EXTERNAL MODULE: ./src/socket/index.ts + 4 modules
var src_socket = __webpack_require__("AY7M");

// CONCATENATED MODULE: ./pages/account/performer/account-settings/index.tsx
var account_settings_jsx = external_react_default.a.createElement;

function account_settings_extends() { account_settings_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return account_settings_extends.apply(this, arguments); }

function account_settings_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function account_settings_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { account_settings_ownKeys(Object(source), true).forEach(function (key) { account_settings_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { account_settings_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function account_settings_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const {
  Panel
} = external_antd_["Collapse"];

class account_settings_UserProfilePage extends external_react_["PureComponent"] {
  static getInitialProps({
    ctx
  }) {
    const {
      query
    } = ctx;
    return {
      action: query.action
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      updatingMaxPearticipantsAllowed: false,
      paymentInformationKey: '',
      paymentInformation: {}
    };
  }

  componentDidUpdate(prevProps, prevStates) {
    const {
      updateSuccess,
      updateError,
      auth
    } = this.props;
    const {
      paymentInformationKey
    } = this.state;

    if (prevProps.updateSuccess !== updateSuccess && updateSuccess) {
      external_antd_["message"].success('Update Profile Success.');
    }

    if (prevProps.updateError !== updateError && updateError) {
      external_antd_["message"].error(Object(utils["h" /* getResponseError */])(updateError));
    }

    if (prevProps.auth.updatePassword.success !== auth.updatePassword.success && auth.updatePassword.success) {
      external_antd_["message"].success('Update Password Success.');
    }

    if (prevProps.auth.updatePassword.error !== auth.updatePassword.error && auth.updatePassword.error) {
      external_antd_["message"].error(Object(utils["h" /* getResponseError */])(auth.updatePassword.error));
    }

    if (paymentInformationKey && paymentInformationKey !== prevStates.paymentInformationKey) {
      this.getPaymentInformation();
    }
  }

  onFinish(data) {
    const {
      performer,
      updatePerformerProfile: dispatchupdatePerformerProfile
    } = this.props;
    dispatchupdatePerformerProfile(account_settings_objectSpread(account_settings_objectSpread({}, performer), data));
  }

  onTabsChange(key) {
    router_default.a.push({
      pathname: '/account/performer/account-settings',
      query: {
        action: key
      }
    }, `/account/performer/account-settings?action=${key}`, {
      shallow: false
    });
  }

  async onUpdateBroadcastSetting(data) {
    const {
      maxParticipantsAllowed
    } = data;

    try {
      this.setState({
        updatingMaxPearticipantsAllowed: true
      });
      await services["k" /* performerService */].updateBroadcastSetting({
        maxParticipantsAllowed
      });
      external_antd_["message"].success('Update Broadcast Setting Success.');
    } catch (error) {
      const err = await Promise.resolve(error);
      external_antd_["message"].error(Object(utils["h" /* getResponseError */])(err));
    } finally {
      this.setState({
        updatingMaxPearticipantsAllowed: false
      });
    }
  }

  onPasswordChange(data) {
    const {
      updatePassword: dispatchUpdatePassword
    } = this.props;
    dispatchUpdatePassword(data);
  }

  onUpdateDefaultPrice(data) {
    const {
      updateDefaultPrice: dispatchUpdateDefaultPrice
    } = this.props;
    dispatchUpdateDefaultPrice(data);
  }

  async onSuspendAccount(data) {
    try {
      const {
        performer,
        logout: dispatchLogout
      } = this.props; // Check password

      const auth = await services["a" /* authService */].performerLogin({
        username: performer.username,
        password: data.password
      });

      if (!auth.data || !auth.data.token) {
        return external_antd_["message"].error("Something's gone wrong, please try again later");
      }

      await services["k" /* performerService */].suspendAccount(performer._id);
      const socket = this.context;
      const token = services["a" /* authService */].getToken();

      if (socket && token) {
        socket.disconnect();
      }

      dispatchLogout();
    } catch (e) {
      const error = await Promise.resolve(e);
      external_antd_["message"].error(Object(utils["h" /* getResponseError */])(error));
    }

    return undefined;
  }

  onPaymentInformationChange(key) {
    this.setState({
      paymentInformationKey: key
    });
  }

  async getPaymentInformation() {
    const {
      paymentInformationKey
    } = this.state;
    services["h" /* paymentInformationService */].findOne({
      type: paymentInformationKey
    }).then(resp => this.setState({
      paymentInformation: {
        [paymentInformationKey]: resp.data
      }
    }));
  }

  async submitPaymentInfoForm(data) {
    try {
      const {
        paymentInformationKey
      } = this.state;
      const resp = await services["h" /* paymentInformationService */].create(account_settings_objectSpread({
        type: paymentInformationKey
      }, data));
      this.setState({
        paymentInformation: {
          [paymentInformationKey]: resp.data
        }
      });
      external_antd_["message"].success('Update Payment Information Success');
    } catch (e) {
      const error = await Promise.resolve(e);
      external_antd_["message"].error(Object(utils["h" /* getResponseError */])(error));
    }
  }

  render() {
    const {
      performer,
      action,
      auth,
      updating,
      countries
    } = this.props;
    const {
      updatingMaxPearticipantsAllowed,
      paymentInformation
    } = this.state;
    return account_settings_jsx(external_react_default.a.Fragment, null, account_settings_jsx(head_default.a, null, account_settings_jsx("title", null, "Account Settings")), account_settings_jsx("div", {
      className: "account-setting-page"
    }, account_settings_jsx(page_header["a" /* default */], {
      title: "Account Settings"
    }), account_settings_jsx(external_antd_["Tabs"], {
      defaultActiveKey: action || 'commission',
      style: {
        padding: '0 24px'
      },
      size: "large",
      onChange: this.onTabsChange.bind(this)
    }, account_settings_jsx(external_antd_["Tabs"].TabPane, {
      tab: "Commission",
      key: "commission"
    }, account_settings_jsx(commission_card["b" /* default */], null)), account_settings_jsx(external_antd_["Tabs"].TabPane, {
      tab: "Default Price",
      key: "default-price"
    }, account_settings_jsx(default_price_form, account_settings_extends({}, performer, {
      loading: updating,
      onFinish: this.onUpdateDefaultPrice.bind(this)
    }))), account_settings_jsx(external_antd_["Tabs"].TabPane, {
      tab: "Documents",
      key: "documents"
    }, account_settings_jsx(documents_setting_form, {
      loading: updating,
      onFinish: this.onFinish.bind(this),
      performer: performer
    })), account_settings_jsx(external_antd_["Tabs"].TabPane, {
      tab: "Contact Setting",
      key: "contact-settings"
    }, account_settings_jsx(contact_setting_form, account_settings_extends({}, performer, {
      onFinish: this.onFinish.bind(this),
      loading: updating,
      countries: countries
    }))), account_settings_jsx(external_antd_["Tabs"].TabPane, {
      tab: "Broadcast Setting",
      key: "broadcast-settings"
    }, account_settings_jsx(broadcast_setting_form, {
      maxParticipantsAllowed: performer.maxParticipantsAllowed,
      onFinish: this.onUpdateBroadcastSetting.bind(this),
      loading: updatingMaxPearticipantsAllowed
    })), account_settings_jsx(external_antd_["Tabs"].TabPane, {
      tab: "Payment Information",
      key: "paymentInfo"
    }, account_settings_jsx(external_antd_["Collapse"], {
      accordion: true,
      onChange: this.onPaymentInformationChange.bind(this)
    }, account_settings_jsx(Panel, {
      header: "Wire Transfer (Free)",
      key: "wire",
      forceRender: true
    }, account_settings_jsx(payment["f" /* WireTransferSettingForm */], {
      paymentInformation: paymentInformation.wire,
      loading: updating,
      onFinish: this.submitPaymentInfoForm.bind(this)
    })), account_settings_jsx(Panel, {
      header: "Paypal",
      key: "paypal",
      forceRender: true
    }, account_settings_jsx(payment["e" /* PaypalSettingFrom */], {
      paymentInformation: paymentInformation.paypal,
      loading: updating,
      onFinish: this.submitPaymentInfoForm.bind(this)
    })), account_settings_jsx(Panel, {
      header: "Issue Check (U.S only)",
      key: "issue_check_us",
      forceRender: true
    }, account_settings_jsx(payment["c" /* IssueCheckUSSetingForm */], {
      paymentInformation: paymentInformation.issue_check_us,
      loading: updating,
      onFinish: this.submitPaymentInfoForm.bind(this)
    })), account_settings_jsx(Panel, {
      header: "Direct Deposit",
      key: "deposit",
      forceRender: true
    }, account_settings_jsx(payment["b" /* DirectDepositSettingForm */], {
      paymentInformation: paymentInformation.deposit,
      loading: updating,
      onFinish: this.submitPaymentInfoForm.bind(this)
    })), account_settings_jsx(Panel, {
      header: "Paxum",
      key: interfaces["PAYMENT_ACCOUNT"].PAXUM,
      forceRender: true
    }, account_settings_jsx(payment["d" /* PaxumSettingForm */], {
      paymentInformation: paymentInformation[interfaces["PAYMENT_ACCOUNT"].PAXUM],
      loading: updating,
      onFinish: this.submitPaymentInfoForm.bind(this)
    })), account_settings_jsx(Panel, {
      header: "Bitpay",
      key: interfaces["PAYMENT_ACCOUNT"].BITPAY,
      forceRender: true
    }, account_settings_jsx(payment["a" /* BitpaySettigForm */], {
      paymentInformation: paymentInformation[interfaces["PAYMENT_ACCOUNT"].BITPAY],
      loading: updating,
      onFinish: this.submitPaymentInfoForm.bind(this)
    })))), account_settings_jsx(external_antd_["Tabs"].TabPane, {
      key: "timezone",
      tab: "Timezone"
    }, account_settings_jsx("h3", null, "Sometimes the timezone is very important so make sure you alway set up it correctly. We will contact you taking into consideration the time zone and so may the performer do!"), account_settings_jsx(external_antd_["Form"], account_settings_extends({
      onFinish: this.onFinish.bind(this),
      layout: "vertical",
      initialValues: {
        timezone: performer.timezone
      }
    }, layout["c" /* formItemLayout */]), account_settings_jsx(external_antd_["Form"].Item, {
      name: "timezone",
      key: "timezone",
      label: "Timezone",
      rules: [{
        required: true,
        message: 'Please input your timezone!'
      }]
    }, account_settings_jsx(select_timezones, {
      autoFocus: true
    })), account_settings_jsx(external_antd_["Form"].Item, null, account_settings_jsx(external_antd_["Button"], {
      type: "primary",
      disabled: updating,
      loading: updating,
      htmlType: "submit"
    }, "Save Changes")))), account_settings_jsx(external_antd_["Tabs"].TabPane, {
      tab: "Disable Account",
      key: "disable-account"
    }, account_settings_jsx(disable_account_form, {
      loading: updating,
      onFinish: this.onSuspendAccount.bind(this)
    })), account_settings_jsx(external_antd_["Tabs"].TabPane, {
      key: "change-password",
      tab: "Change Password"
    }, account_settings_jsx(password_change["a" /* default */], account_settings_extends({
      onFinish: this.onPasswordChange.bind(this)
    }, auth.updatePassword))))));
  }

}

account_settings_defineProperty(account_settings_UserProfilePage, "authenticate", true);

account_settings_defineProperty(account_settings_UserProfilePage, "layout", 'primary');

account_settings_UserProfilePage.contextType = src_socket["c" /* SocketContext */];

const mapStateToProps = state => ({
  performer: state.performer.current,
  updating: state.performer.updating,
  updateSuccess: state.performer.updateSuccess,
  updateError: state.performer.updateError,
  countries: state.settings.countries,
  auth: state.auth
});

const mapDispatch = {
  updatePerformerProfile: actions["db" /* updatePerformerProfile */],
  logout: auth_actions["e" /* logout */],
  updatePaymentInfo: actions["ab" /* updatePaymentInfo */],
  updatePassword: auth_actions["s" /* updatePassword */],
  updateDirectDeposit: actions["Y" /* updateDirectDeposit */],
  updateBitpay: actions["V" /* updateBitpay */],
  updatePaxum: actions["Z" /* updatePaxum */],
  updateDefaultPrice: actions["X" /* updateDefaultPrice */]
};
/* harmony default export */ var performer_account_settings = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatch)(account_settings_UserProfilePage));

/***/ }),

/***/ "2UW8":
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0wBW");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4WNP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/***/ }),

/***/ "4xUc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  }
};

const PasswordChange = ({
  onFinish,
  submiting
}) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({
  layout: "vertical",
  onFinish: onFinish
}, formItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  name: "prePassword",
  label: "Old Password",
  rules: [{
    required: true,
    message: 'Please input your old password!'
  }, {
    min: 6,
    max: 14,
    message: '6-14 characters'
  }],
  hasFeedback: true
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
  placeholder: "Old Password"
})), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  name: "password",
  label: "New Password",
  rules: [{
    required: true,
    message: 'Please input your password!'
  }, {
    min: 6,
    max: 14,
    message: '6-14 characters'
  }],
  hasFeedback: true
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
  placeholder: "Password"
})), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  name: "confirm",
  dependencies: ['password'],
  hasFeedback: true,
  label: "Retype password",
  rules: [{
    required: true,
    message: 'Please confirm your password!'
  }, ({
    getFieldValue
  }) => ({
    validator(rule, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }

      return Promise.reject(new Error('The two passwords that you entered do not match!'));
    }

  })]
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
  placeholder: "Confirm Password"
})), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  type: "primary",
  htmlType: "submit",
  loading: submiting,
  disabled: submiting,
  className: "btn-submit"
}, "Save Changes")));

PasswordChange.defaultProps = {
  submiting: false
};
/* harmony default export */ __webpack_exports__["a"] = (PasswordChange);

/***/ }),

/***/ "5pvF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MessageService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messageService; });
/* harmony import */ var src_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XwMy");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/bfT");


class MessageService extends _api_request__WEBPACK_IMPORTED_MODULE_1__[/* APIRequest */ "a"] {
  getConversations(query) {
    return this.get(this.buildUrl('/conversations', query));
  }

  searchConversations(query) {
    return this.get(this.buildUrl('/conversations/search', query));
  }

  createConversation(data) {
    return this.post('/conversations', data);
  }

  getConversationDetail(id) {
    return this.get(`/conversations/${id}`);
  }

  getConversationByStreamId(streamId) {
    return this.get(`/conversations/stream/${streamId}`);
  }

  getMessages(conversationId, query) {
    return this.get(this.buildUrl(`/messages/conversations/${conversationId}`, query));
  }

  getPublicMessages(conversationId, query) {
    return this.get(this.buildUrl(`/messages/conversations/public/${conversationId}`, query));
  }

  sendMessage(conversationId, data) {
    return this.post(`/messages/conversations/${conversationId}`, data);
  }

  sendStreamMessage(conversationId, data) {
    return this.post(`/messages/stream/conversations/${conversationId}`, data);
  }

  sendPublicStreamMessage(conversationId, data) {
    return this.post(`/messages/stream/public/conversations/${conversationId}`, data);
  }

  findPublicConversationPerformer(performerId) {
    return this.get(`/conversations/stream/public/${performerId}`);
  }

  countTotalNotRead() {
    return this.get('/messages/counting-not-read-messages');
  }

  readAllInConversation(conversationId, recipientId) {
    return this.post('/messages/read-all', {
      conversationId,
      recipientId
    });
  }

  getMessageUploadUrl() {
    return `${src_env__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].apiEndpoint}/messages/private/file`;
  }

  deleteMessage(id) {
    return this.del(`/messages/${id}`);
  }

  deleteAllMessageInConversation(conversationId) {
    return this.del(`/messages/${conversationId}/remove-all-message`);
  }

}
const messageService = new MessageService();

/***/ }),

/***/ "62On":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formItemLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return tailFormItemLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultColor; });
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  }
};
function backToTop() {
  const content = document.querySelector('.content');
  const container = document.querySelector('.container');
  content.scroll({
    top: 0,
    behavior: 'auto'
  });
  container.scroll({
    top: 0,
    behavior: 'auto'
  });
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};
const defaultColor = {
  primaryColor: '#ff0066',
  successColor: '#2fb52d',
  whiteColor: '#ffffff'
};

/***/ }),

/***/ "7QX/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PhotoService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return photoService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rP/q");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/bfT");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XwMy");






class PhotoService extends src_services_api_request__WEBPACK_IMPORTED_MODULE_3__[/* APIRequest */ "a"] {
  search(params) {
    return this.get(this.buildUrl('/performer/performer-assets/photos/search', params));
  }

  searchByGallery(galleryId, params, headers) {
    return this.get(this.buildUrl(`/user/performer-assets/photos/${galleryId}/search`, params), headers);
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/photos/${id}/view`, headers);
  }

  myPhotos(query) {
    return this.get(this.buildUrl('/performer/performer-assets/photos/search', query));
  }

  remove(id) {
    return this.del(`/performer/performer-assets/photos/${id}`);
  }

  create(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.photo) {
        const photo = data.photo.file.originFileObj;
        formData.append('photo', photo, photo.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(data, ['photo'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_1__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_3__[/* TOKEN */ "f"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  update(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.photo && data.photo.file) {
        const photo = data.photo.file.originFileObj;
        formData.append('photo', photo, photo.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(data, ['photo'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_1__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_3__[/* TOKEN */ "f"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  uploadImages(file, payload, onProgress) {
    return this.upload('/performer/performer-assets/photos/upload', [{
      fieldname: 'photo',
      file
    }], {
      onProgress,
      customData: payload
    });
  }

}
const photoService = new PhotoService();

/***/ }),

/***/ "8wR9":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Gt4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PerformerCategoriesService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return performerCategories; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class PerformerCategoriesService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  getList(query) {
    return this.get(this.buildUrl('/performer-categories', query));
  }

  details(id) {
    return this.get(`/performer-categories/${id}/view`);
  }

}
const performerCategories = new PerformerCategoriesService();

/***/ }),

/***/ "ADto":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return converDuration; });
/* unused harmony export parseAge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatDuration; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function formatDate(date, format = 'DD/MM/YYYY HH:mm:ss') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
}
function converDuration(duration, format = 'HH:mm') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default.a.utc(moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(duration, 'milliseconds').asMilliseconds()).format(format);
}
function parseAge(date, format = 'MMMM DD, YYYY') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
}
function getAge(d) {
  if (!d) return '';
  const age = new Date().getFullYear() - new Date(d).getFullYear();
  return age;
}
function formatDuration(s) {
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s - hours * 3600) / 60);
  const seconds = s - hours * 3600 - minutes * 60;
  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

/***/ }),

/***/ "AY7M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ socket_Socket; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ socket_Event; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ SocketContext; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__("pI2v");
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// EXTERNAL MODULE: ./src/services/auth.service.ts
var auth_service = __webpack_require__("LLt/");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./src/socket/utils.ts
/* eslint-disable prefer-spread */

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
const warning = (...args) => {
  // debug on development and staging.
  if (true) return;
  /* eslint-disable no-console */

  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error.apply(console, args);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(args.join(' '));
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

};
const debug = (...args) => {
  // debug on development and staging.
  if (true) return;
  /* eslint-disable no-console */

  if (typeof console !== 'undefined' && typeof console.debug === 'function') {
    console.debug.apply(console, args);
  }
};
// CONCATENATED MODULE: ./src/socket/SocketContext.tsx

const SocketContext = /*#__PURE__*/external_react_default.a.createContext('socket');
// EXTERNAL MODULE: ./src/env.ts
var env = __webpack_require__("XwMy");

// CONCATENATED MODULE: ./src/socket/Socket.tsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Socket_Socket extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    this.connect();
  }

  componentDidUpdate(nextProps) {
    const {
      loggedIn
    } = this.props;

    if (nextProps.loggedIn !== loggedIn) {
      this.connect();
    }

    return true;
  }

  componentWillUnmount() {
    this.socket && this.socket.close();
  }

  connect() {
    const {
      loggedIn
    } = this.props;
    const token = loggedIn && auth_service["a" /* authService */].getToken();

    if (true) {
      return;
    }

    const {
      uri = env["a" /* default */].socketEndpoint
    } = this.props;
    const options = {
      transports: ['websocket', 'polling', 'long-polling'],
      query: token ? `token=${token}` : ''
    };
    this.socket && this.socket.close();
    this.socket = external_socket_io_client_default()(uri, this.mergeOptions(options));
    this.socket.status = 'initialized';
    this.socket.on('connect', () => {
      this.socket.status = 'connected';
      debug('connected');
    });
    this.socket.on('disconnect', () => {
      this.socket.status = 'disconnected';
      debug('disconnect');
    });
    this.socket.on('error', err => {
      this.socket.status = 'failed';
      warning('error', err);
    });
    this.socket.on('reconnect', data => {
      this.socket.status = 'connected';
      debug('reconnect', data);
    });
    this.socket.on('reconnect_attempt', () => {
      debug('reconnect_attempt');
    });
    this.socket.on('reconnecting', () => {
      this.socket.status = 'reconnecting';
      debug('reconnecting');
    });
    this.socket.on('reconnect_failed', error => {
      this.socket.status = 'failed';
      warning('reconnect_failed', error);
    });
  }

  mergeOptions(options = {}) {
    const defaultOptions = {
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1 * 1000,
      reconnectionDelayMax: 5 * 1000,
      autoConnect: true,
      transports: ['websocket', 'polling', 'long-polling'],
      rejectUnauthorized: true
    };
    return _objectSpread(_objectSpread({}, defaultOptions), options);
  }

  render() {
    const {
      children
    } = this.props;
    return __jsx(SocketContext.Provider, {
      value: this.socket
    }, external_react_default.a.Children.only(children));
  }

}

const mapStates = state => ({
  loggedIn: state.auth.loggedIn
});

/* harmony default export */ var socket_Socket = (Object(external_react_redux_["connect"])(mapStates)(Socket_Socket));
// CONCATENATED MODULE: ./src/socket/Event.tsx




class Event_Event extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      event,
      handler
    } = this.props;
    const socket = this.context;

    if (!socket) {
      warning('Socket IO connection has not been established.');
      return;
    }

    socket.on(event, handler);
  }

  componentWillUnmount() {
    const {
      event
    } = this.props;
    const socket = this.context;

    if (!socket) {
      warning('Socket IO connection has not been established.');
      return;
    }

    socket.off(event);
  }

  render() {
    return false;
  }

}

Event_Event.contextType = SocketContext;
/* harmony default export */ var socket_Event = (Event_Event);
// CONCATENATED MODULE: ./src/socket/index.ts




if (false) {}



/***/ }),

/***/ "CLrh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ auth_service["a" /* authService */]; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ user_service["a" /* userService */]; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ post_service["a" /* postService */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ perfomer_categories_service["a" /* performerCategories */]; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ perfomer_service["b" /* performerService */]; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ videoService; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ product_service["a" /* productService */]; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ setting_service["a" /* settingService */]; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ photo_service["a" /* photoService */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ galleryService; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ favouriteService; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ transactionService; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ streamService; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ message_service["a" /* messageService */]; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ purchaseItemService; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ orderService; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ earningService; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ payoutRequestService; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ refundRequestService; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ studioService; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ bannerService; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ payment_information_service["a" /* paymentInformationService */]; });

// UNUSED EXPORTS: AuthService, UserService, PostService, PerformerCategoriesService, PerformerService, GENNDER_PERFORMER, VideoService, ProductService, SettingService, PhotoService, GalleryService, TokenPackageService, tokenPackageService, TransactionService, MessageService, PurchaseItemService, OrderService, RefundRequestService, UtilsService, utilsService, StudioService, BannerService

// EXTERNAL MODULE: ./src/services/auth.service.ts
var auth_service = __webpack_require__("LLt/");

// EXTERNAL MODULE: ./src/services/user.service.ts
var user_service = __webpack_require__("ITiG");

// EXTERNAL MODULE: ./src/services/post.service.ts
var post_service = __webpack_require__("Co7z");

// EXTERNAL MODULE: ./src/services/perfomer-categories.service.ts
var perfomer_categories_service = __webpack_require__("9Gt4");

// EXTERNAL MODULE: ./src/services/perfomer.service.ts
var perfomer_service = __webpack_require__("EC5a");

// EXTERNAL MODULE: ./src/services/api-request.ts
var api_request = __webpack_require__("/bfT");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./src/lib/string.ts
var string = __webpack_require__("rP/q");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./src/env.ts
var env = __webpack_require__("XwMy");

// CONCATENATED MODULE: ./src/services/video.service.ts






class video_service_VideoService extends api_request["a" /* APIRequest */] {
  search(params) {
    return this.get(this.buildUrl('/user/performer-assets/videos/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/videos', params));
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/videos/${id}/view`, headers);
  }

  myVideos(query) {
    return this.get(this.buildUrl('/performer/performer-assets/videos/search', query));
  }

  removeMyVideo(id) {
    return this.del(`/performer/performer-assets/videos/${id}`);
  }

  create(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.video) {
        const video = data.video.file.originFileObj;
        formData.append('video', video, video.name);
      }

      if (data.trailer) {
        const trailer = data.trailer.file.originFileObj;
        formData.append('trailer', trailer, trailer.name);
      }

      if (data.thumbnail) {
        const thumbnail = data.thumbnail.file.originFileObj;
        formData.append('thumbnail', thumbnail, thumbnail.name);
      }

      Object.keys(Object(external_lodash_["omit"])(data, ['video', 'thumbnail', 'trailer'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(string["c" /* isUrl */])(url) ? url : `${env["a" /* default */].apiEndpoint}${url}`);
      const token = external_js_cookie_default.a.get(api_request["f" /* TOKEN */]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  update(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.video && data.video.file) {
        const video = data.video.file.originFileObj;
        formData.append('video', video, video.name);
      }

      if (data.trailer && data.trailer.file) {
        const trailer = data.trailer.file.originFileObj;
        formData.append('trailer', trailer, trailer.name);
      }

      if (data.thumbnail && data.thumbnail.file) {
        const thumbnail = data.thumbnail.file.originFileObj;
        formData.append('thumbnail', thumbnail, thumbnail.name);
      }

      Object.keys(Object(external_lodash_["omit"])(data, ['video', 'thumbnail', 'trailer'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(string["c" /* isUrl */])(url) ? url : `${env["a" /* default */].apiEndpoint}${url}`);
      const token = external_js_cookie_default.a.get(api_request["f" /* TOKEN */]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  increaseView(id) {
    return this.post(`/user/performer-assets/videos/${id}/inc-view`);
  } // update(videoId, performerId, data) {
  //   return this.put(`/performer/performer-assets/videos/${videoId}`, {
  //     ...data,
  //     performerId
  //   });
  // }


  userFindVideoById(id, headers = {}) {
    return this.get(`/user/performer-assets/videos/${id}`, headers);
  }

}
const videoService = new video_service_VideoService();
// EXTERNAL MODULE: ./src/services/product.service.ts
var product_service = __webpack_require__("HR6+");

// EXTERNAL MODULE: ./src/services/setting.service.ts
var setting_service = __webpack_require__("zM0U");

// EXTERNAL MODULE: ./src/services/photo.service.ts
var photo_service = __webpack_require__("7QX/");

// CONCATENATED MODULE: ./src/services/gallery.service.ts

class gallery_service_GalleryService extends api_request["a" /* APIRequest */] {
  search(params, isPerformer = true) {
    return this.get(this.buildUrl(isPerformer ? '/performer/performer-assets/galleries/search' : '/user/performer-assets/galleries/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/galleries', params));
  }

  create(data) {
    return this.post('/performer/performer-assets/galleries', data);
  }

  update(id, data) {
    return this.put(`/performer/performer-assets/galleries/${id}`, data);
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/galleries/${id}/view`, headers);
  }

  publicdetails(id, headers) {
    return this.get(`/user/performer-assets/galleries/${id}/view`, headers);
  }

  remove(id) {
    return this.del(`/performer/performer-assets/galleries/${id}`);
  }

}
const galleryService = new gallery_service_GalleryService();
// CONCATENATED MODULE: ./src/services/favourite.service.ts


class favourite_service_FavouriteService extends api_request["a" /* APIRequest */] {
  like(id) {
    return this.post(`/favourite/${id}/like`);
  }

  unlike(id) {
    return this.post(`/favourite/${id}/unlike`);
  }

  favorite(id, isFavorited) {
    return this.post(`/favourite/${id}/${isFavorited ? 'unlike' : 'like'}`);
  }

  search(query) {
    return this.get(this.buildUrl('/favourite', query));
  }

}

const favouriteService = new favourite_service_FavouriteService();
// EXTERNAL MODULE: ./src/services/token-package.service.ts
var token_package_service = __webpack_require__("XTf7");

// CONCATENATED MODULE: ./src/services/transaction.service.ts

class transaction_service_TransactionService extends api_request["a" /* APIRequest */] {
  search(params) {
    return this.get(this.buildUrl('/transactions/user/search', params));
  }

  sendTipToken(performerId, token, conversationId) {
    return this.post(`/member/send-tip-token/${performerId}`, {
      token,
      conversationId
    });
  }

  sendPaidToken(conversationId) {
    return this.post(`/member/send-pay-token/${conversationId}`);
  }

}
const transactionService = new transaction_service_TransactionService();
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/lib/index.ts + 2 modules
var lib = __webpack_require__("psLn");

// CONCATENATED MODULE: ./src/services/stream.service.tsx





class stream_service_StreamService extends api_request["a" /* APIRequest */] {
  getSessionId(id, type) {
    return this.get(`/streaming/session/${id}/${type}`);
  }

  goLive() {
    return this.post('/streaming/live');
  }

  joinPublicChat(performerId) {
    return this.post(`/streaming/join/${performerId}`);
  }

  requestPrivateChat(performerId) {
    return this.post(`/streaming/private-chat/${performerId}`);
  }

  acceptPrivateChat(id) {
    return this.get(`/streaming/private-chat/${id}`);
  }

  startGroupChat() {
    return this.post('/streaming/group-chat');
  }

  joinGroupChat(id) {
    return this.get(`/streaming/group-chat/${id}`);
  }

  generateOneTimeToken(data) {
    return this.post('/streaming/token', data);
  }

  async getPublishToken(options, expireDate = external_moment_default()().add(1, 'd').toDate().getTime()) {
    try {
      const {
        settings,
        streamId
      } = options;
      const {
        secureOption
      } = settings;

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'publish',
          expireDate
        });
        return resp.data.tokenId;
      }

      return null;
    } catch (err) {
      const error = await Promise.resolve(err);
      external_antd_["message"].error(Object(lib["j" /* getResponseError */])(error));
      return null;
    }
  }

  async getSubscriberToken(options, expireDate = external_moment_default()().add(1, 'd').toDate().getTime()) {
    try {
      const {
        settings,
        streamId
      } = options;
      const {
        secureOption
      } = settings;

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'play',
          expireDate
        });
        return resp.data.tokenId;
      }

      return null;
    } catch (err) {
      const error = await Promise.resolve(err);
      external_antd_["message"].error(Object(lib["j" /* getResponseError */])(error));
      return null;
    }
  }

  async getLiveStreamOrVodURL(options, expireDate = external_moment_default()().add(1, 'd').toDate().getTime(), _player = 'hls') {
    // http://[IP_Address]/<Application_Name>/streams/streamID.mp4?token=tokenId
    // http://[IP_Address]/<Application_Name>/streams/streamID.m3u8?token=tokenId
    // http://[IP_Address]/<Application_Name>/play.html?name=streamID&playOrder=hls&token=tokenId
    try {
      // const src = `https://${viewerURL}:5443/${appName}/streams/${streamId}.m3u8${oneTimeToken ? `?token=${oneTimeToken}` : ''}`;
      // eslint-disable-next-line no-shadow
      const {
        appName,
        settings,
        streamId
      } = options;
      const {
        secureOption,
        viewerURL
      } = settings;
      const extension = _player === 'hls' ? 'm3u8' : 'mp4';

      if (!viewerURL || !appName) {
        return '';
      }

      let oneTimeToken = '';

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'play',
          expireDate
        });
        oneTimeToken = resp.data.tokenId;
      }

      const {
        protocol
      } = window.location;
      return `${protocol}//${viewerURL}/${appName}/streams/${streamId}.${extension}${oneTimeToken ? `?token=${oneTimeToken}` : ''}`;
    } catch (err) {
      const error = await Promise.resolve(err);
      external_antd_["message"].error(Object(lib["j" /* getResponseError */])(error));
      return '';
    }
  }

}

const streamService = new stream_service_StreamService();
// EXTERNAL MODULE: ./src/services/message.service.ts
var message_service = __webpack_require__("5pvF");

// CONCATENATED MODULE: ./src/services/purchase-item.service.ts

class purchase_item_service_PurchaseItemService extends api_request["a" /* APIRequest */] {
  search(query) {
    return this.get(this.buildUrl('/purchased-items/user/search', query));
  }

  purchaseItem(id, type, data) {
    return this.post(`/purchase-items/${type}/${id}`, data);
  }

  purchaseProduct(id) {
    return this.post(`/purchase-items/product/${id}`);
  }

  purchaseVideo(id) {
    return this.post(`/purchase-items/video/${id}`);
  }

}
const purchaseItemService = new purchase_item_service_PurchaseItemService();
// CONCATENATED MODULE: ./src/services/order.service.ts
// import { IGalleryCreate } from 'src/interfaces';

class order_service_OrderService extends api_request["a" /* APIRequest */] {
  search(payload) {
    return this.get(this.buildUrl('/orders/search', payload));
  }

  details(id) {
    return this.get(`/orders/details/${id}`);
  }

  update(id, data) {
    return this.put(`/orders/${id}/update`, data);
  }

  userSearch(query) {
    return this.get(this.buildUrl('/orders/user/search', query));
  }

  userFindDetails(id) {
    return this.get(`/orders/user/details/${id}`);
  }

}
const orderService = new order_service_OrderService();
// CONCATENATED MODULE: ./src/services/earning.service.ts


class earning_service_EarningService extends api_request["a" /* APIRequest */] {
  search(params, role = 'performer') {
    return this.get(this.buildUrl(`/earning/${role}/search`, params));
  }

  stats(params, role = 'performer') {
    return this.get(this.buildUrl(`/earning/${role}/stats`, params));
  }

}

const earningService = new earning_service_EarningService();
// CONCATENATED MODULE: ./src/services/payout-request.ts


class payout_request_PayoutRequestService extends api_request["a" /* APIRequest */] {
  calculate(params, role) {
    return this.get(this.buildUrl(`/earning/${role || 'performer'}/payout`, params));
  }

  search(query) {
    return this.get(this.buildUrl('/payout-requests/performer/search', query));
  }

  studioSearch(query) {
    return this.get(this.buildUrl('/payout-requests/studio/search', query));
  }

  create(body, role = 'performer') {
    return this.post(`/payout-requests/${role}`, body);
  }

  update(id, body, role = 'performer') {
    return this.put(`/payout-requests/${role}/${id}`, body);
  }

  detail(id, headers, role = 'performer') {
    return this.get(`/payout-requests/${role}/${id}/view`, headers);
  }

}

const payoutRequestService = new payout_request_PayoutRequestService();
// CONCATENATED MODULE: ./src/services/refund-request.service.ts

class refund_request_service_RefundRequestService extends api_request["a" /* APIRequest */] {
  create(data) {
    return this.post('/refund-requests', data);
  }

  search(params) {
    return this.get(this.buildUrl('/refund-requests/search', params));
  }

}
const refundRequestService = new refund_request_service_RefundRequestService();
// CONCATENATED MODULE: ./src/services/utils.service.ts

class utils_service_UtilsService extends api_request["a" /* APIRequest */] {
  countriesList() {
    return this.get('/countries/list');
  }

  languagesList() {
    return this.get('/languages/list');
  }

  phoneCodesList() {
    return this.get('/phone-codes/list');
  }

  statistics() {
    return this.get('/statistics/admin');
  }

}
const utilsService = new utils_service_UtilsService();
// CONCATENATED MODULE: ./src/services/studio.service.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class studio_service_StudioService extends api_request["a" /* APIRequest */] {
  me(headers) {
    return this.get('/studio/me', headers);
  }

  update(payload) {
    return this.put('/studio/update', payload);
  }

  updatePaymentInfo(payload) {
    return this.post('/studio/bank-transfer/update', payload);
  }

  updateDirectDepost(payload) {
    return this.post('/studio/direct-deposit/update', payload);
  }

  updatePaxum(payload) {
    return this.post('/studio/paxum/update', payload);
  }

  updateBitpay(payload) {
    return this.post('/studio/bitpay/update', payload);
  }

  getCommission() {
    return this.get('/settings/studio/commission');
  }

  addModel(payload) {
    return this.post('/studio/members', payload);
  }

  getMembers(params) {
    return this.get(this.buildUrl('/studio/members', params));
  }

  getMemberCommissions(params) {
    return this.get(this.buildUrl('/studio/commission', params));
  }

  updateMemberCommission(id, commission) {
    return this.put(`/studio/commission/member/${id}`, {
      commission
    });
  }

  getPerformerRequest(params) {
    return this.get(this.buildUrl('/payout-requests/studio/performer-request', params));
  }

  updateStatusPerformerRequest(id, payload) {
    return this.put(`/payout-requests/studio/update/${id}`, _objectSpread({}, payload));
  }

  updateMemberStatus(id, status) {
    return this.post(`/studio/members/${id}/active`, {
      status
    });
  }

  stats() {
    return this.get('/studio/stats');
  }

  getDocumentsUploadUrl() {
    return `${env["a" /* default */].apiEndpoint}/studio/documents/upload`;
  }

}
const studioService = new studio_service_StudioService();
// CONCATENATED MODULE: ./src/services/banner.service.ts

class banner_service_BannerService extends api_request["a" /* APIRequest */] {
  search(query) {
    return this.get(this.buildUrl('/banners/search', query));
  }

}
const bannerService = new banner_service_BannerService();
// EXTERNAL MODULE: ./src/services/payment-information.service.ts
var payment_information_service = __webpack_require__("caM8");

// CONCATENATED MODULE: ./src/services/index.ts

























/***/ }),

/***/ "Co7z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PostService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class PostService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  search(query) {
    return this.get(this.buildUrl('/posts/search', query));
  }

  findById(id) {
    return this.get(`/posts/${id}`);
  }

}
const postService = new PostService();

/***/ }),

/***/ "EC5a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PerformerService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GENNDER_PERFORMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return performerService; });
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rP/q");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/bfT");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XwMy");





class PerformerService extends _api_request__WEBPACK_IMPORTED_MODULE_3__[/* APIRequest */ "a"] {
  me(headers) {
    return this.get('/performers/me', headers);
  }

  updateMe(payload) {
    return this.put('/performers', payload);
  }

  search(query) {
    return this.get(this.buildUrl('/performers/search', query));
  }

  details(username, headers = {}) {
    return this.get(`/performers/${username}/view`, headers);
  }

  getAvatarUploadUrl() {
    return `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}/performers/avatar/upload`;
  }

  getDocumentsUploadUrl() {
    return `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}/performers/documents/upload`;
  }

  getReleaseFormUrl() {
    return `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}/performers/release-form/upload`;
  }

  myProduct(query) {
    return this.get(this.buildUrl('/performer/performer-assets/products/search', query));
  }

  createProduct(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.image) {
        const image = data.image.file.originFileObj;
        formData.append('image', image, image.name);
      }

      if (data.digitalFile) {
        const digitalFile = data.digitalFile.file.originFileObj;
        formData.append('digitalFile', digitalFile, digitalFile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['image', 'digitalFile'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_0__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_3__[/* TOKEN */ "f"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  updateProduct(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.image && data.image.file) {
        const image = data.image.file.originFileObj;
        formData.append('image', image, image.name);
      }

      if (data.digitalFile && data.digitalFile.file) {
        const digitalFile = data.digitalFile.file.originFileObj;
        formData.append('digitalFile', digitalFile, digitalFile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['image', 'digitalFile'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_0__[/* isUrl */ "c"])(url) ? url : `${_env__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].apiEndpoint}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_3__[/* TOKEN */ "f"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  removeProduct(id) {
    return this.del(`/performer/performer-assets/products/${id}`);
  }

  getCommission() {
    return this.get('/settings/performer/commission');
  }

  updatePaymentInfo(payload) {
    return this.post('/performers/bank-transfer/update', payload);
  }

  updateDirectDepost(payload) {
    return this.post('/performers/direct-deposit/update', payload);
  }

  updatePaxum(payload) {
    return this.post('/performers/paxum/update', payload);
  }

  updateBitpay(payload) {
    return this.post('/performers/bitpay/update', payload);
  }

  updateStreamingStatus(payload) {
    return this.post('/performers/streaming-status/update', payload);
  }

  geoBlock(payload) {
    return this.post('/performers/blocking/update', payload);
  }

  getBlockedList() {
    return this.get(this.buildUrl('/performers/blocking'));
  }

  increaseView(performerId) {
    return this.post(`/performers/${performerId}/inc-view`);
  }

  updateDefaultPrice(payload) {
    return this.post('/performers/default-price/update', payload);
  }

  updateBroadcastSetting(payload) {
    return this.post('/performers/broadcast-setting/update', payload);
  }

  suspendAccount(performerId) {
    return this.post(`/performers/suspend-account/${performerId}`);
  }

  checkBlock(performerId) {
    return this.get(`/performers/${performerId}/check-blocking`);
  }

}
const GENNDER_PERFORMER = ['female', 'transgender', 'male'];
const performerService = new PerformerService();

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "Fks/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/***/ }),

/***/ "GMeC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return beforeAvatarUpload; });
/* harmony import */ var src_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XwMy");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


function beforeAvatarUpload(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  const isImageAccept = src_env__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].imageAccept.split(',').map(item => item.trim()).indexOf(`.${ext}`);

  if (isImageAccept === -1) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`You can only upload ${src_env__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].imageAccept} file!`);
    return false;
  }

  const isLt2M = file.size / 1024 / 1024 < (src_env__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].maximumSizeUploadAvatar || 2);

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`Image must smaller than ${src_env__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].maximumSizeUploadAvatar || 2}MB!`);
    return false;
  }

  return true;
}

/***/ }),

/***/ "HR6+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class ProductService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  details(id, headers) {
    return this.get(`/performer/performer-assets/products/${id}/view`, headers);
  }

  search(params) {
    return this.get(this.buildUrl('/user/performer-assets/products/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/products', params));
  }

  getDownloadLink(id) {
    return this.get(`/user/performer-assets/products/${id}/download-link`);
  }

}
const productService = new ProductService();

/***/ }),

/***/ "ITiG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XwMy");


class UserService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  me(headers) {
    return this.get('/users/me', headers);
  }

  updateMe(payload) {
    return this.put('/users', payload);
  }

  getAvatarUploadUrl(userId) {
    if (userId) {
      return `${_env__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].apiEndpoint}/users/${userId}/avatar/upload`;
    }

    return `${_env__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].apiEndpoint}/users/avatar/upload`;
  }

  search(query) {
    return this.get(this.buildUrl('/users/search', query));
  }

  findById(id) {
    return this.get(`/users/view/${id}`);
  }

}
const userService = new UserService();

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "LLt/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authService; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/bfT");


class AuthService extends _api_request__WEBPACK_IMPORTED_MODULE_1__[/* APIRequest */ "a"] {
  login(data) {
    return this.post('/auth/users/login', data);
  }

  setAuthHeader(token, role) {
    // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN */ "f"], token, {
      expires: 365
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* ROLE */ "c"], role, {
      expires: 365
    });
    this.setAuthHeaderToken(token);
  }

  performerLogin(data) {
    return this.post('/auth/performers/login', data);
  }

  studioLogin(data) {
    return this.post('/auth/studio/login', data);
  }

  setToken(token) {
    // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN */ "f"], token, {
      expires: 365
    });
    this.setAuthHeaderToken(token);
  }

  getToken() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN */ "f"]);
    return token || null;
  }

  getRole() {
    const role = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* ROLE */ "c"]);
    return role || null;
  }

  removeToken() {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN */ "f"]);
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* ROLE */ "c"]);
  }

  removeRemember() {
     false && false;
  }

  updatePassword(body) {
    return this.put('/auth/users/me/password', body);
  }

  performersRegister(data) {
    return this.register('/auth/performers/register', data);
  }

  userRegister(data) {
    return this.post('/auth/users/register', data);
  }

  studioRegister(data) {
    return this.register('/auth/studio/register', data);
  }

  forgotPassword(email, type) {
    const data = {
      email,
      type
    };
    return this.post('/auth/users/forgot', data);
  }

  resendVerificationEmail(data) {
    return this.post('/verification/resend-verification-email', data);
  }

}
const authService = new AuthService();

/***/ }),

/***/ "MBoG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "NsEo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export arrayToTree */
/* unused harmony export pathMatchRegexp */
/* unused harmony export queryAncestors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getResponseError; });
/* unused harmony export isMobile */
/* unused harmony export getUrlParameter */
/* unused harmony export DAY_OF_WEEK */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getDefaultSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getNextShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getSearchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getBase64; });
/* unused harmony export convertConnectionData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkUserLogin; });
/* unused harmony export getCurrentUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isPhysicalProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chatBoxMessageClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return formatDataWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatDataHeight; });
/* unused harmony export formatPrice */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVM");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/bfT");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Convert an array to a tree-structured array.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @param   {string}    parentId       The alias of the parent ID of the object in the array.
 * @param   {string}    children  The alias of children of the object in the array.
 * @return  {array}    Return a tree-structured array.
 */

function arrayToTree(array, id = 'id', parentId = 'pid', children = 'children') {
  const result = [];
  const hash = {};
  const data = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(array);
  data.forEach((item, index) => {
    hash[data[index][id]] = data[index];
  });
  data.forEach(item => {
    const hashParent = hash[item[parentId]];

    if (hashParent) {
      !hashParent[children] && (hashParent[children] = []);
      hashParent[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
/**
 * Whether the path matches the regexp if the language prefix is ignored, https://github.com/pillarjs/path-to-regexp.
 * @param   {string|regexp|array}     regexp     Specify a string, array of strings, or a regular expression.
 * @param   {string}                  pathname   Specify the pathname to match.
 * @return  {array|null}              Return the result of the match or null.
 */

function pathMatchRegexp(regexp, pathname) {
  return path_to_regexp__WEBPACK_IMPORTED_MODULE_1__["pathToRegexp"](regexp).exec(pathname);
}
/**
 * In an array of objects, specify an object that traverses the objects whose parent ID matches.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    current   Specify the object that needs to be queried.
 * @param   {string}    parentId  The alias of the parent ID of the object in the array.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @return  {array}    Return a key array.
 */

function queryAncestors(array, current, parentId, id = 'id') {
  const result = [current];
  const hashMap = new Map();
  array.forEach(item => hashMap.set(item[id], item)); // eslint-disable-next-line no-shadow

  const getPath = current => {
    const currentParentId = hashMap.get(current[id])[parentId];

    if (currentParentId) {
      result.push(hashMap.get(currentParentId));
      getPath(hashMap.get(currentParentId));
    }
  };

  getPath(current);
  return result;
}
function getResponseError(data) {
  if (!data) {
    return '';
  }

  if (typeof data === 'string') {
    return data;
  }

  if (Array.isArray(data.message)) {
    const item = data.message[0];

    if (!item.constraints) {
      return data.error || 'Bad request!';
    }

    return Object.values(item.constraints)[0];
  } // TODO - parse for langauge or others


  return typeof data.message === 'string' ? data.message : 'Bad request!';
}
function isMobile() {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    return true;
  }

  return false;
} // eslint-disable-next-line consistent-return

function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');
  let sParameterName;
  let i;

  for (i = 0; i < sURLVariables.length; i += 1) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}
const DAY_OF_WEEK = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday'
};
function getDefaultSchedule() {
  const defaultVal = {
    start: null,
    end: null,
    closed: true
  };
  return {
    mon: _objectSpread({}, defaultVal),
    tue: _objectSpread({}, defaultVal),
    wed: _objectSpread({}, defaultVal),
    thu: _objectSpread({}, defaultVal),
    fri: _objectSpread({}, defaultVal),
    sat: _objectSpread({}, defaultVal),
    sun: _objectSpread({}, defaultVal)
  };
}
function getNextShow(schedule) {
  let weekDay = parseInt(moment__WEBPACK_IMPORTED_MODULE_2___default()().format('e'), 10);
  let i = 0;
  let nextShow;
  const performerShows = Object.keys(schedule).filter(key => !schedule[key].closed);

  do {
    const date = moment__WEBPACK_IMPORTED_MODULE_2___default()().day(weekDay).format('ddd').toLowerCase();

    if (performerShows.indexOf(date) > -1) {
      nextShow = date;
    }

    weekDay += 1;
    i += 1;
  } while (i < 7 && !nextShow);

  if (nextShow) {
    return `${schedule[nextShow].start} ${moment__WEBPACK_IMPORTED_MODULE_2___default()().day(weekDay - 1).format('DD/MM/YYYY')}`;
  }

  return '';
}
function getSearchData(pagination, filters, sorter, state) {
  let {
    sort,
    sortBy,
    filter
  } = state;
  const {
    limit
  } = state;

  if (filters) {
    Object.keys(filters).forEach(key => {
      if (filters[key] && filters[key].length) {
        // eslint-disable-next-line prefer-destructuring
        filter[key] = filters[key][0];
      }

      if (!filters[key]) {
        filter[key] = '';
      }
    });
  } else {
    filter = {};
  }

  if (sorter) {
    if (sorter.order) {
      const {
        field,
        order
      } = sorter;
      sort = _services_api_request__WEBPACK_IMPORTED_MODULE_3__[/* SORT */ "d"][order];
      sortBy = field;
    } else {
      sortBy = 'createdAt';
      sort = 'desc';
    }
  }

  return _objectSpread(_objectSpread(_objectSpread({}, state), filter), {}, {
    sort,
    sortBy,
    offset: (pagination.current - 1) * limit
  });
}
function getBase64(originFileObj, status = 'uploading', file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    if (originFileObj) {
      reader.readAsDataURL(originFileObj);

      reader.onload = () => resolve(_objectSpread(_objectSpread({}, originFileObj), {}, {
        status,
        name: originFileObj.name,
        url: reader.result,
        originFileObj
      }));

      reader.onerror = error => reject(error);
    } else {
      resolve(file);
    }
  });
}
function convertConnectionData(data) {
  const arr = data.split('%/%');
  const serverData = arr[1] && JSON.parse(arr[1]);
  const clientData = arr[0] && JSON.parse(arr[0]);
  return {
    serverData,
    clientData
  };
}
function checkUserLogin(isLoggedIn, user) {
  if (!isLoggedIn) return false;
  if (!user && !user._id) return false;
  return true;
}
function getCurrentUser(user, performer) {
  if (user && user._id) return user;
  if (performer && performer._id) return performer;
  return null;
}
function isPhysicalProduct(item) {
  if (item && item.type === 'physical') return true;
  return false;
}
function chatBoxMessageClassName(req) {
  const {
    isMine,
    startsSequence,
    endsSequence,
    data: {
      type
    }
  } = req;
  return classnames__WEBPACK_IMPORTED_MODULE_4___default()('message', {
    mine: isMine && type !== 'tip'
  }, {
    tip: type === 'tip'
  }, {
    start: !!startsSequence
  }, {
    end: !!endsSequence
  });
}

function convertFeetToCm(feet, inch) {
  const [f] = feet.split('.');
  const [i] = inch.split('.');
  return (parseInt(f, 10) * 12 + parseInt(i, 10)) * 2.54;
}

function formatDataWeight(min = 99, max = 319) {
  let i = min;
  const result = [];

  do {
    result[i] = (i * 0.45).toFixed(2);
    i += 1;
  } while (i < max);

  return result.map((v, index) => ({
    label: `${index}  lbs (${v}kg)`,
    value: `${index} lbs`
  }));
}
function formatDataHeight(min = 4, max = 7) {
  const result = [];

  for (let feet = min; feet < max; feet += 1) {
    for (let inch = 0; inch <= 11; inch += 1) {
      const a = convertFeetToCm(feet.toFixed(1).toString(), inch.toFixed(1).toString());
      result.push(`${feet}'${inch}" (${a.toFixed(2)} cm)`);
    }
  }

  return result.map(f => ({
    label: `${f}`,
    value: `${f}`
  }));
}
function formatPrice(price, fractionDigits = 2) {
  if (price) {
    return price.toFixed(fractionDigits);
  }

  return '';
}

/***/ }),

/***/ "P8M3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("t2tm");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_redux__WEBPACK_IMPORTED_MODULE_0__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _redux__WEBPACK_IMPORTED_MODULE_0__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_redux__WEBPACK_IMPORTED_MODULE_0__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _redux__WEBPACK_IMPORTED_MODULE_0__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_redux__WEBPACK_IMPORTED_MODULE_0__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _redux__WEBPACK_IMPORTED_MODULE_0__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_redux__WEBPACK_IMPORTED_MODULE_0__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _redux__WEBPACK_IMPORTED_MODULE_0__["paymentAccountTypes"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8wR9");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_utils__WEBPACK_IMPORTED_MODULE_1__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_utils__WEBPACK_IMPORTED_MODULE_1__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_utils__WEBPACK_IMPORTED_MODULE_1__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_utils__WEBPACK_IMPORTED_MODULE_1__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["paymentAccountTypes"]; });

/* harmony import */ var _ui_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zVAr");
/* harmony import */ var _ui_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_ui_config__WEBPACK_IMPORTED_MODULE_2__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _ui_config__WEBPACK_IMPORTED_MODULE_2__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_ui_config__WEBPACK_IMPORTED_MODULE_2__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _ui_config__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_ui_config__WEBPACK_IMPORTED_MODULE_2__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _ui_config__WEBPACK_IMPORTED_MODULE_2__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_ui_config__WEBPACK_IMPORTED_MODULE_2__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _ui_config__WEBPACK_IMPORTED_MODULE_2__["paymentAccountTypes"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h1hT");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lRMd");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_auth__WEBPACK_IMPORTED_MODULE_4__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _auth__WEBPACK_IMPORTED_MODULE_4__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_auth__WEBPACK_IMPORTED_MODULE_4__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _auth__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_auth__WEBPACK_IMPORTED_MODULE_4__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _auth__WEBPACK_IMPORTED_MODULE_4__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_auth__WEBPACK_IMPORTED_MODULE_4__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _auth__WEBPACK_IMPORTED_MODULE_4__["paymentAccountTypes"]; });

/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MBoG");
/* harmony import */ var _performer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4WNP");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2UW8");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_setting__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_setting__WEBPACK_IMPORTED_MODULE_7__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _setting__WEBPACK_IMPORTED_MODULE_7__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_setting__WEBPACK_IMPORTED_MODULE_7__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _setting__WEBPACK_IMPORTED_MODULE_7__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_setting__WEBPACK_IMPORTED_MODULE_7__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _setting__WEBPACK_IMPORTED_MODULE_7__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_setting__WEBPACK_IMPORTED_MODULE_7__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _setting__WEBPACK_IMPORTED_MODULE_7__["paymentAccountTypes"]; });

/* harmony import */ var _performer_categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wnub");
/* harmony import */ var _performer_categories__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_performer_categories__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_performer_categories__WEBPACK_IMPORTED_MODULE_8__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _performer_categories__WEBPACK_IMPORTED_MODULE_8__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_performer_categories__WEBPACK_IMPORTED_MODULE_8__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _performer_categories__WEBPACK_IMPORTED_MODULE_8__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_performer_categories__WEBPACK_IMPORTED_MODULE_8__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _performer_categories__WEBPACK_IMPORTED_MODULE_8__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_performer_categories__WEBPACK_IMPORTED_MODULE_8__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _performer_categories__WEBPACK_IMPORTED_MODULE_8__["paymentAccountTypes"]; });

/* harmony import */ var _peformer_assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("yrd7");
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("YRlR");
/* harmony import */ var _favourite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Fks/");
/* harmony import */ var _token_package__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("ikA6");
/* harmony import */ var _token_package__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_token_package__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_token_package__WEBPACK_IMPORTED_MODULE_12__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _token_package__WEBPACK_IMPORTED_MODULE_12__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_token_package__WEBPACK_IMPORTED_MODULE_12__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _token_package__WEBPACK_IMPORTED_MODULE_12__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_token_package__WEBPACK_IMPORTED_MODULE_12__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _token_package__WEBPACK_IMPORTED_MODULE_12__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_token_package__WEBPACK_IMPORTED_MODULE_12__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _token_package__WEBPACK_IMPORTED_MODULE_12__["paymentAccountTypes"]; });

/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("ZZ9b");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_transaction__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_transaction__WEBPACK_IMPORTED_MODULE_13__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _transaction__WEBPACK_IMPORTED_MODULE_13__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_transaction__WEBPACK_IMPORTED_MODULE_13__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _transaction__WEBPACK_IMPORTED_MODULE_13__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_transaction__WEBPACK_IMPORTED_MODULE_13__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _transaction__WEBPACK_IMPORTED_MODULE_13__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_transaction__WEBPACK_IMPORTED_MODULE_13__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _transaction__WEBPACK_IMPORTED_MODULE_13__["paymentAccountTypes"]; });

/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("+PMe");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_order__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_order__WEBPACK_IMPORTED_MODULE_14__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _order__WEBPACK_IMPORTED_MODULE_14__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_order__WEBPACK_IMPORTED_MODULE_14__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _order__WEBPACK_IMPORTED_MODULE_14__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_order__WEBPACK_IMPORTED_MODULE_14__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _order__WEBPACK_IMPORTED_MODULE_14__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_order__WEBPACK_IMPORTED_MODULE_14__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _order__WEBPACK_IMPORTED_MODULE_14__["paymentAccountTypes"]; });

/* harmony import */ var _refund_request__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("+wvd");
/* harmony import */ var _refund_request__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_refund_request__WEBPACK_IMPORTED_MODULE_15__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_refund_request__WEBPACK_IMPORTED_MODULE_15__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _refund_request__WEBPACK_IMPORTED_MODULE_15__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_refund_request__WEBPACK_IMPORTED_MODULE_15__, "PAYMENT_ACCOUNT")) __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _refund_request__WEBPACK_IMPORTED_MODULE_15__["PAYMENT_ACCOUNT"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_refund_request__WEBPACK_IMPORTED_MODULE_15__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _refund_request__WEBPACK_IMPORTED_MODULE_15__["WEBRTC"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_refund_request__WEBPACK_IMPORTED_MODULE_15__, "paymentAccountTypes")) __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _refund_request__WEBPACK_IMPORTED_MODULE_15__["paymentAccountTypes"]; });

/* harmony import */ var _payout_request__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("W2TB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_ACCOUNT", function() { return _payout_request__WEBPACK_IMPORTED_MODULE_16__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paymentAccountTypes", function() { return _payout_request__WEBPACK_IMPORTED_MODULE_16__["b"]; });

/* harmony import */ var _studio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("gfZs");
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("jgQt");
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_banner__WEBPACK_IMPORTED_MODULE_18__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_banner__WEBPACK_IMPORTED_MODULE_18__, "HLS")) __webpack_require__.d(__webpack_exports__, "HLS", function() { return _banner__WEBPACK_IMPORTED_MODULE_18__["HLS"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_banner__WEBPACK_IMPORTED_MODULE_18__, "WEBRTC")) __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _banner__WEBPACK_IMPORTED_MODULE_18__["WEBRTC"]; });

/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("rddh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HLS", function() { return _stream__WEBPACK_IMPORTED_MODULE_19__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WEBRTC", function() { return _stream__WEBPACK_IMPORTED_MODULE_19__["b"]; });






















/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S8Mw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROLE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CLrh");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NsEo");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-shadow */




let ROLE;

(function (ROLE) {
  ROLE["PERFORMER"] = "perfomrer";
  ROLE["USER"] = "user";
  ROLE["STUDIO"] = "studio";
})(ROLE || (ROLE = {}));

const DataMap = [{
  lable: 'Tip Commission',
  key: 'tipCommission'
}, {
  lable: 'Private Call Commission',
  key: 'privateCallCommission'
}, {
  lable: 'Group Call Commission',
  key: 'groupCallCommission'
}, {
  lable: 'Product Commission',
  key: 'productCommission'
}, {
  lable: 'Gallery Commission',
  key: 'albumCommission'
}, {
  lable: 'Video Commission',
  key: 'videoCommission'
}];
const style = {
  headStyle: {
    color: '#ff0066'
  },
  bodyStyle: {
    color: '#000000'
  }
};

const CommissionCard = ({
  role
}) => {
  const [commission, setCommission] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const getCommission = async () => {
      try {
        const resp = role === ROLE.STUDIO ? await src_services__WEBPACK_IMPORTED_MODULE_2__[/* studioService */ "s"].getCommission() : await src_services__WEBPACK_IMPORTED_MODULE_2__[/* performerService */ "k"].getCommission();
        setCommission(resp.data);
      } catch (e) {
        const err = await Promise.resolve(e);
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_3__[/* getResponseError */ "h"])(err));
      }
    };

    getCommission();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, commission && (typeof commission === 'number' ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 6
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], _extends({}, style, {
    title: __jsx("span", null, "Commission"),
    extra: __jsx("span", {
      style: {
        color: '#ff0066'
      }
    }, commission, "%")
  }), "Hint: When a member spends paid tokens with you, you will get this commission."))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [10, 10]
  }, DataMap.map(m => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 8,
    key: m.key
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], _extends({}, style, {
    title: __jsx("span", null, m.lable),
    extra: __jsx("span", {
      style: {
        color: '#ff0066'
      }
    }, commission[m.key], "%")
  }), "Hint: When a member spends paid tokens with you, you will get this commission."))))));
};

CommissionCard.defaultProps = {
  role: ''
};
/* harmony default export */ __webpack_exports__["b"] = (CommissionCard);

/***/ }),

/***/ "W2TB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAYMENT_ACCOUNT; });
/* unused harmony export BANKING_SOURCE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return paymentAccountTypes; });
/* unused harmony export PAYOUT_STATUS */
/* eslint-disable no-shadow */
let PAYMENT_ACCOUNT;

(function (PAYMENT_ACCOUNT) {
  PAYMENT_ACCOUNT["WIRE"] = "wire";
  PAYMENT_ACCOUNT["PAYPAL"] = "paypal";
  PAYMENT_ACCOUNT["ISSUE"] = "issue_check_us";
  PAYMENT_ACCOUNT["DEPOSIT"] = "deposit";
  PAYMENT_ACCOUNT["PAYONNEER"] = "payoneer";
  PAYMENT_ACCOUNT["BITPAY"] = "bitpay";
  PAYMENT_ACCOUNT["PAXUM"] = "paxum";
})(PAYMENT_ACCOUNT || (PAYMENT_ACCOUNT = {}));

let BANKING_SOURCE;

(function (BANKING_SOURCE) {
  BANKING_SOURCE["PERFORMER"] = "performer";
  BANKING_SOURCE["STUDIO"] = "studio";
})(BANKING_SOURCE || (BANKING_SOURCE = {}));

const paymentAccountTypes = [{
  value: 'wire',
  title: 'Wire Transfer (Free)'
}, {
  value: 'paypal',
  title: 'Paypal'
}, {
  value: 'issue_check_us',
  title: 'Issue Check (U.S. Only)'
}, {
  value: 'deposit',
  title: 'Direct Deposit'
}, {
  value: 'payoneer',
  title: 'Payoneer'
}, {
  value: 'bitpay',
  title: 'Bitpay'
}];
let PAYOUT_STATUS;

(function (PAYOUT_STATUS) {
  PAYOUT_STATUS["PENDING"] = "pending";
  PAYOUT_STATUS["APPROVED"] = "approved";
  PAYOUT_STATUS["REJECTED"] = "rejected";
  PAYOUT_STATUS["DONE"] = "done";
})(PAYOUT_STATUS || (PAYOUT_STATUS = {}));

/***/ }),

/***/ "WT8E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return getPerformerCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return getPerformerCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return getPerformerCategoriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return searchPerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return searchPerformerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return searchPerformerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return setPerformerSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return updatePerformerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return updatePerformerProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return updatePerformerProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return setupdatingPerformerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return updatePaymentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return updateDirectDeposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return updatePaxum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return updateBitpay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return updateStreamingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return updateDefaultPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return getPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return getPerformerDetailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return getPerformerDetailsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return setGettingPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return setPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return updatePerformerAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return setFavoritePerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getMyProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getMyProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getMyProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return setGettingMyProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addMyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return removeMyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getEarningSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getEarningFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return setGettingEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return getPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getPayoutRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return getPayoutRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return setGettingPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return removePayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return getMyVideosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getMyVideosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return setgettingMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return removeMyVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getMyPhotosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getMyPhotosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return setgettingMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return removeMyPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMyGalleriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getMyGalleriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return setgettingMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return removeMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return updateCurrentPerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return updatePerformerFavourite; });
/* harmony import */ var src_lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vo7w");

const {
  getPerformerCategories,
  getPerformerCategoriesSuccess,
  getPerformerCategoriesFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getPerformerCategories', 'GET_PERFORMER_CATEGORIES');
const {
  searchPerformer,
  searchPerformerSuccess,
  searchPerformerFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('searchPerformer', 'SEARCH_PERFORMER');
const setPerformerSearching = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_PERFORMER_SEARCHING');
const {
  updatePerformerProfile,
  updatePerformerProfileSuccess,
  updatePerformerProfileFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('updatePerformerProfile', 'UPDATE_PERFORMER_PROFILE');
const setupdatingPerformerProfile = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updatingPerformerProfile');
const updatePaymentInfo = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_PAYMENT_INFO');
const updateDirectDeposit = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_DIRECT_DEPOSIT');
const updatePaxum = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_PAXUM');
const updateBitpay = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_BITPAY');
const updateStreamingStatus = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_STREAMING_STATUS');
const updateDefaultPrice = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_DEFAULT_PRICE');
const {
  getPerformerDetails,
  getPerformerDetailsSuccess,
  getPerformerDetailsFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getPerformerDetails', 'GET_PERFORMER_DETAILS');
const setGettingPerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('setGettingPerformerDetails');
const setPerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_PERFORMER_DETAILS');
const updatePerformerAsset = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_PERFORMER_ASSET');
const setFavoritePerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_FAVORITE_PERFORMER_DETAILS');
const {
  getMyProducts,
  getMyProductsSuccess,
  getMyProductsFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getMyProducts', 'GET_MY_PRODUCT');
const setGettingMyProducts = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('setGettingMyProducts');
const addMyProduct = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('addMyProduct');
const removeMyProduct = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('removeMyProduct');
const {
  getEarning,
  getEarningSuccess,
  getEarningFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getEarning', 'GET_EARNING');
const setGettingEarning = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_GETTING_EARNIG');
const {
  getPayoutRequest,
  getPayoutRequestSuccess,
  getPayoutRequestFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getPayoutRequest', 'GET_PAYOUT_REQUEST');
const setGettingPayoutRequest = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_GETTING_PAYOUT_REQUEST');
const removePayoutRequest = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('REMOVE_PAYOUT_REQUEST');
const {
  getMyVideos,
  getMyVideosSuccess,
  getMyVideosFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getMyVideos', 'GET_MY_VIDEO');
const setgettingMyVideos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('setgettingMyVideos');
const addMyVideos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('addMyVideos');
const removeMyVideo = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('removeMyVideo');
const {
  getMyPhotos,
  getMyPhotosSuccess,
  getMyPhotosFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getMyPhotos', 'GET_MY_PHOTO');
const setgettingMyPhotos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('setgettingMyPhotos');
const addMyPhotos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('addMyPhotos');
const removeMyPhoto = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('removeMyPhoto');
const {
  getMyGalleries,
  getMyGalleriesSuccess,
  getMyGalleriesFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('getMyGalleries', 'GET_MY_GALLERIES');
const setgettingMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('setgettingMyGalleries');
const addMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('addMyGalleries');
const removeMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('removeMyGalleries');
const updateCurrentPerformer = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updateCurrentPerformer');
const updatePerformerFavourite = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('UPDATE_PERFORMER_FAVOURITE');

/***/ }),

/***/ "XTf7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TokenPackageService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tokenPackageService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class TokenPackageService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  search(params) {
    return this.get(this.buildUrl('/package/token/search', params));
  }

  buyTokens(id) {
    return this.post(`/payment/purchase-tokens/${id}`);
  }

}
const tokenPackageService = new TokenPackageService();

/***/ }),

/***/ "XwMy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  apiEndpoint: 'https://api.hasasecret.com',
  socketEndpoint: 'https://api.hasasecret.com',
  debug: false,
  maxVideoBitrateKbps: 900,
  imageAccept: '.jpeg, .jpg, .png',
  maximumSizeUploadAvatar: 2
});

/***/ }),

/***/ "Y1dN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["a"] = (({
  title,
  extra
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], {
  title: title,
  extra: extra
}), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], null)));

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YRlR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/***/ }),

/***/ "YRv5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usernamePatternRule; });
const usernamePatternRule = {
  pattern: new RegExp('^[a-zA-Z0-9]*$'),
  message: 'Dont allow special chars or space'
};

/***/ }),

/***/ "ZG2X":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/FormItem");

/***/ }),

/***/ "ZZ9b":
/***/ (function(module, exports) {



/***/ }),

/***/ "awjA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ PaypalSettingFrom; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ IssueCheckUSSetingForm; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ WireTransferSettingForm; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ BitpaySettigForm; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ DirectDepositSettingForm; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ PaxumSettingForm; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "antd/lib/form/FormItem"
var FormItem_ = __webpack_require__("ZG2X");
var FormItem_default = /*#__PURE__*/__webpack_require__.n(FormItem_);

// CONCATENATED MODULE: ./src/components/payment/paypal-setting-form.tsx

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-nested-ternary */



const PAYMENT_INFO_CURRENCY = {
  eurEuro: 'EUR (Euro)',
  usdUnitedStatesDollars: 'USD (U.S Dollar)'
};
const {
  Item
} = external_antd_["Form"];
const {
  Option
} = external_antd_["Select"];
const initFormValue = {
  type: 'wireTransfer',
  withdrawCurrency: 'eurEuro',
  taxPayer: ''
};
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 24
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 20
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};
const PaypalSettingFrom = ({
  onFinish,
  paymentInformation,
  loading
}) => {
  const [form] = external_antd_["Form"].useForm();
  Object(external_react_["useEffect"])(() => {
    form.setFieldsValue(paymentInformation);
  }, [paymentInformation]);
  return __jsx(external_antd_["Form"], _extends({}, formItemLayout, {
    form: form,
    layout: "vertical",
    onFinish: onFinish,
    name: "paymentInfoSettingForm",
    className: "performerEditForm",
    validateMessages: {
      required: 'This field is required!'
    },
    initialValues: _objectSpread({}, initFormValue)
  }), __jsx(external_antd_["Row"], null, __jsx(external_antd_["Col"], {
    xs: 24,
    sm: 12
  }, __jsx(Item, {
    name: "withdrawCurrency",
    key: "withdrawCurrency",
    rules: [{
      required: true
    }],
    label: "Withdraw Currency"
  }, __jsx(external_antd_["Select"], null, Object.keys(PAYMENT_INFO_CURRENCY).map(key => __jsx(Option, {
    value: key,
    key: key
  }, PAYMENT_INFO_CURRENCY[key])))), __jsx(Item, {
    name: "taxPayer",
    key: "taxPayer",
    label: "Taxpayer ID/SSN"
  }, __jsx(external_antd_["Input"], null)), __jsx(Item, {
    name: "payPalAccount",
    key: "payPalAccount",
    label: "PayPal Account",
    dependencies: ['type'],
    rules: [{
      required: true
    }]
  }, __jsx(external_antd_["Input"], null)))), __jsx(FormItem_default.a, tailFormItemLayout, __jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: loading
  }, "Save Change")));
};
// CONCATENATED MODULE: ./src/components/payment/issue-check-us-setting-form.tsx

var issue_check_us_setting_form_jsx = external_react_default.a.createElement;

function issue_check_us_setting_form_extends() { issue_check_us_setting_form_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return issue_check_us_setting_form_extends.apply(this, arguments); }

function issue_check_us_setting_form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function issue_check_us_setting_form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { issue_check_us_setting_form_ownKeys(Object(source), true).forEach(function (key) { issue_check_us_setting_form_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { issue_check_us_setting_form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function issue_check_us_setting_form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-nested-ternary */



const issue_check_us_setting_form_PAYMENT_INFO_CURRENCY = {
  eurEuro: 'EUR (Euro)',
  usdUnitedStatesDollars: 'USD (U.S Dollar)'
};
const {
  Item: issue_check_us_setting_form_Item
} = external_antd_["Form"];
const {
  Option: issue_check_us_setting_form_Option
} = external_antd_["Select"];
const issue_check_us_setting_form_initFormValue = {
  type: 'wireTransfer',
  withdrawCurrency: 'eurEuro',
  taxPayer: ''
};
const issue_check_us_setting_form_formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 24
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 20
    }
  }
};
const issue_check_us_setting_form_tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};
const IssueCheckUSSetingForm = ({
  onFinish,
  paymentInformation,
  loading
}) => {
  const [form] = external_antd_["Form"].useForm();
  Object(external_react_["useEffect"])(() => {
    form.setFieldsValue(paymentInformation);
  }, [paymentInformation]);
  return issue_check_us_setting_form_jsx(external_antd_["Form"], issue_check_us_setting_form_extends({}, issue_check_us_setting_form_formItemLayout, {
    form: form,
    layout: "vertical",
    onFinish: onFinish,
    name: "paymentInfoSettingForm",
    className: "performerEditForm",
    validateMessages: {
      required: 'This field is required!'
    },
    initialValues: issue_check_us_setting_form_objectSpread({}, issue_check_us_setting_form_initFormValue)
  }), issue_check_us_setting_form_jsx(external_antd_["Row"], null, issue_check_us_setting_form_jsx(external_antd_["Col"], {
    xs: 24,
    sm: 12
  }, issue_check_us_setting_form_jsx(issue_check_us_setting_form_Item, {
    name: "withdrawCurrency",
    key: "withdrawCurrency",
    rules: [{
      required: true
    }],
    label: "Withdraw Currency"
  }, issue_check_us_setting_form_jsx(external_antd_["Select"], null, Object.keys(issue_check_us_setting_form_PAYMENT_INFO_CURRENCY).map(key => issue_check_us_setting_form_jsx(issue_check_us_setting_form_Option, {
    value: key,
    key: key
  }, issue_check_us_setting_form_PAYMENT_INFO_CURRENCY[key])))), issue_check_us_setting_form_jsx(issue_check_us_setting_form_Item, {
    name: "taxPayer",
    key: "taxPayer",
    label: "Taxpayer ID/SSN"
  }, issue_check_us_setting_form_jsx(external_antd_["Input"], null)), issue_check_us_setting_form_jsx(issue_check_us_setting_form_Item, {
    name: "checkPayable",
    key: "checkPayable",
    label: "Check Payable To",
    dependencies: ['type'],
    rules: [{
      required: true
    }]
  }, issue_check_us_setting_form_jsx(external_antd_["Input"], null)))), issue_check_us_setting_form_jsx(FormItem_default.a, issue_check_us_setting_form_tailFormItemLayout, issue_check_us_setting_form_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: loading
  }, "Save Change")));
};
// CONCATENATED MODULE: ./src/components/payment/wire-transfer-setting-form.tsx

var wire_transfer_setting_form_jsx = external_react_default.a.createElement;

function wire_transfer_setting_form_extends() { wire_transfer_setting_form_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return wire_transfer_setting_form_extends.apply(this, arguments); }

function wire_transfer_setting_form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function wire_transfer_setting_form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { wire_transfer_setting_form_ownKeys(Object(source), true).forEach(function (key) { wire_transfer_setting_form_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { wire_transfer_setting_form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function wire_transfer_setting_form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-nested-ternary */



const wire_transfer_setting_form_PAYMENT_INFO_CURRENCY = {
  eurEuro: 'EUR (Euro)',
  usdUnitedStatesDollars: 'USD (U.S Dollar)'
};
const {
  Item: wire_transfer_setting_form_Item
} = external_antd_["Form"];
const {
  Option: wire_transfer_setting_form_Option
} = external_antd_["Select"];
const wire_transfer_setting_form_initFormValue = {
  type: 'wireTransfer',
  withdrawCurrency: 'eurEuro',
  taxPayer: ''
};
const wire_transfer_setting_form_formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 24
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 20
    }
  }
};
const wire_transfer_setting_form_tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};
const WireTransferSettingForm = ({
  onFinish,
  loading,
  paymentInformation
}) => {
  const [form] = external_antd_["Form"].useForm();
  Object(external_react_["useEffect"])(() => {
    form.setFieldsValue(paymentInformation);
  }, [paymentInformation]);
  return wire_transfer_setting_form_jsx(external_antd_["Form"], wire_transfer_setting_form_extends({}, wire_transfer_setting_form_formItemLayout, {
    form: form,
    layout: "vertical",
    onFinish: onFinish,
    name: "paymentInfoSettingForm",
    className: "performerEditForm",
    validateMessages: {
      required: 'This field is required!'
    },
    initialValues: wire_transfer_setting_form_objectSpread({}, wire_transfer_setting_form_initFormValue)
  }), wire_transfer_setting_form_jsx(external_antd_["Row"], null, wire_transfer_setting_form_jsx(external_antd_["Col"], {
    xs: 24,
    sm: 12
  }, wire_transfer_setting_form_jsx(wire_transfer_setting_form_Item, {
    name: "withdrawCurrency",
    key: "withdrawCurrency",
    rules: [{
      required: true
    }],
    label: "Withdraw Currency"
  }, wire_transfer_setting_form_jsx(external_antd_["Select"], null, Object.keys(wire_transfer_setting_form_PAYMENT_INFO_CURRENCY).map(key => wire_transfer_setting_form_jsx(wire_transfer_setting_form_Option, {
    value: key,
    key: key
  }, wire_transfer_setting_form_PAYMENT_INFO_CURRENCY[key])))), wire_transfer_setting_form_jsx(wire_transfer_setting_form_Item, {
    name: "taxPayer",
    key: "taxPayer",
    label: "Taxpayer ID/SSN"
  }, wire_transfer_setting_form_jsx(external_antd_["Input"], null)), wire_transfer_setting_form_jsx(wire_transfer_setting_form_Item, {
    name: "bankName",
    key: "bankName",
    label: "Bank Name",
    dependencies: ['type'],
    rules: [{
      required: true
    }]
  }, wire_transfer_setting_form_jsx(external_antd_["Input"], null)), wire_transfer_setting_form_jsx(wire_transfer_setting_form_Item, {
    name: "bankAddress",
    key: "bankAddress",
    label: "Bank Address",
    dependencies: ['type'],
    rules: [{
      required: true
    }]
  }, wire_transfer_setting_form_jsx(external_antd_["Input"], null)), wire_transfer_setting_form_jsx(wire_transfer_setting_form_Item, {
    name: "bankSWIFTBICABA",
    key: "bankSWIFTBICABA",
    label: "Bank SWIFT-BIC/ABA",
    dependencies: ['type'],
    rules: [{
      required: true
    }]
  }, wire_transfer_setting_form_jsx(external_antd_["Input"], null)), wire_transfer_setting_form_jsx(wire_transfer_setting_form_Item, {
    name: "additionalInformation",
    key: "additionalInformation",
    label: "Additional Information"
  }, wire_transfer_setting_form_jsx(external_antd_["Input"].TextArea, null))), wire_transfer_setting_form_jsx(external_antd_["Col"], {
    xs: 24,
    sm: 12
  }, wire_transfer_setting_form_jsx(wire_transfer_setting_form_Item, {
    name: "bankCity",
    key: "bankCity",
    label: "Bank City",
    dependencies: ['type'],
    rules: [{
      required: true
    }]
  }, wire_transfer_setting_form_jsx(external_antd_["Input"], null)), wire_transfer_setting_form_jsx(wire_transfer_setting_form_Item, {
    name: "bankState",
    key: "bankState",
    label: "Bank State",
    dependencies: ['type'],
    rules: [{
      required: true
    }]
  }, wire_transfer_setting_form_jsx(external_antd_["Input"], null)), wire_transfer_setting_form_jsx(wire_transfer_setting_form_Item, {
    name: "bankZip",
    key: "bankZip",
    label: "Bank Zip",
    dependencies: ['type'],
    rules: [{
      required: true
    }]
  }, wire_transfer_setting_form_jsx(external_antd_["Input"], null)), wire_transfer_setting_form_jsx(wire_transfer_setting_form_Item, {
    name: "bankCountry",
    key: "bankCountry",
    label: "Bank Country",
    dependencies: ['type'],
    rules: [{
      required: true
    }]
  }, wire_transfer_setting_form_jsx(external_antd_["Input"], null)), wire_transfer_setting_form_jsx(wire_transfer_setting_form_Item, {
    name: "bankAcountNumber",
    key: "bankAcountNumber",
    label: "Bank Account Number",
    dependencies: ['type'],
    rules: [{
      required: true
    }]
  }, wire_transfer_setting_form_jsx(external_antd_["Input"], null)), wire_transfer_setting_form_jsx(wire_transfer_setting_form_Item, {
    name: "holderOfBankAccount",
    key: "holderOfBankAccount",
    label: "Primary Account Holder",
    dependencies: ['type'],
    rules: [{
      required: true
    }]
  }, wire_transfer_setting_form_jsx(external_antd_["Input"], null)))), wire_transfer_setting_form_jsx(FormItem_default.a, wire_transfer_setting_form_tailFormItemLayout, wire_transfer_setting_form_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: loading
  }, "Save Change")));
};
// EXTERNAL MODULE: ./src/components/common/base/input-item-list.tsx
var input_item_list = __webpack_require__("dNzx");

// EXTERNAL MODULE: ./src/lib/index.ts + 2 modules
var lib = __webpack_require__("psLn");

// CONCATENATED MODULE: ./src/components/payment/bitpay-form.tsx

var bitpay_form_jsx = external_react_default.a.createElement;

function bitpay_form_extends() { bitpay_form_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return bitpay_form_extends.apply(this, arguments); }

function bitpay_form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bitpay_form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bitpay_form_ownKeys(Object(source), true).forEach(function (key) { bitpay_form_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bitpay_form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bitpay_form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const leftFormItem = [{
  name: 'bitpayName',
  rules: [{
    required: true,
    message: 'Name is requried'
  }],
  label: 'Name',
  children: bitpay_form_jsx(external_antd_["Input"], null)
}, {
  name: 'bitpayEmail',
  rules: [{
    required: true,
    message: 'Account email is requried'
  }, {
    type: 'email',
    message: 'Account email must be email'
  }],
  label: 'Email',
  children: bitpay_form_jsx(external_antd_["Input"], {
    type: "email"
  })
}, {
  name: 'bitpayAdditionalInformation',
  rules: [{
    required: true,
    message: 'Name is requried'
  }],
  label: 'Additional Information',
  children: bitpay_form_jsx(external_antd_["Input"], null)
}];
const bitpay_form_initFormValue = {
  bitpayName: '',
  bitpayEmail: '',
  bitpayAdditionalInformation: ''
};
const BitpaySettigForm = ({
  onFinish,
  paymentInformation,
  loading
}) => {
  const [form] = external_antd_["Form"].useForm();
  Object(external_react_["useEffect"])(() => {
    form.setFieldsValue(paymentInformation);
  }, [paymentInformation]);
  return bitpay_form_jsx(external_antd_["Form"], bitpay_form_extends({}, lib["e" /* formItemLayout */], {
    form: form,
    layout: "vertical",
    onFinish: onFinish,
    name: "bitpaySettingForm",
    className: "performerEditForm",
    initialValues: bitpay_form_objectSpread({}, bitpay_form_initFormValue)
  }), bitpay_form_jsx(input_item_list["a" /* default */], {
    fields: leftFormItem
  }), bitpay_form_jsx(external_antd_["Form"].Item, lib["m" /* tailFormItemLayout */], bitpay_form_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: loading
  }, "Save Change")));
};
// CONCATENATED MODULE: ./src/components/payment/direct-deposit-form.tsx

var direct_deposit_form_jsx = external_react_default.a.createElement;

function direct_deposit_form_extends() { direct_deposit_form_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return direct_deposit_form_extends.apply(this, arguments); }

function direct_deposit_form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function direct_deposit_form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { direct_deposit_form_ownKeys(Object(source), true).forEach(function (key) { direct_deposit_form_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { direct_deposit_form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function direct_deposit_form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  Group
} = external_antd_["Radio"];
const DIRECT_DEPOSIT_TYPE = [{
  key: 'credit',
  name: 'Credit'
}, {
  key: 'savings',
  name: 'Savings'
}];
const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px'
};
const direct_deposit_form_leftFormItem = [{
  name: 'depositFirstName',
  rules: [{
    required: true,
    message: 'First name is requried'
  }],
  label: 'First Name',
  children: direct_deposit_form_jsx(external_antd_["Input"], null)
}, {
  name: 'depositLastName',
  rules: [{
    required: true,
    message: 'Last name is requried'
  }],
  label: 'Last Name',
  children: direct_deposit_form_jsx(external_antd_["Input"], null)
}, {
  name: 'accountingEmail',
  rules: [{
    required: true,
    message: 'Account email is requried'
  }, {
    type: 'email',
    message: 'Account email must be email'
  }],
  label: 'Account Email',
  children: direct_deposit_form_jsx(external_antd_["Input"], {
    type: "email"
  })
}, {
  name: 'directBankName',
  rules: [{
    required: true,
    message: 'Bnak name is requried'
  }],
  label: 'Bank Name',
  children: direct_deposit_form_jsx(external_antd_["Input"], null)
}, {
  name: 'accountType',
  rules: [{
    required: true,
    message: 'Account type is requried'
  }],
  label: 'Account Type',
  children: direct_deposit_form_jsx(Group, null, DIRECT_DEPOSIT_TYPE.map(type => direct_deposit_form_jsx(external_antd_["Radio"], {
    style: radioStyle,
    value: type.key,
    key: type.key
  }, type.name)))
}];
const rightInputFrom = [{
  name: 'accountNumber',
  rules: [{
    required: true,
    message: 'Account number is requried'
  }],
  label: 'Account number',
  children: direct_deposit_form_jsx(external_antd_["Input"], null)
}, {
  name: 'routingNumber',
  rules: [{
    required: true,
    message: 'Routing number is requried'
  }],
  label: 'Routing number',
  children: direct_deposit_form_jsx(external_antd_["Input"], null)
}];
const direct_deposit_form_initFormValue = {
  depositFirstName: '',
  depositLastName: '',
  accountingEmail: '',
  directBankName: '',
  accountType: 'credit',
  accountNumber: '',
  routingNumber: ''
};
const DirectDepositSettingForm = ({
  onFinish,
  paymentInformation,
  loading
}) => {
  const [form] = external_antd_["Form"].useForm();
  Object(external_react_["useEffect"])(() => {
    form.setFieldsValue(paymentInformation);
  }, [paymentInformation]);
  return direct_deposit_form_jsx(external_antd_["Form"], direct_deposit_form_extends({}, lib["e" /* formItemLayout */], {
    form: form,
    layout: "vertical",
    onFinish: onFinish,
    name: "directDepositSettingForm",
    className: "performerEditForm",
    initialValues: direct_deposit_form_objectSpread({}, direct_deposit_form_initFormValue)
  }), direct_deposit_form_jsx(external_antd_["Row"], null, direct_deposit_form_jsx(external_antd_["Col"], {
    xs: 24,
    sm: 12
  }, direct_deposit_form_jsx(input_item_list["a" /* default */], {
    fields: direct_deposit_form_leftFormItem
  })), direct_deposit_form_jsx(external_antd_["Col"], {
    xs: 24,
    sm: 12
  }, direct_deposit_form_jsx(input_item_list["a" /* default */], {
    fields: rightInputFrom
  }))), direct_deposit_form_jsx(external_antd_["Form"].Item, lib["m" /* tailFormItemLayout */], direct_deposit_form_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: loading
  }, "Save Change")));
};
// CONCATENATED MODULE: ./src/components/payment/paxum-form.tsx

var paxum_form_jsx = external_react_default.a.createElement;

function paxum_form_extends() { paxum_form_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return paxum_form_extends.apply(this, arguments); }

function paxum_form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function paxum_form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { paxum_form_ownKeys(Object(source), true).forEach(function (key) { paxum_form_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { paxum_form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function paxum_form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const paxum_form_leftFormItem = [{
  name: 'paxumName',
  rules: [{
    required: true,
    message: 'Name is requried'
  }],
  label: 'Name',
  children: paxum_form_jsx(external_antd_["Input"], null)
}, {
  name: 'paxumEmail',
  rules: [{
    required: true,
    message: 'Account email is requried'
  }, {
    type: 'email',
    message: 'Account email must be email'
  }],
  label: 'Email',
  children: paxum_form_jsx(external_antd_["Input"], {
    type: "email"
  })
}, {
  name: 'paxumAdditionalInformation',
  rules: [{
    required: true,
    message: 'Name is requried'
  }],
  label: 'Additional Information',
  children: paxum_form_jsx(external_antd_["Input"], null)
}];
const paxum_form_initFormValue = {
  paxumName: '',
  paxumEmail: '',
  paxumAdditionalInformation: ''
};
const PaxumSettingForm = ({
  onFinish,
  paymentInformation,
  loading
}) => {
  const [form] = external_antd_["Form"].useForm();
  Object(external_react_["useEffect"])(() => {
    form.setFieldsValue(paymentInformation);
  }, [paymentInformation]);
  return paxum_form_jsx(external_antd_["Form"], paxum_form_extends({}, lib["e" /* formItemLayout */], {
    form: form,
    layout: "vertical",
    onFinish: onFinish,
    name: "paxumSettingForm",
    className: "performerEditForm",
    initialValues: paxum_form_objectSpread({}, paxum_form_initFormValue)
  }), paxum_form_jsx(input_item_list["a" /* default */], {
    fields: paxum_form_leftFormItem
  }), paxum_form_jsx(external_antd_["Form"].Item, lib["m" /* tailFormItemLayout */], paxum_form_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: loading
  }, "Save Change")));
};
// CONCATENATED MODULE: ./src/components/payment/index.ts







/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "caM8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return paymentInformationService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");


class PaymentInformationService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  create(data) {
    return this.post('/payment-information', data);
  }

  findOne(data) {
    return this.get(this.buildUrl('/payment-information', data));
  }

}

const paymentInformationService = new PaymentInformationService();

/***/ }),

/***/ "dNzx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* harmony default export */ __webpack_exports__["a"] = (({
  fields
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, fields.map(field => __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, _extends({}, field, {
  key: field.id || (field.name || field.fieldKey).toString()
}), field.children))));

/***/ }),

/***/ "dgHP":
/***/ (function(module, exports) {



/***/ }),

/***/ "gfZs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/***/ }),

/***/ "h1hT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "ikA6":
/***/ (function(module, exports) {



/***/ }),

/***/ "jgQt":
/***/ (function(module, exports) {



/***/ }),

/***/ "kXO4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return performerlogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return performerloginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return performerloginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return resetLoginData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return studioLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return studioLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return studioLoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return performerRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return performerRegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return performerRegisterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return setPerformerRegisterSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return userRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return userRegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return userRegisterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return setUserRegisterSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return updatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return updatePasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return updatePasswordFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return setUpdatePasswordSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return logout; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vo7w");

const {
  login,
  loginSuccess,
  loginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('login', 'LOGIN');
const loginRequesting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('LOGIN_REQUESTING');
const {
  performerlogin,
  performerloginSuccess,
  performerloginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('performerlogin', 'PERFORMER_LOGIN');
const resetLoginData = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('resetLoginData');
const {
  studioLogin,
  studioLoginSuccess,
  studioLoginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('studioLogin', 'STUDIO_LOGIN');
const {
  performerRegister,
  performerRegisterSuccess,
  performerRegisterFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('performerRegister', 'PERFORMER_REGISTER');
const setPerformerRegisterSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_PERFORMER_REGISTER_SUBMITTING');
const {
  userRegister,
  userRegisterSuccess,
  userRegisterFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('userRegister', 'USER_REGISTER');
const setUserRegisterSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_USER_REGISTER_SUBMITTING');
const {
  updatePassword,
  updatePasswordSuccess,
  updatePasswordFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('updatePassword', 'UPDATE_PASSWORD');
const setUpdatePasswordSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('SET_UPDATE_PASSWORD_SUBMITTING');
const logout = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('logout');

/***/ }),

/***/ "kpM1":
/***/ (function(module, exports) {



/***/ }),

/***/ "lRMd":
/***/ (function(module, exports) {



/***/ }),

/***/ "nXVM":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "psLn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ redux["f" /* createSelector */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ string["a" /* capitalizeFirstLetter */]; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ string["d" /* unitPrices */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ date["b" /* formatDate */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ date["a" /* converDuration */]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ date["d" /* getAge */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ date["c" /* formatDuration */]; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ validateMessages; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ layout["c" /* formItemLayout */]; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ layout["d" /* tailFormItemLayout */]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ layout["b" /* defaultColor */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ utils["h" /* getResponseError */]; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ utils["i" /* getSearchData */]; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ utils["e" /* getBase64 */]; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ utils["j" /* isPhysicalProduct */]; });

// UNUSED EXPORTS: isHasInternetConnection, createSagas, createAction, createAsyncAction, createAsyncActions, createSelectorsA, handleActions, createReducers, createSelectors, createJSSelectors, isUrl, generateUuid, parseAge, backToTop, arrayToTree, pathMatchRegexp, queryAncestors, isMobile, getUrlParameter, DAY_OF_WEEK, getDefaultSchedule, getNextShow, convertConnectionData, checkUserLogin, getCurrentUser, chatBoxMessageClassName, formatDataWeight, formatDataHeight, formatPrice, usernamePatternRule, beforeAvatarUpload

// CONCATENATED MODULE: ./src/lib/internet.ts
const INTERNET_CHECK_URL = 'https://google.com';
const isHasInternetConnection = async () => {
  try {
    const res = await fetch(INTERNET_CHECK_URL, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0
      }
    });

    if (res.status === 404 || res.status === 401 || res.status === 403 || res.status === 500 || res.status >= 200 && res.status <= 300) {
      return true;
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }

  return false;
};
// EXTERNAL MODULE: ./src/lib/redux.ts
var redux = __webpack_require__("vo7w");

// EXTERNAL MODULE: ./src/lib/string.ts
var string = __webpack_require__("rP/q");

// EXTERNAL MODULE: ./src/lib/date.ts
var date = __webpack_require__("ADto");

// CONCATENATED MODULE: ./src/lib/message.ts
const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!'
  },
  number: {
    range: 'Must be between min and max'
  }
};
// EXTERNAL MODULE: ./src/lib/layout.ts
var layout = __webpack_require__("62On");

// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__("NsEo");

// EXTERNAL MODULE: ./src/lib/rules.ts
var rules = __webpack_require__("YRv5");

// EXTERNAL MODULE: ./src/lib/file.ts
var file = __webpack_require__("GMeC");

// CONCATENATED MODULE: ./src/lib/index.ts










/***/ }),

/***/ "rP/q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateUuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unitPrices; });
function isUrl(url) {
  return url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g) !== null;
}
const generateUuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  /* eslint-disable */
  const r = Math.random() * 16 | 0;
  const v = c === 'x' ? r : r & 0x3 | 0x8;
  return v.toString(16);
  /* eslint-enable */
});
function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const unitPrices = [{
  value: 15,
  text: '15 tokens'
}, {
  value: 20,
  text: '20 tokens'
}, {
  value: 25,
  text: '25 tokens'
}, {
  value: 30,
  text: '30 tokens'
}, {
  value: 35,
  text: '35 tokens'
}, {
  value: 40,
  text: '40 tokens'
}, {
  value: 45,
  text: '45 tokens'
}, {
  value: 50,
  text: '50 tokens'
} // {
//   value: 55,
//   text: '55 tokens'
// },
// {
//   value: 60,
//   text: '60 tokens'
// },
// {
//   value: 65,
//   text: '65 tokens'
// },
// {
//   value: 70,
//   text: '70 tokens'
// },
// {
//   value: 75,
//   text: '75 tokens'
// },
// {
//   value: 80,
//   text: '80 tokens'
// },
// {
//   value: 85,
//   text: '85 tokens'
// },
// {
//   value: 90,
//   text: '90 tokens'
// },
// {
//   value: 95,
//   text: '95 tokens'
// },
// {
//   value: 100,
//   text: '100 tokens'
// },
// {
//   value: 120,
//   text: '120 tokens'
// },
// {
//   value: 140,
//   text: '140 tokens'
// },
// {
//   value: 160,
//   text: '160 tokens'
// },
// {
//   value: 180,
//   text: '180 tokens'
// },
// {
//   value: 200,
//   text: '200 tokens'
// },
// {
//   value: 220,
//   text: '220 tokens'
// },
// {
//   value: 240,
//   text: '240 tokens'
// },
// {
//   value: 260,
//   text: '260 tokens'
// },
// {
//   value: 280,
//   text: '280 tokens'
// },
// {
//   value: 300,
//   text: '300 tokens'
// },
// {
//   value: 320,
//   text: '320 tokens'
// },
// {
//   value: 340,
//   text: '340 tokens'
// },
// {
//   value: 360,
//   text: '360 tokens'
// },
// {
//   value: 380,
//   text: '380 tokens'
// },
// {
//   value: 400,
//   text: '400 tokens'
// },
// {
//   value: 420,
//   text: '420 tokens'
// },
// {
//   value: 440,
//   text: '440 tokens'
// },
// {
//   value: 460,
//   text: '460 tokens'
// },
// {
//   value: 480,
//   text: '480 tokens'
// },
// {
//   value: 500,
//   text: '500 tokens'
// },
// {
//   value: 550,
//   text: '550 tokens'
// },
// {
//   value: 600,
//   text: '600 tokens'
// },
// {
//   value: 650,
//   text: '650 tokens'
// },
// {
//   value: 700,
//   text: '700 tokens'
// },
// {
//   value: 750,
//   text: '750 tokens'
// },
// {
//   value: 800,
//   text: '800 tokens'
// },
// {
//   value: 850,
//   text: '850 tokens'
// },
// {
//   value: 900,
//   text: '900 tokens'
// },
// {
//   value: 950,
//   text: '950 tokens'
// },
// {
//   value: 1000,
//   text: '1000 tokens'
// }
];

/***/ }),

/***/ "rddh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PUBLIC_CHAT */
/* unused harmony export PRIVATE_CHAT */
/* unused harmony export GROUP_CHAT */
/* unused harmony export OFFLINE */
/* unused harmony export MODEL_STREAM_CHANNEL */
/* unused harmony export MODEL_STREAM_EVENT_NAME */
/* unused harmony export BroadcastStatus */
/* unused harmony export BroadcastType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WEBRTC; });
/* unused harmony export defaultStreamValue */
/* eslint-disable no-shadow */
const PUBLIC_CHAT = 'public';
const PRIVATE_CHAT = 'private';
const GROUP_CHAT = 'group';
const OFFLINE = 'offline';
const MODEL_STREAM_CHANNEL = 'MODEL_STREAM_CHANNEL';
let MODEL_STREAM_EVENT_NAME;

(function (MODEL_STREAM_EVENT_NAME) {
  MODEL_STREAM_EVENT_NAME["GROUP_START"] = "GROUP_START";
  MODEL_STREAM_EVENT_NAME["PRIVATE_ACCPET"] = "PRIVATE_ACCPET";
})(MODEL_STREAM_EVENT_NAME || (MODEL_STREAM_EVENT_NAME = {}));

let BroadcastStatus;

(function (BroadcastStatus) {
  BroadcastStatus["FINISHED"] = "finished";
  BroadcastStatus["BROADCASTING"] = "broadcasting";
  BroadcastStatus["CREATED"] = "created";
})(BroadcastStatus || (BroadcastStatus = {}));

let BroadcastType;

(function (BroadcastType) {
  BroadcastType["LiveStream"] = "liveStream";
  BroadcastType["IpCamera"] = "ipCamera";
  BroadcastType["StreamSource"] = "streamSource";
  BroadcastType["Vod"] = "Vod";
})(BroadcastType || (BroadcastType = {}));

const HLS = 'hls';
const WEBRTC = 'webrtc';
const defaultStreamValue = {
  publish: true,
  publicStream: true,
  plannedStartDate: 0,
  plannedEndDate: 0,
  duration: 0,
  mp4Enabled: 0,
  webMEnabled: 0,
  expireDurationMS: 0,
  speed: 0,
  pendingPacketSize: 0,
  hlsViewerCount: 0,
  webRTCViewerCount: 0,
  rtmpViewerCount: 0,
  startTime: 0,
  receivedBytes: 0,
  bitrate: 900,
  absoluteStartTimeMs: 0,
  webRTCViewerLimit: -1,
  hlsViewerLimit: -1
};

/***/ }),

/***/ "t2tm":
/***/ (function(module, exports) {



/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vo7w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createSagas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createAsyncAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createAsyncActions; });
/* unused harmony export createSelectorsA */
/* unused harmony export handleActions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createReducers; });
/* unused harmony export createSelectors */
/* unused harmony export createJSSelectors */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MWqi");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"]; });

/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RmXt");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable func-names */

/* eslint-disable no-param-reassign */





function createAction(type) {
  const action = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])(type);

  action.is = aType => action.toString() === aType;

  return action;
}
/* tslint:disable-next-line */


function createAsyncAction(action, type) {
  return {
    [action]: createAction(type),
    [`${action}Success`]: createAction(`${type}_SUCCESS`),
    [`${action}Fail`]: createAction(`${type}_FAIL`)
  };
}

function createAsyncActions(type) {
  return [createAction(type), createAction(`${type}_SUCCESS`), createAction(`${type}_FAIL`)];
}
/* tslint:disable */


function handleActions(actions, initialState) {
  return Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(actions, (reducer, handler, action) => {
    reducer[action] = (state, act) => handler(state.set('action', action), act);

    return reducer;
  }, {}), initialState);
}

function createReducers(stateContext, reducers, initialState, preventResetting = false) {
  return {
    [stateContext]: Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(reducers), (reducer, action) => {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(action.on)) {
        action.on.forEach(act => {
          reducer[act] = action.reducer;
        });
      } else reducer[action.on] = action.reducer;

      return reducer;
    }, preventResetting ? {} : {
      APP_STATE_RESET: () => initialState
    }), initialState)
  };
}

function createSagas(sagas) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(sagas).map(saga => {
    const {
      on,
      effect = redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"],
      worker
    } = saga;
    return function* () {
      yield effect(on, function* (action) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(0);
        yield worker(action);
      });
    };
  });
}

function createSelectorsA(context, keys = []) {
  const stateSelector = state => state[context];

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(keys)) return stateSelector;
  return keys.map(key => state => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(key) ? stateSelector(state).getIn(key) : stateSelector(state).get(key));
}

function createSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state).get(key);

    return selectors;
  }, {});
}

function createJSSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state)[key];

    return selectors;
  }, {});
}



/***/ }),

/***/ "wfgH":
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "wnub":
/***/ (function(module, exports) {



/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yrd7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PRODUCT_TYPE */
/* unused harmony export PRODUCT_STATUS */
const PRODUCT_TYPE = {
  PHYSICAL: 'physical',
  DIGITAL: 'digital'
};
const PRODUCT_STATUS = {
  // DRAFT: 'draft',
  ACTIVE: 'active',
  INACTIVE: 'inactive'
};

/***/ }),

/***/ "zM0U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SettingService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settingService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class SettingService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  all(group = '') {
    return this.get(this.buildUrl('/settings/public', {
      group
    }));
  }

  getCountries() {
    return this.get('/countries/list');
  }

  getTimezones() {
    return this.get('/timezones/list');
  }

}
const settingService = new SettingService();

/***/ }),

/***/ "zVAr":
/***/ (function(module, exports) {



/***/ })

/******/ });