'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Stream = require('stream');
var http$1 = require('http');
var Url$1 = require('url');
var https$1 = require('https');
var zlib = require('zlib');
var require$$2 = require('events');
var require$$5 = require('util');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http$1);
var Url__default = /*#__PURE__*/_interopDefaultLegacy(Url$1);
var https__default = /*#__PURE__*/_interopDefaultLegacy(https$1);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);
var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);

var name = "iexjs";
var version$1 = "0.3.2";
var description = "JS interface to IEX and IEX Cloud APIs";
var repository = {
	type: "git",
	url: "https://github.com/iexcloud/iexjs"
};
var engines = {
	node: ">=10.18.1"
};
var license = "Apache-2.0";
var main = "dist/cjs/iexjs.js";
var module$1 = "dist/esm/iexjs.js";
var browser = "dist/esm/iexjs.js";
var unpkg = "dist/esm/iexjs.js";
var jsdelivr = "dist/esm/iexjs.js";
var types = "index.d.ts";
var files$1 = [
	"dist/**/*",
	"babel.config.js",
	"index.d.ts"
];
var scripts = {
	"build:rollup": "rollup -c rollup.config.js",
	build: "npm-run-all -p build:*",
	fix: "yarn lint --fix",
	lint: "eslint src",
	test: "set NODE_ENV=test&& set IEX_TOKEN=Tpk_ecc89ddf30a611e9958142010a80043c&& jest --config .jestrc.js --forceExit",
	jest: "set NODE_ENV=test&& set IEX_TOKEN=Tpk_ecc89ddf30a611e9958142010a80043c&& jest --config .jestrc.js --forceExit -t batch"
};
var publishConfig = {
	access: "public"
};
var dependencies = {
	"@rollup/plugin-inject": "^4.0.2",
	"cross-fetch": "^3.0.6",
	eventsource: "^1.0.7",
	"regenerator-runtime": "^0.13.7",
	"temporal-cache": "^0.1.0"
};
var devDependencies = {
	"@babel/core": "^7.14.6",
	"@babel/plugin-proposal-class-properties": "^7.14.5",
	"@babel/plugin-proposal-decorators": "^7.14.5",
	"@babel/plugin-proposal-optional-chaining": "^7.14.5",
	"@babel/plugin-transform-modules-commonjs": "^7.14.5",
	"@babel/plugin-transform-runtime": "^7.14.5",
	"@babel/preset-env": "^7.14.7",
	"@rollup/plugin-babel": "^5.0.2",
	"@rollup/plugin-commonjs": "^19.0.0",
	"@rollup/plugin-json": "^4.1.0",
	"@rollup/plugin-node-resolve": "^13.0.0",
	"@rollup/plugin-replace": "^2.4.1",
	"babel-eslint": "^10.1.0",
	"babel-jest": "^27.0.5",
	"babel-plugin-lodash": "^3.3.4",
	"babel-plugin-transform-custom-element-classes": "^0.1.0",
	"core-js": "^3.9.0",
	eslint: "^7.29.0",
	"eslint-config-airbnb-base": "^14.2.1",
	"eslint-config-prettier": "^8.3.0",
	"eslint-plugin-html": "^6.0.2",
	"eslint-plugin-import": "^2.23.4",
	"eslint-plugin-jest": "^24.1.3",
	"eslint-plugin-markdown": "^2.2.0",
	"eslint-plugin-prettier": "^3.1.3",
	jest: "^27.0.5",
	"npm-run-all": "^4.1.3",
	prettier: "^2.3.2",
	rollup: "^2.52.3",
	"rollup-plugin-filesize": "^9.0.0",
	"rollup-plugin-inject-process-env": "^1.3.1",
	"rollup-plugin-livereload": "^2.0.0",
	"rollup-plugin-node-builtins": "^2.1.2",
	"rollup-plugin-node-globals": "^1.4.0",
	"rollup-plugin-node-polyfills": "^0.2.1",
	"rollup-plugin-postcss": "^4.0.0",
	"rollup-plugin-sourcemaps": "^0.6.2",
	"rollup-plugin-terser": "^7.0.2"
};
var resolutions = {
	bl: "^1.2.3",
	"node-fetch": "^2.6.1"
};
var pkg_json = {
	name: name,
	version: version$1,
	description: description,
	repository: repository,
	engines: engines,
	license: license,
	main: main,
	module: module$1,
	browser: browser,
	unpkg: unpkg,
	jsdelivr: jsdelivr,
	types: types,
	files: files$1,
	scripts: scripts,
	publishConfig: publishConfig,
	dependencies: dependencies,
	devDependencies: devDependencies,
	resolutions: resolutions
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$f =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$e = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$d = fails$e;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$d(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$5 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString$2 = {}.toString;

var classofRaw$1 = function (it) {
  return toString$2.call(it).slice(8, -1);
};

var fails$c = fails$e;
var classof$4 = classofRaw$1;

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$c(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$4(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$4 = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$3 = requireObjectCoercible$4;

var toIndexedObject$4 = function (it) {
  return IndexedObject$1(requireObjectCoercible$3(it));
};

var isObject$6 = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject$5 = isObject$6;

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive$3 = function (input, PREFERRED_STRING) {
  if (!isObject$5(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$5(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject$5(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$5(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var requireObjectCoercible$2 = requireObjectCoercible$4;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$5 = function (argument) {
  return Object(requireObjectCoercible$2(argument));
};

var toObject$4 = toObject$5;

var hasOwnProperty = {}.hasOwnProperty;

var has$b = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject$4(it), key);
};

var global$e = global$f;
var isObject$4 = isObject$6;

var document$1 = global$e.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject$4(document$1) && isObject$4(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

var DESCRIPTORS$6 = descriptors;
var fails$b = fails$e;
var createElement = documentCreateElement$1;

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !DESCRIPTORS$6 && !fails$b(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$5 = descriptors;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;
var toIndexedObject$3 = toIndexedObject$4;
var toPrimitive$2 = toPrimitive$3;
var has$a = has$b;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$3(O);
  P = toPrimitive$2(P, true);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has$a(O, P)) return createPropertyDescriptor$4(!propertyIsEnumerableModule$1.f.call(O, P), O[P]);
};

var objectDefineProperty = {};

var isObject$3 = isObject$6;

var anObject$b = function (it) {
  if (!isObject$3(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var DESCRIPTORS$4 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var anObject$a = anObject$b;
var toPrimitive$1 = toPrimitive$3;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$4 ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPrimitive$1(P, true);
  anObject$a(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$3 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;

var createNonEnumerableProperty$8 = DESCRIPTORS$3 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$6 = {exports: {}};

var global$d = global$f;
var createNonEnumerableProperty$7 = createNonEnumerableProperty$8;

var setGlobal$3 = function (key, value) {
  try {
    createNonEnumerableProperty$7(global$d, key, value);
  } catch (error) {
    global$d[key] = value;
  } return value;
};

var global$c = global$f;
var setGlobal$2 = setGlobal$3;

var SHARED = '__core-js_shared__';
var store$3 = global$c[SHARED] || setGlobal$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store$2.inspectSource != 'function') {
  store$2.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource$2 = store$2.inspectSource;

var global$b = global$f;
var inspectSource$1 = inspectSource$2;

var WeakMap$1 = global$b.WeakMap;

var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource$1(WeakMap$1));

var shared$4 = {exports: {}};

var isPure = false;

var store$1 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$1[key] || (store$1[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var id = 0;
var postfix = Math.random();

var uid$2 = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var shared$3 = shared$4.exports;
var uid$1 = uid$2;

var keys = shared$3('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid$1(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$a = global$f;
var isObject$2 = isObject$6;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$8;
var objectHas = has$b;
var shared$2 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global$a.WeakMap;
var set$1, get, has$9;

var enforce = function (it) {
  return has$9(it) ? get(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$2.state) {
  var store = shared$2.state || (shared$2.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set$1 = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has$9 = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set$1 = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$6(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has$9 = function (it) {
    return objectHas(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get,
  has: has$9,
  enforce: enforce,
  getterFor: getterFor
};

var global$9 = global$f;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$8;
var has$8 = has$b;
var setGlobal$1 = setGlobal$3;
var inspectSource = inspectSource$2;
var InternalStateModule$4 = internalState;

var getInternalState$3 = InternalStateModule$4.get;
var enforceInternalState = InternalStateModule$4.enforce;
var TEMPLATE = String(String).split('String');

(redefine$6.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has$8(value, 'name')) {
      createNonEnumerableProperty$5(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global$9) {
    if (simple) O[key] = value;
    else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty$5(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState$3(this).source || inspectSource(this);
});

var global$8 = global$f;

var path$1 = global$8;

var path = path$1;
var global$7 = global$f;

var aFunction$2 = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction$2(path[namespace]) || aFunction$2(global$7[namespace])
    : path[namespace] && path[namespace][method] || global$7[namespace] && global$7[namespace][method];
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$3 = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
var toInteger$4 = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$3 : ceil)(argument);
};

var toInteger$3 = toInteger$4;

var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$3 = function (argument) {
  return argument > 0 ? min$2(toInteger$3(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toInteger$2 = toInteger$4;

var max$1 = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toInteger$2(index);
  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
};

var toIndexedObject$2 = toIndexedObject$4;
var toLength$2 = toLength$3;
var toAbsoluteIndex = toAbsoluteIndex$1;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$2($this);
    var length = toLength$2(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var has$7 = has$b;
var toIndexedObject$1 = toIndexedObject$4;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has$7(hiddenKeys$2, key) && has$7(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has$7(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$3 = getBuiltIn$4;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$9 = anObject$b;

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$3('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$9(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var has$6 = has$b;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has$6(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$a = fails$e;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails$a(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$6 = global$f;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$8;
var redefine$5 = redefine$6.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$6;
  } else if (STATIC) {
    target = global$6[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$6[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$4(sourceProperty, 'sham', true);
    }
    // extend global
    redefine$5(target, key, sourceProperty, options);
  }
};

var anObject$8 = anObject$b;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$8(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var regexpStickyHelpers = {};

var fails$9 = fails$e;

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
var RE = function (s, f) {
  return RegExp(s, f);
};

regexpStickyHelpers.UNSUPPORTED_Y = fails$9(function () {
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

regexpStickyHelpers.BROKEN_CARET = fails$9(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$2 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var anObject$7 = anObject$b;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
var objectDefineProperties = DESCRIPTORS$2 ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$7(O);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$2.f(O, key = keys[index++], Properties[key]);
  return O;
};

var getBuiltIn$2 = getBuiltIn$4;

var html$1 = getBuiltIn$2('document', 'documentElement');

var anObject$6 = anObject$b;
var defineProperties$1 = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$6(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties$1(result, Properties);
};

var fails$8 = fails$e;

var regexpUnsupportedDotAll = fails$8(function () {
  // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var re = RegExp('.', (typeof '').charAt(0));
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$7 = fails$e;

var regexpUnsupportedNcg = fails$7(function () {
  // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
  var re = RegExp('(?<a>b)', (typeof '').charAt(5));
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared$1 = shared$4.exports;
var create$4 = objectCreate;
var getInternalState$2 = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared$1('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(str) {
    var re = this;
    var state = getInternalState$2(re);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$4(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $$3 = _export;
var exec = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$3({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

var getBuiltIn$1 = getBuiltIn$4;

var engineUserAgent = getBuiltIn$1('navigator', 'userAgent') || '';

var global$5 = global$f;
var userAgent = engineUserAgent;

var process$1 = global$5.process;
var versions = process$1 && process$1.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION = engineV8Version;
var fails$6 = fails$e;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$6(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = nativeSymbol;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$4 = global$f;
var shared = shared$4.exports;
var has$5 = has$b;
var uid = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global$4.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol$d = function (name) {
  if (!has$5(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has$5(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};

// TODO: Remove from `core-js@4` since it's moved to entry points

var redefine$4 = redefine$6.exports;
var regexpExec$1 = regexpExec$2;
var fails$5 = fails$e;
var wellKnownSymbol$c = wellKnownSymbol$d;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$8;

var SPECIES = wellKnownSymbol$c('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$c(KEY);

  var DELEGATES_TO_SYMBOL = !fails$5(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$5(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine$4(String.prototype, KEY, methods[0]);
    redefine$4(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$3(RegExpPrototype[SYMBOL], 'sham', true);
};

var toInteger$1 = toInteger$4;
var requireObjectCoercible$1 = requireObjectCoercible$4;

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible$1($this));
    var position = toInteger$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

var toObject$3 = toObject$5;

var floor$2 = Math.floor;
var replace$1 = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject$3(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$1.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor$2(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var classof$3 = classofRaw$1;
var regexpExec = regexpExec$2;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof$3(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails$4 = fails$e;
var anObject$5 = anObject$b;
var toLength$1 = toLength$3;
var toInteger = toInteger$4;
var requireObjectCoercible = requireObjectCoercible$4;
var advanceStringIndex = advanceStringIndex$1;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol$b = wellKnownSymbol$d;

var REPLACE = wellKnownSymbol$b('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$4(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      if (
        typeof replaceValue === 'string' &&
        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
        replaceValue.indexOf('$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, this, string, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject$5(this);
      var S = String(string);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$1(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
function IEXJSException(message) {
  const error = new Error(message);
  return error;
}
IEXJSException.prototype = Object.create(Error.prototype);

const _TIMEFRAME_REGEX_QHY = /^((q|Q)[1-4]|(h|H)[1-2])?(1|2)(0|9)[0-9][0-9]/;
const _TIMEFRAME_REGEX = /^[0-9]+(y|q|m|w|d)/;
const _TIMEFRAME_CHART = ["max", "5y", "2y", "1y", "ytd", "6m", "3m", "1m", "1mm", "5d", "5dm", "1d", "dynamic"];
const _TIMEFRAME_DIVSPLIT = ["5y", "2y", "1y", "ytd", "6m", "3m", "1m", "next"];
const _LIST_OPTIONS = ["mostactive", "gainers", "losers", "iexvolume", "iexpercent", "premarket_losers", "postmarket_losers", "premarket_gainers", "postmarket_gainers"];
const _COLLECTION_TAGS = ["sector", "tag", "list"];
const _DATE_RANGES = ["today", "yesterday", "ytd", "last-week", "last-month", "last-quarter", "d", "w", "m", "q", "y", "tomorrow", "this-week", "this-month", "this-quarter", "next-week", "next-month", "next-quarter"];
const _KEY_STATS = ["companyName", "marketcap", "week52high", "week52low", "week52change", "sharesOutstanding", "float", "avg10Volume", "avg30Volume", "day200MovingAvg", "day50MovingAvg", "employees", "ttmEPS", "ttmDividendRate", "dividendYield", "nextDividendDate", "exDividendDate", "nextEarningsDate", "peRatio", "beta", "maxChangePercent", "year5ChangePercent", "year2ChangePercent", "year1ChangePercent", "ytdChangePercent", "month6ChangePercent", "month3ChangePercent", "month1ChangePercent", "day30ChangePercent", "day5ChangePercent"];
const _USAGE_TYPES = ["messages", "rules", "rule-records", "alerts", "alert-records"];
const _BATCH_TYPES = ["advanced-stats", "balance-sheet", "book", "chart", "company", "delayed-quote", "dividends", "earnings", "effective-spread", "financials", "fund-ownership", "income", "indicator", "insider-roster", "insider-summary", "insider-transactions", "institutional-ownership", "intraday-prices", "largest-trades", "logo", "news", "ohlc", "peers", "price", "previous", "quote", "relevant", "splits", "stats", "volume-by-venue"];
const _STANDARD_DATE_FIELDS = ["consensusEndDate", "consensusStartDate", "DailyListTimestamp", "date", "datetime", "declaredDate", "EPSReportDate", "endDate", "exDate", "expectedDate", "expirationDate", "fiscalEndDate", "latestTime", "lastTradeDate", "lastUpdated", "paymentDate", "processedTime", "recordDate", "RecordUpdateTime", "reportDate", "settlementDate", "startDate"];
const _STANDARD_TIME_FIELDS = ["closeTime", "close.time", "delayedPriceTime", "extendedPriceTime", "highTime", "iexCloseTime", "iexLastUpdated", "iexOpenTime", "lastTradeTime", "lastUpdated", "latestTime", "latestUpdate", "lowTime", "oddLotDelayedPriceTime", "openTime", "open.time", "processedTime", "report_date", "reportDate", "time", "timestamp", "updated"];
const _INDICATORS = ["abs", "acos", "ad", "add", "adosc", "adx", "adxr", "ao", "apo", "aroon", "aroonosc", "asin", "atan", "atr", "avgprice", "bbands", "bop", "cci", "ceil", "cmo", "cos", "cosh", "crossany", "crossover", "cvi", "decay", "dema", "di", "div", "dm", "dpo", "dx", "edecay", "ema", "emv", "exp", "fisher", "floor", "fosc", "hma", "kama", "kvo", "lag", "linreg", "linregintercept", "linregslope", "ln", "log10", "macd", "marketfi", "mass", "max", "md", "medprice", "mfi", "min", "mom", "msw", "mul", "natr", "nvi", "obv", "ppo", "psar", "pvi", "qstick", "roc", "rocr", "round", "rsi", "sin", "sinh", "sma", "sqrt", "stddev", "stderr", "stoch", "stochrsi", "sub", "sum", "tan", "tanh", "tema", "todeg", "torad", "tr", "trima", "trix", "trunc", "tsf", "typprice", "ultosc", "var", "vhf", "vidya", "volatility", "vosc", "vwma", "wad", "wcprice", "wilders", "willr", "wma", "zlema"];
const _INDICATOR_RETURNS = {
  abs: ["abs"],
  acos: ["acos"],
  ad: ["ad"],
  add: ["add"],
  adosc: ["adosc"],
  adx: ["dx"],
  adxr: ["dx"],
  ao: ["ao"],
  apo: ["apo"],
  aroon: ["aroon_down", "aroon_up"],
  aroonosc: ["aroonosc"],
  asin: ["asin"],
  atan: ["atan"],
  atr: ["atr"],
  avgprice: ["avgprice"],
  bbands: ["bbands_lower", "bbands_middle", "bbands_upper"],
  bop: ["bop"],
  cci: ["cci"],
  ceil: ["ceil"],
  cmo: ["cmo"],
  cos: ["cos"],
  cosh: ["cosh"],
  crossany: ["crossany"],
  crossover: ["crossover"],
  cvi: ["cvi"],
  decay: ["decay"],
  dema: ["dema"],
  di: ["plus_di", "minus_di"],
  div: ["div"],
  dm: ["plus_dm", "minus_dm"],
  dpo: ["dop"],
  dx: ["dx"],
  edecay: ["edecay"],
  ema: ["ema"],
  emv: ["emv"],
  exp: ["exp"],
  fisher: ["fisher", "fisher_signal"],
  floor: ["floor"],
  fosc: ["fosc"],
  hma: ["hma"],
  kama: ["kama"],
  kvo: ["kvo"],
  lag: ["lag"],
  linreg: ["linreg"],
  linregintercept: ["linregintercept"],
  linregslope: ["linregslope"],
  ln: ["ln"],
  log10: ["log10"],
  macd: ["macd", "macd_signal", "macd_histogram"],
  marketfi: ["marketfi"],
  mass: ["mass"],
  max: ["max"],
  md: ["md"],
  medprice: ["medprice"],
  mfi: ["mfi"],
  min: ["min"],
  mom: ["mom"],
  msw: ["msw_sine", "msw_lead"],
  mul: ["mul"],
  natr: ["matr"],
  nvi: ["nvi"],
  obv: ["obv"],
  ppo: ["ppo"],
  psar: ["psar"],
  pvi: ["pvi"],
  qstick: ["qstick"],
  roc: ["roc"],
  rocr: ["rocr"],
  round: ["round"],
  rsi: ["rsi"],
  sin: ["sin"],
  sinh: ["sinh"],
  sma: ["sma"],
  sqrt: ["sqrt"],
  stddev: ["stddev"],
  stderr: ["stderr"],
  stoch: ["stock_k", "stock_d"],
  stochrsi: ["stochrsi"],
  sub: ["sub"],
  sum: ["sum"],
  tan: ["tan"],
  tanh: ["tanh"],
  tema: ["tema"],
  todeg: ["degrees"],
  torad: ["radians"],
  tr: ["tr"],
  trima: ["trima"],
  trix: ["trix"],
  trunc: ["trunc"],
  tsf: ["tsf"],
  typprice: ["typprice"],
  ultosc: ["ultosc"],
  var: ["var"],
  vhf: ["vhf"],
  vidya: ["vidya"],
  volatility: ["volatility"],
  vosc: ["vosc"],
  vwma: ["vwma"],
  wad: ["wad"],
  wcprice: ["wcprice"],
  wilders: ["wilders"],
  willr: ["willr"],
  wma: ["wma"],
  zlema: ["zlema"]
};
const _strToList = st => {
  if (typeof st === "string") {
    return [st];
  }

  return st;
};
const _strCommaSeparatedString = st => _strToList(st).join(",");
const _strOrDate = st => {
  if (typeof st === "string") return st;
  if (st instanceof Date) return st.toISOString().slice(0, 10).replace(/-/g, "");
  throw IEXJSException(`Not a date: ${typeof st} ${st}`);
};
const _dateRange = st => {
  if (_DATE_RANGES.indexOf(st) < 0 && !_TIMEFRAME_REGEX.test(st) && !_TIMEFRAME_REGEX_QHY.test(st)) throw IEXJSException(`Must be a valid date range: got ${st}`);
  return st;
};
const _raiseIfNotStr = s => {
  if (typeof s !== "string") throw IEXJSException(`Cannot use type ${typeof s}`);
};
const _checkPeriodLast = (per, last) => {
  if (per !== "quarter" && per !== "annual") {
    throw IEXJSException("Period must be in {'quarter', 'annual'}");
  }

  if (per === "quarter") {
    if (last < 1 || last > 12) {
      throw IEXJSException("Last must be in [1, 12] for period 'quarter'");
    }
  } else if (last < 1 || last > 4) {
    throw IEXJSException("Last must be in [1, 4] for period 'annual'");
  }
}; // TODO
// def _expire(**temporal_args):
//     if not os.path.exists(_PYEX_CACHE_FOLDER):
//         os.makedirs(_PYEX_CACHE_FOLDER)
//     def _wrapper(foo):
//         temporal_args["persistent"] = os.path.join(_PYEX_CACHE_FOLDER, foo.__name__)
//         return expire(**temporal_args)(foo)
//     return _wrapper
// TODO
// def _interval(**temporal_args):
//     if not os.path.exists(_PYEX_CACHE_FOLDER):
//         os.makedirs(_PYEX_CACHE_FOLDER)
//     def _wrapper(foo):
//         temporal_args["persistent"] = os.path.join(_PYEX_CACHE_FOLDER, foo.__name__)
//         return interval(**temporal_args)(foo)
//     return _wrapper

const _requireSecret = (token, allowSandbox = true) => {
  if (token.startsWith("sk") || allowSandbox && token.startsWith("Tsk")) return;
  throw IEXJSException("Requires secret token!");
};
const _quoteSymbols = symbols => {
  if (Array.isArray(symbols)) {
    // comma separated, quote separately
    return symbols.map(symbol => encodeURIComponent(symbol)).join(",");
  } // not comma separated, just quote


  return encodeURIComponent(symbols);
};
const _timeseriesWrapper = (options, enforceKey = true, enforceSubkey = true) => {
  if (enforceKey) {
    const {
      key
    } = options || {};
    if (!(key === undefined || key === null)) throw IEXJSException("Cannot pass `key` argument to timeseries, already used");
  }

  if (enforceSubkey) {
    const {
      subkey
    } = options || {};
    if (!(subkey === undefined || subkey === null)) throw IEXJSException("Cannot pass `subkey` argument to timeseries, already used");
  }
};

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var wellKnownSymbol$a = wellKnownSymbol$d;
var create$3 = objectCreate;
var definePropertyModule$1 = objectDefineProperty;

var UNSCOPABLES = wellKnownSymbol$a('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  definePropertyModule$1.f(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$3(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$3 = fails$e;

var correctPrototypeGetter = !fails$3(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var has$4 = has$b;
var toObject$2 = toObject$5;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject$2(O);
  if (has$4(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};

var fails$2 = fails$e;
var getPrototypeOf$1 = objectGetPrototypeOf;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$8;
var has$3 = has$b;
var wellKnownSymbol$9 = wellKnownSymbol$d;

var ITERATOR$6 = wellKnownSymbol$9('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

var returnThis$2 = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$2(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$6].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!has$3(IteratorPrototype$2, ITERATOR$6)) {
  createNonEnumerableProperty$2(IteratorPrototype$2, ITERATOR$6, returnThis$2);
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$1 = objectDefineProperty.f;
var has$2 = has$b;
var wellKnownSymbol$8 = wellKnownSymbol$d;

var TO_STRING_TAG$3 = wellKnownSymbol$8('toStringTag');

var setToStringTag$4 = function (it, TAG, STATIC) {
  if (it && !has$2(it = STATIC ? it : it.prototype, TO_STRING_TAG$3)) {
    defineProperty$1(it, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$2 = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;
var setToStringTag$3 = setToStringTag$4;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var createIteratorConstructor$2 = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor$2(1, next) });
  setToStringTag$3(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var isObject$1 = isObject$6;

var aPossiblePrototype$1 = function (it) {
  if (!isObject$1(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

/* eslint-disable no-proto -- safe */

var anObject$4 = anObject$b;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$4(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$2 = _export;
var createIteratorConstructor$1 = createIteratorConstructor$2;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag$2 = setToStringTag$4;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$8;
var redefine$3 = redefine$6.exports;
var wellKnownSymbol$7 = wellKnownSymbol$d;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$5 = wellKnownSymbol$7('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var defineIterator$2 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor$1(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$5]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR$5] != 'function') {
          createNonEnumerableProperty$1(CurrentIteratorPrototype, ITERATOR$5, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if (IterablePrototype[ITERATOR$5] !== defaultIterator) {
    createNonEnumerableProperty$1(IterablePrototype, ITERATOR$5, defaultIterator);
  }
  Iterators$3[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine$3(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$2({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};

var toIndexedObject = toIndexedObject$4;
var addToUnscopables = addToUnscopables$1;
var Iterators$2 = iterators;
var InternalStateModule$3 = internalState;
var defineIterator$1 = defineIterator$2;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$3 = InternalStateModule$3.set;
var getInternalState$1 = InternalStateModule$3.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator$1(Array, 'Array', function (iterated, kind) {
  setInternalState$3(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators$2.Arguments = Iterators$2.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var global$3 = global$f;
var DOMIterables = domIterables;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty = createNonEnumerableProperty$8;
var wellKnownSymbol$6 = wellKnownSymbol$d;

var ITERATOR$4 = wellKnownSymbol$6('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$6('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global$3[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$4] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR$4, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$4] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$2]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$2, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}

var charAt = stringMultibyte.charAt;
var InternalStateModule$2 = internalState;
var defineIterator = defineIterator$2;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState = InternalStateModule$2.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$2(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

var fails$1 = fails$e;
var wellKnownSymbol$5 = wellKnownSymbol$d;
var IS_PURE = isPure;

var ITERATOR$3 = wellKnownSymbol$5('iterator');

var nativeUrl = !fails$1(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR$3]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});

var anInstance$2 = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};

var DESCRIPTORS$1 = descriptors;
var fails = fails$e;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$1 = toObject$5;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$1 && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$1(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$1 || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var aFunction$1 = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

var aFunction = aFunction$1;

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var anObject$3 = anObject$b;

var iteratorClose$1 = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject$3(returnMethod.call(iterator)).value;
  }
};

var anObject$2 = anObject$b;
var iteratorClose = iteratorClose$1;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$2(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};

var wellKnownSymbol$4 = wellKnownSymbol$d;
var Iterators$1 = iterators;

var ITERATOR$2 = wellKnownSymbol$4('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

var toPrimitive = toPrimitive$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$5;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor$1(0, value));
  else object[propertyKey] = value;
};

var wellKnownSymbol$3 = wellKnownSymbol$d;

var TO_STRING_TAG$1 = wellKnownSymbol$3('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var classofRaw = classofRaw$1;
var wellKnownSymbol$2 = wellKnownSymbol$d;

var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$2 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

var classof$1 = classof$2;
var Iterators = iterators;
var wellKnownSymbol$1 = wellKnownSymbol$d;

var ITERATOR$1 = wellKnownSymbol$1('iterator');

var getIteratorMethod$3 = function (it) {
  if (it != undefined) return it[ITERATOR$1]
    || it['@@iterator']
    || Iterators[classof$1(it)];
};

var bind$1 = functionBindContext;
var toObject = toObject$5;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var toLength = toLength$3;
var createProperty = createProperty$1;
var getIteratorMethod$2 = getIteratorMethod$3;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod$2(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind$1(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor$1 = Math.floor;
var stringFromCharCode = String.fromCharCode;

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor$1(delta / damp) : delta >> 1;
  delta += floor$1(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor$1(delta / baseMinusTMin);
  }
  return floor$1(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line max-statements -- TODO
var encode$1 = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor$1((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor$1(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return output.join('');
};

var stringPunycodeToAscii = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode$1(label) : label);
  }
  return encoded.join('.');
};

var redefine$2 = redefine$6.exports;

var redefineAll$1 = function (target, src, options) {
  for (var key in src) redefine$2(target, key, src[key], options);
  return target;
};

var anObject$1 = anObject$b;
var getIteratorMethod$1 = getIteratorMethod$3;

var getIterator$1 = function (it) {
  var iteratorMethod = getIteratorMethod$1(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject$1(iteratorMethod.call(it));
};

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$1 = _export;
var getBuiltIn = getBuiltIn$4;
var USE_NATIVE_URL$1 = nativeUrl;
var redefine$1 = redefine$6.exports;
var redefineAll = redefineAll$1;
var setToStringTag$1 = setToStringTag$4;
var createIteratorConstructor = createIteratorConstructor$2;
var InternalStateModule$1 = internalState;
var anInstance$1 = anInstance$2;
var hasOwn = has$b;
var bind = functionBindContext;
var classof = classof$2;
var anObject = anObject$b;
var isObject = isObject$6;
var create$1 = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$5;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$3;
var wellKnownSymbol = wellKnownSymbol$d;

var $fetch = getBuiltIn('fetch');
var Headers$1 = getBuiltIn('Headers');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find$1 = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

var serialize = function (it) {
  return encodeURIComponent(it).replace(find$1, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = query.split('&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState$1(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance$1(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState$1(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine$1(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine$1(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$$1({ global: true, forced: !USE_NATIVE_URL$1 }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
if (!USE_NATIVE_URL$1 && typeof $fetch == 'function' && typeof Headers$1 == 'function') {
  $$1({ global: true, enumerable: true, forced: true }, {
    fetch: function fetch(input /* , init */) {
      var args = [input];
      var init, body, headers;
      if (arguments.length > 1) {
        init = arguments[1];
        if (isObject(init)) {
          body = init.body;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers$1(init.headers) : new Headers$1();
            if (!headers.has('content-type')) {
              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            init = create$1(init, {
              body: createPropertyDescriptor(0, String(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        args.push(init);
      } return $fetch.apply(this, args);
    }
  });
}

var web_urlSearchParams = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $ = _export;
var DESCRIPTORS = descriptors;
var USE_NATIVE_URL = nativeUrl;
var global$2 = global$f;
var defineProperties = objectDefineProperties;
var redefine = redefine$6.exports;
var anInstance = anInstance$2;
var has$1 = has$b;
var assign = objectAssign;
var arrayFrom = arrayFrom$1;
var codeAt = stringMultibyte.codeAt;
var toASCII = stringPunycodeToAscii;
var setToStringTag = setToStringTag$4;
var URLSearchParamsModule = web_urlSearchParams;
var InternalStateModule = internalState;

var NativeURL = global$2.URL;
var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[A-Za-z]/;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
/* eslint-disable no-control-regex -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable no-control-regex -- safe */
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = input.split('.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.pop();
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && part.charAt(0) == '0') {
      radix = HEX_START.test(part) ? 16 : 8;
      part = part.slice(radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
      number = parseInt(part, radix);
    }
    numbers.push(number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = numbers.pop();
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function () {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (char()) {
    if (pieceIndex == 8) return;
    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }
    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (char()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!DIGIT.test(char())) return;
        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      result.unshift(host % 256);
      host = floor(host / 256);
    } return result.join('.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[index].toString(16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (char, set) {
  var code = codeAt(char, 0);
  return code > 0x20 && code < 0x7F && !has$1(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return has$1(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
    string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function (segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements -- TODO
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride && (
            (isSpecial(url) != has$1(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || (char == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;
          else if (char == ']') seenBracket = false;
          buffer += char;
        } break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += char;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        } break;

      case PATH:
        if (
          char == EOF || char == '/' ||
          (char == '\\' && isSpecial(url)) ||
          (!stateOverride && (char == '?' || char == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }
            url.path.push(buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';
          else if (char == '#') url.query += '%23';
          else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);
    else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams$1();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URLConstructor(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});

var nodePonyfill = {exports: {}};

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream__default['default'].Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream__default['default'].PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream__default['default']) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream__default['default']) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream__default['default'])) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream__default['default'] && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream__default['default']) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__default['default'].STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url__default['default'].parse;
const format_url = Url__default['default'].format;

const streamDestructionSupported = 'destroy' in Stream__default['default'].Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream__default['default'].Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream__default['default'].PassThrough;
const resolve_url = Url__default['default'].resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch$1(url, opts) {

	// allow custom promise
	if (!fetch$1.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch$1.Promise;

	// wrap http.request into fetch
	return new fetch$1.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__default['default'] : http__default['default']).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream__default['default'].Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch$1.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch$1(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__default['default'].Z_SYNC_FLUSH,
				finishFlush: zlib__default['default'].Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__default['default'].createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__default['default'].createInflate());
					} else {
						body = body.pipe(zlib__default['default'].createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__default['default'].createBrotliDecompress === 'function') {
				body = body.pipe(zlib__default['default'].createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch$1.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch$1.Promise = global.Promise;

var lib = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': fetch$1,
  Headers: Headers,
  Request: Request,
  Response: Response,
  FetchError: FetchError
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(lib);

(function (module, exports) {
const nodeFetch = require$$0;
const realFetch = nodeFetch.default || nodeFetch;

const fetch = function (url, options) {
  // Support schemaless URIs on the server for parity with the browser.
  // Ex: //github.com/ -> https://github.com/
  if (/^\/\//.test(url)) {
    url = 'https:' + url;
  }
  return realFetch.call(this, url, options)
};

fetch.ponyfill = true;

module.exports = exports = fetch;
exports.fetch = fetch;
exports.Headers = nodeFetch.Headers;
exports.Request = nodeFetch.Request;
exports.Response = nodeFetch.Response;

// Needed for TypeScript consumers without esModuleInterop.
exports.default = fetch;
}(nodePonyfill, nodePonyfill.exports));

var fetch = nodePonyfill.exports;

var global$1 = (typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {});

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

var lookup$1 = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup$1[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup$1[num >> 18 & 0x3F] + lookup$1[num >> 12 & 0x3F] + lookup$1[num >> 6 & 0x3F] + lookup$1[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup$1[tmp >> 2];
    output += lookup$1[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup$1[tmp >> 10];
    output += lookup$1[(tmp >> 4) & 0x3F];
    output += lookup$1[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString$1 = {}.toString;

var isArray = Array.isArray || function (arr) {
  return toString$1.call(arr) == '[object Array]';
};

var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer$1.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
  ? global$1.TYPED_ARRAY_SUPPORT
  : true;

function kMaxLength () {
  return Buffer$1.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer$1.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer$1(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer$1 (arg, encodingOrOffset, length) {
  if (!Buffer$1.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$1)) {
    return new Buffer$1(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer$1.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer$1._augment = function (arr) {
  arr.__proto__ = Buffer$1.prototype;
  return arr
};

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer$1.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
};

if (Buffer$1.TYPED_ARRAY_SUPPORT) {
  Buffer$1.prototype.__proto__ = Uint8Array.prototype;
  Buffer$1.__proto__ = Uint8Array;
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer$1.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer$1.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer$1.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer$1.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer$1.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer$1.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}
Buffer$1.isBuffer = isBuffer;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer$1.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer$1.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer$1.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer$1.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer$1.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer$1.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer$1.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer$1.prototype.swap16 = function swap16 () {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer$1.prototype.swap32 = function swap32 () {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer$1.prototype.swap64 = function swap64 () {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer$1.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer$1.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer$1.compare(this, b) === 0
};

Buffer$1.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>'
};

Buffer$1.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer$1.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer$1.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer$1.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer$1.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer$1.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer$1.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer$1.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer$1.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer$1.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer$1(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer$1.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer$1.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer$1.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer$1.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer$1.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer$1.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer$1.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer$1.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer$1.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer$1.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer$1.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer$1.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer$1.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer$1.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer$1.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4)
};

Buffer$1.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4)
};

Buffer$1.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8)
};

Buffer$1.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer$1.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer$1.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer$1.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer$1.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer$1.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer$1.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer$1.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer$1.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer$1.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer$1.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer$1.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer$1.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer$1.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer$1.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer$1.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer$1.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer$1.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer$1.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer$1.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer$1.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer$1.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer$1.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer$1(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
var requiresPort = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};

var querystringify$1 = {};

var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
querystringify$1.stringify = querystringify;
querystringify$1.parse = querystring;

var required = requiresPort
  , qs = querystringify$1
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/
  , protocolre = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules$1 = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof commonjsGlobal !== 'undefined') globalVar = commonjsGlobal;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);

  var match = protocolre.exec(address)
    , protocol = match[1] ? match[1].toLowerCase() : ''
    , slashes = !!(match[2] && match[2].length >= 2)
    , rest =  match[2] && match[2].length === 1 ? '/' + match[3] : match[3];

  return {
    protocol: protocol,
    slashes: slashes,
    rest: rest
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules$1.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //
  if (url.pathname.charAt(0) !== '/' && url.hostname) {
    url.pathname = '/' + url.pathname;
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules$1.length; i++) {
    var ins = rules$1[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

var urlParse = Url;

var parse$1 = urlParse;

/**
 * Transform an URL to a valid origin value.
 *
 * @param {String|Object} url URL to transform to it's origin.
 * @returns {String} The origin.
 * @api public
 */
function origin(url) {
  if ('string' === typeof url) url = parse$1(url);

  //
  // 6.2.  ASCII Serialization of an Origin
  // http://tools.ietf.org/html/rfc6454#section-6.2
  //
  if (!url.protocol || !url.hostname) return 'null';

  //
  // 4. Origin of a URI
  // http://tools.ietf.org/html/rfc6454#section-4
  //
  // States that url.scheme, host should be converted to lower case. This also
  // makes it easier to match origins as everything is just lower case.
  //
  return (url.protocol +'//'+ url.host).toLowerCase();
}

/**
 * Check if the origins are the same.
 *
 * @param {String} a URL or origin of a.
 * @param {String} b URL or origin of b.
 * @returns {Boolean}
 * @api public
 */
origin.same = function same(a, b) {
  return origin(a) === origin(b);
};

//
// Expose the origin
//
var original$1 = origin;

var original = original$1;
var parse = Url__default['default'].parse;
var events = require$$2__default['default'];
var https = https__default['default'];
var http = http__default['default'];
var util = require$$5__default['default'];

var httpsOptions = [
  'pfx', 'key', 'passphrase', 'cert', 'ca', 'ciphers',
  'rejectUnauthorized', 'secureProtocol', 'servername', 'checkServerIdentity'
];

var bom = [239, 187, 191];
var colon = 58;
var space = 32;
var lineFeed = 10;
var carriageReturn = 13;

function hasBom (buf) {
  return bom.every(function (charCode, index) {
    return buf[index] === charCode
  })
}

/**
 * Creates a new EventSource object
 *
 * @param {String} url the URL to which to connect
 * @param {Object} [eventSourceInitDict] extra init params. See README for details.
 * @api public
 **/
function EventSource (url, eventSourceInitDict) {
  var readyState = EventSource.CONNECTING;
  Object.defineProperty(this, 'readyState', {
    get: function () {
      return readyState
    }
  });

  Object.defineProperty(this, 'url', {
    get: function () {
      return url
    }
  });

  var self = this;
  self.reconnectInterval = 1000;
  self.connectionInProgress = false;

  function onConnectionClosed (message) {
    if (readyState === EventSource.CLOSED) return
    readyState = EventSource.CONNECTING;
    _emit('error', new Event('error', {message: message}));

    // The url may have been changed by a temporary
    // redirect. If that's the case, revert it now.
    if (reconnectUrl) {
      url = reconnectUrl;
      reconnectUrl = null;
    }
    setTimeout(function () {
      if (readyState !== EventSource.CONNECTING || self.connectionInProgress) {
        return
      }
      self.connectionInProgress = true;
      connect();
    }, self.reconnectInterval);
  }

  var req;
  var lastEventId = '';
  if (eventSourceInitDict && eventSourceInitDict.headers && eventSourceInitDict.headers['Last-Event-ID']) {
    lastEventId = eventSourceInitDict.headers['Last-Event-ID'];
    delete eventSourceInitDict.headers['Last-Event-ID'];
  }

  var discardTrailingNewline = false;
  var data = '';
  var eventName = '';

  var reconnectUrl = null;

  function connect () {
    var options = parse(url);
    var isSecure = options.protocol === 'https:';
    options.headers = { 'Cache-Control': 'no-cache', 'Accept': 'text/event-stream' };
    if (lastEventId) options.headers['Last-Event-ID'] = lastEventId;
    if (eventSourceInitDict && eventSourceInitDict.headers) {
      for (var i in eventSourceInitDict.headers) {
        var header = eventSourceInitDict.headers[i];
        if (header) {
          options.headers[i] = header;
        }
      }
    }

    // Legacy: this should be specified as `eventSourceInitDict.https.rejectUnauthorized`,
    // but for now exists as a backwards-compatibility layer
    options.rejectUnauthorized = !(eventSourceInitDict && !eventSourceInitDict.rejectUnauthorized);

    if (eventSourceInitDict && eventSourceInitDict.createConnection !== undefined) {
      options.createConnection = eventSourceInitDict.createConnection;
    }

    // If specify http proxy, make the request to sent to the proxy server,
    // and include the original url in path and Host headers
    var useProxy = eventSourceInitDict && eventSourceInitDict.proxy;
    if (useProxy) {
      var proxy = parse(eventSourceInitDict.proxy);
      isSecure = proxy.protocol === 'https:';

      options.protocol = isSecure ? 'https:' : 'http:';
      options.path = url;
      options.headers.Host = options.host;
      options.hostname = proxy.hostname;
      options.host = proxy.host;
      options.port = proxy.port;
    }

    // If https options are specified, merge them into the request options
    if (eventSourceInitDict && eventSourceInitDict.https) {
      for (var optName in eventSourceInitDict.https) {
        if (httpsOptions.indexOf(optName) === -1) {
          continue
        }

        var option = eventSourceInitDict.https[optName];
        if (option !== undefined) {
          options[optName] = option;
        }
      }
    }

    // Pass this on to the XHR
    if (eventSourceInitDict && eventSourceInitDict.withCredentials !== undefined) {
      options.withCredentials = eventSourceInitDict.withCredentials;
    }

    req = (isSecure ? https : http).request(options, function (res) {
      self.connectionInProgress = false;
      // Handle HTTP errors
      if (res.statusCode === 500 || res.statusCode === 502 || res.statusCode === 503 || res.statusCode === 504) {
        _emit('error', new Event('error', {status: res.statusCode, message: res.statusMessage}));
        onConnectionClosed();
        return
      }

      // Handle HTTP redirects
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
        if (!res.headers.location) {
          // Server sent redirect response without Location header.
          _emit('error', new Event('error', {status: res.statusCode, message: res.statusMessage}));
          return
        }
        if (res.statusCode === 307) reconnectUrl = url;
        url = res.headers.location;
        nextTick(connect);
        return
      }

      if (res.statusCode !== 200) {
        _emit('error', new Event('error', {status: res.statusCode, message: res.statusMessage}));
        return self.close()
      }

      readyState = EventSource.OPEN;
      res.on('close', function () {
        res.removeAllListeners('close');
        res.removeAllListeners('end');
        onConnectionClosed();
      });

      res.on('end', function () {
        res.removeAllListeners('close');
        res.removeAllListeners('end');
        onConnectionClosed();
      });
      _emit('open', new Event('open'));

      // text/event-stream parser adapted from webkit's
      // Source/WebCore/page/EventSource.cpp
      var isFirst = true;
      var buf;
      var startingPos = 0;
      var startingFieldLength = -1;
      res.on('data', function (chunk) {
        buf = buf ? Buffer$1.concat([buf, chunk]) : chunk;
        if (isFirst && hasBom(buf)) {
          buf = buf.slice(bom.length);
        }

        isFirst = false;
        var pos = 0;
        var length = buf.length;

        while (pos < length) {
          if (discardTrailingNewline) {
            if (buf[pos] === lineFeed) {
              ++pos;
            }
            discardTrailingNewline = false;
          }

          var lineLength = -1;
          var fieldLength = startingFieldLength;
          var c;

          for (var i = startingPos; lineLength < 0 && i < length; ++i) {
            c = buf[i];
            if (c === colon) {
              if (fieldLength < 0) {
                fieldLength = i - pos;
              }
            } else if (c === carriageReturn) {
              discardTrailingNewline = true;
              lineLength = i - pos;
            } else if (c === lineFeed) {
              lineLength = i - pos;
            }
          }

          if (lineLength < 0) {
            startingPos = length - pos;
            startingFieldLength = fieldLength;
            break
          } else {
            startingPos = 0;
            startingFieldLength = -1;
          }

          parseEventStreamLine(buf, pos, fieldLength, lineLength);

          pos += lineLength + 1;
        }

        if (pos === length) {
          buf = void 0;
        } else if (pos > 0) {
          buf = buf.slice(pos);
        }
      });
    });

    req.on('error', function (err) {
      self.connectionInProgress = false;
      onConnectionClosed(err.message);
    });

    if (req.setNoDelay) req.setNoDelay(true);
    req.end();
  }

  connect();

  function _emit () {
    if (self.listeners(arguments[0]).length > 0) {
      self.emit.apply(self, arguments);
    }
  }

  this._close = function () {
    if (readyState === EventSource.CLOSED) return
    readyState = EventSource.CLOSED;
    if (req.abort) req.abort();
    if (req.xhr && req.xhr.abort) req.xhr.abort();
  };

  function parseEventStreamLine (buf, pos, fieldLength, lineLength) {
    if (lineLength === 0) {
      if (data.length > 0) {
        var type = eventName || 'message';
        _emit(type, new MessageEvent(type, {
          data: data.slice(0, -1), // remove trailing newline
          lastEventId: lastEventId,
          origin: original(url)
        }));
        data = '';
      }
      eventName = void 0;
    } else if (fieldLength > 0) {
      var noValue = fieldLength < 0;
      var step = 0;
      var field = buf.slice(pos, pos + (noValue ? lineLength : fieldLength)).toString();

      if (noValue) {
        step = lineLength;
      } else if (buf[pos + fieldLength + 1] !== space) {
        step = fieldLength + 1;
      } else {
        step = fieldLength + 2;
      }
      pos += step;

      var valueLength = lineLength - step;
      var value = buf.slice(pos, pos + valueLength).toString();

      if (field === 'data') {
        data += value + '\n';
      } else if (field === 'event') {
        eventName = value;
      } else if (field === 'id') {
        lastEventId = value;
      } else if (field === 'retry') {
        var retry = parseInt(value, 10);
        if (!Number.isNaN(retry)) {
          self.reconnectInterval = retry;
        }
      }
    }
  }
}

var eventsource = EventSource;

util.inherits(EventSource, events.EventEmitter);
EventSource.prototype.constructor = EventSource; // make stacktraces readable

['open', 'error', 'message'].forEach(function (method) {
  Object.defineProperty(EventSource.prototype, 'on' + method, {
    /**
     * Returns the current listener
     *
     * @return {Mixed} the set function or undefined
     * @api private
     */
    get: function get () {
      var listener = this.listeners(method)[0];
      return listener ? (listener._listener ? listener._listener : listener) : undefined
    },

    /**
     * Start listening for events
     *
     * @param {Function} listener the listener
     * @return {Mixed} the set function or undefined
     * @api private
     */
    set: function set (listener) {
      this.removeAllListeners(method);
      this.addEventListener(method, listener);
    }
  });
});

/**
 * Ready states
 */
Object.defineProperty(EventSource, 'CONNECTING', {enumerable: true, value: 0});
Object.defineProperty(EventSource, 'OPEN', {enumerable: true, value: 1});
Object.defineProperty(EventSource, 'CLOSED', {enumerable: true, value: 2});

EventSource.prototype.CONNECTING = 0;
EventSource.prototype.OPEN = 1;
EventSource.prototype.CLOSED = 2;

/**
 * Closes the connection, if one is made, and sets the readyState attribute to 2 (closed)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventSource/close
 * @api public
 */
EventSource.prototype.close = function () {
  this._close();
};

/**
 * Emulates the W3C Browser based WebSocket interface using addEventListener.
 *
 * @param {String} type A string representing the event type to listen out for
 * @param {Function} listener callback
 * @see https://developer.mozilla.org/en/DOM/element.addEventListener
 * @see http://dev.w3.org/html5/websockets/#the-websocket-interface
 * @api public
 */
EventSource.prototype.addEventListener = function addEventListener (type, listener) {
  if (typeof listener === 'function') {
    // store a reference so we can return the original function again
    listener._listener = listener;
    this.on(type, listener);
  }
};

/**
 * Emulates the W3C Browser based WebSocket interface using dispatchEvent.
 *
 * @param {Event} event An event to be dispatched
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
 * @api public
 */
EventSource.prototype.dispatchEvent = function dispatchEvent (event) {
  if (!event.type) {
    throw new Error('UNSPECIFIED_EVENT_TYPE_ERR')
  }
  // if event is instance of an CustomEvent (or has 'details' property),
  // send the detail object as the payload for the event
  this.emit(event.type, event.detail);
};

/**
 * Emulates the W3C Browser based WebSocket interface using removeEventListener.
 *
 * @param {String} type A string representing the event type to remove
 * @param {Function} listener callback
 * @see https://developer.mozilla.org/en/DOM/element.removeEventListener
 * @see http://dev.w3.org/html5/websockets/#the-websocket-interface
 * @api public
 */
EventSource.prototype.removeEventListener = function removeEventListener (type, listener) {
  if (typeof listener === 'function') {
    listener._listener = undefined;
    this.removeListener(type, listener);
  }
};

/**
 * W3C Event
 *
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#interface-Event
 * @api private
 */
function Event (type, optionalProperties) {
  Object.defineProperty(this, 'type', { writable: false, value: type, enumerable: true });
  if (optionalProperties) {
    for (var f in optionalProperties) {
      if (optionalProperties.hasOwnProperty(f)) {
        Object.defineProperty(this, f, { writable: false, value: optionalProperties[f], enumerable: true });
      }
    }
  }
}

/**
 * W3C MessageEvent
 *
 * @see http://www.w3.org/TR/webmessaging/#event-definitions
 * @api private
 */
function MessageEvent (type, eventInitDict) {
  Object.defineProperty(this, 'type', { writable: false, value: type, enumerable: true });
  for (var f in eventInitDict) {
    if (eventInitDict.hasOwnProperty(f)) {
      Object.defineProperty(this, f, { writable: false, value: eventInitDict[f], enumerable: true });
    }
  }
}

const _URL_PREFIX = () => "https://api.iextrading.com/1.0/";
exports._URL_PREFIX_CLOUD = version => `https://cloud.iexapis.com/${version}/`;
exports._URL_PREFIX_CLOUD_SANDBOX = () => `https://sandbox.iexapis.com/stable/`;
const _URL_PREFIX_CLOUD_ORIG = exports._URL_PREFIX_CLOUD;
const _URL_PREFIX_CLOUD_SANDBOX_ORIG = exports._URL_PREFIX_CLOUD_SANDBOX;
const _SIO_URL_PREFIX = "https://ws-api.iextrading.com";
const _SIO_PORT = 443;
exports._SSE_URL_PREFIX = (version, channel, symbols, token) => `https://cloud-sse.iexapis.com/${version}/${channel}?symbols=${symbols}&token=${token}`;
const _SSE_URL_PREFIX_ORIG = exports._SSE_URL_PREFIX;
exports._SSE_URL_PREFIX_ALL = (version, channel, token) => `https://cloud-sse.iexapis.com/${version}/${channel}?token=${token}`;
const _SSE_URL_PREFIX_ALL_ORIG = exports._SSE_URL_PREFIX_ALL;
exports._SSE_DEEP_URL_PREFIX = (version, symbols, channels, token) => `https://cloud-sse.iexapis.com/${version}/deep?symbols=${symbols}&channels=${channels}&token=${token}`;
const _SSE_DEEP_URL_PREFIX_ORIG = exports._SSE_DEEP_URL_PREFIX;
exports._SSE_URL_PREFIX_SANDBOX = (version, channel, symbols, token) => `https://sandbox-sse.iexapis.com/stable/${channel}?symbols=${symbols}&token=${token}`;
const _SSE_URL_PREFIX_SANDBOX_ORIG = exports._SSE_URL_PREFIX_SANDBOX;
exports._SSE_URL_PREFIX_ALL_SANDBOX = (channel, token) => `https://sandbox-sse.iexapis.com/stable/${channel}?token=${token}`;
const _SSE_URL_PREFIX_ALL_SANDBOX_ORIG = exports._SSE_URL_PREFIX_ALL_SANDBOX;
exports._SSE_DEEP_URL_PREFIX_SANDBOX = (symbols, channels, token) => `https://sandbox-sse.iexapis.com/stable/deep?symbols=${symbols}&channels=${channels}&token=${token}`;
const _SSE_DEEP_URL_PREFIX_SANDBOX_ORIG = exports._SSE_DEEP_URL_PREFIX_SANDBOX;
/**
 *
 * @param {string} url
 */

const _getOrig = () => {
  throw IEXJSException("Old IEX API is deprecated. For a free API token, sign up at https://iexcloud.io");
};
/**
 * for IEX Cloud
 * @param {object} options
 */


const _getIEXCloudBase = async options => {
  const {
    base_url,
    url,
    token = "",
    version = "stable",
    filter = "",
    format = "json"
  } = options;
  let contentType;
  const endpoint = new URL(`${base_url(version)}${url}`);
  endpoint.searchParams.append("token", token);
  if (filter) endpoint.searchParams.append("filter", filter);

  if (format === "csv" || format === "text") {
    endpoint.searchParams.append("format", format);
    contentType = "test/plain";
  } else if (format === "schema") {
    endpoint.searchParams.append("schema", true);
    contentType = "application/json";
  } else {
    contentType = "application/json";
  }

  return fetch(endpoint.href, {
    method: "GET",
    headers: {
      "Content-Type": contentType
    }
  }).then(async res => {
    if (res.ok) {
      if (format === "json") {
        return res.json();
      }

      if (format === "schema") {
        const ret = res.json();
        return Array.isArray(ret) ? ret[0] : ret;
      }

      return res.text();
    }

    throw IEXJSException(`Response ${res.status} - ${await res.text()}`);
  });
};
/**
 *
 * @param {object} options
 */


const _getIEXCloud = options => _getIEXCloudBase({
  base_url: exports._URL_PREFIX_CLOUD,
  ...options
});
/**
 *
 * @param {object} options
 */


const _getIEXCloudSandbox = options => _getIEXCloudBase({
  base_url: exports._URL_PREFIX_CLOUD_SANDBOX,
  ...options
});
/**
 *
 * @param {object} options
 */


const _postIEXCloudBase = async options => {
  const {
    base_url,
    url,
    data = {},
    token = "",
    version = "stable",
    token_in_params = true,
    format = "json"
  } = options;
  const endpoint = new URL(`${base_url(version)}${url}`);

  if (token_in_params) {
    endpoint.searchParams.append("token", token);
  }

  return fetch(endpoint, {
    method: "POST",
    body: token_in_params ? {
      token,
      ...data
    } : {},
    headers: {
      "Content-Type": "application/json"
    }
  }).then(async res => {
    if (res.ok) {
      if (format === "json") {
        return res.json();
      }

      return res.text();
    }

    throw IEXJSException(`Response ${res.status} - ${await res.text()}`);
  });
};
/**
 *
 * @param {object} options
 */


const _postIEXCloud = options => _postIEXCloudBase({
  base_url: exports._URL_PREFIX_CLOUD,
  ...options
});
/**
 *
 * @param {object} options
 */


const _postIEXCloudSandbox = options => _postIEXCloudBase({
  base_url: exports._URL_PREFIX_CLOUD_SANDBOX,
  ...options
});
/**
 *
 * @param {object} options
 */


const _deleteIEXCloudBase = async options => {
  const {
    base_url,
    url,
    token = "",
    version = "stable",
    format = "json"
  } = options;
  const endpoint = new URL(`${base_url(version)}${url}`);
  endpoint.searchParams.append("token", token);
  return fetch(endpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(async res => {
    if (res.ok) {
      if (format === "json") {
        return res.json();
      }

      return res.text();
    }

    throw IEXJSException(`Response ${res.status} - ${await res.text()}`);
  });
};

const _deleteIEXCloud = options => _deleteIEXCloudBase({
  base_url: exports._URL_PREFIX_CLOUD,
  ...options
});

const _deleteIEXCloudSandbox = options => _deleteIEXCloudBase({
  base_url: exports._URL_PREFIX_CLOUD_SANDBOX,
  ...options
});

const _streamSSE = (url, on_data, accrue = false) => {
  const messages = new eventsource(url); // eslint-disable-next-line no-console

  const callback = on_data || console.log;
  messages.accrued = [];

  messages.onmessage = async event => {
    // TODO stop
    const datum = JSON.parse(event.data);
    await callback(datum);

    if (accrue) {
      messages.accrued.push(datum);
    }
  };

  return messages;
};
/**
 * Override the default IEX Cloud url
 * @param {string} url
 * @param {string} env
 */

const overrideUrl = ({
  url = "",
  env = ""
} = {}) => {
  if (env) {
    exports._URL_PREFIX_CLOUD = version => `https://cloud.${env}.iexapis.com/${version}/`;

    exports._URL_PREFIX_CLOUD = version => `https://cloud.${env}.iexapis.com/${version}/`;

    exports._URL_PREFIX_CLOUD_SANDBOX = () => `https://sandbox.${env}.iexapis.com/stable/`;

    exports._SSE_URL_PREFIX = (version, channel, symbols, token) => `https://cloud-sse.${env}.iexapis.com/${version}/${channel}?symbols=${symbols}&token=${token}`;

    exports._SSE_URL_PREFIX_ALL = (version, channel, token) => `https://cloud-sse.${env}.iexapis.com/${version}/${channel}?token=${token}`;

    exports._SSE_DEEP_URL_PREFIX = (version, symbols, channels, token) => `https://cloud-sse.${env}.iexapis.com/${version}/deep?symbols=${symbols}&channels=${channels}&token=${token}`;

    exports._SSE_URL_PREFIX_SANDBOX = (version, channel, symbols, token) => `https://sandbox-sse.${env}.iexapis.com/stable/${channel}?symbols=${symbols}&token=${token}`;

    exports._SSE_URL_PREFIX_ALL_SANDBOX = (channel, token) => `https://sandbox-sse.${env}.iexapis.com/stable/${channel}?token=${token}`;

    exports._SSE_DEEP_URL_PREFIX_SANDBOX = (symbols, channels, token) => `https://sandbox-sse.${env}.iexapis.com/stable/deep?symbols=${symbols}&channels=${channels}&token=${token}`;
  } else if (url) {
    exports._URL_PREFIX_CLOUD = () => url;

    exports._URL_PREFIX_CLOUD_SANDBOX = () => url;
  } else {
    // reset
    exports._URL_PREFIX_CLOUD = _URL_PREFIX_CLOUD_ORIG;
    exports._URL_PREFIX_CLOUD_SANDBOX = _URL_PREFIX_CLOUD_SANDBOX_ORIG;
    exports._SSE_URL_PREFIX = _SSE_URL_PREFIX_ORIG;
    exports._SSE_URL_PREFIX_ALL = _SSE_URL_PREFIX_ALL_ORIG;
    exports._SSE_DEEP_URL_PREFIX = _SSE_DEEP_URL_PREFIX_ORIG;
    exports._SSE_URL_PREFIX_SANDBOX = _SSE_URL_PREFIX_SANDBOX_ORIG;
    exports._SSE_URL_PREFIX_ALL_SANDBOX = _SSE_URL_PREFIX_ALL_SANDBOX_ORIG;
    exports._SSE_DEEP_URL_PREFIX_SANDBOX = _SSE_DEEP_URL_PREFIX_SANDBOX_ORIG;
  }
};
/**
 * for backwards compat, accepting token and version but ignoring
 * @param {object} options
 */

const _get = async options => {
  const {
    url,
    token = "",
    version = ""
  } = options;

  if (token) {
    if (version === "sandbox") {
      return _getIEXCloudSandbox(options);
    }

    return _getIEXCloud(options);
  }

  return _getOrig();
};
/**
 *
 * @param {object} options
 */

const _post = async options => {
  const {
    version = ""
  } = options;

  if (version === "sandbox") {
    return _postIEXCloudSandbox(options);
  }

  return _postIEXCloud(options);
};
/**
 *
 * @param {object} options
 */

const _delete = options => {
  const {
    version = ""
  } = options;

  if (version === "sandbox") {
    return _deleteIEXCloudSandbox(options);
  }

  return _deleteIEXCloud(options);
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Client {
  constructor(options = {}) {
    const {
      api_token = (process ? process.env.IEX_TOKEN : null) || ""
    } = options;
    let {
      version = "v1"
    } = options;
    this._token = api_token;

    if (!this._token) {
      throw IEXJSException("API Token missing or not in environment (IEX_TOKEN)");
    }

    if (["beta", "stable", "v1", "sandbox"].indexOf(version) < 0) {
      throw IEXJSException("Unrecognized api version: {}".format(version));
    }

    if (this._token.startsWith("T") && version !== "sandbox") {
      console.warn("Using test key but attempting to connect to non-sandbox environment. Switching to sandbox");
      version = "sandbox";
    }

    this._version = version; // this is easier than worrying about rebinding

    this.premium = new Client.premium();
    this.premiumfiles = new Client.premiumfiles();
    this.premium._token = this._token;
    this.premium._version = this._version;
  }

}

_defineProperty(Client, "premium", class Premium {});

_defineProperty(Client, "premiumfiles", class PremiumFiles {});

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Used to set an upper limit, “message budget”, on pay as you go messages where
 * you want to make sure not to go above a certain amount. Set the total messages
 * you wish to consume for the month, and once that limit is reached, all API
 * calls will stop until the limit is removed or increased.
 *
 * https://iexcloud.io/docs/api/#message-budget
 *
 * @param {number} totalMessages The total messages your account is allowed to consume for the current month above your quota. For example: If your account is allowed 5 million messages, and you do not want to exceed 10 million for the month, then you will pass 10000000 as total messages.
 * @param {string} token Access token
 * @param {string} version API version
 */

const messageBudget = (totalMessages, token, version, format) => {
  _requireSecret(token);

  return _post({
    url: `account/messagebudget?totalMessages=${totalMessages}`,
    token,
    version,
    format
  });
};

Client.prototype.messageBudget = function (totalMessages, format) {
  return messageBudget(totalMessages, this._token, this._version, format);
};
/**
 * Used to retrieve account details such as current tier, payment status, message quote usage, etc.
 * https://iexcloud.io/docs/api/#metadata
 * @param {string} token Access token
 * @param {string} version API version
 */


const metadata = (token, version, format) => {
  _requireSecret(token);

  return _get({
    url: "account/metadata",
    token,
    version,
    format
  });
};

Client.prototype.metadata = function (format) {
  return metadata(this._token, this._version, format);
};
/**
 * Used to toggle Pay-as-you-go on your account.
 * https://iexcloud.io/docs/api/#pay-as-you-go
 * @param {boolean} allow
 * @param {string} token Access token
 * @param {string} version API version
 */


const payAsYouGo = (allow = false, token = "", version = "") => {
  _requireSecret(token);

  if (!(typeof allow === "boolean")) {
    throw IEXJSException(`allow must be boolean, got ${typeof allow} (${allow})`);
  }

  return _post({
    url: `account/messagebudget?allow=${allow}`,
    token,
    version
  });
};

Client.prototype.payAsYouGo = function (allow) {
  return metadata(allow, this._token, this._version);
};
/**
 * Used to retrieve current month usage for your account.
 * https://iexcloud.io/docs/api/#usage
 * @param {string} type type to request
 * @param {string} token Access token
 * @param {string} version API version
 */


const usage = (type, token, version, format) => {
  _requireSecret(token);

  if (type) {
    if (_USAGE_TYPES.indexOf(type) < 0) {
      throw IEXJSException(`Type must be defined or in ${_USAGE_TYPES}`);
    }

    return _get({
      url: `account/usage/${type}`,
      token,
      version,
      format
    });
  }

  return _get({
    url: `account/usage`,
    token,
    version,
    format
  });
};

Client.prototype.usage = function (type, format) {
  return usage(type, this._token, this._version, format);
};
/**
 * Used to retrieve current system status.
 * https://iexcloud.io/docs/api/#status
 * @param {string} type type to request
 * @param {string} token Access token
 * @param {string} version API version
 */


const status = (token, version, format) => _get({
  url: `status`,
  token,
  version,
  format
});

Client.prototype.status = function (format) {
  return status(this._token, this._version, format);
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This endpoint provides social sentiment data from StockTwits. Data can be viewed as a daily value, or by minute for a given date.
 *
 * https://iexcloud.io/docs/api/#social-sentiment
 *
 * @param {string} symbol Ticker to request
 * @param {string} type 'daily' or 'minute'
 * @param {string} date date in YYYYMMDD or datetime
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const sentiment = (symbol, type, date, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (date) {
    return _get({
      url: `stock/${symbol}/sentiment/${type}/${_strOrDate(date)}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stock/${symbol}/sentiment/${type}/`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.sentiment = function (symbol, type = "daily", date = null, {
  filter,
  format
} = {}) {
  return sentiment(symbol, type, date, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This endpoint provides CEO compensation for a company by symbol.
 *
 * https://iexcloud.io/docs/api/#ceo-compensation
 *
 * @param {string} symbol Ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const ceoCompensation = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${symbol}/ceo-compensation/`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.ceoCompensation = function (symbol, {
  filter,
  format
} = {}) {
  return ceoCompensation(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Data points are available per symbol and return individual plain text values.
 * Retrieving individual data points is useful for Excel and Google Sheet users, and applications where a single, lightweight value is needed.
 * We also provide update times for some endpoints which allow you to call an endpoint only once it has new data.
 *
 * https://iexcloud.io/docs/api/#data-points
 * @param {object} options
 * @param {string} options.symbol ticker
 * @param {string} options.key key value
 * @param {object} common
 * @param {string} common.token Access token
 * @param {string} common.version API version
 * @param {string} common.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} common.format output format
 */

const points = ({
  symbol,
  key
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol || "market");

  if (key) {
    return _get({
      url: `data-points/${symbol || "market"}/${key}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `data-points/${symbol || "market"}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.points = function ({
  symbol,
  key
} = {}, {
  filter,
  format
} = {}) {
  return points({
    symbol,
    key
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
const wti = ({
  token,
  version
} = {}) => points({
  key: "DCOILWTICO"
}, {
  token,
  version
});
const brent = ({
  token,
  version
} = {}) => points({
  key: "DCOILBRENTEU"
}, {
  token,
  version
});
const natgas = ({
  token,
  version
} = {}) => points({
  key: "DHHNGSP"
}, {
  token,
  version
});
const heatoil = ({
  token,
  version
} = {}) => points({
  key: "DHOILNYH"
}, {
  token,
  version
});
const jet = ({
  token,
  version
} = {}) => points({
  key: "DJFUELUSGULF"
}, {
  token,
  version
});
const diesel = ({
  token,
  version
} = {}) => points({
  key: "GASDESW"
}, {
  token,
  version
});
const gasreg = ({
  token,
  version
} = {}) => points({
  key: "GASREGCOVW"
}, {
  token,
  version
});
const gasmid = ({
  token,
  version
} = {}) => points({
  key: "GASMIDCOVW"
}, {
  token,
  version
});
const gasprm = ({
  token,
  version
} = {}) => points({
  key: "GASPRMCOVW"
}, {
  token,
  version
});
const propane = ({
  token,
  version
} = {}) => points({
  key: "DPROPANEMBTX"
}, {
  token,
  version
});

Client.prototype.wti = function () {
  return wti({
    token: this._token,
    version: this._version
  });
};

Client.prototype.brent = function () {
  return brent({
    token: this._token,
    version: this._version
  });
};

Client.prototype.natgas = function () {
  return natgas({
    token: this._token,
    version: this._version
  });
};

Client.prototype.heatoil = function () {
  return heatoil({
    token: this._token,
    version: this._version
  });
};

Client.prototype.jet = function () {
  return jet({
    token: this._token,
    version: this._version
  });
};

Client.prototype.diesel = function () {
  return diesel({
    token: this._token,
    version: this._version
  });
};

Client.prototype.gasreg = function () {
  return gasreg({
    token: this._token,
    version: this._version
  });
};

Client.prototype.gasmid = function () {
  return gasmid({
    token: this._token,
    version: this._version
  });
};

Client.prototype.gasprm = function () {
  return gasprm({
    token: this._token,
    version: this._version
  });
};

Client.prototype.propane = function () {
  return propane({
    token: this._token,
    version: this._version
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This returns a current snapshot of the book for a specified cryptocurrency. For REST, you will receive a current snapshot of the current book for the specific cryptocurrency. For SSE Streaming, you will get a full representation of the book updated as often as the book changes. Examples of each are below:
 *
 * https://iexcloud.io/docs/api/#cryptocurrency-book
 *
 * @param {string} symbol cryptocurrency ticker
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const cryptoBook = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `crypto/${symbol}/book`,
  token,
  version,
  filter,
  format
});

Client.prototype.cryptoBook = function (symbol, {
  filter,
  format
} = {}) {
  return cryptoBook(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This returns the price for a specified cryptocurrency.
 *
 * https://iexcloud.io/docs/api/#cryptocurrency-price
 *
 * @param {string} symbol cryptocurrency ticker
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const cryptoPrice = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `crypto/${symbol}/price`,
  token,
  version,
  filter,
  format
});

Client.prototype.cryptoPrice = function (symbol, {
  filter,
  format
} = {}) {
  return cryptoPrice(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This returns the price for a specified cryptocurrency.
 *
 * https://iexcloud.io/docs/api/#cryptocurrency-quote
 *
 * @param {string} symbol cryptocurrency ticker
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const cryptoQuote = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `crypto/${symbol}/quote`,
  token,
  version,
  filter,
  format
});

Client.prototype.cryptoQuote = function (symbol, {
  filter,
  format
} = {}) {
  return cryptoQuote(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
const us30 = ({
  token,
  version
} = {}) => points({
  key: "MORTGAGE30US"
}, {
  token,
  version
});
const us15 = ({
  token,
  version
} = {}) => points({
  key: "MORTGAGE15US"
}, {
  token,
  version
});
const us5 = ({
  token,
  version
} = {}) => points({
  key: "MORTGAGE5US"
}, {
  token,
  version
});
const fedfunds = ({
  token,
  version
} = {}) => points({
  key: "FEDFUNDS"
}, {
  token,
  version
});
const creditcard = ({
  token,
  version
} = {}) => points({
  key: "TERMCBCCALLNS"
}, {
  token,
  version
});
const cdnj = ({
  token,
  version
} = {}) => points({
  key: "MMNRNJ"
}, {
  token,
  version
});
const cdj = ({
  token,
  version
} = {}) => points({
  key: "MMNRJD"
}, {
  token,
  version
});
const gdp = ({
  token,
  version
} = {}) => points({
  key: "A191RL1Q225SBEA"
}, {
  token,
  version
});
const indpro = ({
  token,
  version
} = {}) => points({
  key: "INDPRO"
}, {
  token,
  version
});
const cpi = ({
  token,
  version
} = {}) => points({
  key: "CPIAUCSL"
}, {
  token,
  version
});
const payroll = ({
  token,
  version
} = {}) => points({
  key: "PAYEMS"
}, {
  token,
  version
});
const housing = ({
  token,
  version
} = {}) => points({
  key: "HOUST"
}, {
  token,
  version
});
const unemployment = ({
  token,
  version
} = {}) => points({
  key: "UNRATE"
}, {
  token,
  version
});
const vehicles = ({
  token,
  version
} = {}) => points({
  key: "TOTALSA"
}, {
  token,
  version
});
const recessionProb = ({
  token,
  version
} = {}) => points({
  key: "RECPROUSM156N"
}, {
  token,
  version
});
const initialClaims = ({
  token,
  version
} = {}) => points({
  key: "IC4WSA"
}, {
  token,
  version
});
const institutionalMoney = ({
  token,
  version
} = {}) => points({
  key: "WRMFSL"
}, {
  token,
  version
});
const retailMoney = ({
  token,
  version
} = {}) => points({
  key: "WIMFSL"
}, {
  token,
  version
});

Client.prototype.us30 = function () {
  return us30({
    token: this._token,
    version: this._version
  });
};

Client.prototype.us15 = function () {
  return us15({
    token: this._token,
    version: this._version
  });
};

Client.prototype.us5 = function () {
  return us5({
    token: this._token,
    version: this._version
  });
};

Client.prototype.fedfunds = function () {
  return fedfunds({
    token: this._token,
    version: this._version
  });
};

Client.prototype.creditcard = function () {
  return creditcard({
    token: this._token,
    version: this._version
  });
};

Client.prototype.cdnj = function () {
  return cdnj({
    token: this._token,
    version: this._version
  });
};

Client.prototype.cdj = function () {
  return cdj({
    token: this._token,
    version: this._version
  });
};

Client.prototype.gdp = function () {
  return gdp({
    token: this._token,
    version: this._version
  });
};

Client.prototype.indpro = function () {
  return indpro({
    token: this._token,
    version: this._version
  });
};

Client.prototype.cpi = function () {
  return cpi({
    token: this._token,
    version: this._version
  });
};

Client.prototype.payroll = function () {
  return payroll({
    token: this._token,
    version: this._version
  });
};

Client.prototype.housing = function () {
  return housing({
    token: this._token,
    version: this._version
  });
};

Client.prototype.unemployment = function () {
  return unemployment({
    token: this._token,
    version: this._version
  });
};

Client.prototype.vehicles = function () {
  return vehicles({
    token: this._token,
    version: this._version
  });
};

Client.prototype.recessionProb = function () {
  return recessionProb({
    token: this._token,
    version: this._version
  });
};

Client.prototype.initialClaims = function () {
  return initialClaims({
    token: this._token,
    version: this._version
  });
};

Client.prototype.institutionalMoney = function () {
  return institutionalMoney({
    token: this._token,
    version: this._version
  });
};

Client.prototype.retailMoney = function () {
  return retailMoney({
    token: this._token,
    version: this._version
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * The Files API allows users to download bulk data files, PDFs, etc.
 * https://iexcloud.io/docs/api/#files
 *
 * @param {object} options
 * @param {string} options.id file id
 * @param {string} options.symbol symbol to fetch
 * @param {string} options.date date to fetch for
 * @param {string} token Access token
 * @param {string} version API version
 */

const files = ({
  id,
  symbol,
  date
} = {}, {
  token,
  version
} = {}) => {
  if (id) {
    if (symbol && date) {
      return _get({
        url: `files/download/${id}?symbol=${symbol}&date=${_strOrDate(date)}`,
        token,
        version
      });
    }

    return _get({
      url: `files/info/${id}`,
      token,
      version
    });
  }

  return _get({
    url: "files",
    token,
    version
  });
};
/**
 * The Files API allows users to download bulk data files, PDFs, etc.
 * https://iexcloud.io/docs/api/#files
 *
 * @param {string} id file id
 * @param {string} symbol symbol to fetch
 * @param {string} date date to fetch for
 * @param {string} token Access token
 * @param {string} version API version
 */

const download = async ({
  id,
  symbol,
  date
} = {}, {
  token,
  version
} = {}) => {
  const data = await files({
    id,
    symbol,
    date
  }, {
    token,
    version
  });
  const datauri = `data:application/pdf,${encodeURI(data)}`;
  const a = document.createElement("a");
  a.href = datauri;
  a.download = `${id}-${symbol}-${date}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

Client.prototype.files = function ({
  id,
  symbol,
  date
} = {}) {
  return files({
    id,
    symbol,
    date
  }, {
    token: this._token,
    version: this._version
  });
};

Client.prototype.download = function ({
  id,
  symbol,
  date
} = {}) {
  return download({
    id,
    symbol,
    date
  }, {
    token: this._token,
    version: this._version
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This endpoint returns real-time foreign currency exchange rates data updated every 250 milliseconds.
 *
 * https://iexcloud.io/docs/api/#latest-currency-rates
 *
 * @param {string} symbols comma seperated list of symbols
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const latestFX = ({
  symbols
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (symbols) {
    return _get({
      url: `/fx/latest?symbols=${_strToList(symbols).join(",")}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `/fx/latest`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.latestFX = function ({
  symbols
} = {}, {
  filter,
  format
} = {}) {
  return latestFX({
    symbols
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This endpoint performs a conversion from one currency to another for a supplied amount of the base currency. If an amount isn’t provided, the latest exchange rate will be provided and the amount will be null.
 *
 * https://iexcloud.io/docs/api/#currency-conversion
 *
 * @param {object} options
 * @param {string} symbols comma seperated list of symbols
 * @param {number} amount amount to convert
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const convertFX = ({
  symbols,
  amount
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (symbols) {
    return _get({
      url: `/fx/convert?symbols=${_strToList(symbols).join(",")}&amount=${amount || ""}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `/fx/convert?amount=${amount || ""}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.convertFX = function ({
  symbols,
  amount
} = {}, {
  filter,
  format
} = {}) {
  return convertFX({
    symbols,
    amount
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This endpoint returns a daily value for the desired currency pair.
 *
 * https://iexcloud.io/docs/api/#historical-daily
 *
 * @param {object} options
 * @param {string} options.symbols comma seperated list of symbols
 * @param {string or date} options.from Returns data on or after the given from date. Format YYYY-MM-DD
 * @param {string or date} options.to Returns data on or before the given to date. Format YYYY-MM-DD
 * @param {string or date} options.on Returns data on the given date. Format YYYY-MM-DD
 * @param {number} options.last Returns the latest n number of records in the series
 * @param {number} options.first Returns the first n number of records in the series
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const historicalFX = ({
  symbols,
  from,
  to,
  on,
  last,
  first
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  let base_url = "/fx/historical?";
  if (symbols) base_url += `symbols=${_strToList(symbols).join(",")}&`;
  if (from) base_url += `from=${_strOrDate(from)}&`;
  if (to) base_url += `to=${_strOrDate(to)}&`;
  if (on) base_url += `to=${_strOrDate(on)}&`;
  if (last) base_url += `last=${last.toString()}&`;
  if (first) base_url += `last=${first.toString()}&`;
  return _get({
    url: base_url,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.historicalFX = function ({
  symbols,
  from,
  to,
  on,
  last,
  first
} = {}, {
  filter,
  format
} = {}) {
  return historicalFX({
    symbols,
    from,
    to,
    on,
    last,
    first
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Get inventory of available time series endpoints
 *
 * @param {object} options
 * @param {string} options.id timeseries id
 * @param {string} options.key timeseries key
 * @param {string} options.subkey timeseries subkey
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const queryMetadata = ({
  id,
  key,
  subkey
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  let url = "metadata/time-series"; // eslint-disable-next-line no-param-reassign

  if (!id && key) id = "*";

  if (id) {
    url += `/${id}`;

    if (key) {
      url += `/${key}`;

      if (subkey) {
        url += `/${subkey}`;
      }
    }
  }

  return _get({
    url,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.queryMetadata = function ({
  id,
  key,
  subkey
} = {}, {
  filter,
  format
} = {}) {
  return queryMetadata({
    id,
    key,
    subkey
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Returns end of day options data
 *
 * https://iexcloud.io/docs/api/#options
 *
 * @param {string} symbol ticker
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const optionExpirations = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `/stock/${symbol}/options`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.optionExpirations = function (symbol, {
  filter,
  format
} = {}) {
  return optionExpirations(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Returns end of day options data
 *
 * https://iexcloud.io/docs/api/#options
 *
 * @param {string} symbol ticker
 * @param {string} expiration expiration string
 * @param {string} side option side
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const options = (symbol, expiration, side, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (side) {
    return _get({
      url: `stock/${symbol}/options/${expiration}/${side}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stock/${symbol}/options/${expiration}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.options = function (symbol, expiration, side, {
  filter,
  format
} = {}) {
  return options(symbol, expiration, side, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Get inventory of available time series endpoints
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const timeSeriesInventory = ({
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `time-series`,
  token,
  version,
  filter,
  format
});

Client.prototype.timeSeriesInventory = function ({
  filter,
  format
} = {}) {
  return timeSeriesInventory({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Time series is the most common type of data available, and consists of a collection of data points over a period of time. Time series data is indexed by a single date field, and can be retrieved by any portion of time.
 *
 * https://iexcloud.io/docs/api/#time-series
 * @param {string} id ID used to identify a time series dataset.
 * @param {string} key Key used to identify data within a dataset. A common example is a symbol such as AAPL.
 * @param {string} subkey The optional subkey can used to further refine data for a particular key if available.
 * @param {string} range Returns data for a given range. Supported ranges described below.
 * @param {boolean} calendar Used in conjunction with range to return data in the future.
 * @param {number} limit Limits the number of results returned. Defaults to 1.
 * @param {string} subattribute Allows you to query time series by any field in the result set. All time series data is stored by ID, then key, then subkey. If you want to query by any other field in the data, you can use subattribute.
 *                              For example, news may be stored as /news/{symbol}/{newsId}, and the result data returns the keys id, symbol, date, sector, hasPaywall
 *                              By default you can only query by symbol or id. Maybe you want to query all news where the sector is Technology. Your query would be:
 *                              /time-series/news?subattribute=source|WSJ
 *                              The syntax is subattribute={keyName}|{value}. Both the key name and the value are case sensitive. A pipe symbol is used to represent ‘equal to’.
 * @param {string} dateField All time series data is stored by a single date field, and that field is used for any range or date parameters. You may want to query time series data by a different date in the result set. To change the date field used by range queries, pass the case sensitive field name with this parameter.
 *                           For example, corporate buy back data may be stored by announce date, but also contains an end date which you’d rather query by. To query by end date you would use dateField=endDate&range=last-week
 * @param {string} from Returns data on or after the given from date. Format YYYY-MM-DD
 * @param {string} to Returns data on or before the given to date. Format YYYY-MM-DD
 * @param {string} on (Returns data on the given date. Format YYYY-MM-DD
 * @param {number} last Returns the latest n number of records in the series
 * @param {number} first Returns the first n number of records in the series
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format *
 *     Date Ranges:
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | today        | Returns data for today                                                                                                                     |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | yesterday    | Returns data for yesterday                                                                                                                 |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | ytd          | Returns data for the current year                                                                                                          |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | last-week    | Returns data for Sunday-Saturday last week                                                                                                 |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | last-month   | Returns data for the last month                                                                                                            |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | last-quarter | Returns data for the last quarter                                                                                                          |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | d            | Use the short hand d to return a number of days. Example: 2d returns 2 days. If calendar=true, data is returned from today forward.        |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | w            | Use the short hand w to return a number of weeks. Example: 2w returns 2 weeks. If calendar=true, data is returned from today forward.      |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | m            | Use the short hand m to return a number of months. Example: 2m returns 2 months. If calendar=true, data is returned from today forward.    |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | q            | Use the short hand q to return a number of quarters. Example: 2q returns 2 quarters. If calendar=true, data is returned from today forward.|
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | y            | Use the short hand y to return a number of years. Example: 2y returns 2 years. If calendar=true, data is returned from today forward.      |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | tomorrow     | Calendar data for tomorrow. Requires calendar=true                                                                                         |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | this-week    | Calendar data for Sunday-Saturday this week. Requires calendar=true                                                                        |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | this-month   | Calendar data for current month. Requires calendar=true                                                                                    |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | this-quarter | Calendar data for current quarter. Requires calendar=true                                                                                  |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | next-week    | Calendar data for Sunday-Saturday next week. Requires calendar=true                                                                        |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | next-month   | Calendar data for next month. Requires calendar=true                                                                                       |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | next-quarter | Calendar data for next quarter. Requires calendar=true                                                                                     |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 */


const timeSeries = (options, {
  token,
  version,
  filter,
  format
} = {}) => {
  const {
    id = "",
    key = "",
    subkey = "",
    range = "",
    // calendar = false,
    limit = 1,
    subattribute = "",
    dateField = "",
    from = "",
    to = "",
    on = "",
    last = 0,
    first = 0
  } = options || {};
  if (!id) return timeSeriesInventory({
    token,
    version,
    filter,
    format
  });
  let base_url = `time-series/${id}`;
  if (key) base_url += `/${_quoteSymbols(key)}`;
  if (subkey) base_url += `/${_quoteSymbols(subkey)}`;
  base_url += "?";
  if (range) base_url += `range=${_dateRange(range)}&`; // TODO https://github.com/iexcloud/pyEX/issues/164
  // base_url += "calendar={}&".format(str(calendar))

  if (!last && (!to || !from)) base_url += `limit=${limit}&`;
  if (subattribute) base_url += `subattribute=${subattribute}&`;
  if (dateField) base_url += `dateField=${dateField}&`;
  if (from) base_url += `from=${_strOrDate(from)}&`;
  if (to) base_url += `to=${_strOrDate(to)}&`;
  if (on) base_url += `on=${_strOrDate(on)}&`;
  if (last) base_url += `last=${last}&`;
  if (first) base_url += `first=${first}&`; // TODO
  // if extra_params:
  //     base_url += "&".join("{}={}".format(k, v) for k, v in extra_params.items())

  return _get({
    url: base_url,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.timeSeries = function (options, {
  filter,
  format
} = {}) {
  return timeSeries(options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/**
 * internal
 * @param {string} id
 * @param {string} symbol
 * @param  {object} timeseriesArgs
 * @returns
 */

const _base$6 = (id, symbol, token, version, filter, format, ...timeseriesArgs) => timeSeries({
  id,
  key: symbol,
  ...timeseriesArgs
}, token);
/**
 * The Director & Officer Changes data set covers all SEC registrants who have disclosed a director or officer change in Item 5.02 of an 8-K or 8-K/A since August 2004. As of January 1, 2018, the dataset also includes director or officer change disclosures in 6-K & 6-K/A filings.
 * https://iexcloud.io/docs/api/#audit-analytics-director-and-officer-changes
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const directorAndOfficerChangesAuditAnalytics = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$6("PREMIUM_AUDIT_ANALYTICS_DIRECTOR_OFFICER_CHANGES", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.directorAndOfficerChanges = function (symbol, filter, format, ...timeseriesArgs) {
  return directorAndOfficerChangesAuditAnalytics(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * AQRM is an interactive tool designed to quickly identify and understand qualitative and contextual metrics of governance and reporting quality. Red flags and events highlighted in the risk matrix can be used for screening, idea generation, portfolio monitoring, and risk management for every SEC registrant.
 * https://iexcloud.io/docs/api/#audit-analytics-accounting-quality-and-risk-matrix
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const accountingQualityAndRiskMatrixAuditAnalytics = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$6("PREMIUM_AUDIT_ANALYTICS_ACCOUNTING_QUALITY_RISK_MATRIX", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.accountingQualityAndRiskMatrix = function (symbol, filter, format, ...timeseriesArgs) {
  return accountingQualityAndRiskMatrixAuditAnalytics(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};

/**
 * internal
 * @param {string} id
 * @param {string} symbol
 * @param  {object} timeseriesArgs
 * @returns
 */

const _base$5 = (id, symbol, token, version, filter, format, ...timeseriesArgs) => timeSeries({
  id,
  key: symbol,
  ...timeseriesArgs
}, token);
/**
 * Brain Company’s Sentiment Indicator monitors the stock sentiment from the last 30 days of public financial news for about 3,500 US stocks. The sentiment scoring technology is based on a combination of various natural language processing techniques. The sentiment score assigned to each stock is a value ranging from -1 (most negative) to +1 (most positive) that is updated daily.
 * https://iexcloud.io/docs/api/#brain-companys-30-day-sentiment-indicator
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const thirtyDaySentimentBrain = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$5("PREMIUM_BRAIN_SENTIMENT_30_DAYS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.thirtyDaySentiment = function (symbol, filter, format, ...timeseriesArgs) {
  return thirtyDaySentimentBrain(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Brain Company’s Sentiment Indicator monitors the stock sentiment from the last 7 days of public financial news for about 3,500 US stocks. The sentiment scoring technology is based on a combination of various natural language processing techniques. The sentiment score assigned to each stock is a value ranging from -1 (most negative) to +1 (most positive) that is updated daily.
 * https://iexcloud.io/docs/api/#brain-companys-7-day-sentiment-indicator
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const sevenDaySentimentBrain = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$5("PREMIUM_BRAIN_SENTIMENT_7_DAYS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.sevenDaySentiment = function (symbol, filter, format, ...timeseriesArgs) {
  return sevenDaySentimentBrain(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 21 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-21-day-machine-learning-estimated-return-ranking
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const twentyOneDayMLReturnRankingBrain = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$5("PREMIUM_BRAIN_RANKING_21_DAYS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.twentyOneDayMLReturnRanking = function (symbol, filter, format, ...timeseriesArgs) {
  return twentyOneDayMLReturnRankingBrain(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 10 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-10-day-machine-learning-estimated-return-ranking
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const tenDayMLReturnRankingBrain = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$5("PREMIUM_BRAIN_RANKING_10_DAYS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.tenDayMLReturnRanking = function (symbol, filter, format, ...timeseriesArgs) {
  return tenDayMLReturnRankingBrain(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 10 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-5-day-machine-learning-estimated-return-ranking
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const fiveDayMLReturnRankingBrain = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$5("PREMIUM_BRAIN_RANKING_5_DAYS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.fiveDayMLReturnRanking = function (symbol, filter, format, ...timeseriesArgs) {
  return fiveDayMLReturnRankingBrain(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 10 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-3-day-machine-learning-estimated-return-ranking
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const threeDayMLReturnRankingBrain = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$5("PREMIUM_BRAIN_RANKING_3_DAYS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.threeDayMLReturnRanking = function (symbol, filter, format, ...timeseriesArgs) {
  return threeDayMLReturnRankingBrain(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 10 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-2-day-machine-learning-estimated-return-ranking
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const twoDayMLReturnRankingBrain = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$5("PREMIUM_BRAIN_RANKING_2_DAYS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.twoDayMLReturnRanking = function (symbol, filter, format, ...timeseriesArgs) {
  return twoDayMLReturnRankingBrain(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Metrics about the language used in a company’s most recent annual or quarterly filings (10Ks and 10Qs). Includes metrics on the financial sentiment and the scores based on the prevalence of words in the statement categorized into four themes: constraining language, interesting language, litigious language, and language indicating uncertainty.
 * https://iexcloud.io/docs/api/#brain-companys-language-metrics-on-company-filings-quarterly-and-annual
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const languageMetricsOnCompanyFilingsAllBrain = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$5("PREMIUM_BRAIN_LANGUAGE_METRICS_ALL", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.languageMetricsOnCompanyFilingsAll = function (symbol, filter, format, ...timeseriesArgs) {
  return languageMetricsOnCompanyFilingsAllBrain(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Metrics about the language used in a company’s most recent annual filing (10Ks). Includes metrics on the financial sentiment and the scores based on the prevalence of words in the statement categorized into four themes: constraining language, interesting language, litigious language, and language indicating uncertainty.
 * https://iexcloud.io/docs/api/#brain-companys-language-metrics-on-company-filings-annual-only
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const languageMetricsOnCompanyFilingsBrain = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$5("PREMIUM_BRAIN_LANGUAGE_METRICS_10K", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.languageMetricsOnCompanyFilings = function (symbol, filter, format, ...timeseriesArgs) {
  return languageMetricsOnCompanyFilingsBrain(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Compares Brain’s sentiment and language metrics from the company’s most recent repot (annual or quarterly) to the report from last year (10Ks) or the corresponding quarter the prior year (10Qs).
 * https://iexcloud.io/docs/api/#brain-companys-differences-in-language-metrics-on-company-filings-quarterly-and-annual-from-prior-period
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const languageMetricsOnCompanyFilingsDifferenceAllBrain = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$5("PREMIUM_BRAIN_LANGUAGE_DIFFERENCES_ALL", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.languageMetricsOnCompanyFilingsDifferenceAll = function (symbol, filter, format, ...timeseriesArgs) {
  return languageMetricsOnCompanyFilingsDifferenceAllBrain(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Compares Brain’s sentiment and language metrics from the company’s most recent annual filing (10K) to the report from last year.
 * https://iexcloud.io/docs/api/#brain-companys-differences-in-language-metrics-on-company-annual-filings-from-prior-year
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const languageMetricsOnCompanyFilingsDifferenceBrain = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$5("PREMIUM_BRAIN_LANGUAGE_DIFFERENCES_10K", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.languageMetricsOnCompanyFilingsDifference = function (symbol, filter, format, ...timeseriesArgs) {
  return languageMetricsOnCompanyFilingsDifferenceBrain(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};

/**
 * internal
 * @param {string} id
 * @param {string} symbol
 * @param  {object} timeseriesArgs
 * @returns
 */

const _base$4 = (id, symbol, token, version, filter, format, ...timeseriesArgs) => timeSeries({
  id,
  key: symbol,
  ...timeseriesArgs
}, token);
/**
 * The ExtractAlpha Cross-Asset Model 1 (CAM1) is an innovative quantitative stock selection model designed to capture the information contained in options market prices and volumes. The listed equity options market is composed of investors who on average are more informed and information-driven than their cash equity counterparts, due to the higher levels of conviction that are associated with levered bets. This results in a unique model which profits from gradual cross-asset information flows.
 * In historical simulations, high-scoring stocks according to CAM1 outperform low-scoring stocks by 17% per annum with a market-neutral Sharpe ratio of 3.0 before transaction costs. CAM1 is particularly effective in volatile regimes and for mid- and small-cap stocks, and is best used in conjunction with other alpha signals with similar time horizons.
 * History available from July 2005
 * https://iexcloud.io/docs/api/#cross-asset-model-1
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const cam1ExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$4("PREMIUM_EXTRACT_ALPHA_CAM", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.cam1 = function (symbol, filter, format, ...timeseriesArgs) {
  return cam1ExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Financial firms have been under scrutiny for their business practices since the Global Financial Crisis. The Consumer Financial Protection Bureau’s Consumer Complaint Database is a collection of complaints on a range of consumer financial products and services, sent to companies for response. The Consumer Financial Protection Board doesn’t verify all the facts alleged in these complaints, but we take steps to confirm a commercial relationship between the consumer and the company.
 * Since the CFPB started accepting complaints in July 2011, they have helped consumers connect with financial companies to understand issues with their mortgages, fix errors on their credit reports, stop harassment from debt collectors, and get direct responses about problems with their credit cards, checking and savings accounts, student loans, and more.
 * The database generally updates daily, and contains certain information for each complaint, including the source of the complaint, the date of submission, and the company the complaint was sent to for response. The database also includes information about the actions taken by the company in response to the complaint, such as, whether the company’s response was timely and how the company responded. If the consumer opts to share it and after we take steps to remove personal information, we publish the consumer’s description of what happened. Companies also have the option to select a public response. Complaints referred to other regulators, such as complaints about depository institutions with less than $10 billion in assets, are not published in the Consumer Complaint Database.
 * History available from 2011
 * https://iexcloud.io/docs/api/#esg-cfpb-complaints
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const esgCFPBComplaintsExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => {
  timeseriesArgs.subkey = 1;
  return _base$4("PREMIUM_EXTRACT_ALPHA_ESG", symbol, token, version, filter, format, ...timeseriesArgs);
};

Client.premium.prototype.esgCFPBComplaints = function (symbol, filter, format, ...timeseriesArgs) {
  return esgCFPBComplaintsExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Product recalls can be a sign that a company did not employ sufficient safety or quality standards when releasing its products. A product recall can have significant negative impact on a company’s brand, sales, and stock price [Kin, Shenoy, and Subramaniam, 2013]. CPSC is charged with protecting the public from unreasonable risks of injury or death associated with the use of the thousands of types of consumer products under the agency’s jurisdiction. CPSC is committed to protecting consumers and families from products that pose a fire, electrical, chemical, or mechanical hazard.
 * Note that CPSC recalls data is collected from multiple different data formats and so the available fields will vary substantially across records in their availability.
 * Future versions may include consumers’ reports on product safety-related incidents.
 * History available from 1974
 * https://iexcloud.io/docs/api/#esg-cpsc-recalls
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const esgCPSCRecallsExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => {
  timeseriesArgs.subkey = 5;
  return _base$4("PREMIUM_EXTRACT_ALPHA_ESG", symbol, token, version, filter, format, ...timeseriesArgs);
};

Client.premium.prototype.esgCPSCRecalls = function (symbol, filter, format, ...timeseriesArgs) {
  return esgCPSCRecallsExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Companies often hire foreign knowledge workers if they wish to invest in innovation. Hiring foreign workers for employment in the U.S. normally requires approval from several government agencies. First, employers must seek labor certification through the U.S. Department of Labor (DOL). Once the application is certified (approved), the employer must petition the U.S. Citizenship and Immigration Services (CIS) for a visa. Approval by DOL does not guarantee a visa issuance. The Department of State (DOS) will issue an immigrant visa number to the foreign worker for U.S. entry.
 * The Office of Foreign Labor Certification (OFLC) Disclosure Data consists of select extracted data fields from application tables within OFLC case management systems. Each Excel file is cumulative, containing unique records identified by the applicable OFLC case number based on the most recent date a case determination decision was issued.
 * This endpoint includes data on Permanent and H-1B visas only. The H-1B program allows employers to temporarily employ foreign workers in the U.S. on a nonimmigrant basis in specialty occupations or as fashion models of distinguished merit and ability. A specialty occupation requires the theoretical and practical application of a body of specialized knowledge and a bachelor’s degree or the equivalent in the specific specialty (e.g. sciences, medicine, health care, education, biotechnology, and business specialties, etc.).
 * Note that because of the different data structures available by year and across application type (H1B and PERM), the density of many of these fields will vary substantially across the dataset.
 * History available from 1999
 * https://iexcloud.io/docs/api/#esg-dol-visa-applications
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const esgDOLVisaApplicationsExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => {
  timeseriesArgs.subkey = 8;
  return _base$4("PREMIUM_EXTRACT_ALPHA_ESG", symbol, token, version, filter, format, ...timeseriesArgs);
};

Client.premium.prototype.esgDOLVisaApplications = function (symbol, filter, format, ...timeseriesArgs) {
  return esgDOLVisaApplicationsExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Violations of Environmental Protection Agency regulations can indicate a company’s negligence in its environmental and emissions standards, or a disregard for regulatory risks.
 * The Enforcement and Compliance History Online (ECHO) system incorporates Federal enforcement and compliance (FE&C) data from the Integrated Compliance Information System (ICIS), used to track federal enforcement cases. ICIS contains information on federal administrative and federal judicial cases under the following environmental statutes: the Clean Air Act (CAA), the Clean Water Act (CWA), the Resource Conservation and Recovery Act (RCRA), the Emergency Planning and Community Right-to-Know Act (EPCRA) Section 313, the Toxic Substances Control Act (TSCA), the Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA), the Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA or Superfund), the Safe Drinking Water Act (SDWA), and the Marine Protection, Research, and Sanctuaries Act (MPRSA).
 * ICIS is a case activity tracking and management system for civil, judicial, and administrative federal EPA enforcement cases. Case information is supplied and updated by EPA’s Offices of Regional Counsel and Office of Civil Enforcement case attorneys. The basic structure of an ICIS FE&C record focuses on an enforcement case. It is assigned a case number and a case name which identifies the defendant (or principal defendant if more than one is named in the complaint). For administrative actions, the record includes the nature of the violation, statute(s) involved, and milestone dates (e.g., the date the order was issued). Judicial actions contain information similar to that for administrative actions, but include more detailed milestone dates.
 * Data is organized around two concepts: the enforcement case and a resulting settlement(s) (enforcement conclusion). Enforcement case data describe the enforcement action from initiation through to its conclusion. If multiple defendants, facilities, and/or violations are cited in the case, then a single case may result in multiple settlements. These case conclusions describe what has been ordered and/or agreed upon to be performed to address violations identified by the case complaint.
 * History available from 1975
 * https://iexcloud.io/docs/api/#esg-epa-enforcements
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const esgEPAEnforcementsExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => {
  timeseriesArgs.subkey = 2;
  return _base$4("PREMIUM_EXTRACT_ALPHA_ESG", symbol, token, version, filter, format, ...timeseriesArgs);
};

Client.premium.prototype.esgEPAEnforcements = function (symbol, filter, format, ...timeseriesArgs) {
  return esgEPAEnforcementsExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * As described in EPA Enforcements, but including all milestones for an EPA violation event, not just enforcement actions.
 * History available from 1975
 * https://iexcloud.io/docs/api/#esg-epa-milestones
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const esgEPAMilestonesExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => {
  timeseriesArgs.subkey = 3;
  return _base$4("PREMIUM_EXTRACT_ALPHA_ESG", symbol, token, version, filter, format, ...timeseriesArgs);
};

Client.premium.prototype.esgEPAMilestones = function (symbol, filter, format, ...timeseriesArgs) {
  return esgEPAMilestonesExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Individuals often contribute to political campaigns, and when doing so they are asked to disclose their employer. The individual contributions file contains each campaign contribution from an individual to a federal committee. The files for the current election cycle plus the two most recent election cycles are regularly updated.
 * History available from 1997
 * https://iexcloud.io/docs/api/#esg-fec-individual-campaign-contributions
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const esgFECIndividualCampaingContributionsExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => {
  timeseriesArgs.subkey = 7;
  return _base$4("PREMIUM_EXTRACT_ALPHA_ESG", symbol, token, version, filter, format, ...timeseriesArgs);
};

Client.premium.prototype.esgFECIndividualCampaingContributions = function (symbol, filter, format, ...timeseriesArgs) {
  return esgFECIndividualCampaingContributionsExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Workplace injuries can be an indication of a company’s under investment in worker safety and reasonable working conditions. The dataset consists of inspection case detail for Occupational Safety and Health Administration (OSHA) inspections. The dataset includes information regarding the impetus for conducting the inspections, which are often prompted by workplace accidents, injuries, and fatalities.
 * Future versions may include data on the workplace injuries themselves.
 * History available from 1972
 * https://iexcloud.io/docs/api/#esg-osha-inspections
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const esgOSHAInspectionsExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => {
  timeseriesArgs.subkey = 4;
  return _base$4("PREMIUM_EXTRACT_ALPHA_ESG", symbol, token, version, filter, format, ...timeseriesArgs);
};

Client.premium.prototype.esgOSHAInspections = function (symbol, filter, format, ...timeseriesArgs) {
  return esgOSHAInspectionsExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Companies often employ lobbyists to influence legislation in their favor, and lobbying can be a very high ROI activity for a company [Hutchens, Rego, and Sheneman, 2016]. Under the Lobbying Disclosure Act, in-house and outside lobbyists must file quarterly reports describing lobbying activity. These reports disclose the amount spent on lobbying. The lobbying data is compiled using the lobbying disclosure reports filed with the Secretary of the Senate’s Office of Public Records (SOPR). Quarterly reports are due on the 20th day of January, April, July, and October. Lobbying firms are required to provide a good- faith estimate rounded to the nearest $10,000 of all lobbying-related income from their clients in each quarter. Total spending on lobbying activities are reported each quarter, but are not broken down by how much was spent on a particular issue or bill.
 * History available from 1999
 * https://iexcloud.io/docs/api/#esg-senate-lobbying
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const esgSenateLobbyingExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => {
  timeseriesArgs.subkey = 6;
  return _base$4("PREMIUM_EXTRACT_ALPHA_ESG", symbol, token, version, filter, format, ...timeseriesArgs);
};

Client.premium.prototype.esgSenateLobbying = function (symbol, filter, format, ...timeseriesArgs) {
  return esgSenateLobbyingExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Violations of Environmental Protection Agency regulations can indicate a company’s negligence in its environmental and emissions standards, or a disregard for regulatory risks.
 * The Enforcement and Compliance History Online (ECHO) system incorporates Federal enforcement and compliance (FE&C) data from the Integrated Compliance Information System (ICIS), used to track federal enforcement cases. ICIS contains information on federal administrative and federal judicial cases under the following environmental statutes: the Clean Air Act (CAA), the Clean Water Act (CWA), the Resource Conservation and Recovery Act (RCRA), the Emergency Planning and Community Right-to-Know Act (EPCRA) Section 313, the Toxic Substances Control Act (TSCA), the Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA), the Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA or Superfund), the Safe Drinking Water Act (SDWA), and the Marine Protection, Research, and Sanctuaries Act (MPRSA).
 * ICIS is a case activity tracking and management system for civil, judicial, and administrative federal EPA enforcement cases. Case information is supplied and updated by EPA’s Offices of Regional Counsel and Office of Civil Enforcement case attorneys. The basic structure of an ICIS FE&C record focuses on an enforcement case. It is assigned a case number and a case name which identifies the defendant (or principal defendant if more than one is named in the complaint). For administrative actions, the record includes the nature of the violation, statute(s) involved, and milestone dates (e.g., the date the order was issued). Judicial actions contain information similar to that for administrative actions, but include more detailed milestone dates.
 * Data is organized around two concepts: the enforcement case and a resulting settlement(s) (enforcement conclusion). Enforcement case data describe the enforcement action from initiation through to its conclusion. If multiple defendants, facilities, and/or violations are cited in the case, then a single case may result in multiple settlements. These case conclusions describe what has been ordered and/or agreed upon to be performed to address violations identified by the case complaint.
 * History available from 1975
 * https://iexcloud.io/docs/api/#esg-epa-enforcements
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const esgUSASpendingExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => {
  timeseriesArgs.subkey = 9;
  return _base$4("PREMIUM_EXTRACT_ALPHA_ESG", symbol, token, version, filter, format, ...timeseriesArgs);
};

Client.premium.prototype.esgUSASpending = function (symbol, filter, format, ...timeseriesArgs) {
  return esgUSASpendingExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Companies seek government contracts as these are very sticky sources of revenue. The Federal Funding Accountability and Transparency Act of 2006 (FFATA) requires that federal contract, grant, loan, and other financial assistance awards of more than $25,000 be displayed on a searchable, publicly accessible website. As a matter of discretion, the data set also contains certain federal contracts of more than $3,000.
 * All the data on prime recipient transactions is submited by the federal agencies making federal contract, grant, loan, and other financial assistance awards. Agencies are required to submit data within 30 days of making the award or after making a modification or amendment to an award. The exception is the Department of Defense which delays its submission by 90 days to protect operations.
 * History available from 1995
 * https://iexcloud.io/docs/api/#esg-usa-spending
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const esgUSPTOPatentApplicationsExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => {
  timeseriesArgs.subkey = 10;
  return _base$4("PREMIUM_EXTRACT_ALPHA_ESG", symbol, token, version, filter, format, ...timeseriesArgs);
};

Client.premium.prototype.esgUSPTOPatentApplications = function (symbol, filter, format, ...timeseriesArgs) {
  return esgUSPTOPatentApplicationsExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Patent grants are indications that a company has successfully signaled that it values its IP, that its IP is unique in the eyes of the USPTO, and that its initial patent application was a reasonable one.
 * Patent grants data is issued weekly on Tuesdays.
 * Currently only the first three assignees listed on the patent are included. Future versions may contain more detail on the content of patent grants, including assignees beyond the first three listed on the grant.
 * History available from 2002
 * https://iexcloud.io/docs/api/#esg-uspto-patent-grants
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const esgUSPTOPatentGrantsExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => {
  timeseriesArgs.subkey = 11;
  return _base$4("PREMIUM_EXTRACT_ALPHA_ESG", symbol, token, version, filter, format, ...timeseriesArgs);
};

Client.premium.prototype.esgUSPTOPatentGrants = function (symbol, filter, format, ...timeseriesArgs) {
  return esgUSPTOPatentGrantsExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * The ExtractAlpha Tactical Model 1 (TM1) is a quantitative stock selection model designed to capture the technical dynamics of single US equities over one to ten trading day horizons. TM1 is a tactical factor, in that it can assist a longer- horizon investor in timing their entry or exit points, or be used in combination with existing systematic or qualitative strategies with similar holding periods.
 * In historical simulations, high-scoring stocks according to TM1 outperform low- scoring stocks by 59% per annum with a market-neutral Sharpe ratio of 4.4 before transaction costs, versus 25% and a Sharpe of 1.1 for a basic reversal factor with comparable turnover. Unlike many quantitative stock selection factors, TM1 exhibits comparable returns for large-cap stocks and small-cap stocks, and it is particularly effective in volatile regimes.
 * TM1’s alpha is realized between one and ten days, and so may not be appropriate as a signal on which to trade directly for some investment managers with long horizons or large AUMs. However TM1 could be used to time trades that a longer-horizon strategy would enter regardless, thereby improving the price of the entry and exit points without incurring incremental transaction costs.
 * A basic fundamental and momentum strategy with annual net returns of 5.5%, a net Sharpe Ratio of 0.55, and daily turnover of 6.4% can be improved to annual net returns of 10.0% and a net Sharpe Ratio of 0.97, with a slight reduction of turnover, by implementing simple TM1-based entry and exit rules. The value added is very consistent over time, offers drawdown protection in volatile markets, and survives reasonable transaction cost and latency assumptions.
 * TM1 is therefore effective as a tactical overlay which can improve risk-adjusted returns without unduly influencing the underlying strategy. The implementation could be as straightforward as a daily pre-trade screen on position entries and exits prior to the open.
 * History available from January 2000
 * https://iexcloud.io/docs/api/#tactical-model-1
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const tacticalModel1ExtractAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$4("PREMIUM_EXTRACT_ALPHA_TM", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.tacticalModel1 = function (symbol, filter, format, ...timeseriesArgs) {
  return tacticalModel1ExtractAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};

/**
 * internal
 * @param {string} id
 * @param {string} symbol
 * @param  {object} timeseriesArgs
 * @returns
 */

const _base$3 = (id, symbol, token, version, filter, format, ...timeseriesArgs) => timeSeries({
  id,
  key: symbol,
  ...timeseriesArgs
}, token);
/**
 * The Similarity Index quantifies the textual differences between a given company’s annual or quarterly filings on an “as disclosed” basis. For example, a similarity score is calculated by comparing a company’s 2017 10-K with the 2016 10-K; or a company’s 2017 Q3 10-Q compared to the 2016 Q3 10-Q a year ago.
 * Intuitively, firms breaking from routine phrasing and content in mandatory disclosures give clues about their future performance which eventually drive stock returns over time. This data set captures significant changes in disclosure texts in the form of low similarity scores.
 * Academic research has shown that a portfolio that shorts low similarity scores and longs high similarity scores earns non-trivial and uncorrelated returns over a period of 12-18 months.
 * Data available from 2001 with coverage of about 23,000 equities
 * https://iexcloud.io/docs/api/#similiarity-index
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const similarityIndexFraudFactors = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$3("PREMIUM_FRAUD_FACTORS_SIMILARITY_INDEX", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.similarityIndex = function (symbol, filter, format, ...timeseriesArgs) {
  return similarityIndexFraudFactors(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * The data set records the date in which a firm files a Non-Timely notification with the SEC.
 * Companies regulated by the SEC are required to file a Non-Timely notification when they are unable to file their annual or quarterly disclosures on time. In most cases, the inability to file annual/quarterly disclosures on time is a red-flag and thus a valuable signal for algorithmic strategies and fundamental investing alike.
 * Data available from 1994 with coverage of about 18,000 equities
 * https://iexcloud.io/docs/api/#non-timely-filings
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const nonTimelyFilingsFraudFactors = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$3("PREMIUM_FRAUD_FACTORS_NON_TIMELY_FILINGS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.nonTimelyFilings = function (symbol, filter, format, ...timeseriesArgs) {
  return nonTimelyFilingsFraudFactors(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};

/**
 * internal
 * @param {string} id
 * @param {string} symbol
 * @param  {object} timeseriesArgs
 * @returns
 */

const _base$2 = (id, symbol, token, version, filter, format, ...timeseriesArgs) => timeSeries({
  id,
  key: symbol,
  ...timeseriesArgs
}, token);
/**
 * Kavout takes in over 200 factors and signals including fundamentals, pricing, technical indicators, and alternative data, and then uses an ensemble machine learning technique to analyze and rank stocks.
 * K Score is a stock rating and ranking score with values ranging from 1-to-9. A higher K Score (7-9) assigned to a stock indicates a higher probability of outperformance, whereas a lower K Score (1-3) indicates a lower probability of outperformance in the next month.
 * https://iexcloud.io/docs/api/#k-score-for-us-equities
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const kScoreKavout = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$2("PREMIUM_KAVOUT_KSCORE", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.kScore = function (symbol, filter, format, ...timeseriesArgs) {
  return kScoreKavout(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Kavout takes in over 200 factors and signals including fundamentals, pricing, technical indicators, and alternative data, and then uses an ensemble machine learning technique to analyze and rank stocks.
 * K Score is a stock rating and ranking score with values ranging from 1-to-9. A higher K Score (7-9) assigned to a stock indicates a higher probability of outperformance, whereas a lower K Score (1-3) indicates a lower probability of outperformance in the next month.
 * For quantitative users, overlay K Score as a signal in investment models. Mitigate risk in portfolio construction by avoiding stocks with low K scores (1-3).
 * China Stock Market at a Glance
 * The China A-share stock market has two exchanges – Shanghai stock exchange (SSE) and Shenzhen stock exchange (SZSE). The SSE and the SZSE are the world’s 5th largest and 8th largest stock market by market capitalization respectively.
 * The most important Indices in China A-share are CSI 300, CSI 500 and CSI 800.
 * CSI 300 Index consists of the 300 largest and most liquid A-share stocks, similar to the largest 500 stocks by market cap in the US.
 * CSI 500 Index consists of the largest remaining 500 A-Share stocks after excluding the CSI 300 Index, similar to the largest 2,000 US stocks by market cap. CSI 500 Index reflects the overall performance of small-mid cap A-shares.
 * CSI 800 Index consists of all the constituents of the CSI 300 Index and CSI 500 Index, similar to the largest 3,000 US stocks by market cap.
 * https://iexcloud.io/docs/api/#k-score-for-china-a-shares
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const kScoreChinaKavout = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$2("PREMIUM_KAVOUT_KSCORE_A_SHARES", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.kScoreChina = function (symbol, filter, format, ...timeseriesArgs) {
  return kScoreChinaKavout(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Powered by the best fundamental data in the world, New Constructs’ research provides unrivalled insights into the profitability and valuation of public and private companies.Our risk/reward ratings empower clients to make more informed investing decisions based on true, not reported or distorted, earnings. Research reports for 3,000+ stocks, 400+ ETFs, and 7,000+ mutual funds.
 * https://iexcloud.io/docs/api/#new-constructs-report
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */

const reportNewConstructs = (symbol, date, token, version) => {
  if (!symbol || !date) {
    throw new IEXJSException("symbol and date required");
  }

  return files("VALUENGINE_REPORT", symbol);
};
/**
 * Powered by the best fundamental data in the world, New Constructs’ research provides unrivalled insights into the profitability and valuation of public and private companies.Our risk/reward ratings empower clients to make more informed investing decisions based on true, not reported or distorted, earnings. Research reports for 3,000+ stocks, 400+ ETFs, and 7,000+ mutual funds.
 * https://iexcloud.io/docs/api/#new-constructs-report
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */

const downloadReportNewConstructs = (symbol, date, token, version) => {
  if (!symbol || !date) {
    throw new IEXJSException("symbol and date required");
  }

  return download("VALUENGINE_REPORT", symbol);
};

Client.premiumfiles.prototype.newConstructs = function (symbol, date) {
  return reportNewConstructs(symbol, date, this._token, this._version);
};

Client.premiumfiles.prototype.downloadNewConstructs = function (symbol, date) {
  return downloadReportNewConstructs(symbol, date, this._token, this._version);
};

/**
 * internal
 * @param {string} id
 * @param {string} symbol
 * @param  {object} timeseriesArgs
 * @returns
 */

const _base$1 = (id, symbol, token, version, filter, format, ...timeseriesArgs) => timeSeries({
  id,
  key: symbol,
  ...timeseriesArgs
}, token);
/**
 * Precision Alpha performs an unbiased non-equilibrium market analysis on six months of closing price data for all NASDAQ and NYSE listed equities, every day after market close. Precision Alpha calculates scientifically and exactly: market emotion, power, resistance, noise/efficiency, and next day probabilities
 * https://iexcloud.io/docs/api/#precision-alpha-price-dynamics
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const priceDynamicsPrecisionAlpha = (symbol, token, version, filter, format, ...timeseriesArgs) => _base$1("PREMIUM_PRECISION_ALPHA_PRICE_DYNAMICS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.priceDynamics = function (symbol, filter, format, ...timeseriesArgs) {
  return priceDynamicsPrecisionAlpha(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Pulls balance sheet data. Available quarterly (4 quarters) and annually (4 years)
 *
 * https://iexcloud.io/docs/api/#balance-sheet
 *
 * @param {string} symbol Symbol to look up
 * @param {string} type Can only be daily or minute. Default is daily.
 * @param {string} date Format YYYYMMDD date to fetch sentiment data. Default is today.
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const socialSentimentStockTwits = async (symbol, type, date, token, version, filter, format) => {
  _raiseIfNotStr(symbol);

  if (["daily", "minute"].indexOf(type || "daily") < 0) {
    throw new IEXJSException("`type` must be either daily or minute");
  }

  let base_url = `stock/${symbol}/sentiment/${type || "daily"}`;

  if (date) {
    // eslint-disable-next-line no-param-reassign
    date = _strOrDate(date);
    base_url += `/${date}`;
  }

  return _get({
    url: base_url,
    token,
    version,
    filter,
    format
  });
};

Client.premium.prototype.socialSentiment = function (symbol, type, date, filter, format) {
  return socialSentimentStockTwits(symbol, type, date, this._token, this._version, filter, format);
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * ValuEngine provides research on over 5,000 stocks with stock valuations, Buy/Hold/Sell recommendations, and forecasted target prices, so that you the individual investor can make informed decisions. Every ValuEngine Valuation and Forecast model for the U.S. equities markets has been extensively back-tested. ValuEngine’s performance exceeds that of many well-known stock-picking styles. Reports available since March 19th, 2020.
 * https://iexcloud.io/docs/api/#valuengine-stock-research-report
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */

const stockReportValuEngine = (symbol, date, token, version) => {
  if (!symbol || !date) {
    throw new IEXJSException("symbol and date required");
  }

  return files("VALUENGINE_REPORT", symbol);
};
/**
 * ValuEngine provides research on over 5,000 stocks with stock valuations, Buy/Hold/Sell recommendations, and forecasted target prices, so that you the individual investor can make informed decisions. Every ValuEngine Valuation and Forecast model for the U.S. equities markets has been extensively back-tested. ValuEngine’s performance exceeds that of many well-known stock-picking styles. Reports available since March 19th, 2020.
 * https://iexcloud.io/docs/api/#valuengine-stock-research-report
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */

const downloadStockReportvaluEngine = (symbol, date, token, version) => {
  if (!symbol || !date) {
    throw new IEXJSException("symbol and date required");
  }

  return download("VALUENGINE_REPORT", symbol);
};

Client.premiumfiles.prototype.valuEngine = function (symbol, date) {
  return stockReportValuEngine(symbol, date, this._token, this._version);
};

Client.premiumfiles.prototype.downloadValuEngine = function (symbol, date) {
  return downloadStockReportvaluEngine(symbol, date, this._token, this._version);
};

/**
 * internal
 * @param {string} id
 * @param {string} symbol
 * @param  {object} timeseriesArgs
 * @returns
 */

const _base = (id, symbol, token, version, filter, format, ...timeseriesArgs) => timeSeries({
  id,
  key: symbol,
  ...timeseriesArgs
}, token);
/**
 * This is a meeting where company executives provide information about the company’s performance and its future prospects.
 * https://iexcloud.io/docs/api/#analyst-days
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const analystDaysWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_ANALYST_DAY", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.analystDays = function (symbol, filter, format, ...timeseriesArgs) {
  return analystDaysWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is an end-point for getting information about a formal meeting of a company’s board of directors to establish corporate management related policies and to make decisions on major company issues.
 * https://iexcloud.io/docs/api/#analyst-days
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const boardOfDirectorsMeetingWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_BOARD_OF_DIRECTORS_MEETING", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.boardOfDirectorsMeeting = function (symbol, filter, format, ...timeseriesArgs) {
  return boardOfDirectorsMeetingWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is a meeting or conference call in which company information is reviewed by one or more company executives.
 * https://iexcloud.io/docs/api/#business-updates
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const businessUpdatesWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_BUSINESS_UPDATE", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.businessUpdates = function (symbol, filter, format, ...timeseriesArgs) {
  return businessUpdatesWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * The repurchase of outstanding shares by a company to reduce the number of shares on the market.
 * https://iexcloud.io/docs/api/#buybacks
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const buybacksWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_BUYBACK", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.buybacks = function (symbol, filter, format, ...timeseriesArgs) {
  return buybacksWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is a meeting where company executives provide information about the company’s performance and its future prospects.
 * https://iexcloud.io/docs/api/#capital-markets-day
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const capitalMarketsDayWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_CAPITAL_MARKETS_DAY", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.capitalMarketsDay = function (symbol, filter, format, ...timeseriesArgs) {
  return capitalMarketsDayWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is a roadshow or bus tour event in which one or more company executives speaks to interested investors and analysts.
 * https://iexcloud.io/docs/api/#company-travel
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const companyTravelWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_COMPANY_TRAVEL", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.companyTravel = function (symbol, filter, format, ...timeseriesArgs) {
  return companyTravelWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is an estimated date, based on historical trends for this company in which a company must file the appropriate Form for the quarter/year or file for an extension.
 * https://iexcloud.io/docs/api/#filing-due-dates
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const filingDueDatesWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_FILING_DUE_DATE", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.filingDueDates = function (symbol, filter, format, ...timeseriesArgs) {
  return filingDueDatesWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is a forecasted quarterly ending announcement date for a company. This may or may not correspond to a calendar quarter.
 * https://iexcloud.io/docs/api/#fiscal-quarter-end
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const fiscalQuarterEndWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_FISCAL_QUARTER_END_DATE", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.fiscalQuarterEnd = function (symbol, filter, format, ...timeseriesArgs) {
  return fiscalQuarterEndWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is a meeting where ideas and views of a business nature can be exchanged.
 * https://iexcloud.io/docs/api/#forum
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const forumWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_FORUM", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.forum = function (symbol, filter, format, ...timeseriesArgs) {
  return forumWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is a formal meeting in which representatives of many companies gather to discuss ideas or issues related to a particular topic or business, usually held for several days. This item indicates at least one representative from the company will be presenting at the conference on the specified date and time. Note: Conference details include full Conference dates.
 * https://iexcloud.io/docs/api/#general-conference
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const generalConferenceWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_GENERAL_CONFERENCE", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.generalConference = function (symbol, filter, format, ...timeseriesArgs) {
  return generalConferenceWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * The FDA uses 50 committees and panels to obtain independent expert advice on scientific, technical, and policy matters
 * https://iexcloud.io/docs/api/#fda-advisory-committee-meetings
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const fdaAdvisoryCommitteeMeetingsWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_STOCK_SPECIFIC_FDA_ADVISORY_COMMITTEE_MEETING", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.fdaAdvisoryCommitteeMeetings = function (symbol, filter, format, ...timeseriesArgs) {
  return fdaAdvisoryCommitteeMeetingsWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This returns a list of market holidays.
 * https://iexcloud.io/docs/api/#holidays
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const holidaysWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_HOLIDAYS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.holidays = function (symbol, filter, format, ...timeseriesArgs) {
  return holidaysWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This shows additions and removals from various indexes for particular stocks.
 * https://iexcloud.io/docs/api/#index-changes
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const indexChangesWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_INDEX_CHANGE", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.indexChanges = function (symbol, filter, format, ...timeseriesArgs) {
  return indexChangesWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * TGet a list of upcoming IPOs.
 * hhttps://iexcloud.io/docs/api/#ipos
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const iposWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_INITIAL_PUBLIC_OFFERING", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.ipos = function (symbol, filter, format, ...timeseriesArgs) {
  return iposWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * These are legal actions where an individual represents a group in a court claim. The judgment from the suit is for all the members of the group or class.
 * https://iexcloud.io/docs/api/#legal-actions
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const legalActionsWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_LEGAL_ACTIONS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.legalActions = function (symbol, filter, format, ...timeseriesArgs) {
  return legalActionsWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * These are a type of corporate action in which two companies combine to form a single company, or one company is taken over by another.
 * https://iexcloud.io/docs/api/#mergers-acquisitions
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const mergersAndAcquisitionsWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_MERGER_ACQUISITIONS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.mergersAndAcquisitions = function (symbol, filter, format, ...timeseriesArgs) {
  return mergersAndAcquisitionsWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Represents movie and video releases. This is the date on which a movie distributor plans to release a movie to theaters
 * https://iexcloud.io/docs/api/#product-events
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const productEventsWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_PRODUCT_EVENTS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.productEvents = function (symbol, filter, format, ...timeseriesArgs) {
  return productEventsWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is a day in which investors and analysts can meet with a company’s R&D representatives to learn more about new or improved products and services.
 * https://iexcloud.io/docs/api/#research-and-development-days
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const researchAndDevelopmentDaysWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_RD_DAY", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.researchAndDevelopmentDays = function (symbol, filter, format, ...timeseriesArgs) {
  return researchAndDevelopmentDaysWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Same-store sales, also referred to as comparable-store sales, SSS or identical-store sales, is a financial metric that companies in the retail industry use to evaluate the total dollar amount of sales in the company’s stores that have been operating for a year or more.
 * https://iexcloud.io/docs/api/#same-store-sales
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const sameStoreSalesWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_SAME_STORE_SALES", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.sameStoreSales = function (symbol, filter, format, ...timeseriesArgs) {
  return sameStoreSalesWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * Secondary Offerings are the issuance of new stock for public sale from a company that has already made its initial public offering (IPO).
 * Usually, these kinds of public offerings are made by companies wishing to refinance, or raise capital for growth.
 * Money raised from these kinds of secondary offerings goes to the company, through the investment bank that underwrites the offering.
 * Investment banks are issued an allotment, and possibly an overallotment which they may choose to exercise if there is a strong possibility of making money on the spread between the allotment price and the selling price of the securities. Short Selling is prohibited during the period of the secondary offering.
 * https://iexcloud.io/docs/api/#secondary-offerings
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const secondaryOfferingsWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_SECONDARY_OFFERING", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.secondaryOfferings = function (symbol, filter, format, ...timeseriesArgs) {
  return secondaryOfferingsWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is an educational event that features one or more subject matter experts delivering information via lecture and discussion.
 * https://iexcloud.io/docs/api/#seminars
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const seminarsWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_SEMINAR", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.seminars = function (symbol, filter, format, ...timeseriesArgs) {
  return seminarsWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is a meeting, held at least annually, to elect members to the board of directors and hear reports on the business’ financial situation as well as new policy initiatives from the corporation’s management.
 * https://iexcloud.io/docs/api/#shareholder-meetings
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const shareholderMeetingsWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_SHAREHOLDER_MEETING", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.shareholderMeetings = function (symbol, filter, format, ...timeseriesArgs) {
  return shareholderMeetingsWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is a gathering of people who are interested in the same business subject or topic.
 * https://iexcloud.io/docs/api/#summit-meetings
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const summitMeetingsWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_SUMMIT_MEETING", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.summitMeetings = function (symbol, filter, format, ...timeseriesArgs) {
  return summitMeetingsWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is a large gathering in which different companies in a particular field or industry show their products to possible customers.
 * https://iexcloud.io/docs/api/#trade-shows
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const tradeShowsWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_TRADE_SHOW", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.tradeShows = function (symbol, filter, format, ...timeseriesArgs) {
  return tradeShowsWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is when option contracts and futures contracts expire on the exact same day.
 * https://iexcloud.io/docs/api/#witching-hours
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const witchingHoursWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_WITCHING_HOURS", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.witchingHours = function (symbol, filter, format, ...timeseriesArgs) {
  return witchingHoursWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};
/**
 * This is a meeting or series of meetings at which a group of people engage in discussion and activity on a particular subject, product or service to gain hands-on experience.
 * https://iexcloud.io/docs/api/#workshops
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */


const workshopsWallStreetHorizon = (symbol, token, version, filter, format, ...timeseriesArgs) => _base("PREMIUM_WALLSTREETHORIZON_WORKSHOP", symbol, token, version, filter, format, ...timeseriesArgs);

Client.premium.prototype.workshops = function (symbol, filter, format, ...timeseriesArgs) {
  return workshopsWallStreetHorizon(symbol, this._token, this._version, filter, format, ...timeseriesArgs);
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
const thirtyYear = ({
  token,
  version
} = {}) => points({
  key: "DGS30"
}, {
  token,
  version
});

Client.prototype.thirtyYear = function () {
  return thirtyYear({
    token: this._token,
    version: this._version
  });
};

const twentyYear = ({
  token,
  version
} = {}) => points({
  key: "DGS20"
}, {
  token,
  version
});

Client.prototype.twentyYear = function () {
  return twentyYear({
    token: this._token,
    version: this._version
  });
};

const tenYear = ({
  token,
  version
} = {}) => points({
  key: "DGS10"
}, {
  token,
  version
});

Client.prototype.tenYear = function () {
  return tenYear({
    token: this._token,
    version: this._version
  });
};

const fiveYear = ({
  token,
  version
} = {}) => points({
  key: "DGS5"
}, {
  token,
  version
});

Client.prototype.fiveYear = function () {
  return fiveYear({
    token: this._token,
    version: this._version
  });
};

const twoYear = ({
  token,
  version
} = {}) => points({
  key: "DGS2"
}, {
  token,
  version
});

Client.prototype.twoYear = function () {
  return twoYear({
    token: this._token,
    version: this._version
  });
};

const oneYear = ({
  token,
  version
} = {}) => points({
  key: "DGS1"
}, {
  token,
  version
});

Client.prototype.oneYear = function () {
  return oneYear({
    token: this._token,
    version: this._version
  });
};

const sixMonth = ({
  token,
  version
} = {}) => points({
  key: "DGS6MO"
}, {
  token,
  version
});

Client.prototype.sixMonth = function () {
  return thirtyYear({
    token: this._token,
    version: this._version
  });
};

const threeMonth = ({
  token,
  version
} = {}) => points({
  key: "DGS3MO"
}, {
  token,
  version
});

Client.prototype.threeMonth = function () {
  return threeMonth({
    token: this._token,
    version: this._version
  });
};

const oneMonth = ({
  token,
  version
} = {}) => points({
  key: "DGS1MO"
}, {
  token,
  version
});

Client.prototype.oneMonth = function () {
  return oneMonth({
    token: this._token,
    version: this._version
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This call allows you to fetch a number of trade dates or holidays from a given date. For example, if you want the next trading day, you would call /ref-data/us/dates/trade/next/1.
 *
 * https://iexcloud.io/docs/api/#u-s-exchanges
 *
 * @param {object} options
 * @param {string} options.type "holiday" or "trade"
 * @param {string} options.direction "next" or "last"
 * @param {number} options.last number to move in direction
 * @param {string} options.startDate start date for next or last, YYYYMMDD
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const calendar = ({
  type = "holiday",
  direction = "next",
  last = 1,
  startDate = null
} = {}, {
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => {
  if (startDate) {
    return _get({
      url: `ref-data/us/dates/${type}/${direction}/${last}/${_strOrDate(startDate)}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `ref-data/us/dates/${type}/${direction}/${last.toString()}`,
    token,
    version,
    filter,
    format
  });
};
const holidays = calendar;

Client.prototype.calendar = function ({
  type,
  direction,
  last,
  startDate
} = {}, {
  filter,
  format
} = {}) {
  return calendar({
    type,
    direction,
    last,
    startDate
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

Client.prototype.holidays = function ({
  type,
  direction,
  last,
  startDate
} = {}, {
  filter,
  format
} = {}) {
  return calendar({
    type,
    direction,
    last,
    startDate
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Returns an array of U.S. exchanges.
 *
 * https://iexcloud.io/docs/api/#u-s-exchanges
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const exchanges = ({
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/market/us/exchanges`,
  token,
  version,
  filter,
  format
});

Client.prototype.exchanges = function ({
  filter,
  format
} = {}) {
  return exchanges({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Returns an array of exchanges.
 *
 * https://iexcloud.io/docs/api/#international-exchanges
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const internationalExchanges = ({
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/exchanges`,
  token,
  version,
  filter,
  format
});

Client.prototype.internationalExchanges = function ({
  filter,
  format
} = {}) {
  return internationalExchanges({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Returns an array of U.S. exchanges.
 *
 * https://iexcloud.io/docs/api/#u-s-exchanges
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const figi = (figi_, {
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => {
  _raiseIfNotStr(figi_);

  return _get({
    url: `ref-data/figi?figi=${figi_}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.figi = function (figi_, {
  filter,
  format
} = {}) {
  return figi(figi_, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This call converts an ISIN to an iex symbol
 *
 * https://iexcloud.io/docs/api/#isin-mapping
 *
 * @param {string} isin isin
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const isinLookup = (isin, {
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/isin?isin=${isin}`,
  token,
  version,
  filter,
  format
});

Client.prototype.isinLookup = function (isin, {
  filter,
  format
} = {}) {
  return isinLookup(isin, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This call converts an RIC to an iex symbol
 *
 * https://iexcloud.io/docs/api/#ric-mapping
 *
 * @param {string} ric ric
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const ricLookup = (ric, {
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/ric?ric=${ric}`,
  token,
  version,
  filter,
  format
});

Client.prototype.ricLookup = function (ric, {
  filter,
  format
} = {}) {
  return ricLookup(ric, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Returns an array of symbols up to the top 10 matches. Results will be sorted for relevancy. Search currently defaults to equities only, where the symbol returned is supported by endpoints listed under the Stocks category.
 *
 * https://iexcloud.io/docs/api/#search
 *
 * @param {string} fragment search fragment
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const search = (fragment, {
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `search/${_quoteSymbols(fragment)}`,
  token,
  version,
  filter,
  format
});

Client.prototype.search = function (fragment, {
  filter,
  format
} = {}) {
  return search(fragment, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Returns an array of sectors.
 *
 * https://iexcloud.io/docs/api/#sectors
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const sectors = ({
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/sectors`,
  token,
  version,
  filter,
  format
});

Client.prototype.sectors = function ({
  filter,
  format
} = {}) {
  return sectors({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Returns an array of tags.
 *
 * https://iexcloud.io/docs/api/#tags
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const tags = ({
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/tags`,
  token,
  version,
  filter,
  format
});

Client.prototype.tags = function ({
  filter,
  format
} = {}) {
  return tags({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
const convertToList = async res => (await res).map(record => record.symbol);

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This provides a full list of supported cryptocurrencies by IEX Cloud.
 *
 * https://iexcloud.io/docs/api/#cryptocurrency-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const cryptoSymbols = ({
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/crypto/symbols`,
  token,
  version,
  filter,
  format
});

Client.prototype.cryptoSymbols = function ({
  filter,
  format
} = {}) {
  return cryptoSymbols({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

const cryptoSymbolsList = ({
  token,
  version
} = {}) => convertToList(cryptoSymbols({
  token,
  version,
  filter: "symbol"
}));

Client.prototype.cryptoSymbolsList = function () {
  return convertToList(cryptoSymbols({
    token: this._token,
    version: this._version,
    filter: "symbol"
  }));
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This call returns an array of symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const symbols = ({
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/symbols`,
  token,
  version,
  filter,
  format
});

Client.prototype.symbols = function ({
  filter,
  format
} = {}) {
  return symbols({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This call returns an array of OTC symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#otc-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const otcSymbols = ({
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/otc/symbols`,
  token,
  version,
  filter,
  format
});

Client.prototype.otcSymbols = function ({
  filter,
  format
} = {}) {
  return otcSymbols({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This call returns an array of international symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#international-symbols
 *
 * @param {object} options
 * @param {string} options.region 2 letter case insensitive string of country codes using ISO 3166-1 alpha-2
 * @param {string} options.exchange Case insensitive string of Exchange using IEX Supported Exchanges list
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const internationalSymbols = ({
  region,
  exchange
} = {}, {
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => {
  if (region) {
    return _get({
      url: `ref-data/region/${region}/symbols`,
      token,
      version,
      filter,
      format
    });
  }

  if (exchange) {
    return _get({
      url: `ref-data/exchange/${exchange}/symbols`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `ref-data/region/us/symbols`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.internationalSymbols = function ({
  region,
  exchange
} = {}, {
  filter,
  format
} = {}) {
  return internationalSymbols({
    region,
    exchange
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

const symbolsList = ({
  token,
  version
} = {}) => convertToList(symbols({
  token,
  version,
  filter: "symbol"
}));

Client.prototype.symbolsList = function () {
  return convertToList(symbols({
    token: this._token,
    version: this._version,
    filter: "symbol"
  }));
};

const otcSymbolsList = ({
  token,
  version
} = {}) => convertToList(otcSymbols({
  token,
  version,
  filter: "symbol"
}));

Client.prototype.otcSymbolsList = function () {
  return convertToList(otcSymbols({
    token: this._token,
    version: this._version,
    filter: "symbol"
  }));
};

const internationalSymbolsList = ({
  region,
  exchange
} = {}, {
  token,
  version
} = {}) => convertToList(internationalSymbols({
  region,
  exchange
}, {
  token,
  version,
  filter: "symbol"
}));

Client.prototype.internationalSymbolsList = function ({
  region,
  exchange
} = {}) {
  return convertToList(internationalSymbols({
    region,
    exchange
  }, {
    token: this._token,
    version: this._version,
    filter: "symbol"
  }));
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This call returns an array of mutual fund symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#mutual-fund-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const mutualFundSymbols = ({
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/mutual-funds/symbols`,
  token,
  version,
  filter,
  format
});

Client.prototype.mutualFundSymbols = function ({
  filter,
  format
} = {}) {
  return mutualFundSymbols({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

const mutualFundSymbolsList = ({
  token,
  version
} = {}) => convertToList(mutualFundSymbols({
  token,
  version,
  filter: "symbol"
}));

Client.prototype.mutualFundSymbolsList = function () {
  return convertToList(mutualFundSymbols({
    token: this._token,
    version: this._version,
    filter: "symbol"
  }));
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This call returns an array of futures symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#futures-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const futuresSymbols = ({
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/futures/symbols`,
  token,
  version,
  filter,
  format
});

Client.prototype.futuresSymbols = function ({
  filter,
  format
} = {}) {
  return futuresSymbols({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

const futuresSymbolsList = ({
  token,
  version
} = {}) => convertToList(futuresSymbols({
  token,
  version,
  filter: "symbol"
}));

Client.prototype.futuresSymbolsList = function () {
  return convertToList(futuresSymbols({
    token: this._token,
    version: this._version,
    filter: "symbol"
  }));
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This call returns a list of supported currencies and currency pairs.
 *
 * https://iexcloud.io/docs/api/#fx-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const fxSymbols = ({
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/fx/symbols`,
  token,
  version,
  filter,
  format
});

Client.prototype.fxSymbols = function ({
  filter,
  format
} = {}) {
  return fxSymbols({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

const fxSymbolsList = async ({
  token,
  version
} = {}) => {
  const fx = await fxSymbols({
    token,
    version
  });
  const ret = [[], []];
  fx.currencies.forEach(record => {
    ret[0].push(record.code);
  });
  fx.pairs.forEach(record => {
    ret[1].push(record.fromCurrency + record.toCurrency);
  });
  return ret;
};

Client.prototype.fxSymbolsList = function () {
  return fxSymbolsList({
    token: this._token,
    version: this._version
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This call returns an array of symbols the Investors Exchange supports for trading.
 *
 * https://iexcloud.io/docs/api/#iex-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const iexSymbols = ({
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/iex/symbols`,
  token,
  version,
  filter,
  format
});

Client.prototype.iexSymbols = function ({
  filter,
  format
} = {}) {
  return iexSymbols({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

const iexSymbolsList = ({
  token,
  version
} = {}) => convertToList(iexSymbols({
  token,
  version,
  filter: "symbol"
}));

Client.prototype.iexSymbolsList = function () {
  return convertToList(iexSymbols({
    token: this._token,
    version: this._version,
    filter: "symbol"
  }));
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * This call returns an object keyed by symbol with the value of each symbol being an array of available contract dates.
 *
 * https://iexcloud.io/docs/api/#options-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const optionsSymbols = ({
  token = "",
  version = "",
  filter = "",
  format = "json"
} = {}) => _get({
  url: `ref-data/options/symbols`,
  token,
  version,
  filter,
  format
});

Client.prototype.optionsSymbols = function ({
  filter,
  format
} = {}) {
  return optionsSymbols({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

const convertOptionsSymbolsToList = data => {
  const ret = [];
  Object.keys(data).forEach(symbol => {
    data[symbol].forEach(date => {
      ret.push(`${symbol}-${date}`);
    });
  });
  return ret;
};

const optionsSymbolsList = async ({
  token,
  version
} = {}) => convertOptionsSymbolsToList(await optionsSymbols({
  token,
  version,
  filter: "symbol"
}));

Client.prototype.optionsSymbolsList = async function () {
  return convertOptionsSymbolsToList(await optionsSymbols({
    token: this._token,
    version: this._version,
    filter: "symbol"
  }));
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Pull the latest schema for data points, notification types, and operators used to construct rules.
 * https://iexcloud.io/docs/api/#rules-schema
 * @param {string} lookup_ If a schema object has “isLookup”: true, pass the value key to /stable/rules/lookup/{value}. This returns all valid values for the rightValue of a condition.
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */

const lookup = (lookup_, {
  token,
  version,
  format = "json"
} = {}) => {
  _raiseIfNotStr(lookup_);

  if (lookup_) {
    return _get({
      url: `rules/lookup/${lookup_}`,
      token,
      version,
      format
    });
  }

  return _get({
    url: "rules/schema",
    token,
    version,
    format
  });
};

Client.prototype.lookup = function (lookup_, {
  format
}) {
  return lookup(lookup_, {
    token: this._token,
    version: this._version,
    format
  });
};
/**
 * Pull the latest schema for data points, notification types, and operators used to construct rules.
 * https://iexcloud.io/docs/api/#rules-schema
 * @param {string} lookup If a schema object has “isLookup”: true, pass the value key to /stable/rules/lookup/{value}. This returns all valid values for the rightValue of a condition.
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */


const schema = ({
  token,
  version,
  format = "json"
} = {}) => _get({
  url: "rules/schema",
  token,
  version,
  format
});

Client.prototype.schema = function ({
  format
} = {}) {
  return schema({
    token: this._token,
    version: this._version,
    format
  });
};
/**
 * This endpoint is used to both create and edit rules. Note that rules run be default after being created.
 * https://iexcloud.io/docs/api/#rules-schema
 * @param {object} rule rule object to create
 * @param {string} ruleName name for rule
 * @param {string} ruleSet Valid US symbol or the string ANYEVENT. If the string ANYEVENT is passed, the rule will be triggered for any symbol in the system. The cool down period for alerts (frequency) is applied on a per symbol basis.
 * @param {string} type Specify either any, where if any condition is true you get an alert, or all, where all conditions must be true to trigger an alert. any is the default value
 * @param {string} existingId The id of an existing rule only if you are editing the existing rule
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */


const create = (rule, ruleName, ruleSet, type, existingId, {
  token,
  version,
  format = "json"
} = {}) => {
  type = type || "any";

  if (type !== "any" && type !== "all") {
    throw new IEXJSException("Type must be in (any, all)");
  }

  rule.token = token;
  rule.ruleSet = ruleSet;
  rule.type = type;
  rule.ruleName = ruleName; // Conditions, outputs, and additionalKeys handled by rule object

  if (rule.conditions === undefined) {
    throw new IEXJSException("rule is missing `conditions` key!");
  }

  if (rule.outputs === undefined) {
    throw new IEXJSException("rule is missing `outputs` key!");
  }

  if (existingId) {
    rule.id = existingId;
  }

  return _post({
    url: "rules/create",
    json: rule,
    token,
    version,
    token_in_params: false,
    format
  });
};

Client.prototype.create = function (rule, ruleName, ruleSet, type, existingId, {
  format
}) {
  return create(rule, ruleName, ruleSet, type, existingId, {
    token: this._token,
    version: this._version,
    format
  });
};
/**
 * You can control the output of rules by pausing and resume per rule id.
 * @param {string} ruleId The id of an existing rule to puase
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */


const pause = (ruleId, {
  token,
  version,
  format = "json"
} = {}) => _post({
  url: "rules/pause",
  json: {
    ruleId,
    token
  },
  token,
  version,
  token_in_params: false,
  format
});

Client.prototype.pause = function (ruleId, {
  format
} = {}) {
  return pause(ruleId, {
    token: this._token,
    version: this._version,
    format
  });
};
/**
 * You can control the output of rules by pausing and resume per rule id.
 * @param {string} ruleId The id of an existing rule to puase
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */


const resume = (ruleId, {
  token,
  version,
  format = "json"
} = {}) => _post({
  url: "rules/resume",
  json: {
    ruleId,
    token
  },
  token,
  version,
  token_in_params: false,
  format
});

Client.prototype.resume = function (ruleId, {
  format
} = {}) {
  return resume(ruleId, {
    token: this._token,
    version: this._version,
    format
  });
};
/**
 * You can delete a rule by using an __HTTP DELETE__ request. This will stop rule executions and delete the rule from your dashboard. If you only want to temporarily stop a rule, use the pause/resume functionality instead.
 * @param {string} ruleId The id of an existing rule to puase
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */


const delete_ = (ruleId, {
  token,
  version,
  format = "json"
} = {}) => _delete({
  url: `rules/${ruleId}`,
  token,
  version,
  format
});

Client.prototype.delete = function (ruleId, {
  format
} = {}) {
  return delete_(ruleId, {
    token: this._token,
    version: this._version,
    format
  });
};
/**
 * Rule information such as the current rule status and execution statistics.
 * @param {string} ruleId The id of an existing rule to puase
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */


const rule = (ruleId, {
  token,
  version,
  format = "json"
} = {}) => _get({
  url: `rules/info/${ruleId}`,
  token,
  version,
  format
});

Client.prototype.rule = function (ruleId, {
  format
} = {}) {
  return rule(ruleId, {
    token: this._token,
    version: this._version,
    format
  });
};
/**
 * List all rules that are currently on your account. Each rule object returned will include the current rule status and execution statistics."""
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */


const rules = ({
  token,
  version,
  format = "json"
} = {}) => _get({
  url: "rules",
  token,
  version,
  format
});

Client.prototype.rules = function ({
  format
} = {}) {
  return rules({
    token: this._token,
    version: this._version,
    format
  });
};
/**
 * If you choose `logs` as your rule output method, IEX Cloud will save the output objects on our server. You can use this method to retrieve those data objects.
 * @param {string} ruleId The id of an existing rule to puase
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */


const output = (ruleId, {
  token,
  version,
  format = "json"
} = {}) => _get({
  url: `rules/output/${ruleId}`,
  token,
  version,
  format
});

Client.prototype.output = function (ruleId, {
  format
} = {}) {
  return output(ruleId, {
    token: this._token,
    version: this._version,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * https://iexcloud.io/docs/api/#stats-intraday
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const systemStats = ({
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `stats/intraday`,
  token,
  version,
  filter,
  format
});

Client.prototype.systemStats = function ({
  filter,
  format
} = {}) {
  return systemStats({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * https://iexcloud.io/docs/api/#stats-recent
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const recent = ({
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `stats/recent`,
  token,
  version,
  filter,
  format
});

Client.prototype.recent = function ({
  filter,
  format
} = {}) {
  return recent({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * https://iexcloud.io/docs/api/#stats-records
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const records = ({
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `stats/records`,
  token,
  version,
  filter,
  format
});

Client.prototype.records = function ({
  filter,
  format
} = {}) {
  return records({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * https://iexcloud.io/docs/api/#stats-historical-summary
 *
 * @param {string} date Format YYYYMMDD date to fetch sentiment data. Default is today.
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const summary = (date, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (date) {
    return _get({
      url: `stats/historical?date=${date}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stats/historical`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.summary = function (date, {
  filter,
  format
} = {}) {
  return summary(date, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * https://iexcloud.io/docs/api/#stats-historical-daily
 *
 * @param {string} date Format YYYYMMDD date to fetch sentiment data. Default is today.
 * @param {number} last Optional last number to include
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const daily = (date, last, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (date) {
    return _get({
      url: `stats/historical/daily?date=${date}`,
      token,
      version,
      filter,
      format
    });
  }

  if (last) {
    return _get({
      url: `stats/historical/daily?last=${last}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stats/historical/daily`,
    token,
    version,
    filter
  });
};

Client.prototype.daily = function (date, last, {
  filter,
  format
} = {}) {
  return daily(date, last, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Batch several data requests into one invocation. If no `fields` passed in, will default to `quote`
 *
 * https://iexcloud.io/docs/api/#batch-requests
 *
 * @param {string} symbols List of tickers to request
 * @param {object} options
 * @param {string} options.fields List of fields to request
 * @param {string} options.range Date range for chart
 * @param {number} options.last last number of records
 * @param {string} options.language filter news by language
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const batch = (symbols, {
  fields,
  range,
  last,
  language
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  fields = fields || "quote";
  range = range || "1m";
  last = last || 10;

  if (typeof fields === "string") {
    fields = fields.split(",");
  }

  fields.forEach(elem => {
    if (_BATCH_TYPES.indexOf(elem) < 0) {
      throw new IEXJSException(`Unrecognized batch request field: ${elem}`);
    }
  });

  if (_TIMEFRAME_CHART.indexOf(range) < 0) {
    throw new IEXJSException(`Unrecognized range argument: ${range}`);
  }

  symbols = _quoteSymbols(symbols);

  if (symbols.split(",").length > 100) {
    throw new IEXJSException("IEX will only handle up to 100 symbols at a time!");
  } // let route;
  // if (symbols.indexOf(",") < 0) {
  //   route = `stock/${symbols}/batch?types=${fields.join(
  //     ",",
  //   )}&range=${range}&last=${last}`;
  // } else {


  const route = `stock/market/batch?symbols=${symbols}&types=${fields.join(",")}&range=${range}&last=${last}${language ? `&language=${language}` : ""}`; // }

  return _get({
    url: route,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.batch = function (symbols, {
  fields,
  range,
  last,
  language
} = {}, {
  filter,
  format
} = {}) {
  return batch(symbols, {
    fields,
    range,
    last,
    language
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Stock split history
 *
 * https://iexcloud.io/docs/api/#splits
 *
 * @param {string} symbol Ticker to request
 * @param {string} timeframe timeframe for data
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const stockSplits = (symbol, timeframe, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (_TIMEFRAME_DIVSPLIT.indexOf(timeframe || "ytd") < 0) {
    throw new IEXJSException("Timeframe not recognized");
  }

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/splits/${timeframe || "ytd"}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.stockSplits = function (symbol, timeframe, {
  filter,
  format
} = {}) {
  return stockSplits(symbol, timeframe, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Bonus Issue Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#bonus-issue
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const bonusIssue = (symbol, refid, timeseries_options, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _timeseriesWrapper(timeseries_options);

  return timeSeries({
    id: "advanced_bonus",
    key: symbol,
    subkey: refid || "",
    ...(timeseries_options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.bonusIssue = function (symbol, refid, timeseries_options, {
  filter,
  format
} = {}) {
  return bonusIssue(symbol, refid, timeseries_options, {
    token: this._token,
    version: this._version,
    format,
    filter
  });
};
/**
 * Distribution Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#distribution
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const distribution = (symbol, refid, timeseries_options, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _timeseriesWrapper(timeseries_options);

  return timeSeries({
    id: "advanced_distribution",
    key: symbol,
    subkey: refid || "",
    ...(timeseries_options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.distribution = function (symbol, refid, timeseries_options, {
  filter,
  format
} = {}) {
  return distribution(symbol, refid, timeseries_options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Obtain up-to-date and detailed information on all new dividend announcements, as well as 12+ years of historical dividend records. This endpoint covers over 39,000 US equities, mutual funds, ADRs, and ETFs.
 *     You’ll be provided with:
 *     Detailed information on both cash and stock dividends including record, payment, ex, and announce dates
 *     Gross and net amounts
 *     Details of all currencies in which a dividend can be paid
 *     Tax information
 *     The ability to keep up with the growing number of complex dividend distributions
 *
 * https://iexcloud.io/docs/api/#dividends
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const dividends = (symbol, refid, timeseries_options, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _timeseriesWrapper(timeseries_options);

  return timeSeries({
    id: "advanced_dividends",
    key: symbol,
    subkey: refid || "",
    ...(timeseries_options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.dividends = function (symbol, refid, timeseries_options, {
  filter,
  format
} = {}) {
  return dividends(symbol, refid, timeseries_options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Return of capital up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#return-of-capital
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const returnOfCapital = (symbol, refid, timeseries_options, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _timeseriesWrapper(timeseries_options);

  return timeSeries({
    id: "advanced_return_of_capital",
    key: symbol,
    subkey: refid || "",
    ...(timeseries_options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.returnOfCapital = function (symbol, refid, timeseries_options, {
  filter,
  format
} = {}) {
  return returnOfCapital(symbol, refid, timeseries_options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Rights issue up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#rights-issue
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const rightsIssue = (symbol, refid, timeseries_options, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _timeseriesWrapper(timeseries_options);

  return timeSeries({
    id: "advanced_rights",
    key: symbol,
    subkey: refid || "",
    ...(timeseries_options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.rightsIssue = function (symbol, refid, timeseries_options, {
  filter,
  format
} = {}) {
  return rightsIssue(symbol, refid, timeseries_options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Right to purchase up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#right-to-purchase
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const rightToPurchase = (symbol, refid, timeseries_options, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _timeseriesWrapper(timeseries_options);

  return timeSeries({
    id: "advanced_right_to_purchase",
    key: symbol,
    subkey: refid || "",
    ...(timeseries_options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.rightToPurchase = function (symbol, refid, timeseries_options, {
  filter,
  format
} = {}) {
  return rightToPurchase(symbol, refid, timeseries_options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Security reclassification up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#security-reclassification
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const securityReclassification = (symbol, refid, timeseries_options, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _timeseriesWrapper(timeseries_options);

  return timeSeries({
    id: "advanced_security_reclassification",
    key: symbol,
    subkey: refid || "",
    ...(timeseries_options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.securityReclassification = function (symbol, refid, timeseries_options, {
  filter,
  format
} = {}) {
  return securityReclassification(symbol, refid, timeseries_options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Security Swap up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#security-swap
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const securitySwap = (symbol, refid, timeseries_options, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _timeseriesWrapper(timeseries_options);

  return timeSeries({
    id: "advanced_security_swap",
    key: symbol,
    subkey: refid || "",
    ...(timeseries_options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.securitySwap = function (symbol, refid, timeseries_options, {
  filter,
  format
} = {}) {
  return securitySwap(symbol, refid, timeseries_options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Security spinoff up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#spinoff
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const spinoff = (symbol, refid, timeseries_options, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _timeseriesWrapper(timeseries_options);

  return timeSeries({
    id: "advanced_spinoff",
    key: symbol,
    subkey: refid || "",
    ...(timeseries_options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.spinoff = function (symbol, refid, timeseries_options, {
  filter,
  format
} = {}) {
  return spinoff(symbol, refid, timeseries_options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Security splits up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#splits
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const splits = (symbol, refid, timeseries_options, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _timeseriesWrapper(timeseries_options);

  return timeSeries({
    id: "advanced_splits",
    key: symbol,
    subkey: refid || "",
    ...(timeseries_options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.splits = function (symbol, refid, timeseries_options, {
  filter,
  format
} = {}) {
  return splits(symbol, refid, timeseries_options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Pulls balance sheet data. Available quarterly (4 quarters) and annually (4 years)
 *
 * https://iexcloud.io/docs/api/#balance-sheet
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {number} options.last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */

const balanceSheet = async ({
  symbol,
  period,
  last
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _checkPeriodLast(period || "quarter", last || 1);

  return (await _get({
    url: `stock/${_quoteSymbols(symbol)}/balance-sheet?period=${period || "quarter"}&last=${last || 1}`,
    token,
    version,
    filter,
    format
  })).balancesheet || [];
};

Client.prototype.balanceSheet = function ({
  symbol,
  period,
  last
} = {}, {
  filter,
  format
} = {}) {
  return balanceSheet({
    symbol,
    period,
    last
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Pulls cash flow data. Available quarterly (4 quarters) or annually (4 years).
 *
 * https://iexcloud.io/docs/api/#cash-flow
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {number} options.last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */


const cashFlow = async ({
  symbol,
  period,
  last
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _checkPeriodLast(period || "quarter", last || 1);

  return (await _get({
    url: `stock/${_quoteSymbols(symbol)}/cash-flow?period=${period || "quarter"}&last=${last || 1}`,
    token,
    version,
    filter,
    format
  })).cashflow || [];
};

Client.prototype.cashFlow = function ({
  symbol,
  period,
  last
} = {}, {
  filter,
  format
} = {}) {
  return cashFlow({
    symbol,
    period,
    last
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Dividend history
 *
 * https://iexcloud.io/docs/api/#dividends
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.timeframe timeframe for data
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */


const dividendsBasic = ({
  symbol,
  timeframe
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (_TIMEFRAME_DIVSPLIT.indexOf(timeframe || "ytd") < 0) {
    throw new IEXJSException("Timeframe not recognized");
  }

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/dividends/${timeframe || "ytd"}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.dividendsBasic = function ({
  symbol,
  timeframe
} = {}, {
  filter,
  format
} = {}) {
  return dividendsBasic({
    symbol,
    timeframe
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters) and annually (last 4 years).
 *
 * https://iexcloud.io/docs/api/#earnings
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {number} options.last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {string} options.field sub field to fetch
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */


const earnings = async ({
  symbol,
  period,
  last,
  field
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _checkPeriodLast(period || "quarter", last || 1);

  if (field === undefined) {
    return (await _get({
      url: `stock/${_quoteSymbols(symbol)}/earnings?period=${period || "quarter"}&last=${last || 1}`,
      token,
      version,
      filter,
      format
    })).earnings || [];
  }

  return (await _get({
    url: `stock/${_quoteSymbols(symbol)}/earnings/${last || 1}/${field}?period=${period || "quarter"}`,
    token,
    version,
    filter,
    format
  }).earnings) || [];
};

Client.prototype.earnings = function ({
  symbol,
  period,
  last,
  field
} = {}, {
  filter,
  format
} = {}) {
  return earnings({
    symbol,
    period,
    last,
    field
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Pulls income statement, balance sheet, and cash flow data from the four most recent reported quarters.
 *
 * https://iexcloud.io/docs/api/#financials
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {number} options.last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */


const financials = async ({
  symbol,
  period,
  last
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _checkPeriodLast(period || "quarter", last || 1);

  return (await _get({
    url: `stock/${_quoteSymbols(symbol)}/financials?period=${period || "quarter"}&last=${last || 1}`,
    token,
    version,
    filter,
    format
  })).financials || [];
};

Client.prototype.financials = function ({
  symbol,
  period,
  last
} = {}, {
  filter,
  format
} = {}) {
  return financials({
    symbol,
    period,
    last
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Pulls fundamentals data.
 *
 * https://iexcloud.io/docs/api/#advanced-fundamentals
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */


const fundamentals = async ({
  symbol,
  period
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _checkPeriodLast(period || "quarter", 1);

  return (await _get({
    url: `stock/${_quoteSymbols(symbol)}/fundamentals?period=${period || "quarter"}`,
    token,
    version,
    filter,
    format
  })).fundamentals || [];
};

Client.prototype.fundamentals = function ({
  symbol,
  period
} = {}, {
  filter,
  format
} = {}) {
  return fundamentals({
    symbol,
    period
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Pulls income statement data. Available quarterly (4 quarters) or annually (4 years).
 *
 * https://iexcloud.io/docs/api/#income-statement
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {number} options.last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */


const incomeStatement = async ({
  symbol,
  period,
  last
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _checkPeriodLast(period || "quarter", last || 1);

  return (await _get({
    url: `stock/${_quoteSymbols(symbol)}/income?period=${period || "quarter"}&last=${last || 1}`,
    token,
    version,
    filter,
    format
  })).income || [];
};

Client.prototype.incomeStatement = function ({
  symbol,
  period,
  last
} = {}, {
  filter,
  format
} = {}) {
  return incomeStatement({
    symbol,
    period,
    last
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Get company's 10-Q statement
 *
 * @param {object} options `timeseries` options
 * @param {string} options.symbol company symbol
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */


const tenQ = (options, {
  token,
  version,
  filter,
  format
} = {}) => {
  const {
    symbol
  } = options;

  _raiseIfNotStr(symbol);

  return timeSeries({
    id: "REPORTED_FINANCIALS",
    key: symbol,
    subkey: "10-Q",
    ...(options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.tenQ = function (options, {
  filter,
  format
} = {}) {
  return tenQ(options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Get company's 10-K statement
 *
 * @param {object} options `timeseries` options
 * @param {string} options.symbol company symbol
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const tenK = (options, {
  token,
  version,
  filter,
  format
} = {}) => {
  const {
    symbol
  } = options;

  _raiseIfNotStr(symbol);

  return timeSeries({
    id: "REPORTED_FINANCIALS",
    key: symbol,
    subkey: "10-K",
    ...(options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.tenK = function (options, {
  filter,
  format
} = {}) {
  return tenK(options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Get company's 20-F statement
 *
 * @param {object} options `timeseries` options
 * @param {string} options.symbol company symbol
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const twentyF = (options, {
  token,
  version,
  filter,
  format
} = {}) => {
  const {
    symbol
  } = options;

  _raiseIfNotStr(symbol);

  return timeSeries({
    id: "REPORTED_FINANCIALS",
    key: symbol,
    subkey: "20-F",
    ...(options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.twentyF = function (options, {
  filter,
  format
} = {}) {
  return twentyF(options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Get company's 40-F statement
 *
 * @param {object} options `timeseries` options
 * @param {string} options.symbol company symbol
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const fortyF = (options, {
  token,
  version,
  filter,
  format
} = {}) => {
  const {
    symbol
  } = options;

  _raiseIfNotStr(symbol);

  return timeSeries({
    id: "REPORTED_FINANCIALS",
    key: symbol,
    subkey: "40-F",
    ...(options || {})
  }, {
    token,
    version,
    filter,
    format
  });
};

Client.prototype.fortyF = function (options, {
  filter,
  format
} = {}) {
  return fortyF(options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * TOPS provides IEX’s aggregated best quoted bid and offer position in near real time for all securities on IEX’s displayed limit order book.
 * TOPS is ideal for developers needing both quote and trade data.
 * https://iexcloud.io/docs/api/#tops
 * @param {string} symbols
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */

const iexTops = (symbols, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (symbols) {
    return _get({
      url: `tops?symbols=${_strToList(symbols).join(",")}%2b`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `tops`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexTops = function (symbols, {
  filter,
  format
} = {}) {
  return iexTops(symbols, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Last provides trade data for executions on IEX. It is a near real time, intraday API that provides IEX last sale price, size and time.
 * Last is ideal for developers that need a lightweight stock quote.
 * https://iexcloud.io/docs/api/#last
 * @param {string} symbols
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexLast = (symbols, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (symbols) {
    return _get({
      url: `last?symbols=${_strToList(symbols).join(",")}%2b`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `last`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexLast = function (symbols, {
  filter,
  format
} = {}) {
  return iexLast(symbols, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * DEEP is used to receive real-time depth of book quotations direct from IEX.
 * The depth of book quotations received via DEEP provide an aggregated size of resting displayed orders at a price and side,
 * and do not indicate the size or number of individual orders at any price level.
 * Non-displayed orders and non-displayed portions of reserve orders are not represented in DEEP.
 *
 * DEEP also provides last trade price and size information. Trades resulting from either displayed or non-displayed orders matching on IEX will be reported. Routed executions will not be reported.
 *
 * https://iexcloud.io/docs/api/#deep
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexDeep = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (symbol) {
    return _get({
      url: `deep?symbols=${symbol}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `deep`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexDeep = function (symbol, {
  filter,
  format
} = {}) {
  return iexDeep(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * DEEP broadcasts an Auction Information Message every one second between the Lock-in Time and the auction match for Opening and Closing Auctions,
 * and during the Display Only Period for IPO, Halt, and Volatility Auctions. Only IEX listed securities are eligible for IEX Auctions.
 * https://iexcloud.io/docs/api/#deep-auction
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexAuction = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (symbol) {
    return _get({
      url: `deep/auction?symbols=${symbol}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `deep/auction`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexAuction = function (symbol, {
  filter,
  format
} = {}) {
  return iexAuction(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Book shows IEX’s bids and asks for given symbols.
 * https://iexcloud.io/docs/api/#deep-book
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexBook = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (symbol) {
    return _get({
      url: `deep/book?symbols=${symbol}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `deep/book`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexBook = function (symbol, {
  filter,
  format
} = {}) {
  return iexBook(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * The Exchange may suspend trading of one or more securities on IEX for operational reasons and indicates such operational halt using the Operational halt status message.
 *
 * IEX disseminates a full pre-market spin of Operational halt status messages indicating the operational halt status of all securities.
 * In the spin, IEX will send out an Operational Halt Message with “N” (Not operationally halted on IEX) for all securities that are eligible for trading at the start of the Pre-Market Session.
 * If a security is absent from the dissemination, firms should assume that the security is being treated as operationally halted in the IEX Trading System at the start of the Pre-Market Session.
 *
 * After the pre-market spin, IEX will use the Operational halt status message to relay changes in operational halt status for an individual security.
 *
 * https://iexcloud.io/docs/api/#deep-operational-halt-status
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexOpHaltStatus = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (symbol) {
    return _get({
      url: `deep/op-halt-status?symbols=${symbol}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `deep/op-halt-status`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexOpHaltStatus = function (symbol, {
  filter,
  format
} = {}) {
  return iexOpHaltStatus(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * The Official Price message is used to disseminate the IEX Official Opening and Closing Prices.
 *
 * These messages will be provided only for IEX Listed Securities.
 *
 * https://iexcloud.io/docs/api/#deep-official-price
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexOfficialPrice = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (symbol) {
    return _get({
      url: `deep/official-price?symbols=${symbol}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `deep/official-price`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexOfficialPrice = function (symbol, {
  filter,
  format
} = {}) {
  return iexOfficialPrice(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * The Security event message is used to indicate events that apply to a security. A Security event message will be sent whenever such event occurs
 * https://iexcloud.io/docs/api/#deep-security-event
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexSecurityEvent = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (symbol) {
    return _get({
      url: `deep/security-event?symbols=${symbol}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `deep/security-event`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexSecurityEvent = function (symbol, {
  filter,
  format
} = {}) {
  return iexSecurityEvent(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * In association with Rule 201 of Regulation SHO, the Short Sale Price Test Message is used to indicate when a short sale price test restriction is in effect for a security.
 *
 * IEX disseminates a full pre-market spin of Short sale price test status messages indicating the Rule 201 status of all securities.
 * After the pre-market spin, IEX will use the Short sale price test status message in the event of an intraday status change.
 *
 * The IEX Trading System will process orders based on the latest short sale price test restriction status.
 *
 * https://iexcloud.io/docs/api/#deep-short-sale-price-test-status
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexSsrStatus = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (symbol) {
    return _get({
      url: `deep/ssr-status?symbols=${symbol}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `deep/ssr-status`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexSsrStatus = function (symbol, {
  filter,
  format
} = {}) {
  return iexSsrStatus(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * The System event message is used to indicate events that apply to the market or the data feed.
 *
 * There will be a single message disseminated per channel for each System Event type within a given trading session.
 *
 * https://iexcloud.io/docs/api/#deep-system-event
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexSystemEvent = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (symbol) {
    return _get({
      url: `deep/system-event?symbols=${symbol}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `deep/system-event`
  });
};

Client.prototype.iexSystemEvent = function (symbol, {
  filter,
  format
} = {}) {
  return iexSystemEvent(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Trade report messages are sent when an order on the IEX Order Book is executed in whole or in part. DEEP sends a Trade report message for every individual fill.
 * https://iexcloud.io/docs/api/#deep-trades
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexTrades = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (symbol) {
    return _get({
      url: `deep/trades?symbols=${symbol}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `deep/trades`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexTrades = function (symbol, {
  filter,
  format
} = {}) {
  return iexTrades(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Trade break messages are sent when an execution on IEX is broken on that same trading day. Trade breaks are rare and only affect applications that rely upon IEX execution based data.
 * https://iexcloud.io/docs/api/#deep-trade-break
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexTradeBreak = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (symbol) {
    return _get({
      url: `deep/trade-breaks?symbols=${symbol}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `deep/trade-breaks`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexTradeBreak = function (symbol, {
  filter,
  format
} = {}) {
  return iexTradeBreak(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * The Trading status message is used to indicate the current trading status of a security.
 * For IEX-listed securities, IEX acts as the primary market and has the authority to institute a trading halt or trading pause in a security due to news dissemination or regulatory reasons.
 * For non-IEX-listed securities, IEX abides by any regulatory trading halts and trading pauses instituted by the primary or listing market, as applicable.
 *
 * IEX disseminates a full pre-market spin of Trading status messages indicating the trading status of all securities.
 * In the spin, IEX will send out a Trading status message with “T” (Trading) for all securities that are eligible for trading at the start of the Pre-Market Session.
 * If a security is absent from the dissemination, firms should assume that the security is being treated as operationally halted in the IEX Trading System.
 *
 *
 * After the pre-market spin, IEX will use the Trading status message to relay changes in trading status for an individual security. Messages will be sent when a security is:
 *
 * Halted
 * Paused*
 * Released into an Order Acceptance Period*
 * Released for trading
 * *The paused and released into an Order Acceptance Period status will be disseminated for IEX-listed securities only. Trading pauses on non-IEX-listed securities will be treated simply as a halt.
 * https://iexcloud.io/docs/api/#deep-trading-status
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexTradingStatus = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (symbol) {
    return _get({
      url: `deep/trading-status?symbols=${symbol}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `deep/trading-status`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexTradingStatus = function (symbol, {
  filter,
  format
} = {}) {
  return iexTradingStatus(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * @param {string} date
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */


const iexHist = (date, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (date) {
    return _get({
      url: `hist?date=${_strOrDate(date)}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `hist`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.iexHist = function (date, {
  filter,
  format
} = {}) {
  return iexHist(date, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Returns an array of quote objects for a given collection type. Currently supported collection types are sector, tag, and list
 *
 * https://iexcloud.io/docs/api/#collections
 *
 * @param {string} tag Sector, Tag, or List
 * @param {string} collectionName Associated name for tag
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const collections = (tag, collectionName, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (_COLLECTION_TAGS.indexOf(tag) < 0) {
    throw new IEXJSException("Uncrecognized tag");
  }

  return _get({
    url: `stock/market/collection/${tag}?collectionName=${collectionName || ""}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.collections = function (tag, collectionName, {
  filter,
  format
} = {}) {
  return collections(tag, collectionName, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Returns earnings that will be reported today as two arrays: before the open bto and after market close amc.
 *   Each array contains an object with all keys from earnings, a quote object, and a headline key.
 *
 * https://iexcloud.io/docs/api/#earnings-today
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const earningsToday = ({
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `stock/market/today-earnings`,
  token,
  version,
  filter,
  format
});

Client.prototype.earningsToday = function ({
  filter,
  format
} = {}) {
  return earningsToday({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This returns a list of upcoming or today IPOs scheduled for the current and next month. The response is split into two structures:
 *  rawData and viewData. rawData represents all available data for an IPO. viewData represents data structured for display to a user.
 *
 * https://iexcloud.io/docs/api/#ipo-calendar
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const ipoToday = ({
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `stock/market/today-ipos`,
  token,
  version,
  filter,
  format
});

Client.prototype.ipoToday = function ({
  filter,
  format
} = {}) {
  return ipoToday({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This returns a list of upcoming or today IPOs scheduled for the current and next month. The response is split into two structures:
 *    rawData and viewData. rawData represents all available data for an IPO. viewData represents data structured for display to a user.
 *
 * https://iexcloud.io/docs/api/#ipo-calendar
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const ipoUpcoming = ({
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `stock/market/upcoming-ipos`,
  token,
  version,
  filter,
  format
});

Client.prototype.ipoUpcoming = function ({
  filter,
  format
} = {}) {
  return ipoUpcoming({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Returns an array of quotes for the top 10 symbols in a specified list.
 *
 * https://iexcloud.io/docs/api/#list
 *
 * @param {string} option Option to query
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const list = (option, {
  token,
  version,
  filter,
  format
} = {}) => {
  // eslint-disable-next-line no-param-reassign
  option = option || "mostactive";

  if (_LIST_OPTIONS.indexOf(option) < 0) {
    throw new IEXJSException("Option not recognized");
  }

  return _get({
    url: `stock/market/list/${option}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.list = function (option, {
  filter,
  format
} = {}) {
  return list(option, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This endpoint returns real time traded volume on U.S. markets.
 *
 * https://iexcloud.io/docs/api/#market-volume-u-s
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const marketVolume = ({
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `market/`,
  token,
  version,
  filter,
  format
});

Client.prototype.marketVolume = function ({
  filter,
  format
} = {}) {
  return marketVolume({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Returns the official open and close for whole market.
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const marketOhlc = ({
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `stock/market/ohlc`,
  token,
  version,
  filter,
  format
});

Client.prototype.marketOhlc = function ({
  filter,
  format
} = {}) {
  return marketOhlc({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This returns previous day adjusted price data for whole market
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const marketYesterday = ({
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `stock/market/previous`,
  token,
  version,
  filter,
  format
});

Client.prototype.marketYesterday = function ({
  filter,
  format
} = {}) {
  return marketYesterday({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

const marketPrevious = marketYesterday;
Client.prototype.marketPrevious = Client.prototype.marketYesterday;
/**
 * This returns an array of each sector and performance for the current trading day. Performance is based on each sector ETF.
 *
 * https://iexcloud.io/docs/api/#sector-performance
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const sectorPerformance = ({
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `stock/market/sector-performance`,
  token,
  version,
  filter,
  format
});

Client.prototype.sectorPerformance = function ({
  filter,
  format
} = {}) {
  return sectorPerformance({
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * The consolidated market short interest positions in all IEX-listed securities are included in the IEX Short Interest Report.
 *
 * https://iexcloud.io/docs/api/#listed-short-interest-list-in-dev
 *
 * @param {string} date effective datetime
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const marketShortInterest = (date, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (date) {
    return _get({
      url: `stock/market/short-interest/${_strOrDate(date)}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stock/market/short-interest`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.marketShortInterest = function (date, {
  filter,
  format
} = {}) {
  return marketShortInterest(date, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} exactDate Optional. Exact date for which to get data
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const upcomingEvents = (symbol, exactDate, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (symbol) {
    _raiseIfNotStr(symbol);

    return _get({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-events${exactDate ? `?exactDate=${exactDate}` : ""}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stock/market/upcoming-events${exactDate ? `?exactDate=${exactDate}` : ""}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.upcomingEvents = function (symbol, exactDate, {
  filter,
  format
} = {}) {
  return upcomingEvents(symbol, exactDate, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} exactDate Optional. Exact date for which to get data
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const upcomingEarnings = (symbol, exactDate, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (symbol) {
    _raiseIfNotStr(symbol);

    return _get({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-earnings${exactDate ? `?exactDate=${exactDate}` : ""}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stock/market/upcoming-earnings${exactDate ? `?exactDate=${exactDate}` : ""}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.upcomingEarnings = function (symbol, exactDate, {
  filter,
  format
} = {}) {
  return upcomingEarnings(symbol, exactDate, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} exactDate Optional. Exact date for which to get data
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const upcomingDividends = (symbol, exactDate, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (symbol) {
    _raiseIfNotStr(symbol);

    return _get({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-dividends${exactDate ? `?exactDate=${exactDate}` : ""}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stock/market/upcoming-dividends${exactDate ? `?exactDate=${exactDate}` : ""}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.upcomingDividends = function (symbol, exactDate, {
  filter,
  format
} = {}) {
  return upcomingDividends(symbol, exactDate, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} exactDate Optional. Exact date for which to get data
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const upcomingSplits = (symbol, exactDate, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (symbol) {
    _raiseIfNotStr(symbol);

    return _get({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-splits${exactDate ? `?exactDate=${exactDate}` : ""}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stock/market/upcoming-splits${exactDate ? `?exactDate=${exactDate}` : ""}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.upcomingSplits = function (symbol, exactDate, {
  filter,
  format
} = {}) {
  return upcomingSplits(symbol, exactDate, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} exactDate Optional. Exact date for which to get data
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const upcomingIPOs = (symbol, exactDate, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (symbol) {
    _raiseIfNotStr(symbol);

    return _get({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-ipos${exactDate ? `?exactDate=${exactDate}` : ""}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stock/market/upcoming-ipos${exactDate ? `?exactDate=${exactDate}` : ""}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.upcomingIPOs = function (symbol, exactDate, {
  filter,
  format
} = {}) {
  return upcomingIPOs(symbol, exactDate, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * News about company
 *
 * https://iexcloud.io/docs/api/#news
 *
 * @param {object} options
 * @param {string} options.symbol ticker to request
 * @param {number} options.last number to get
 * @param {string} options.language filter news by language
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */

const news = ({
  symbol,
  last,
  language
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => {
  symbol = symbol || "market";

  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/news/last/${last || 10}${language ? `?language=${language}` : ""}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.news = function ({
  symbol,
  last,
  language
} = {}, {
  filter,
  format
} = {}) {
  return news({
    symbol,
    last,
    language
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * News about market
 *
 * https://iexcloud.io/docs/api/#news
 *
 * @param {object} options
 * @param {number} options.last number to get
 * @param {string} options.language filter news by language
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */


const marketNews = ({
  last,
  language
} = {}, {
  token,
  version,
  filter,
  format
} = {}) => _get({
  url: `stock/market/news/last/${last || 10}${language ? `?language=${language}` : ""}`,
  token,
  version,
  filter,
  format
});

Client.prototype.marketNews = function ({
  last,
  language
} = {}, {
  filter,
  format
} = {}) {
  return marketNews({
    last,
    language
  }, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/**
 * Book data
 *
 * https://iextrading.com/developer/docs/#book
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const book = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/book`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.book = function (symbol, {
  filter,
  format
} = {}) {
  return book(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This returns the 15 minute delayed market quote.
 *
 * https://iexcloud.io/docs/api/#delayed-quote
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const delayedQuote = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/delayed-quote`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.delayedQuote = function (symbol, {
  filter,
  format
} = {}) {
  return delayedQuote(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This returns 15 minute delayed, last sale eligible trades.
 *
 * https://iexcloud.io/docs/api/#largest-trades
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const largestTrades = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/largest-trades`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.largestTrades = function (symbol, {
  filter,
  format
} = {}) {
  return largestTrades(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Returns the official open and close for a give symbol.
 *
 * https://iexcloud.io/docs/api/#ohlc
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const ohlc = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/ohlc`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.ohlc = function (symbol, {
  filter,
  format
} = {}) {
  return ohlc(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This returns previous day adjusted price data for one or more stocks
 *
 * https://iexcloud.io/docs/api/#previous-day-prices
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const yesterday = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/previous`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.yesterday = function (symbol, {
  filter,
  format
} = {}) {
  return yesterday(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

const previous = yesterday;
Client.prototype.previous = Client.prototype.yesterday;
/**
 * Price of ticker
 *
 * https://iexcloud.io/docs/api/#price
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const price = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/price`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.price = function (symbol, {
  filter,
  format
} = {}) {
  return price(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Get quote for ticker
 *
 * https://iexcloud.io/docs/api/#quote
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const quote = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/quote`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.quote = function (symbol, {
  filter,
  format
} = {}) {
  return quote(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This returns an array of effective spread, eligible volume, and price improvement of a stock, by market.
 *
 * https://iexcloud.io/docs/api/#price-only
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const spread = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/effective-spread`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.spread = function (symbol, {
  filter,
  format
} = {}) {
  return spread(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market.
 * This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage.
 *
 * https://iexcloud.io/docs/api/#volume-by-venue
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const volumeByVenue = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/volume-by-venue`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.volumeByVenue = function (symbol, {
  filter,
  format
} = {}) {
  return volumeByVenue(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Historical price/volume data, daily and intraday
 *
 * https://iexcloud.io/docs/api/#historical-prices
 *
 * @param {string} symbol ticker to request
 * @param {string} timeframe Timeframe to request e.g. 1m
 * @param {string} date date, if requesting intraday
 * @param {string} exactDate Same as `date`, takes precedence
 * @param {number} last If passed, chart data will return the last N elements from the time period defined by the range parameter
 * @param {boolean} closeOnly Will return adjusted data only with keys date, close, and volume.
 * @param {boolean} byDay Used only when range is date to return OHLCV data instead of minute bar data.
 * @param {boolean} simplifyIf true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts.
 * @param {number} intervalIf passed, chart data will return every Nth element as defined by chartInterval
 * @param {boolean} changeFromClose If true, changeOverTime and marketChangeOverTime will be relative to previous day close instead of the first value.
 * @param {boolean} displayPercent If set to true, all percentage values will be multiplied by a factor of 100 (Ex: /stock/twtr/chart?displayPercent=true)
 * @param {string} range Same format as the path parameter. This can be used for batch calls.
 * @param {string} sort Can be "asc" or "desc" to sort results by date. Defaults to "desc"
 * @param {boolean} includeToday If true, current trading day data is appended
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const chart = (symbol, options, {
  token,
  version,
  filter,
  format
} = {}) => {
  const {
    timeframe = "1m",
    date = "",
    exactDate = "",
    last = -1,
    closeOnly = false,
    byDay = false,
    simplify = false,
    interval = -1,
    changeFromClose = false,
    displayPercent = false,
    sort = "",
    includeToday = false
  } = options || {};

  _raiseIfNotStr(symbol);

  let base_url = `stock/${_quoteSymbols(symbol)}/chart/${timeframe}?`; // exactDate takes precedence

  let thedate = exactDate || date;

  if (thedate) {
    thedate = _strOrDate(thedate);
  }

  if (timeframe && timeframe !== "1d") {
    if (_TIMEFRAME_CHART.indexOf(timeframe) < 0) {
      throw new IEXJSException(`Timeframe not recognized ${timeframe}`);
    }
  } // Assemble params


  const params = {};
  if (last > 0) params.chartLast = last;
  if (closeOnly) params.chartCloseOnly = closeOnly;
  if (byDay) params.chartByDay = byDay;
  if (simplify) params.chartSimplify = simplify;
  if (interval > 0) params.chartInterval = interval;
  if (changeFromClose) params.changeFromClose = changeFromClose;
  if (displayPercent) params.displayPercent = displayPercent;
  if (exactDate) params.exactDate = exactDate;

  if (sort) {
    if (sort.toLowerCase() !== "asc" && sort.toLowerCase() !== "desc") {
      throw new IEXJSException(`Sort not recognized: ${sort}`);
    }

    params.sort = sort.toLowerCase();
  }

  if (includeToday) params.includeToday = includeToday;

  if (thedate) {
    base_url = `stock/${_quoteSymbols(symbol)}/chart/date/${thedate}?`;

    if (Object.keys(params).length > 0) {
      base_url += Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&");
    }

    return _get({
      url: base_url,
      token,
      version,
      filter,
      format
    });
  }

  if (Object.keys(params).length > 0) {
    base_url += Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&");
  }

  return _get({
    url: base_url,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.chart = function (symbol, options, {
  filter,
  format
} = {}) {
  return chart(symbol, options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This endpoint will return aggregated intraday prices in one minute buckets
 *
 * https://iexcloud.io/docs/api/#intraday-prices
 *
 * @param {string} symbol ticker to request
 * @param {string} date (str): Formatted as YYYYMMDD. This can be used for batch calls when range is 1d or date. Currently supporting trailing 30 calendar days of minute bar data.
 * @param {string} exactDate (str): Same as `date`, takes precedence
 * @param {number} last (number): If passed, chart data will return the last N elements
 * @param {boolean} IEXOnly (bool): Limits the return of intraday prices to IEX only data.
 * @param {boolean} reset (bool): If true, chart will reset at midnight instead of the default behavior of 9:30am ET.
 * @param {boolean} simplify (bool): If true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts.
 * @param {number} interval (number): If passed, chart data will return every Nth element as defined by chartInterval
 * @param {boolean} changeFromClose (bool): If true, changeOverTime and marketChangeOverTime will be relative to previous day close instead of the first value.
 * @param {boolean} IEXWhenNull (bool): By default, all market prefixed fields are 15 minute delayed, meaning the most recent 15 objects will be null. If this parameter is passed as true, all market prefixed fields that are null will be populated with IEX data if available.
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const intraday = (symbol, options, {
  token,
  version,
  filter,
  format
} = {}) => {
  const {
    date = "",
    exactDate = "",
    last = -1,
    IEXOnly = false,
    reset = false,
    simplify = false,
    interval = -1,
    changeFromClose = false,
    IEXWhenNull = false
  } = options || {};

  _raiseIfNotStr(symbol); // exactDate takes precedence


  let thedate = exactDate || date;

  if (thedate) {
    thedate = _strOrDate(thedate);
  } // Assemble params


  const params = {};
  if (thedate) params.exactDate = thedate;
  if (last > 0) params.chartLast = last;
  if (last > 0) params.chartLast = last;
  if (IEXOnly) params.chartIEXOnly = IEXOnly;
  if (reset) params.chartReset = reset;
  if (simplify) params.chartSimplify = simplify;
  if (interval > 0) params.chartInterval = interval;
  if (changeFromClose) params.changeFromClose = changeFromClose;
  if (IEXWhenNull) params.chartIEXWhenNull = IEXWhenNull;
  let base_url = `stock/${_quoteSymbols(symbol)}/intraday-prices?`;

  if (Object.keys(params).length > 0) {
    base_url += Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&");
  }

  return _get({
    url: base_url,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.intraday = function (symbol, options, {
  filter,
  format
} = {}) {
  return intraday(symbol, options, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Company reference data
 *
 * https://iexcloud.io/docs/api/#company
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const company = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/company`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.company = function (symbol, {
  filter,
  format
} = {}) {
  return company(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Returns the top 10 insiders, with the most recent information.
 *
 * https://iexcloud.io/docs/api/#insider-roster
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const insiderRoster = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/insider-roster`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.insiderRoster = function (symbol, {
  filter,
  format
} = {}) {
  return insiderRoster(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Returns aggregated insiders summary data for the last 6 months.
 *
 * https://iexcloud.io/docs/api/#insider-summary
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const insiderSummary = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/insider-summary`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.insiderSummary = function (symbol, {
  filter,
  format
} = {}) {
  return insiderSummary(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Returns insider transactions.
 *
 * https://iexcloud.io/docs/api/#insider-transactions
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const insiderTransactions = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/insider-transactions`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.insiderTransactions = function (symbol, {
  filter,
  format
} = {}) {
  return insiderTransactions(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * This is a helper function, but the google APIs url is standardized.
 *
 * https://iexcloud.io/docs/api/#logo
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const logo = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/logo`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.logo = function (symbol, {
  filter,
  format
} = {}) {
  return logo(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Peers of ticker
 *
 * https://iexcloud.io/docs/api/#peers
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const peers = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/peers`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.peers = function (symbol, {
  filter,
  format
} = {}) {
  return peers(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/**
 * Returns everything in key stats plus additional advanced stats such as EBITDA, ratios, key financial data, and more.
 *
 * https://iexcloud.io/docs/api/#advanced-stats
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const advancedStats = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/advanced-stats`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.advancedStats = function (symbol, {
  filter,
  format
} = {}) {
  return advancedStats(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Pulls data from the last four months.
 *
 * https://iexcloud.io/docs/api/#analyst-recommendations
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const analystRecommendations = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/recommendation-trends`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.analystRecommendations = function (symbol, {
  filter,
  format
} = {}) {
  return analystRecommendations(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Provides the latest consensus estimate for the next fiscal period
 *
 * https://iexcloud.io/docs/api/#estimates
 *
 * @param {string} symbol ticker to request
 * @param {string} period Period, either 'annual' or 'quarter'
 * @param {number} last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const estimates = (symbol, period, last, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  _checkPeriodLast(period || "quarter", last || 1);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/estimates?period=${period || "quarter"}&last=${last || 1}`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.estimates = function (symbol, period, last, {
  filter,
  format
} = {}) {
  return estimates(symbol, period, last, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds,
 *    pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
 *
 * https://iexcloud.io/docs/api/#fund-ownership
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const fundOwnership = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/fund-ownership`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.fundOwnership = function (symbol, {
  filter,
  format
} = {}) {
  return fundOwnership(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Returns the top 10 institutional holders, defined as buy-side or sell-side firms.
 *
 * https://iexcloud.io/docs/api/#institutional-ownership
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const institutionalOwnership = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/institutional-ownership`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.institutionalOwnership = function (symbol, {
  filter,
  format
} = {}) {
  return institutionalOwnership(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Key Stats about company
 *
 * https://iexcloud.io/docs/api/#key-stats
 *
 * @param {string} symbol ticker to request
 * @param {string} stat specific stat to request, in: {companyName, marketcap, week52high, week52low, week52change, sharesOutstanding, float, avg10Volume, avg30Volume, day200MovingAvg, day50MovingAvg, employees, ttmEPS, ttmDividendRate, dividendYield, nextDividendDate, exDividendDate, nextEarningsDate, peRatio, beta, maxChangePercent, year5ChangePercent, year2ChangePercent, year1ChangePercent, ytdChangePercent, month6ChangePercent, month3ChangePercent, month1ChangePercent, day30ChangePercent, day5ChangePercent}
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const keyStats = (symbol, stat, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (stat) {
    if (_KEY_STATS.indexOf(stat) < 0) {
      throw new IEXJSException(`Stat must be in ${_KEY_STATS}`);
    }

    return _get({
      url: `stock/${_quoteSymbols(symbol)}/stats/${stat}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/stats`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.keyStats = function (symbol, stat, {
  filter,
  format
} = {}) {
  return keyStats(symbol, stat, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Provides the latest avg, high, and low analyst price target for a symbol.
 *
 * https://iexcloud.io/docs/api/#price-target
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const priceTarget = (symbol, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/price-target`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.priceTarget = function (symbol, {
  filter,
  format
} = {}) {
  return priceTarget(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * Technical indicators are available for any historical or intraday range.
 * This endpoint calls the historical or intraday price endpoints for the given range, and the associated indicator for the price range.
 *
 * https://iexcloud.io/docs/api/#technical-indicators
 *
 * @param {string} symbol ticker to request
 * @param {string} indicator Technical indicator to request, in:
            Indicator   Description                              Inputs                       Defaults         Outputs
            -------------------------------------------------------------------------------------------------------------
            abs         Vector Absolute Value                                                                   abs
            acos        Vector Arccosine                                                                        acos
            ad          Accumulation/Distribution Line                                                          ad
            add         Vector Addition                                                                          add
            adosc       Accumulation/Distribution Oscillator    short period,long period        2,5             adosc
            adx         Average Directional Movement Index      period                          5               dx
            adxr        Average Directional Movement Rating     period                          5               dx
            ao          Awesome Oscillator                                                                      ao
            apo         Absolute Price Oscillator               short period,long period        2,5             apo
            aroon       Aroon                                   period                          5               aroon_down,aroon_up
            aroonosc    Aroon Oscillator                        period                          5               aroonosc
            asin        Vector Arcsine                                                                          asin
            atan        Vector Arctangent                                                                       atan
            atr         Average True Range                      period                          5               atr
            avgprice    Average Price                                                                           avgprice
            bbands      Bollinger Bands                         period,stddev                   20,2            bbands_lower,bbands_middle,bbands_upper
            bop         Balance of Power
            cci         Commodity Channel Index                 period                          5               cci
            ceil        Vector Ceiling                                                                          ceil
            cmo         Chande Momentum Oscillator              period                          5               cmo
            cos         Vector Cosine                                                                           cos
            cosh        Vector Hyperbolic Cosine                                                                cosh
            crossany    Crossany                                                                                crossany
            crossover   Crossover                                                                               crossover
            cvi         Chaikins Volatility                     period                          5               cvi
            decay       Linear Decay                            period                          5               decay
            dema        Double Exponential Moving Average       period                          5               dema
            di          Directional Indicator                   period                          5               plus_di,minus_di
            div         Vector Division                                                                         div
            dm          Directional Movement                    period                          5               plus_dm,minus_dm
            dpo         Detrended Price Oscillator              period                          5               dpo
            dx          Directional Movement Index              period                          5               dx
            edecay      Exponential Decay                       period                          5               edecay
            ema         Exponential Moving Average              period                          5               ema
            emv         Ease of Movement                                                                        emv
            exp         Vector Exponential                                                                      exp
            fisher      Fisher Transform                        period                          5               fisher,fisher_signal
            floor       Vector Floor                                                                            floor
            fosc        Forecast Oscillator                     period                          5               fosc
            hma         Hull Moving Average                     period                          5               hma
            kama        Kaufman Adaptive Moving Average         period                          5               kama
            kvo         Klinger Volume Oscillator               short period,long period        2,5             kvo
            lag         Lag                                     period                          5               lag
            linreg      Linear Regression                       period                          5               linreg
            linregintercept     Linear Regression Intercept     period                          5               linregintercept
            linregslope         Linear Regression Slope         period                          5               linregslope
            ln          Vector Natural  Log                                                                     ln
            log10       Vector Base-10 Log                                                                      log10
            macd        Moving Average Conv/Div                 short per,long per,signal per   12,26,9         macd,macd_signal,macd_histogram
            marketfi    Market Facilitation Index                                                               marketfi
            mass        Mass Index                              period                          5               mass
            max         Maximum In Period                       period                          5               max
            md          Mean Deviation Over Period              period                          5               md
            medprice    Median Price                                                                            medprice
            mfi         Money Flow Index                        period                          5               mfi
            min         Minimum In Period                       period                          5               min
            mom         Momentum                                period                          5               mom
            msw         Mesa Sine Wave                          period                          5               msw_sine,msw_lead
            mul         Vector Multiplication                                                                   mul
            natr        Normalized Average True Range           period                          5               natr
            nvi         Negative Volume Index                                                                   nvi
            obv         On Balance Volume                                                                       obv
            ppo         Percentage Price Oscillator             short period,long period        2,5             ppo
            psar        Parabolic SAR                           accelfactor step,accel factor max    .2,2       psar
            pvi         Positive Volume Index                                                                   pvi
            qstick      Qstick                                  period                          5               qstick
            roc         Rate of Change                          period                          5               roc
            rocr        Rate of Change Ratio                    period                          5               rocr
            round       Vector Round                                                                            round
            rsi         Relative Strength Index                 period                          5               rsi
            sin         Vector Sine                                                                             sin
            sinh        Vector Hyperbolic Sine                                                                  sinh
            sma         Simple Moving Average                   period                          5               sma
            sqrt        Vector Square Root                                                                      sqrt
            stddev      Standard Deviation Over Period          period                          5               stddev
            stderr      Standard Error Over Period              period                          5               stderr
            stoch       Stochastic Oscillator                   k per,k slowing per,d per       5,3,3           stoch_k,stoch_d
            stochrsi    Stochastic RSI                          period                          5               stochrsi
            sub         Vector Subtraction                                                                      sub
            sum         Sum Over Period                         period                          5               sum
            tan         Vector Tangent                                                                          tan
            tanh        Vector Hyperbolic Tangent                                                               tanh
            tema        Triple Exponential Moving Average       period                          5               tema
            todeg       Vector Degree Conversion                                                                degrees
            torad       Vector Radian Conversion                                                                radians
            tr          True Range                                                                              tr
            trima       Triangular Moving Average               period                          5               trima
            trix        Trix                                    period                          5               trix
            trunc       Vector Truncate                                                                         trunc
            tsf         Time Series Forecast                    period                          5               tsf
            typprice    Typical Price                                                                           typprice
            ultosc      Ultimate Oscillator                     short per,med per,long per      2,3,5           ultosc
            var         Variance Over Period                    period                          5               var
            vhf         Vertical Horizontal Filter              period                          5               vhf
            vidya       Variable Index Dynamic Average          short period,long period,alpha  2,5,.2          vidya
            volatility  Annualized Historical Volatility        period                          5               volatility
            vosc        Volume Oscillator                       short period,long period        2,5             vosc
            vwma        Volume Weighted Moving Average          period                          5               vwma
            wad         Williams Accumulation/Distribution                                                      wad
            wcprice     Weighted Close Price                                                                    wcprice
            wilders     Wilders Smoothing                       period                          5               wilders
            willr       Williams %R    period
            wma         Weighted Moving Average                 period                          5               wma
            zlema       Zero-Lag Exponential Moving Average     period                          5               zlema

 * @param {string} range Timeframe to request e.g. 1m
 * @param {string} inputs array of inputs to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
*/


const technicals = (symbol, indicator, range, inputs, {
  token,
  version,
  filter,
  format
} = {}) => {
  // eslint-disable-next-line no-param-reassign
  inputs = inputs || [];

  _raiseIfNotStr(symbol);

  if (_INDICATORS.indexOf(indicator) < 0) {
    throw new IEXJSException("Indicator not recognized");
  }

  if ((range || "1m") !== "1d") {
    if (_TIMEFRAME_CHART.indexOf(range || "1m") < 0) {
      throw new IEXJSException("Range not recognized");
    }
  }

  let base_url = `stock/${symbol}/indicator/${indicator}?range=${range || "1m"}`;

  if (["abs", "acos", "ad", "add", "ao", "asin", "atan", "avgprice", "bop", "ceil", "cos", "cosh", "crossany", "crossover", "div", "emv", "exp", "floor", "ln", "log10", "marketfi", "medprice", "mul", "nvi", "obv", "pvi", "round", "sin", "sinh", "sqrt", "sub", "tan", "tanh", "todeg", "torad", "tr", "trunc", "typprice", "wad", "wcprice", "willr"].indexOf(indicator) >= 0) {
    if (inputs) {
      throw IEXJSException("Indicator takes no arguments");
    }
  }

  if (["aroon", "aroonosc", "atr", "adx", "adxr", "cci", "cmo", "cvi", "decay", "dema", "di", "dm", "dpo", "dx", "edecay", "ema", "fisher", "fosc", "hma", "kama", "lag", "linreg", "linregintercept", "linregslope", "mass", "max", "md", "mfi", "min", "mom", "msw", "natr", "qstick", "roc", "rocr", "rsi", "sma", "stddev", "stderr", "stochrsi", "sum", "tema", "trima", "trix", "tsf", "var", "vhf", "volatility", "vwma", "wilders", "wma", "zlema"].indexOf(indicator) >= 0) {
    const [input1, input2, input3, input4] = inputs;

    if (input2 || input3 || input4) {
      throw IEXJSException("Indicator takes at most 1 argument");
    }

    if (input1) base_url += `&input1=${input1}`;
  }

  if (["adosc", "apo", "bbands", "kvo", "ppo", "psar", "vosc"].indexOf(indicator) >= 0) {
    const [input1, input2, input3, input4] = inputs;

    if (input3 || input4) {
      throw IEXJSException("Indicator takes at most 2 argument");
    }

    if (input1) base_url += `&input1=${input1}`;
    if (input2) base_url += `&input2=${input2}`;
  }

  if (["macd", "stoch", "ultosc", "vidya"].indexOf(indicator) >= 0) {
    const [input1, input2, input3, input4] = inputs;

    if (input4) {
      throw IEXJSException("Indicator takes at most 3 argument");
    }

    if (input1) base_url += `&input1=${input1}`;
    if (input2) base_url += `&input2=${input2}`;
    if (input3) base_url += `&input3=${input3}`;
  }

  return _get({
    url: base_url,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.technicals = function (symbol, indicator, range, inputs, {
  filter,
  format
} = {}) {
  return technicals(symbol, indicator, range, inputs, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * The following are IEX-listed securities that have an aggregate fail to deliver position for five consecutive settlement days at a registered clearing agency, totaling 10,000 shares or more and equal to at least 0.5% of the issuer’s total shares outstanding (i.e., “threshold securities”).
 *   The report data will be published to the IEX website daily at 8:30 p.m. ET with data for that trading day.
 *
 * https://iexcloud.io/docs/api/#listed-regulation-sho-threshold-securities-list-in-dev
 *
 * @param {string} date date
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */

const threshold = (date, {
  token,
  version,
  filter,
  format
} = {}) => {
  if (date) {
    return _get({
      url: `stock/market/threshold-securities/${_strOrDate(date)}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stock/market/threshold-securities`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.threshold = function (date, {
  filter,
  format
} = {}) {
  return threshold(date, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};
/**
 * The consolidated market short interest positions in all IEX-listed securities are included in the IEX Short Interest Report.
 *
 * https://iexcloud.io/docs/api/#listed-short-interest-list-in-dev
 *
 * @param {string} symbol Ticker to request
 * @param {string} date Effective Datetime
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */


const shortInterest = (symbol, date, {
  token,
  version,
  filter,
  format
} = {}) => {
  _raiseIfNotStr(symbol);

  if (date) {
    return _get({
      url: `stock/${_quoteSymbols(symbol)}/short-interest/${_strOrDate(date)}`,
      token,
      version,
      filter,
      format
    });
  }

  return _get({
    url: `stock/${_quoteSymbols(symbol)}/short-interest`,
    token,
    version,
    filter,
    format
  });
};

Client.prototype.shortInterest = function (symbol, date, {
  filter,
  format
} = {}) {
  return shortInterest(symbol, date, {
    token: this._token,
    version: this._version,
    filter,
    format
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
const TRADINGSTATUS = "tradingstatus";
const AUCTION = "auction";
const OPHALTSTATUS = "op-halt-status";
const SSR = "ssr-status";
const SECURITYEVENT = "security-event";
const TRADEBREAK = "trade-breaks";
const TRADES = "trades";
const BOOK = "book";
const SYSTEMEVENT = "system-event";
const ALL = "deep";
const _runSSE = (method, symbols, on_data, {
  token,
  version
} = {}) => {
  if (!method) {
    throw new IEXJSException("method cannot be blank");
  }

  if (symbols) {
    if (version === "sandbox") {
      return _streamSSE(exports._SSE_URL_PREFIX_SANDBOX(version, method, _strCommaSeparatedString(symbols), token), on_data);
    }

    return _streamSSE(exports._SSE_URL_PREFIX(version, method, _strCommaSeparatedString(symbols), token), on_data);
  }

  if (version === "sandbox") {
    return _streamSSE(exports._SSE_URL_PREFIX_ALL_SANDBOX(method, token), on_data);
  }

  return _streamSSE(exports._SSE_URL_PREFIX_ALL(version, method, token), on_data);
};
/**
 * TOPS provides IEX’s aggregated best quoted bid and offer position in near real time for all securities on IEX’s displayed limit order book.
 * TOPS is ideal for developers needing both quote and trade data.
 * https://iexcloud.io/docs/api/#tops
 * @param {string} symbols Tickers to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */

const topsSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("tops", symbols, on_data, token);

Client.prototype.topsSSE = function (symbols, on_data) {
  return topsSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * Last provides trade data for executions on IEX. It is a near real time, intraday API that provides IEX last sale price, size and time.
 * Last is ideal for developers that need a lightweight stock quote.
 * https://iexcloud.io/docs/api/#last
 * @param {string} symbols Tickers to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */


const lastSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("last", symbols, on_data, {
  token,
  version
});

Client.prototype.lastSSE = function (symbols, on_data) {
  return lastSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * DEEP is used to receive real-time depth of book quotations direct from IEX.
 * The depth of book quotations received via DEEP provide an aggregated size of resting displayed orders at a price and side,
 * and do not indicate the size or number of individual orders at any price level.
 * Non-displayed orders and non-displayed portions of reserve orders are not represented in DEEP.
 *
 * DEEP also provides last trade price and size information. Trades resulting from either displayed or non-displayed orders matching on IEX will be reported. Routed executions will not be reported.
 *
 * https://iexcloud.io/docs/api/#deep
 * @param {string} symbols Tickers to request
 * @param {string} channels deep channels to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */


const deepSSE = (symbols, channels, on_data, {
  token,
  version
} = {}) => {
  if (!channels) {
    throw new IEXJSException("Must specify channels for deepSSE endpoints");
  }

  _strToList(channels).forEach(channel => {
    if ([TRADINGSTATUS, AUCTION, OPHALTSTATUS, SSR, SECURITYEVENT, TRADEBREAK, TRADES, BOOK, SYSTEMEVENT, ALL].indexOf(channel) < 0) {
      throw new IEXJSException(`Deep channel not recognized: ${channel}`);
    }
  }); // eslint-disable-next-line no-param-reassign


  channels = _strCommaSeparatedString(channels);

  if (version === "sandbox") {
    return _streamSSE(exports._SSE_DEEP_URL_PREFIX_SANDBOX(_strCommaSeparatedString(symbols), channels, token), on_data);
  }

  return _streamSSE(exports._SSE_DEEP_URL_PREFIX(version, _strCommaSeparatedString(symbols), channels, token), on_data);
};

Client.prototype.deepSSE = function (symbols, channels, on_data) {
  return deepSSE(symbols, channels, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * Trade report messages are sent when an order on the IEX Order Book is executed in whole or in part. DEEP sends a Trade report message for every individual fill.
 * https://iexcloud.io/docs/api/#deep-trades
 * @param {string} symbols Tickers to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */


const tradesSSE = (symbols, on_data, {
  token,
  version
} = {}) => {
  if (version === "sandbox") {
    return _streamSSE(exports._SSE_DEEP_URL_PREFIX_SANDBOX(_strCommaSeparatedString(symbols), "trades", token), on_data);
  }

  return _streamSSE(exports._SSE_DEEP_URL_PREFIX(version, _strCommaSeparatedString(symbols), "trades", token), on_data);
};

Client.prototype.tradesSSE = function (symbols, on_data) {
  return tradesSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * DEEP broadcasts an Auction Information Message every one second between the Lock-in Time and the auction match for Opening and Closing Auctions,
 * and during the Display Only Period for IPO, Halt, and Volatility Auctions. Only IEX listed securities are eligible for IEX Auctions.
 * https://iexcloud.io/docs/api/#deep-auction
 * @param {string} symbols Tickers to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */


const auctionSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("auction", symbols, on_data, {
  token,
  version
});

Client.prototype.auctionSSE = function (symbols, on_data) {
  return auctionSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * Book shows IEX’s bids and asks for given symbols.
 * https://iexcloud.io/docs/api/#deep-book
 * @param {string} symbols Tickers to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */


const bookSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("book", symbols, on_data, {
  token,
  version
});

Client.prototype.bookSSE = function (symbols, on_data) {
  return bookSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * The Exchange may suspend trading of one or more securities on IEX for operational reasons and indicates such operational halt using the Operational halt status message.
 *
 * IEX disseminates a full pre-market spin of Operational halt status messages indicating the operational halt status of all securities.
 * In the spin, IEX will send out an Operational Halt Message with “N” (Not operationally halted on IEX) for all securities that are eligible for trading at the start of the Pre-Market Session.
 * If a security is absent from the dissemination, firms should assume that the security is being treated as operationally halted in the IEX Trading System at the start of the Pre-Market Session.
 *
 * After the pre-market spin, IEX will use the Operational halt status message to relay changes in operational halt status for an individual security.
 *
 * https://iexcloud.io/docs/api/#deep-operational-halt-status
 * @param {string} symbols Tickers to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */


const opHaltStatusSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("op-halt-status", symbols, on_data, {
  token,
  version
});

Client.prototype.opHaltStatusSSE = function (symbols, on_data) {
  return opHaltStatusSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * The Official Price message is used to disseminate the IEX Official Opening and Closing Prices.
 * These messages will be provided only for IEX Listed Securities.
 * https://iexcloud.io/docs/api/#deep-official-price
 * @param {string} symbols Tickers to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */


const officialPriceSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("official-price", symbols, on_data, {
  token,
  version
});

Client.prototype.officialPriceSSE = function (symbols, on_data) {
  return officialPriceSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * The Security event message is used to indicate events that apply to a security. A Security event message will be sent whenever such event occurs
 * https://iexcloud.io/docs/api/#deep-security-event
 * @param {string} symbols Tickers to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */


const securityEventSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("security-event", symbols, on_data, {
  token,
  version
});

Client.prototype.securityEventSSE = function (symbols, on_data) {
  return securityEventSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * In association with Rule 201 of Regulation SHO, the Short Sale Price Test Message is used to indicate when a short sale price test restriction is in effect for a security.
 *
 * IEX disseminates a full pre-market spin of Short sale price test status messages indicating the Rule 201 status of all securities. After the pre-market spin, IEX will use the Short sale price test status message in the event of an intraday status change.
 *
 * The IEX Trading System will process orders based on the latest short sale price test restriction status.
 *
 * https://iexcloud.io/docs/api/#deep-short-sale-price-test-status
 * @param {string} symbols Tickers to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */


const ssrStatusSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("ssr-status", symbols, on_data, {
  token,
  version
});

Client.prototype.ssrStatusSSE = function (symbols, on_data) {
  return ssrStatusSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * The System event message is used to indicate events that apply to the market or the data feed.
 *
 * There will be a single message disseminated per channel for each System Event type within a given trading session.
 *
 * https://iexcloud.io/docs/api/#deep-system-event
 * @param {string} symbols Tickers to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */


const systemEventSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("system-event", symbols, on_data, {
  token,
  version
});

Client.prototype.systemEventSSE = function (symbols, on_data) {
  return systemEventSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * Trade report messages are sent when an order on the IEX Order Book is executed in whole or in part. DEEP sends a Trade report message for every individual fill.
 *
 * https://iexcloud.io/docs/api/#deep-trades
 * @param {string} symbols Tickers to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */


const tradeBreaksSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("trade-breaks", symbols, on_data, {
  token,
  version
});

Client.prototype.tradeBreaksSSE = function (symbols, on_data) {
  return tradeBreaksSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * The Trading status message is used to indicate the current trading status of a security.
 * For IEX-listed securities, IEX acts as the primary market and has the authority to institute a trading halt or trading pause in a security due to news dissemination or regulatory reasons.
 * For non-IEX-listed securities, IEX abides by any regulatory trading halts and trading pauses instituted by the primary or listing market, as applicable.
 *
 * IEX disseminates a full pre-market spin of Trading status messages indicating the trading status of all securities.
 * In the spin, IEX will send out a Trading status message with “T” (Trading) for all securities that are eligible for trading at the start of the Pre-Market Session.
 * If a security is absent from the dissemination, firms should assume that the security is being treated as operationally halted in the IEX Trading System.
 *
 * After the pre-market spin, IEX will use the Trading status message to relay changes in trading status for an individual security. Messages will be sent when a security is:
 *
 * Halted
 * Paused*
 * Released into an Order Acceptance Period*
 * Released for trading
 * *The paused and released into an Order Acceptance Period status will be disseminated for IEX-listed securities only. Trading pauses on non-IEX-listed securities will be treated simply as a halt.
 *
 * https://iexcloud.io/docs/api/#deep-trading-status
 * @param {string} symbols Tickers to request
 * @param {function} on_data Callback on data
 * @param {string} token Access token
 * @param {string} version API version
 */


const tradingStatusSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("trading-status", symbols, on_data, {
  token,
  version
});

Client.prototype.tradingStatusSSE = function (symbols, on_data) {
  return tradingStatusSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
const CRYPTOBOOK = "cryptoBook";
const CRYPTOEVENTS = "cryptoEvents";
const CRYPTOQUOTES = "cryptoQuotes";
/**
 * This returns a current snapshot of the book for a specified cryptocurrency. For REST, you will receive a current snapshot of the current book for the specific cryptocurrency. For SSE Streaming, you will get a full representation of the book updated as often as the book changes. Examples of each are below:
 * https://iexcloud.io/docs/api/#cryptocurrency-book
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */

const cryptoBookSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("cryptoBook", symbols, on_data, {
  token,
  version
});

Client.prototype.cryptoBookSSE = function (symbols, on_data) {
  return cryptoBookSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * This returns a streaming list of event updates such as new and canceled orders.
 * https://iexcloud.io/docs/api/#cryptocurrency-events
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */


const cryptoEventsSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("cryptoEvents", symbols, on_data, {
  token,
  version
});

Client.prototype.cryptoEventsSSE = function (symbols, on_data) {
  return cryptoEventsSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * This returns the quote for a specified cryptocurrency. Quotes are available via REST and SSE Streaming.
 * https://iexcloud.io/docs/api/#cryptocurrency-quote
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */


const cryptoQuotesSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("cryptoQuotes", symbols, on_data, {
  token,
  version
});

Client.prototype.cryptoQuotesSSE = function (symbols, on_data) {
  return cryptoQuotesSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
const FOREX = "forex";
const FOREX1SECOND = "forex1Second";
const FOREX5SECOND = "forex5Second";
const FOREX1MINUTE = "forex1Minute";
/**
 * This endpoint streams real-time foreign currency exchange rates.
 * https://iexcloud.io/docs/api/#forex-currencies
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */

const fxSSE = (symbols, on_data, name = "forex", {
  token,
  version
} = {}) => _runSSE(name, symbols, on_data, {
  token,
  version
});

Client.prototype.fxSSE = function (symbols, on_data) {
  return fxSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * This endpoint streams real-time foreign currency exchange rates.
 * https://iexcloud.io/docs/api/#forex-currencies
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */


const forex1SecondSSE = (symbols, on_data, {
  token,
  version
} = {}) => fxSSE(symbols, on_data, "forex1Second", {
  token,
  version
});

Client.prototype.forex1SecondSSE = function (symbols, on_data) {
  return forex1SecondSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * This endpoint streams real-time foreign currency exchange rates.
 * https://iexcloud.io/docs/api/#forex-currencies
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */


const forex5SecondSSE = (symbols, on_data, {
  token,
  version
} = {}) => fxSSE(symbols, on_data, "forex5Second", {
  token,
  version
});

Client.prototype.forex5SecondSSE = function (symbols, on_data) {
  return forex5SecondSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * This endpoint streams real-time foreign currency exchange rates.
 * https://iexcloud.io/docs/api/#forex-currencies
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */


const forex1MinuteSSE = (symbols, on_data, {
  token,
  version
} = {}) => fxSSE(symbols, on_data, "forex1Minute", {
  token,
  version
});

Client.prototype.forex1MinuteSSE = function (symbols, on_data) {
  return forex1MinuteSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Stream news
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */

const newsSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("news-stream", symbols, on_data, {
  token,
  version
});

Client.prototype.newsSSE = function (symbols, on_data) {
  return newsSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/**
 * Stream social sentiment
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */

const sentimentSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("sentiment", symbols, on_data, {
  token,
  version
});

Client.prototype.sentimentSSE = function (symbols, on_data) {
  return sentimentSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
const STOCKSUSNOUTP = "stocksUSNoUTP";
const STOCKSUS = "stocksUS";
const STOCKSUS1SECOND = "stocksUS1Second";
const STOCKSUS5SECOND = "stocksUS5Second";
const STOCKSUS1MINUTE = "stocksUS1Minute";
/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */

const stocksUSNoUTPSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("stocksUSNoUTP", symbols, on_data, {
  token,
  version
});

Client.prototype.stocksUSNoUTPSSE = function (symbols, on_data) {
  return stocksUSNoUTPSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */


const stocksUSSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("stocksUS", symbols, on_data, {
  token,
  version
});

Client.prototype.stocksUSSSE = function (symbols, on_data) {
  return stocksUSSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */


const stocksUS1SecondSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("stocksUS1Second", symbols, on_data, {
  token,
  version
});

Client.prototype.stocksUS1SecondSSE = function (symbols, on_data) {
  return stocksUS1SecondSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */


const stocksUSNoUTP1SecondSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("stocksUSNoUTP1Second", symbols, on_data, {
  token,
  version
});

Client.prototype.stocksUSNoUTP1SecondSSE = function (symbols, on_data) {
  return stocksUSNoUTP1SecondSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */


const stocksUS5SecondSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("stocksUS5Second", symbols, on_data, {
  token,
  version
});

Client.prototype.stocksUS5SecondSSE = function (symbols, on_data) {
  return stocksUS5SecondSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */


const stocksUSNoUTP5SecondSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("stocksUSNoUTP5Second", symbols, on_data, {
  token,
  version
});

Client.prototype.stocksUSNoUTP5SecondSSE = function (symbols, on_data) {
  return stocksUSNoUTP5SecondSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */


const stocksUS1MinuteSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("stocksUS1Minute", symbols, on_data, {
  token,
  version
});

Client.prototype.stocksUS1MinuteSSE = function (symbols, on_data) {
  return stocksUS1MinuteSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};
/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */


const stocksUSNoUTP1MinuteSSE = (symbols, on_data, {
  token,
  version
} = {}) => _runSSE("stocksUSNoUTP1Minute", symbols, on_data, {
  token,
  version
});

Client.prototype.stocksUSNoUTP1MinuteSSE = function (symbols, on_data) {
  return stocksUSNoUTP1MinuteSSE(symbols, on_data, {
    token: this._token,
    version: this._version
  });
};

/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
const VERSION = pkg_json.version;

exports.ALL = ALL;
exports.AUCTION = AUCTION;
exports.BOOK = BOOK;
exports.CRYPTOBOOK = CRYPTOBOOK;
exports.CRYPTOEVENTS = CRYPTOEVENTS;
exports.CRYPTOQUOTES = CRYPTOQUOTES;
exports.Client = Client;
exports.FOREX = FOREX;
exports.FOREX1MINUTE = FOREX1MINUTE;
exports.FOREX1SECOND = FOREX1SECOND;
exports.FOREX5SECOND = FOREX5SECOND;
exports.IEXJSException = IEXJSException;
exports.OPHALTSTATUS = OPHALTSTATUS;
exports.SECURITYEVENT = SECURITYEVENT;
exports.SSR = SSR;
exports.STOCKSUS = STOCKSUS;
exports.STOCKSUS1MINUTE = STOCKSUS1MINUTE;
exports.STOCKSUS1SECOND = STOCKSUS1SECOND;
exports.STOCKSUS5SECOND = STOCKSUS5SECOND;
exports.STOCKSUSNOUTP = STOCKSUSNOUTP;
exports.SYSTEMEVENT = SYSTEMEVENT;
exports.TRADEBREAK = TRADEBREAK;
exports.TRADES = TRADES;
exports.TRADINGSTATUS = TRADINGSTATUS;
exports.VERSION = VERSION;
exports._BATCH_TYPES = _BATCH_TYPES;
exports._COLLECTION_TAGS = _COLLECTION_TAGS;
exports._DATE_RANGES = _DATE_RANGES;
exports._INDICATORS = _INDICATORS;
exports._INDICATOR_RETURNS = _INDICATOR_RETURNS;
exports._KEY_STATS = _KEY_STATS;
exports._LIST_OPTIONS = _LIST_OPTIONS;
exports._SIO_PORT = _SIO_PORT;
exports._SIO_URL_PREFIX = _SIO_URL_PREFIX;
exports._STANDARD_DATE_FIELDS = _STANDARD_DATE_FIELDS;
exports._STANDARD_TIME_FIELDS = _STANDARD_TIME_FIELDS;
exports._TIMEFRAME_CHART = _TIMEFRAME_CHART;
exports._TIMEFRAME_DIVSPLIT = _TIMEFRAME_DIVSPLIT;
exports._URL_PREFIX = _URL_PREFIX;
exports._USAGE_TYPES = _USAGE_TYPES;
exports._checkPeriodLast = _checkPeriodLast;
exports._dateRange = _dateRange;
exports._delete = _delete;
exports._get = _get;
exports._post = _post;
exports._quoteSymbols = _quoteSymbols;
exports._raiseIfNotStr = _raiseIfNotStr;
exports._requireSecret = _requireSecret;
exports._runSSE = _runSSE;
exports._strCommaSeparatedString = _strCommaSeparatedString;
exports._strOrDate = _strOrDate;
exports._strToList = _strToList;
exports._streamSSE = _streamSSE;
exports._timeseriesWrapper = _timeseriesWrapper;
exports.accountingQualityAndRiskMatrixAuditAnalytics = accountingQualityAndRiskMatrixAuditAnalytics;
exports.advancedStats = advancedStats;
exports.analystDaysWallStreetHorizon = analystDaysWallStreetHorizon;
exports.analystRecommendations = analystRecommendations;
exports.auctionSSE = auctionSSE;
exports.balanceSheet = balanceSheet;
exports.batch = batch;
exports.boardOfDirectorsMeetingWallStreetHorizon = boardOfDirectorsMeetingWallStreetHorizon;
exports.bonusIssue = bonusIssue;
exports.book = book;
exports.bookSSE = bookSSE;
exports.brent = brent;
exports.businessUpdatesWallStreetHorizon = businessUpdatesWallStreetHorizon;
exports.buybacksWallStreetHorizon = buybacksWallStreetHorizon;
exports.calendar = calendar;
exports.cam1ExtractAlpha = cam1ExtractAlpha;
exports.capitalMarketsDayWallStreetHorizon = capitalMarketsDayWallStreetHorizon;
exports.cashFlow = cashFlow;
exports.cdj = cdj;
exports.cdnj = cdnj;
exports.ceoCompensation = ceoCompensation;
exports.chart = chart;
exports.collections = collections;
exports.company = company;
exports.companyTravelWallStreetHorizon = companyTravelWallStreetHorizon;
exports.convertFX = convertFX;
exports.cpi = cpi;
exports.create = create;
exports.creditcard = creditcard;
exports.cryptoBook = cryptoBook;
exports.cryptoBookSSE = cryptoBookSSE;
exports.cryptoEventsSSE = cryptoEventsSSE;
exports.cryptoPrice = cryptoPrice;
exports.cryptoQuote = cryptoQuote;
exports.cryptoQuotesSSE = cryptoQuotesSSE;
exports.cryptoSymbols = cryptoSymbols;
exports.cryptoSymbolsList = cryptoSymbolsList;
exports.daily = daily;
exports.deepSSE = deepSSE;
exports.delayedQuote = delayedQuote;
exports.delete_ = delete_;
exports.diesel = diesel;
exports.directorAndOfficerChangesAuditAnalytics = directorAndOfficerChangesAuditAnalytics;
exports.distribution = distribution;
exports.dividends = dividends;
exports.dividendsBasic = dividendsBasic;
exports.download = download;
exports.downloadReportNewConstructs = downloadReportNewConstructs;
exports.downloadStockReportvaluEngine = downloadStockReportvaluEngine;
exports.earnings = earnings;
exports.earningsToday = earningsToday;
exports.esgCFPBComplaintsExtractAlpha = esgCFPBComplaintsExtractAlpha;
exports.esgCPSCRecallsExtractAlpha = esgCPSCRecallsExtractAlpha;
exports.esgDOLVisaApplicationsExtractAlpha = esgDOLVisaApplicationsExtractAlpha;
exports.esgEPAEnforcementsExtractAlpha = esgEPAEnforcementsExtractAlpha;
exports.esgEPAMilestonesExtractAlpha = esgEPAMilestonesExtractAlpha;
exports.esgFECIndividualCampaingContributionsExtractAlpha = esgFECIndividualCampaingContributionsExtractAlpha;
exports.esgOSHAInspectionsExtractAlpha = esgOSHAInspectionsExtractAlpha;
exports.esgSenateLobbyingExtractAlpha = esgSenateLobbyingExtractAlpha;
exports.esgUSASpendingExtractAlpha = esgUSASpendingExtractAlpha;
exports.esgUSPTOPatentApplicationsExtractAlpha = esgUSPTOPatentApplicationsExtractAlpha;
exports.esgUSPTOPatentGrantsExtractAlpha = esgUSPTOPatentGrantsExtractAlpha;
exports.estimates = estimates;
exports.exchanges = exchanges;
exports.fdaAdvisoryCommitteeMeetingsWallStreetHorizon = fdaAdvisoryCommitteeMeetingsWallStreetHorizon;
exports.fedfunds = fedfunds;
exports.figi = figi;
exports.files = files;
exports.filingDueDatesWallStreetHorizon = filingDueDatesWallStreetHorizon;
exports.financials = financials;
exports.fiscalQuarterEndWallStreetHorizon = fiscalQuarterEndWallStreetHorizon;
exports.fiveDayMLReturnRankingBrain = fiveDayMLReturnRankingBrain;
exports.fiveYear = fiveYear;
exports.forex1MinuteSSE = forex1MinuteSSE;
exports.forex1SecondSSE = forex1SecondSSE;
exports.forex5SecondSSE = forex5SecondSSE;
exports.fortyF = fortyF;
exports.forumWallStreetHorizon = forumWallStreetHorizon;
exports.fundOwnership = fundOwnership;
exports.fundamentals = fundamentals;
exports.futuresSymbols = futuresSymbols;
exports.futuresSymbolsList = futuresSymbolsList;
exports.fxSSE = fxSSE;
exports.fxSymbols = fxSymbols;
exports.fxSymbolsList = fxSymbolsList;
exports.gasmid = gasmid;
exports.gasprm = gasprm;
exports.gasreg = gasreg;
exports.gdp = gdp;
exports.generalConferenceWallStreetHorizon = generalConferenceWallStreetHorizon;
exports.heatoil = heatoil;
exports.historicalFX = historicalFX;
exports.holidays = holidays;
exports.holidaysWallStreetHorizon = holidaysWallStreetHorizon;
exports.housing = housing;
exports.iexAuction = iexAuction;
exports.iexBook = iexBook;
exports.iexDeep = iexDeep;
exports.iexHist = iexHist;
exports.iexLast = iexLast;
exports.iexOfficialPrice = iexOfficialPrice;
exports.iexOpHaltStatus = iexOpHaltStatus;
exports.iexSecurityEvent = iexSecurityEvent;
exports.iexSsrStatus = iexSsrStatus;
exports.iexSymbols = iexSymbols;
exports.iexSymbolsList = iexSymbolsList;
exports.iexSystemEvent = iexSystemEvent;
exports.iexTops = iexTops;
exports.iexTradeBreak = iexTradeBreak;
exports.iexTrades = iexTrades;
exports.iexTradingStatus = iexTradingStatus;
exports.incomeStatement = incomeStatement;
exports.indexChangesWallStreetHorizon = indexChangesWallStreetHorizon;
exports.indpro = indpro;
exports.initialClaims = initialClaims;
exports.insiderRoster = insiderRoster;
exports.insiderSummary = insiderSummary;
exports.insiderTransactions = insiderTransactions;
exports.institutionalMoney = institutionalMoney;
exports.institutionalOwnership = institutionalOwnership;
exports.internationalExchanges = internationalExchanges;
exports.internationalSymbols = internationalSymbols;
exports.internationalSymbolsList = internationalSymbolsList;
exports.intraday = intraday;
exports.ipoToday = ipoToday;
exports.ipoUpcoming = ipoUpcoming;
exports.iposWallStreetHorizon = iposWallStreetHorizon;
exports.isinLookup = isinLookup;
exports.jet = jet;
exports.kScoreChinaKavout = kScoreChinaKavout;
exports.kScoreKavout = kScoreKavout;
exports.keyStats = keyStats;
exports.languageMetricsOnCompanyFilingsAllBrain = languageMetricsOnCompanyFilingsAllBrain;
exports.languageMetricsOnCompanyFilingsBrain = languageMetricsOnCompanyFilingsBrain;
exports.languageMetricsOnCompanyFilingsDifferenceAllBrain = languageMetricsOnCompanyFilingsDifferenceAllBrain;
exports.languageMetricsOnCompanyFilingsDifferenceBrain = languageMetricsOnCompanyFilingsDifferenceBrain;
exports.largestTrades = largestTrades;
exports.lastSSE = lastSSE;
exports.latestFX = latestFX;
exports.legalActionsWallStreetHorizon = legalActionsWallStreetHorizon;
exports.list = list;
exports.logo = logo;
exports.lookup = lookup;
exports.marketNews = marketNews;
exports.marketOhlc = marketOhlc;
exports.marketPrevious = marketPrevious;
exports.marketShortInterest = marketShortInterest;
exports.marketVolume = marketVolume;
exports.marketYesterday = marketYesterday;
exports.mergersAndAcquisitionsWallStreetHorizon = mergersAndAcquisitionsWallStreetHorizon;
exports.messageBudget = messageBudget;
exports.metadata = metadata;
exports.mutualFundSymbols = mutualFundSymbols;
exports.mutualFundSymbolsList = mutualFundSymbolsList;
exports.natgas = natgas;
exports.news = news;
exports.newsSSE = newsSSE;
exports.nonTimelyFilingsFraudFactors = nonTimelyFilingsFraudFactors;
exports.officialPriceSSE = officialPriceSSE;
exports.ohlc = ohlc;
exports.oneMonth = oneMonth;
exports.oneYear = oneYear;
exports.opHaltStatusSSE = opHaltStatusSSE;
exports.optionExpirations = optionExpirations;
exports.options = options;
exports.optionsSymbols = optionsSymbols;
exports.optionsSymbolsList = optionsSymbolsList;
exports.otcSymbols = otcSymbols;
exports.otcSymbolsList = otcSymbolsList;
exports.output = output;
exports.overrideUrl = overrideUrl;
exports.pause = pause;
exports.payAsYouGo = payAsYouGo;
exports.payroll = payroll;
exports.peers = peers;
exports.points = points;
exports.previous = previous;
exports.price = price;
exports.priceDynamicsPrecisionAlpha = priceDynamicsPrecisionAlpha;
exports.priceTarget = priceTarget;
exports.productEventsWallStreetHorizon = productEventsWallStreetHorizon;
exports.propane = propane;
exports.queryMetadata = queryMetadata;
exports.quote = quote;
exports.recent = recent;
exports.recessionProb = recessionProb;
exports.records = records;
exports.reportNewConstructs = reportNewConstructs;
exports.researchAndDevelopmentDaysWallStreetHorizon = researchAndDevelopmentDaysWallStreetHorizon;
exports.resume = resume;
exports.retailMoney = retailMoney;
exports.returnOfCapital = returnOfCapital;
exports.ricLookup = ricLookup;
exports.rightToPurchase = rightToPurchase;
exports.rightsIssue = rightsIssue;
exports.rule = rule;
exports.rules = rules;
exports.sameStoreSalesWallStreetHorizon = sameStoreSalesWallStreetHorizon;
exports.schema = schema;
exports.search = search;
exports.secondaryOfferingsWallStreetHorizon = secondaryOfferingsWallStreetHorizon;
exports.sectorPerformance = sectorPerformance;
exports.sectors = sectors;
exports.securityEventSSE = securityEventSSE;
exports.securityReclassification = securityReclassification;
exports.securitySwap = securitySwap;
exports.seminarsWallStreetHorizon = seminarsWallStreetHorizon;
exports.sentiment = sentiment;
exports.sentimentSSE = sentimentSSE;
exports.sevenDaySentimentBrain = sevenDaySentimentBrain;
exports.shareholderMeetingsWallStreetHorizon = shareholderMeetingsWallStreetHorizon;
exports.shortInterest = shortInterest;
exports.similarityIndexFraudFactors = similarityIndexFraudFactors;
exports.sixMonth = sixMonth;
exports.socialSentimentStockTwits = socialSentimentStockTwits;
exports.spinoff = spinoff;
exports.splits = splits;
exports.spread = spread;
exports.ssrStatusSSE = ssrStatusSSE;
exports.status = status;
exports.stockReportValuEngine = stockReportValuEngine;
exports.stockSplits = stockSplits;
exports.stocksUS1MinuteSSE = stocksUS1MinuteSSE;
exports.stocksUS1SecondSSE = stocksUS1SecondSSE;
exports.stocksUS5SecondSSE = stocksUS5SecondSSE;
exports.stocksUSNoUTP1MinuteSSE = stocksUSNoUTP1MinuteSSE;
exports.stocksUSNoUTP1SecondSSE = stocksUSNoUTP1SecondSSE;
exports.stocksUSNoUTP5SecondSSE = stocksUSNoUTP5SecondSSE;
exports.stocksUSNoUTPSSE = stocksUSNoUTPSSE;
exports.stocksUSSSE = stocksUSSSE;
exports.summary = summary;
exports.summitMeetingsWallStreetHorizon = summitMeetingsWallStreetHorizon;
exports.symbols = symbols;
exports.symbolsList = symbolsList;
exports.systemEventSSE = systemEventSSE;
exports.systemStats = systemStats;
exports.tacticalModel1ExtractAlpha = tacticalModel1ExtractAlpha;
exports.tags = tags;
exports.technicals = technicals;
exports.tenDayMLReturnRankingBrain = tenDayMLReturnRankingBrain;
exports.tenK = tenK;
exports.tenQ = tenQ;
exports.tenYear = tenYear;
exports.thirtyDaySentimentBrain = thirtyDaySentimentBrain;
exports.thirtyYear = thirtyYear;
exports.threeDayMLReturnRankingBrain = threeDayMLReturnRankingBrain;
exports.threeMonth = threeMonth;
exports.threshold = threshold;
exports.timeSeries = timeSeries;
exports.timeSeriesInventory = timeSeriesInventory;
exports.topsSSE = topsSSE;
exports.tradeBreaksSSE = tradeBreaksSSE;
exports.tradeShowsWallStreetHorizon = tradeShowsWallStreetHorizon;
exports.tradesSSE = tradesSSE;
exports.tradingStatusSSE = tradingStatusSSE;
exports.twentyF = twentyF;
exports.twentyOneDayMLReturnRankingBrain = twentyOneDayMLReturnRankingBrain;
exports.twentyYear = twentyYear;
exports.twoDayMLReturnRankingBrain = twoDayMLReturnRankingBrain;
exports.twoYear = twoYear;
exports.unemployment = unemployment;
exports.upcomingDividends = upcomingDividends;
exports.upcomingEarnings = upcomingEarnings;
exports.upcomingEvents = upcomingEvents;
exports.upcomingIPOs = upcomingIPOs;
exports.upcomingSplits = upcomingSplits;
exports.us15 = us15;
exports.us30 = us30;
exports.us5 = us5;
exports.usage = usage;
exports.vehicles = vehicles;
exports.volumeByVenue = volumeByVenue;
exports.witchingHoursWallStreetHorizon = witchingHoursWallStreetHorizon;
exports.workshopsWallStreetHorizon = workshopsWallStreetHorizon;
exports.wti = wti;
exports.yesterday = yesterday;
//# sourceMappingURL=iexjs.js.map
