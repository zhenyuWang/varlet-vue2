import{n as a}from"./index.6222f8b9.js";import"./vendor.4f0eb98f.js";var p=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"varlet-site-doc"},[e("h1",[t._v("TimePicker")]),t._m(0),e("div",{staticClass:"card"},[e("h3",[t._v("Install")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { TimePicker } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

Vue.use(TimePicker)
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Basic Usage")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-time-picker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"date"')]),t._v(" />")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { ref } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("setup")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
    `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" date = ref("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'11:20'")]),t._v(`)

    `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      date
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("24hr Format")]),t._m(1),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-time-picker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"date"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("format")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"24hr"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("shadow")]),t._v(" />")]),t._v(`
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Show Seconds")]),t._m(2),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-time-picker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"date"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("format")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"24hr"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("use-seconds")]),t._v(" />")]),t._v(`
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Readonly")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-time-picker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"date"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("shadow")]),t._v(" />")]),t._v(`
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Time Limit")]),t._m(3),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-time-picker")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"date"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("format")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"24hr"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("use-seconds")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("min")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"2:28:38"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("max")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"19:40:22"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":allowed-time")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"allowedTime"')]),t._v(`
/>`)]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { ref } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("setup")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
    `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" date = ref("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'07:10:12'")]),t._v(`)

    `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` allowedTime = {
      `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("hours")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("hour")]),t._v(")")]),t._v(` {
        `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" hour % "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(" === "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(`
      },
      `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("minutes")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("minute")]),t._v(")")]),t._v(` {
        `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" minute % "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("15")]),t._v(" !== "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(`
      },
      `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("seconds")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("second")]),t._v(")")]),t._v(` {
        `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" second % "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(" !== "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(`
      },
    }

    `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      date,
      allowedTime
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Custom")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-time-picker")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"date"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("header-color")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"purple"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"#7bb872"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("min")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"2:28:38"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("max")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"19:40:22"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("shadow")]),t._v(`
  @`),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("change")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"change"')]),t._v(`
/>`)]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { ref } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("setup")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
    `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" date = ref("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'05:10'")]),t._v(`)

    `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" change = "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("time")]),t._v(") =>")]),t._v(` {
      `),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(`.log(time)
    }

    `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      date,
      change
    }
  }
}
`)])])])],1),e("h2",[t._v("API")]),t._m(4),t._m(5),t._m(6),t._m(7)])},c=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Intro")]),e("p",[t._v("Used to select a time.")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("Use "),e("code",{pre:!0},[t._v("format")]),t._v(" prop to change the format of the picker. The default value of "),e("code",{pre:!0},[t._v("format")]),t._v(" is "),e("code",{pre:!0},[t._v("ampm")]),t._v(".")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("use "),e("code",{pre:!0},[t._v("use-seconds")]),t._v(" prop to show seconds")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("Use "),e("code",{pre:!0},[t._v("min")]),t._v(", "),e("code",{pre:!0},[t._v("max")]),t._v(" and "),e("code",{pre:!0},[t._v("allowed-time")]),t._v(" prop to allow the maximum and minimum time.")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Props")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Description")]),e("th",[t._v("Type")]),e("th",[t._v("Default")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("v-model")])]),e("td",[t._v("Selected time\uFF08ISO 8601 format, "),e("code",{pre:!0},[t._v("HH:mm")]),t._v(" or "),e("code",{pre:!0},[t._v("HH:mm:ss")]),t._v("\uFF09")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("format")])]),e("td",[t._v("Picker type, optional values "),e("code",{pre:!0},[t._v("ampm, 24hr")])]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("ampm")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color")])]),e("td",[t._v("Picker color")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("#2979ff")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("header-color")])]),e("td",[t._v("Color of picker header. If not specified it will use the color defined by color prop or the default picker color.")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("#2979ff")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("shadow")])]),e("td",[t._v("Whether to add a shadow")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("min")])]),e("td",[t._v("Minimum allowed time (ISO 8601 format)")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("max")])]),e("td",[t._v("Maximum allowed time (ISO 8601 format)")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("allowed-time")])]),e("td",[t._v("Restricts which time can be selected")]),e("td",[e("em",[t._v("AllowedTime")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("readonly")])]),e("td",[t._v("Readonly")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("use-seconds")])]),e("td",[t._v("Whether to display seconds")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("TimePicker AllowedTime")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Description")]),e("th",[t._v("Type")]),e("th",[t._v("Default")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("hours")])]),e("td",[t._v("Limit the optional "),e("code",{pre:!0},[t._v("hour")])]),e("td",[e("em",[t._v("Function: hour => boolean")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("minutes")])]),e("td",[t._v("Limit the optional "),e("code",{pre:!0},[t._v("minute")])]),e("td",[e("em",[t._v("Function: minute => boolean")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("seconds")])]),e("td",[t._v("Limit the optional "),e("code",{pre:!0},[t._v("second")])]),e("td",[e("em",[t._v("Function: second => boolean")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Events")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Event")]),e("th",[t._v("Description")]),e("th",[t._v("arguments")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("change")])]),e("td",[t._v("Emitted after time changed")]),e("td",[e("code",{pre:!0},[t._v("value: string")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Style Variables")]),e("p",[t._v("Here are the CSS variables used by the component, Styles can be customized using "),e("a",{attrs:{href:"#/en-US/style-provider"}},[t._v("StyleProvider")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),e("th",[t._v("Default")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-border-radius")])]),e("td",[e("code",{pre:!0},[t._v("4px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-font-size")])]),e("td",[e("code",{pre:!0},[t._v("var(--font-size-md)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-min-width")])]),e("td",[e("code",{pre:!0},[t._v("290px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-height")])]),e("td",[e("code",{pre:!0},[t._v("385px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-title-padding")])]),e("td",[e("code",{pre:!0},[t._v("16px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-title-color")])]),e("td",[e("code",{pre:!0},[t._v("#fff")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-title-background")])]),e("td",[e("code",{pre:!0},[t._v("var(--color-primary)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-title-time-font-size")])]),e("td",[e("code",{pre:!0},[t._v("50px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-title-time-margin")])]),e("td",[e("code",{pre:!0},[t._v("0 5px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-title-ampm-margin-left")])]),e("td",[e("code",{pre:!0},[t._v("5px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-left")])]),e("td",[e("code",{pre:!0},[t._v("27px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-right")])]),e("td",[e("code",{pre:!0},[t._v("27px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-top")])]),e("td",[e("code",{pre:!0},[t._v("27px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-bottom")])]),e("td",[e("code",{pre:!0},[t._v("27px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-container-width")])]),e("td",[e("code",{pre:!0},[t._v("270px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-container-height")])]),e("td",[e("code",{pre:!0},[t._v("270px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-container-background")])]),e("td",[e("code",{pre:!0},[t._v("#e0e0e0")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-hand-height")])]),e("td",[e("code",{pre:!0},[t._v("calc(50% - 4px)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-hand-width")])]),e("td",[e("code",{pre:!0},[t._v("2px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-hand-bottom")])]),e("td",[e("code",{pre:!0},[t._v("50%")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-hand-left")])]),e("td",[e("code",{pre:!0},[t._v("calc(50% - 1px)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-hand-background")])]),e("td",[e("code",{pre:!0},[t._v("var(--color-primary)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-hand-border-color")])]),e("td",[e("code",{pre:!0},[t._v("var(--color-primary)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-hand-before-width")])]),e("td",[e("code",{pre:!0},[t._v("10px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-hand-before-height")])]),e("td",[e("code",{pre:!0},[t._v("10px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-hand-before-border-width")])]),e("td",[e("code",{pre:!0},[t._v("2px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-hand-after-width")])]),e("td",[e("code",{pre:!0},[t._v("4px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-hand-after-height")])]),e("td",[e("code",{pre:!0},[t._v("4px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-item-height")])]),e("td",[e("code",{pre:!0},[t._v("32px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-item-width")])]),e("td",[e("code",{pre:!0},[t._v("32px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-item-active-background")])]),e("td",[e("code",{pre:!0},[t._v("var(--color-primary)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-item-active-color")])]),e("td",[e("code",{pre:!0},[t._v("#fff")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-clock-item-disable-color")])]),e("td",[e("code",{pre:!0},[t._v("rgba(0, 0, 0, 0.26)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-inner-left")])]),e("td",[e("code",{pre:!0},[t._v("36px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-inner-right")])]),e("td",[e("code",{pre:!0},[t._v("36px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-inner-top")])]),e("td",[e("code",{pre:!0},[t._v("36px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-inner-bottom")])]),e("td",[e("code",{pre:!0},[t._v("36px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--time-picker-body-background")])]),e("td",[e("code",{pre:!0},[t._v("#fff")])])])])])])}];const v={components:{}},s={};var _=a(v,p,c,!1,l,null,null,null);function l(t){for(let r in s)this[r]=s[r]}var o=function(){return _.exports}();export{o as default};