/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/platforms/[id]";
exports.ids = ["pages/platforms/[id]"];
exports.modules = {

/***/ "./pages/platforms/[id].tsx":
/*!**********************************!*\
  !*** ./pages/platforms/[id].tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mongodb */ \"./util/mongodb.js\");\nvar _jsxFileName = \"/Users/d.amegavi/Workspace/Game_catalog_with_next/game_catalog/pages/platforms/[id].tsx\";\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\nconst GamesByPlatform = ({\n  data,\n  query\n}) => {\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"Games By platforms\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GamesByPlatform);\nconst getServerSideProps = async context => {\n  const query = context.query.id;\n  const platforms = [];\n  const {\n    db\n  } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n  const findPlatform = await db.collection(\"games\").find({}).toArray().then(data => {\n    data.forEach(games => {\n      const findGames = platforms.find(element => {\n        return element.slug === games.platform.slug;\n      });\n\n      if (!findGames) {\n        platforms.push({\n          name: games.platform.name,\n          slug: games.platform.slug,\n          logo: games.platform.platform_logo_url\n        });\n      }\n    });\n    return platforms;\n  });\n  return {\n    props: {\n      data: findPlatform,\n      query: query\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLW1vbmdvZGIvLi9wYWdlcy9wbGF0Zm9ybXMvW2lkXS50c3g/MTQ5NiJdLCJuYW1lcyI6WyJHYW1lc0J5UGxhdGZvcm0iLCJkYXRhIiwicXVlcnkiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiaWQiLCJwbGF0Zm9ybXMiLCJkYiIsImNvbm5lY3RUb0RhdGFiYXNlIiwiZmluZFBsYXRmb3JtIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwidGhlbiIsImZvckVhY2giLCJnYW1lcyIsImZpbmRHYW1lcyIsImVsZW1lbnQiLCJzbHVnIiwicGxhdGZvcm0iLCJwdXNoIiwibmFtZSIsImxvZ28iLCJwbGF0Zm9ybV9sb2dvX3VybCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQWVBLE1BQU1BLGVBQThDLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBRCxLQUFxQjtBQUMxRSxTQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsQ0FERjtBQUtELENBTkQ7O0FBUUEsK0RBQWVGLGVBQWY7QUFFTyxNQUFNRyxrQkFBc0MsR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBQ3ZFLFFBQU1GLEtBQUssR0FBR0UsT0FBTyxDQUFDRixLQUFSLENBQWNHLEVBQTVCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLEVBQWxCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVMsTUFBTUMsZ0VBQWlCLEVBQXRDO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLE1BQU1GLEVBQUUsQ0FDMUJHLFVBRHdCLENBQ2IsT0FEYSxFQUV4QkMsSUFGd0IsQ0FFbkIsRUFGbUIsRUFHeEJDLE9BSHdCLEdBSXhCQyxJQUp3QixDQUlsQlosSUFBRCxJQUFVO0FBQ2RBLFFBQUksQ0FBQ2EsT0FBTCxDQUFjQyxLQUFELElBQVc7QUFDdEIsWUFBTUMsU0FBUyxHQUFHVixTQUFTLENBQUNLLElBQVYsQ0FBZ0JNLE9BQUQsSUFBYTtBQUM1QyxlQUFPQSxPQUFPLENBQUNDLElBQVIsS0FBaUJILEtBQUssQ0FBQ0ksUUFBTixDQUFlRCxJQUF2QztBQUNELE9BRmlCLENBQWxCOztBQUdBLFVBQUksQ0FBQ0YsU0FBTCxFQUFnQjtBQUNkVixpQkFBUyxDQUFDYyxJQUFWLENBQWU7QUFDYkMsY0FBSSxFQUFFTixLQUFLLENBQUNJLFFBQU4sQ0FBZUUsSUFEUjtBQUViSCxjQUFJLEVBQUVILEtBQUssQ0FBQ0ksUUFBTixDQUFlRCxJQUZSO0FBR2JJLGNBQUksRUFBRVAsS0FBSyxDQUFDSSxRQUFOLENBQWVJO0FBSFIsU0FBZjtBQUtEO0FBQ0YsS0FYRDtBQVlBLFdBQU9qQixTQUFQO0FBQ0QsR0FsQndCLENBQTNCO0FBbUJBLFNBQU87QUFDTGtCLFNBQUssRUFBRTtBQUNMdkIsVUFBSSxFQUFFUSxZQUREO0FBRUxQLFdBQUssRUFBRUE7QUFGRjtBQURGLEdBQVA7QUFNRCxDQTdCTSIsImZpbGUiOiIuL3BhZ2VzL3BsYXRmb3Jtcy9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL3V0aWwvbW9uZ29kYlwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcblxudHlwZSBHZXRQbGF0Zm9ybXMgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xuICBsb2dvOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG5cbnR5cGUgR2V0UGxhdGZvcm1zVG9Qcm9wcyA9IHtcbiAgZGF0YTogR2V0UGxhdGZvcm1zW107XG4gIHF1ZXJ5OiBzdHJpbmc7XG59O1xuXG5jb25zdCBHYW1lc0J5UGxhdGZvcm06IFJlYWN0LkZDPEdldFBsYXRmb3Jtc1RvUHJvcHM+ID0gKHsgZGF0YSwgcXVlcnkgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDI+R2FtZXMgQnkgcGxhdGZvcm1zPC9oMj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVzQnlQbGF0Zm9ybTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBjb250ZXh0LnF1ZXJ5LmlkO1xuICBjb25zdCBwbGF0Zm9ybXMgPSBbXTtcbiAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgY29uc3QgZmluZFBsYXRmb3JtID0gYXdhaXQgZGJcbiAgICAuY29sbGVjdGlvbihcImdhbWVzXCIpXG4gICAgLmZpbmQoe30pXG4gICAgLnRvQXJyYXkoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkYXRhLmZvckVhY2goKGdhbWVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbmRHYW1lcyA9IHBsYXRmb3Jtcy5maW5kKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuc2x1ZyA9PT0gZ2FtZXMucGxhdGZvcm0uc2x1ZztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZmluZEdhbWVzKSB7XG4gICAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogZ2FtZXMucGxhdGZvcm0ubmFtZSxcbiAgICAgICAgICAgIHNsdWc6IGdhbWVzLnBsYXRmb3JtLnNsdWcsXG4gICAgICAgICAgICBsb2dvOiBnYW1lcy5wbGF0Zm9ybS5wbGF0Zm9ybV9sb2dvX3VybCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGxhdGZvcm1zO1xuICAgIH0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhOiBmaW5kUGxhdGZvcm0sXG4gICAgICBxdWVyeTogcXVlcnksXG4gICAgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/platforms/[id].tsx\n");

/***/ }),

