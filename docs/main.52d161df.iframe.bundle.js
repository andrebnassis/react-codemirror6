;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    492: function (module, exports, __webpack_require__) {
      __webpack_require__(493),
        __webpack_require__(649),
        __webpack_require__(650),
        __webpack_require__(852),
        __webpack_require__(853),
        __webpack_require__(858),
        __webpack_require__(859),
        __webpack_require__(857),
        __webpack_require__(854),
        __webpack_require__(860),
        __webpack_require__(855),
        __webpack_require__(856),
        __webpack_require__(861),
        (module.exports = __webpack_require__(848))
    },
    560: function (module, exports) {},
    650: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      __webpack_require__(347)
    },
    848: function (module, exports, __webpack_require__) {
      'use strict'
      ;(function (module) {
        ;(0, __webpack_require__(347).configure)(
          [__webpack_require__(849), __webpack_require__(850)],
          module,
          !1
        )
      }.call(this, __webpack_require__(200)(module)))
    },
    849: function (module, exports) {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(webpackEmptyContext.keys = function () {
        return []
      }),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (module.exports = webpackEmptyContext),
        (webpackEmptyContext.id = 849)
    },
    850: function (module, exports, __webpack_require__) {
      var map = {
        './CodeMirror/index.stories.tsx': 862,
        './CodeMirrorLite/index.stories.tsx': 863
      }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 850)
    },
    861: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var preview_namespaceObject = {}
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          'parameters',
          function () {
            return parameters
          }
        )
      __webpack_require__(24),
        __webpack_require__(7),
        __webpack_require__(55),
        __webpack_require__(431),
        __webpack_require__(845),
        __webpack_require__(53),
        __webpack_require__(846),
        __webpack_require__(847),
        __webpack_require__(430)
      var client_api = __webpack_require__(870),
        esm = __webpack_require__(6),
        parameters = { actions: { argTypesRegex: '^on[A-Z].*' } }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        )
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key]
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.a.warn(
              'Invalid args/argTypes in config, ignoring.',
              JSON.stringify(value)
            )
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(client_api.c)(decorator, !1)
            })
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(client_api.d)(loader, !1)
            })
          case 'parameters':
            return Object(client_api.e)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {}
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        )
                      })
                }
                return target
              })({}, value),
              !1
            )
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(client_api.a)(enhancer)
            })
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return Object(client_api.b)(enhancer)
            })
          case 'render':
            return Object(client_api.g)(value)
          case 'globals':
          case 'globalTypes':
            var v = {}
            return (v[key] = value), Object(client_api.e)(v, !1)
          default:
            return console.log(key + ' was not supported :( !')
        }
      })
    },
    862: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Bigger', function () {
          return Bigger
        })
      __webpack_require__(17),
        __webpack_require__(439),
        __webpack_require__(292),
        __webpack_require__(7),
        __webpack_require__(11),
        __webpack_require__(10),
        __webpack_require__(20),
        __webpack_require__(16),
        __webpack_require__(13),
        __webpack_require__(18),
        __webpack_require__(15),
        __webpack_require__(9),
        __webpack_require__(29)
      var react = __webpack_require__(0),
        dist =
          (__webpack_require__(24),
          __webpack_require__(440),
          __webpack_require__(25),
          __webpack_require__(72),
          __webpack_require__(441),
          __webpack_require__(4)),
        state_dist = __webpack_require__(1),
        history_dist = __webpack_require__(298),
        fold_dist = __webpack_require__(299),
        language_dist = __webpack_require__(30),
        gutter_dist = __webpack_require__(146),
        commands_dist = __webpack_require__(470),
        matchbrackets_dist = __webpack_require__(106),
        closebrackets_dist = __webpack_require__(300),
        search_dist = __webpack_require__(302),
        autocomplete_dist = __webpack_require__(301),
        comment_dist = __webpack_require__(471),
        rectangular_selection_dist = __webpack_require__(469),
        highlight_dist = __webpack_require__(468),
        lint_dist = __webpack_require__(472),
        jsx_runtime = __webpack_require__(27),
        _excluded = ['value', 'onChange', 'extensions', 'keymap']
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr)
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter['@@iterator']
            )
              return Array.from(iter)
          })(arr) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen)
          })(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      var CodeMirror_CodeMirror = function CodeMirror(_ref) {
        var valueProp = _ref.value,
          onChange = _ref.onChange,
          _ref$extensions = _ref.extensions,
          extensions = void 0 === _ref$extensions ? [] : _ref$extensions,
          _ref$keymap = _ref.keymap,
          extraKeymap = void 0 === _ref$keymap ? [] : _ref$keymap,
          props = _objectWithoutProperties(_ref, _excluded),
          valueRef = Object(react.useRef)(valueProp)
        valueRef.current = valueProp
        var extensionsRef = Object(react.useRef)(extensions),
          extraKeymapRef = Object(react.useRef)(extraKeymap),
          animationFrameRef = Object(react.useRef)(-1),
          editorParentElRef = Object(react.useRef)(null),
          editorRef = Object(react.useRef)(null)
        return (
          Object(react.useEffect)(
            function () {
              if (null !== editorParentElRef.current) {
                var editorView = new dist.d({
                  state: state_dist.f.create({
                    doc: valueRef.current,
                    extensions: [
                      Object(gutter_dist.d)(),
                      Object(gutter_dist.c)(),
                      Object(dist.j)(),
                      Object(history_dist.a)(),
                      Object(fold_dist.a)(),
                      Object(dist.h)(),
                      state_dist.f.allowMultipleSelections.of(!0),
                      Object(language_dist.e)(),
                      highlight_dist.a.fallback,
                      Object(matchbrackets_dist.a)(),
                      Object(closebrackets_dist.a)(),
                      Object(autocomplete_dist.a)(),
                      Object(rectangular_selection_dist.a)(),
                      Object(dist.i)(),
                      Object(search_dist.a)(),
                      dist.k.of(
                        [].concat(
                          _toConsumableArray(closebrackets_dist.b),
                          _toConsumableArray(commands_dist.a),
                          _toConsumableArray(search_dist.b),
                          _toConsumableArray(history_dist.b),
                          _toConsumableArray(fold_dist.b),
                          _toConsumableArray(comment_dist.a),
                          _toConsumableArray(autocomplete_dist.b),
                          _toConsumableArray(lint_dist.a),
                          _toConsumableArray(extraKeymapRef.current)
                        )
                      ),
                      dist.d.theme({
                        '&': { alignSelf: 'stretch', flex: '1 0 auto' }
                      }),
                      extensionsRef.current,
                      state_dist.f.transactionExtender.of(function (_ref2) {
                        var newValue = _ref2.newDoc.toString()
                        return (
                          newValue !== valueRef.current &&
                            (null == onChange || onChange(newValue)),
                          null
                        )
                      })
                    ]
                  }),
                  parent: editorParentElRef.current
                })
                editorRef.current = { view: editorView }
              }
              return function () {
                cancelAnimationFrame(animationFrameRef.current),
                  null !== editorRef.current &&
                    (editorRef.current.view.destroy(),
                    (editorRef.current = null))
              }
            },
            [editorParentElRef]
          ),
          Object(jsx_runtime.jsx)(
            'div',
            Object.assign({}, props, { ref: editorParentElRef })
          )
        )
      }
      CodeMirror_CodeMirror.displayName = 'CodeMirror'
      try {
        ;(CodeMirror_CodeMirror.displayName = 'CodeMirror'),
          (CodeMirror_CodeMirror.__docgenInfo = {
            description: '',
            displayName: 'CodeMirror',
            props: {
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'string' }
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '((value: string) => void)' }
              },
              extensions: {
                defaultValue: { value: '[]' },
                description: '',
                name: 'extensions',
                required: !1,
                type: { name: 'Extension' }
              },
              keymap: {
                defaultValue: null,
                description: '',
                name: 'keymap',
                required: !1,
                type: { name: 'readonly KeyBinding[]' }
              }
            }
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/CodeMirror/index.tsx#CodeMirror'] = {
              docgenInfo: CodeMirror_CodeMirror.__docgenInfo,
              name: 'CodeMirror',
              path: 'src/CodeMirror/index.tsx#CodeMirror'
            })
      } catch (__react_docgen_typescript_loader_error) {}
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator']
            if (null == _i) return
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              ;(_d = !0), (_e = err)
            } finally {
              try {
                _n || null == _i.return || _i.return()
              } finally {
                if (_d) throw _e
              }
            }
            return _arr
          })(arr, i) ||
          (function index_stories_unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o)
              return index_stories_arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return index_stories_arrayLikeToArray(o, minLen)
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function index_stories_arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      __webpack_exports__.default = {
        component: CodeMirror_CodeMirror,
        title: 'Components/CodeMirror'
      }
      var Primary = function PrimaryWrapper(args) {
          var _useState2 = _slicedToArray(Object(react.useState)(''), 2),
            value = _useState2[0],
            setValue = _useState2[1]
          return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)(
                CodeMirror_CodeMirror,
                Object.assign({}, args, { value: value, onChange: setValue })
              ),
              Object(jsx_runtime.jsx)('br', {}),
              Object(jsx_runtime.jsx)('br', {}),
              'value:',
              Object(jsx_runtime.jsx)('pre', {
                children: Object(jsx_runtime.jsx)('code', { children: value })
              }),
              Object(jsx_runtime.jsx)('style', {
                dangerouslySetInnerHTML: {
                  __html: 'pre{margin-top:0;background:#eee;padding:16px}'
                }
              })
            ]
          })
        }.bind({}),
        Bigger = function BiggerWrapper(args) {
          var _useState4 = _slicedToArray(Object(react.useState)(''), 2),
            value = _useState4[0],
            setValue = _useState4[1]
          return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)('div', {
                style: { height: 400, display: 'flex' },
                children: Object(jsx_runtime.jsx)(
                  CodeMirror_CodeMirror,
                  Object.assign({}, args, {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      flex: '1 0 auto'
                    },
                    value: value,
                    onChange: setValue
                  })
                )
              }),
              Object(jsx_runtime.jsx)('br', {}),
              Object(jsx_runtime.jsx)('br', {}),
              'value:',
              Object(jsx_runtime.jsx)('pre', {
                children: Object(jsx_runtime.jsx)('code', { children: value })
              }),
              Object(jsx_runtime.jsx)('style', {
                dangerouslySetInnerHTML: {
                  __html: 'pre{margin-top:0;background:#eee;padding:16px}'
                }
              })
            ]
          })
        }.bind({})
      ;(Primary.parameters = Object.assign(
        {
          storySource: {
            source:
              "(args) => {\n  const [value, setValue] = useState('')\n\n  return (\n    <>\n      <CodeMirror {...args} value={value} onChange={setValue} />\n      <br />\n      <br />\n      value:\n      <pre>\n        <code>{value}</code>\n      </pre>\n      <style\n        dangerouslySetInnerHTML={{\n          __html: 'pre{margin-top:0;background:#eee;padding:16px}'\n        }}\n      />\n    </>\n  )\n}"
          }
        },
        Primary.parameters
      )),
        (Bigger.parameters = Object.assign(
          {
            storySource: {
              source:
                "(args) => {\n  const [value, setValue] = useState('')\n\n  return (\n    <>\n      <div style={{ height: 400, display: 'flex' }}>\n        <CodeMirror\n          {...args}\n          style={{\n            display: 'flex',\n            flexDirection: 'column',\n            flex: '1 0 auto'\n          }}\n          value={value}\n          onChange={setValue}\n        />\n      </div>\n      <br />\n      <br />\n      value:\n      <pre>\n        <code>{value}</code>\n      </pre>\n      <style\n        dangerouslySetInnerHTML={{\n          __html: 'pre{margin-top:0;background:#eee;padding:16px}'\n        }}\n      />\n    </>\n  )\n}"
            }
          },
          Bigger.parameters
        ))
    },
    863: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Bigger', function () {
          return Bigger
        })
      __webpack_require__(17),
        __webpack_require__(439),
        __webpack_require__(292),
        __webpack_require__(7),
        __webpack_require__(11),
        __webpack_require__(10),
        __webpack_require__(20),
        __webpack_require__(16),
        __webpack_require__(13),
        __webpack_require__(18),
        __webpack_require__(15),
        __webpack_require__(9),
        __webpack_require__(29)
      var react = __webpack_require__(0),
        dist =
          (__webpack_require__(24),
          __webpack_require__(440),
          __webpack_require__(72),
          __webpack_require__(441),
          __webpack_require__(4)),
        state_dist = __webpack_require__(1),
        jsx_runtime = __webpack_require__(27),
        _excluded = ['value', 'onChange', 'extensions']
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      var CodeMirrorLite_CodeMirrorLite = function CodeMirrorLite(_ref) {
        var valueProp = _ref.value,
          onChange = _ref.onChange,
          _ref$extensions = _ref.extensions,
          extensions = void 0 === _ref$extensions ? [] : _ref$extensions,
          props = _objectWithoutProperties(_ref, _excluded),
          valueRef = Object(react.useRef)(valueProp)
        valueRef.current = valueProp
        var extensionsRef = Object(react.useRef)(extensions),
          animationFrameRef = Object(react.useRef)(-1),
          editorParentElRef = Object(react.useRef)(null),
          editorRef = Object(react.useRef)(null)
        return (
          Object(react.useEffect)(
            function () {
              if (null !== editorParentElRef.current) {
                var editorView = new dist.d({
                  state: state_dist.f.create({
                    doc: valueRef.current,
                    extensions: [
                      dist.d.theme({
                        '&': { alignSelf: 'stretch', flex: '1 0 auto' }
                      }),
                      extensionsRef.current,
                      state_dist.f.transactionExtender.of(function (_ref2) {
                        var newValue = _ref2.newDoc.toString()
                        return (
                          newValue !== valueRef.current &&
                            (null == onChange || onChange(newValue)),
                          null
                        )
                      })
                    ]
                  }),
                  parent: editorParentElRef.current
                })
                editorRef.current = { view: editorView }
              }
              return function () {
                cancelAnimationFrame(animationFrameRef.current),
                  null !== editorRef.current &&
                    (editorRef.current.view.destroy(),
                    (editorRef.current = null))
              }
            },
            [editorParentElRef]
          ),
          Object(jsx_runtime.jsx)(
            'div',
            Object.assign({}, props, { ref: editorParentElRef })
          )
        )
      }
      CodeMirrorLite_CodeMirrorLite.displayName = 'CodeMirrorLite'
      try {
        ;(CodeMirrorLite_CodeMirrorLite.displayName = 'CodeMirrorLite'),
          (CodeMirrorLite_CodeMirrorLite.__docgenInfo = {
            description: '',
            displayName: 'CodeMirrorLite',
            props: {
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'string' }
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '((value: string) => void)' }
              },
              extensions: {
                defaultValue: { value: '[]' },
                description: '',
                name: 'extensions',
                required: !1,
                type: { name: 'Extension' }
              }
            }
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/CodeMirrorLite/index.tsx#CodeMirrorLite'
            ] = {
              docgenInfo: CodeMirrorLite_CodeMirrorLite.__docgenInfo,
              name: 'CodeMirrorLite',
              path: 'src/CodeMirrorLite/index.tsx#CodeMirrorLite'
            })
      } catch (__react_docgen_typescript_loader_error) {}
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator']
            if (null == _i) return
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              ;(_d = !0), (_e = err)
            } finally {
              try {
                _n || null == _i.return || _i.return()
              } finally {
                if (_d) throw _e
              }
            }
            return _arr
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen)
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      __webpack_exports__.default = {
        component: CodeMirrorLite_CodeMirrorLite,
        title: 'Components/CodeMirrorLite'
      }
      var Primary = function PrimaryWrapper(args) {
          var _useState2 = _slicedToArray(Object(react.useState)(''), 2),
            value = _useState2[0],
            setValue = _useState2[1]
          return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)(
                CodeMirrorLite_CodeMirrorLite,
                Object.assign({}, args, { value: value, onChange: setValue })
              ),
              'input ↑ (invisible without extensions)',
              Object(jsx_runtime.jsx)('br', {}),
              Object(jsx_runtime.jsx)('br', {}),
              'value:',
              Object(jsx_runtime.jsx)('pre', {
                children: Object(jsx_runtime.jsx)('code', { children: value })
              }),
              Object(jsx_runtime.jsx)('style', {
                dangerouslySetInnerHTML: {
                  __html: 'pre{margin-top:0;background:#eee;padding:16px}'
                }
              })
            ]
          })
        }.bind({}),
        Bigger = function BiggerWrapper(args) {
          var _useState4 = _slicedToArray(Object(react.useState)(''), 2),
            value = _useState4[0],
            setValue = _useState4[1]
          return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)('div', {
                style: { height: 400, display: 'flex' },
                children: Object(jsx_runtime.jsx)(
                  CodeMirrorLite_CodeMirrorLite,
                  Object.assign({}, args, {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      flex: '1 0 auto'
                    },
                    value: value,
                    onChange: setValue
                  })
                )
              }),
              Object(jsx_runtime.jsx)('br', {}),
              Object(jsx_runtime.jsx)('br', {}),
              'value:',
              Object(jsx_runtime.jsx)('pre', {
                children: Object(jsx_runtime.jsx)('code', { children: value })
              }),
              Object(jsx_runtime.jsx)('style', {
                dangerouslySetInnerHTML: {
                  __html: 'pre{margin-top:0;background:#eee;padding:16px}'
                }
              })
            ]
          })
        }.bind({})
      ;(Primary.parameters = Object.assign(
        {
          storySource: {
            source:
              "(args) => {\n  const [value, setValue] = useState('')\n\n  return (\n    <>\n      <CodeMirrorLite {...args} value={value} onChange={setValue} />\n      input ↑ (invisible without extensions)\n      <br />\n      <br />\n      value:\n      <pre>\n        <code>{value}</code>\n      </pre>\n      <style\n        dangerouslySetInnerHTML={{\n          __html: 'pre{margin-top:0;background:#eee;padding:16px}'\n        }}\n      />\n    </>\n  )\n}"
          }
        },
        Primary.parameters
      )),
        (Bigger.parameters = Object.assign(
          {
            storySource: {
              source:
                "(args) => {\n  const [value, setValue] = useState('')\n\n  return (\n    <>\n      <div style={{ height: 400, display: 'flex' }}>\n        <CodeMirrorLite\n          {...args}\n          style={{\n            display: 'flex',\n            flexDirection: 'column',\n            flex: '1 0 auto'\n          }}\n          value={value}\n          onChange={setValue}\n        />\n      </div>\n      <br />\n      <br />\n      value:\n      <pre>\n        <code>{value}</code>\n      </pre>\n      <style\n        dangerouslySetInnerHTML={{\n          __html: 'pre{margin-top:0;background:#eee;padding:16px}'\n        }}\n      />\n    </>\n  )\n}"
            }
          },
          Bigger.parameters
        ))
    }
  },
  [[492, 2, 3]]
])
