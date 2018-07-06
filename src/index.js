import style from './index.css'
function install(Vue) {
	if (install.installed) return;
  Vue.directive('tips', {
    inserted: function (el, {value}) {
      const type = typeof value
      if (type === 'string' || type === 'number') {
        el.setAttribute('aria-tips', value)
        el.classList.add(style.tips)
      } else if (type === 'object') {
        el.setAttribute('aria-info', value['message'] || '')
        el.classList.add(style.info)
      }
    },
    componentUpdated (el, {value}) {
      const type = typeof value
      if (type === 'string' || type === 'number') {
        el.setAttribute('aria-tips', value)
      } else if (type === 'object') {
        el.setAttribute('aria-info', value['message'] || '')
        el.classList.add(style.info)
        el.classList.toggle(style.show, value['show'] || false)
        console.log(value)
      }
    }
  })
  install.installed = true;
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
  console.log('GlobalVue')
}

console.log(window.Vue)
export default plugin