/***/ "./util/mongodb.js":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": function() { return /* binding */ connectToDatabase; }\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  MONGODB_URI,\n  MONGODB_DB\n} = process.env;\n\nif (!MONGODB_URI) {\n  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\n\nif (!MONGODB_DB) {\n  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */\n\n\nlet cached = global.mongo;\n\nif (!cached) {\n  cached = global.mongo = {\n    conn: null,\n    promise: null\n  };\n}\n\nasync function connectToDatabase() {\n  if (cached.conn) {\n    return cached.conn;\n  }\n\n  if (!cached.promise) {\n    const opts = {\n      useNewUrlParser: true,\n      useUnifiedTopology: true\n    };\n    cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(MONGODB_URI, opts).then(client => {\n      return {\n        client,\n        db: client.db(MONGODB_DB)\n      };\n    });\n  }\n\n  cached.conn = await cached.promise;\n  return cached.conn;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLW1vbmdvZGIvLi91dGlsL21vbmdvZGIuanM/MWRmYyJdLCJuYW1lcyI6WyJNT05HT0RCX1VSSSIsIk1PTkdPREJfREIiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJtb25nbyIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJvcHRzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiTW9uZ29DbGllbnQiLCJ0aGVuIiwiY2xpZW50IiwiZGIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTTtBQUFFQSxhQUFGO0FBQWVDO0FBQWYsSUFBOEJDLE9BQU8sQ0FBQ0MsR0FBNUM7O0FBRUEsSUFBSSxDQUFDSCxXQUFMLEVBQWtCO0FBQ2hCLFFBQU0sSUFBSUksS0FBSixDQUNKLHNFQURJLENBQU47QUFHRDs7QUFFRCxJQUFJLENBQUNILFVBQUwsRUFBaUI7QUFDZixRQUFNLElBQUlHLEtBQUosQ0FDSixxRUFESSxDQUFOO0FBR0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFJQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBcEI7O0FBRUEsSUFBSSxDQUFDRixNQUFMLEVBQWE7QUFDWEEsUUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQVAsR0FBZTtBQUFFQyxRQUFJLEVBQUUsSUFBUjtBQUFjQyxXQUFPLEVBQUU7QUFBdkIsR0FBeEI7QUFDRDs7QUFFTSxlQUFlQyxpQkFBZixHQUFtQztBQUN4QyxNQUFJTCxNQUFNLENBQUNHLElBQVgsRUFBaUI7QUFDZixXQUFPSCxNQUFNLENBQUNHLElBQWQ7QUFDRDs7QUFFRCxNQUFJLENBQUNILE1BQU0sQ0FBQ0ksT0FBWixFQUFxQjtBQUNuQixVQUFNRSxJQUFJLEdBQUc7QUFDWEMscUJBQWUsRUFBRSxJQUROO0FBRVhDLHdCQUFrQixFQUFFO0FBRlQsS0FBYjtBQUtBUixVQUFNLENBQUNJLE9BQVAsR0FBaUJLLHdEQUFBLENBQW9CZCxXQUFwQixFQUFpQ1csSUFBakMsRUFBdUNJLElBQXZDLENBQTZDQyxNQUFELElBQVk7QUFDdkUsYUFBTztBQUNMQSxjQURLO0FBRUxDLFVBQUUsRUFBRUQsTUFBTSxDQUFDQyxFQUFQLENBQVVoQixVQUFWO0FBRkMsT0FBUDtBQUlELEtBTGdCLENBQWpCO0FBTUQ7O0FBQ0RJLFFBQU0sQ0FBQ0csSUFBUCxHQUFjLE1BQU1ILE1BQU0sQ0FBQ0ksT0FBM0I7QUFDQSxTQUFPSixNQUFNLENBQUNHLElBQWQ7QUFDRCIsImZpbGUiOiIuL3V0aWwvbW9uZ29kYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcblxuY29uc3QgeyBNT05HT0RCX1VSSSwgTU9OR09EQl9EQiB9ID0gcHJvY2Vzcy5lbnZcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xuICApXG59XG5cbmlmICghTU9OR09EQl9EQikge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gIClcbn1cblxuLyoqXG4gKiBHbG9iYWwgaXMgdXNlZCBoZXJlIHRvIG1haW50YWluIGEgY2FjaGVkIGNvbm5lY3Rpb24gYWNyb3NzIGhvdCByZWxvYWRzXG4gKiBpbiBkZXZlbG9wbWVudC4gVGhpcyBwcmV2ZW50cyBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWFsbHlcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXG4gKi9cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29cblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm5cbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH1cblxuICAgIGNhY2hlZC5wcm9taXNlID0gTW9uZ29DbGllbnQuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigoY2xpZW50KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGllbnQsXG4gICAgICAgIGRiOiBjbGllbnQuZGIoTU9OR09EQl9EQiksXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlXG4gIHJldHVybiBjYWNoZWQuY29ublxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/mongodb.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/platforms/[id].tsx"));
module.exports = __webpack_exports__;

})();