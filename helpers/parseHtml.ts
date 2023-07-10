export default {
  directives: {
    'parse-html': {
      
    }
  }
};

const htmlParse = {
    mounted(el, binding) {
        el.innerHTML = binding.value;
      },
      updated(el, binding) {
        el.innerHTML = binding.value;
      }
}