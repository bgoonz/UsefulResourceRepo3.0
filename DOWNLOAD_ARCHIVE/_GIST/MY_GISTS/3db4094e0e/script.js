Vue.component("filter-control", {
  template: "#filter-control-template",
  props: ["label", "filterKey", "initialValue", "min", "max"],

  data() {
    return {
      number: 0,
      unit: "",
    };
  },
  computed: {
    value() {
      return (this.number || 0) + this.unit;
    },
  },
  watch: {
    value() {
      this.$emit("update", this.filterKey, this.value);
    },
  },
  created() {
    // parse an inital value like "50%" to get 50 and "%"
    let parsedInitialValue = this.initialValue.toString().match(/(\d+)(\D*)/);
    if (parsedInitialValue && parsedInitialValue.length === 3) {
      this.number = +parsedInitialValue[1];
      this.unit = parsedInitialValue[2];
    }
  },
});

new Vue({
  el: "#app",
  data: {
    hueRotate: "0deg",
    brightness: "70%",
    contrast: "100%",
    saturate: "150%",
    codeLineEls: document.querySelectorAll(".blob-code"),
  },
  computed: {
    cssFilterValue() {
      let filters = [];
      this.appendFilterPart(filters, "hue-rotate", this.hueRotate, "0deg");
      this.appendFilterPart(filters, "brightness", this.brightness, "100%");
      this.appendFilterPart(filters, "contrast", this.contrast, "100%");
      this.appendFilterPart(filters, "saturate", this.saturate, "100%");

      return filters.join(" ") || "none";
    },
    cssFilterDisplay() {
      return (
        "body .gist .blob-code {\n" +
        "    filter: " +
        this.cssFilterValue +
        ";\n" +
        "}"
      );
    },
  },
  watch: {
    cssFilterValue() {
      this.setCodeLineStyles();
    },
  },
  created() {
    this.setCodeLineStyles();
  },
  methods: {
    updateValue: function (valueKey, value) {
      this[valueKey] = value;
    },
    appendFilterPart(filters, filterName, value, ignoreValue) {
      if (value !== ignoreValue) {
        filters.push(filterName + "(" + value + ")");
      }
    },
    setCodeLineStyles() {
      this.codeLineEls.forEach((el) => {
        el.style.filter = this.cssFilterValue;
      });
    },
  },
});
