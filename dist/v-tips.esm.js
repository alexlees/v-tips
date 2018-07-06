function styleInject(css, ref) {
  if ( ref === void 0 ) { ref = {}; }
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".index_tips__2GSni{\n  position: relative;\n}\n.index_tips__2GSni:hover::before , .index_tips__2GSni:active::before, .index_tips__2GSni:focus:before{\n  display: block;\n  border-bottom-color: #1b1f23;\n  opacity: 1;\n  transition: opacity 1s;\n}\n.index_tips__2GSni:hover::after, .index_tips__2GSni:active::after, .index_tips__2GSni:focus::after{\n  display: block;\n  opacity: 1;\n  transition: opacity 1s;\n}\n.index_tips__2GSni::before{\n  display: none;\n  position: absolute;\n  bottom: -7px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  color: #1b1f23;\n  content: '';\n  border: 6px solid transparent;\n  opacity: 0;\n}\n.index_tips__2GSni::after{\n  display: none;\n  content: attr(aria-tips);\n  position: absolute;\n  top: 100%;\n  min-width: 50%;\n  margin-top: 6px;\n  padding: 6px 10px;\n  line-height: 1.5;\n  background-color: #1b1f23;\n  color: #ffffff;\n\n  font: normal normal 11px/1.5 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n  font-style: normal;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: normal;\n  font-variant-east-asian: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-size: 11px;\n  line-height: 1.5;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  -webkit-font-smoothing: subpixel-antialiased;\n  border-radius: 3px;\n  text-align: center;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: break-word;\n  white-space: pre;\n  pointer-events: none;\n  opacity: 0;\n}\n\n\n.index_info__1Mzor{\n  position: relative;\n}\n\n.index_info__1Mzor::before{\n  display: none;\n  position: absolute;\n  bottom: -7px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  color: #1b1f23;\n  content: '';\n  border: 6px solid transparent;\n  opacity: 0;\n}\n.index_info__1Mzor::after{\n  display: none;\n  content: attr(aria-info);\n  position: absolute;\n  top: 100%;\n  min-width: 50%;\n  margin-top: 6px;\n  padding: 6px 10px;\n  line-height: 1.5;\n  background-color: #1b1f23;\n  color: #ffffff;\n\n  font: normal normal 11px/1.5 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n  font-style: normal;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: normal;\n  font-variant-east-asian: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-size: 11px;\n  line-height: 1.5;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  -webkit-font-smoothing: subpixel-antialiased;\n  border-radius: 3px;\n  text-align: center;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: break-word;\n  white-space: pre;\n  pointer-events: none;\n  opacity: 0;\n}\n.index_show__2_6v0::before{\n  display: block;\n  border-bottom-color: #1b1f23;\n  opacity: 1;\n}\n.index_show__2_6v0::after{\n  display: block;\n  opacity: 1;\n}\n";
var style = {"tips":"index_tips__2GSni","info":"index_info__1Mzor","show":"index_show__2_6v0"};
styleInject(css);

function install(Vue) {
	if (install.installed) { return; }
  Vue.directive('tips', {
    inserted: function (el, ref) {
      var value = ref.value;

      var type = typeof value;
      if (type === 'string' || type === 'number') {
        el.setAttribute('aria-tips', value);
        el.classList.add(style.tips);
      } else if (type === 'object') {
        el.setAttribute('aria-info', value['message'] || '');
        el.classList.add(style.info);
      }
    },
    componentUpdated: function componentUpdated (el, ref) {
      var value = ref.value;

      var type = typeof value;
      if (type === 'string' || type === 'number') {
        el.setAttribute('aria-tips', value);
      } else if (type === 'object') {
        el.setAttribute('aria-info', value['message'] || '');
        el.classList.add(style.info);
        el.classList.toggle(style.show, value['show'] || false);
        console.log(value);
      }
    }
  });
  install.installed = true;
}

var plugin = {
	install: install,
};

var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
  console.log('GlobalVue');
}

console.log(window.Vue);

export default plugin;
