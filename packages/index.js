// 入口
import uuButton from './uu-button.vue';
import uuSwitch from './uu-switch.vue';
import uuLink from './uu-link.vue';
import uuDialog from './uu-dialog.vue';
import './font/iconfont.css';
const components = [
	uuButton,
	uuSwitch,
	uuLink,
	uuDialog
]

const install = function (Vue) {
	// 注册组建
	components.forEach((item) => {
		Vue.component(item.name, item);
	})
}
// Vue 是可访问的全局变量时会自动调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default install;
