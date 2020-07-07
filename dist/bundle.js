/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const word = document.getElementById('word');\nconst wrongLetter = document.getElementById('wrong-letter');\nconst playButton = document.getElementById('play-button');\nconst popup = document.getElementById('popup-container');\nconst notification = document.getElementById('notification-container');\nconst finalMessage = document.getElementById('final-message');\n\n\nconst figurParts = document.querySelectorAll('.figure-part');\n\nconst words = ['place', 'fear', 'amazing', 'purple', 'flagrant', 'judge', 'equal', 'mate', 'flame', 'wakeful'];\n\nlet selectedWord = words[Math.floor(Math.random() * words.length)];\n\nconst correctLetters = [];\nconst wrongLetters = [];\n\n\n\n//display word\n\nfunction displayWord() {\n    word.innerHTML = `\n        ${selectedWord\n            .split('')\n            .map(\n                letter => `\n                    <span class=\"letter\">\n                    ${correctLetters.includes(letter) ? letter : ''}\n                    </span>\n                `\n            )\n            .join('')\n        }\n    `;\n\n    const innerWord = word.innerText.replace(/\\n/g, '')\n\n    if (innerWord === selectedWord) {\n        finalMessage.innerText = 'Congratulations! You Won!';\n        popup.style.display = 'flex';\n    }\n\n}\n\nfunction showNotification() {\n    notification.classList.add('show');\n\n    setTimeout(() => {\n        notification.classList.remove('show');\n    }, 2000);\n}\n\n\n\n//wrong letters\n\nfunction updateWrongLetters() {\n\n    wrongLetter.innerHTML = `\n        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}\n        ${wrongLetters.map(letter => `<span>${letter}</span>`)}        \n    `;\n\n    //display parts\n\n    figurParts.forEach((part, index) => {\n        const error = wrongLetters.length;\n\n        if (index < error) {\n            part.style.display = 'block';\n        } else {\n            part.style.display = 'none';\n        }\n    });\n\n    //check lost\n\n    if (wrongLetters.length === figurParts.length) {\n        finalMessage.innerText = 'You have been execution!';\n        popup.style.display = 'flex';\n    }\n\n}\n\n\n//input letter\n\nwindow.addEventListener('keydown', e => {\n\n    if (e.keyCode >= 65 & e.keyCode <= 90) {\n        const letter = e.key;\n\n        if (selectedWord.includes(letter)) {\n            if (!correctLetters.includes(letter)) {\n                correctLetters.push(letter);\n\n                displayWord();\n            } else {\n                showNotification();\n            }\n        } else {\n            if (!wrongLetters.includes(letter)) {\n                wrongLetters.push(letter);\n\n                updateWrongLetters();\n            } else {\n                showNotification();\n            }\n        }\n    }\n\n});\n\n\n\n//play again\n\nplayButton.addEventListener('click', () => {\n\n    correctLetters.splice(0);\n    wrongLetters.splice(0)\n\n    selectedWord = words[Math.floor(Math.random() * words.length)];\n\n    displayWord();\n\n    updateWrongLetters();\n\n    popup.style.display = 'none';\n\n})\n\n\n\n\n\n\n\ndisplayWord();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmQnKTtcbmNvbnN0IHdyb25nTGV0dGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyb25nLWxldHRlcicpO1xuY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ1dHRvbicpO1xuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtY29udGFpbmVyJyk7XG5jb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9uLWNvbnRhaW5lcicpO1xuY29uc3QgZmluYWxNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmFsLW1lc3NhZ2UnKTtcblxuXG5jb25zdCBmaWd1clBhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpZ3VyZS1wYXJ0Jyk7XG5cbmNvbnN0IHdvcmRzID0gWydwbGFjZScsICdmZWFyJywgJ2FtYXppbmcnLCAncHVycGxlJywgJ2ZsYWdyYW50JywgJ2p1ZGdlJywgJ2VxdWFsJywgJ21hdGUnLCAnZmxhbWUnLCAnd2FrZWZ1bCddO1xuXG5sZXQgc2VsZWN0ZWRXb3JkID0gd29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd29yZHMubGVuZ3RoKV07XG5cbmNvbnN0IGNvcnJlY3RMZXR0ZXJzID0gW107XG5jb25zdCB3cm9uZ0xldHRlcnMgPSBbXTtcblxuXG5cbi8vZGlzcGxheSB3b3JkXG5cbmZ1bmN0aW9uIGRpc3BsYXlXb3JkKCkge1xuICAgIHdvcmQuaW5uZXJIVE1MID0gYFxuICAgICAgICAke3NlbGVjdGVkV29yZFxuICAgICAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICBsZXR0ZXIgPT4gYFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxldHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAke2NvcnJlY3RMZXR0ZXJzLmluY2x1ZGVzKGxldHRlcikgPyBsZXR0ZXIgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICB9XG4gICAgYDtcblxuICAgIGNvbnN0IGlubmVyV29yZCA9IHdvcmQuaW5uZXJUZXh0LnJlcGxhY2UoL1xcbi9nLCAnJylcblxuICAgIGlmIChpbm5lcldvcmQgPT09IHNlbGVjdGVkV29yZCkge1xuICAgICAgICBmaW5hbE1lc3NhZ2UuaW5uZXJUZXh0ID0gJ0NvbmdyYXR1bGF0aW9ucyEgWW91IFdvbiEnO1xuICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKCkge1xuICAgIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9LCAyMDAwKTtcbn1cblxuXG5cbi8vd3JvbmcgbGV0dGVyc1xuXG5mdW5jdGlvbiB1cGRhdGVXcm9uZ0xldHRlcnMoKSB7XG5cbiAgICB3cm9uZ0xldHRlci5pbm5lckhUTUwgPSBgXG4gICAgICAgICR7d3JvbmdMZXR0ZXJzLmxlbmd0aCA+IDAgPyAnPHA+V3Jvbmc8L3A+JyA6ICcnfVxuICAgICAgICAke3dyb25nTGV0dGVycy5tYXAobGV0dGVyID0+IGA8c3Bhbj4ke2xldHRlcn08L3NwYW4+YCl9ICAgICAgICBcbiAgICBgO1xuXG4gICAgLy9kaXNwbGF5IHBhcnRzXG5cbiAgICBmaWd1clBhcnRzLmZvckVhY2goKHBhcnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gd3JvbmdMZXR0ZXJzLmxlbmd0aDtcblxuICAgICAgICBpZiAoaW5kZXggPCBlcnJvcikge1xuICAgICAgICAgICAgcGFydC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9jaGVjayBsb3N0XG5cbiAgICBpZiAod3JvbmdMZXR0ZXJzLmxlbmd0aCA9PT0gZmlndXJQYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZmluYWxNZXNzYWdlLmlubmVyVGV4dCA9ICdZb3UgaGF2ZSBiZWVuIGV4ZWN1dGlvbiEnO1xuICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cblxufVxuXG5cbi8vaW5wdXQgbGV0dGVyXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG5cbiAgICBpZiAoZS5rZXlDb2RlID49IDY1ICYgZS5rZXlDb2RlIDw9IDkwKSB7XG4gICAgICAgIGNvbnN0IGxldHRlciA9IGUua2V5O1xuXG4gICAgICAgIGlmIChzZWxlY3RlZFdvcmQuaW5jbHVkZXMobGV0dGVyKSkge1xuICAgICAgICAgICAgaWYgKCFjb3JyZWN0TGV0dGVycy5pbmNsdWRlcyhsZXR0ZXIpKSB7XG4gICAgICAgICAgICAgICAgY29ycmVjdExldHRlcnMucHVzaChsZXR0ZXIpO1xuXG4gICAgICAgICAgICAgICAgZGlzcGxheVdvcmQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF3cm9uZ0xldHRlcnMuaW5jbHVkZXMobGV0dGVyKSkge1xuICAgICAgICAgICAgICAgIHdyb25nTGV0dGVycy5wdXNoKGxldHRlcik7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVXcm9uZ0xldHRlcnMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59KTtcblxuXG5cbi8vcGxheSBhZ2FpblxuXG5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY29ycmVjdExldHRlcnMuc3BsaWNlKDApO1xuICAgIHdyb25nTGV0dGVycy5zcGxpY2UoMClcblxuICAgIHNlbGVjdGVkV29yZCA9IHdvcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdvcmRzLmxlbmd0aCldO1xuXG4gICAgZGlzcGxheVdvcmQoKTtcblxuICAgIHVwZGF0ZVdyb25nTGV0dGVycygpO1xuXG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxufSlcblxuXG5cblxuXG5cblxuZGlzcGxheVdvcmQoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });