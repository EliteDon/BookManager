import Verify from './components/index.js'

const components = [
    Verify,
];
const install = function (Vue, options = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Verify,
}
