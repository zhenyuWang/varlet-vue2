import{n as a}from"./index.6222f8b9.js";import"./vendor.4f0eb98f.js";var v=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"varlet-site-doc"},[e("h1",[t._v("\u6587\u4EF6\u4E0A\u4F20")]),t._m(0),e("div",{staticClass:"card"},[e("h3",[t._v("\u5F15\u5165")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Uploader } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

Vue.use(Uploader)
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("\u57FA\u672C\u4F7F\u7528")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("after-read")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleAfterRead"')]),t._v("/>")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("files")]),t._v(`: []
  }),
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleAfterRead")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("file")]),t._v(")")]),t._v(` {
      `),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(`.log(file)
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("\u6587\u4EF6\u9884\u89C8")]),e("p",[t._v("\u901A\u8FC7\u5206\u6790\u6587\u4EF6\u7684 url \u540E\u7F00\u540D\u5224\u65AD\u6587\u4EF6\u7C7B\u578B\uFF0C\u652F\u6301\u56FE\u7247\u548C\u89C6\u9891\u9884\u89C8\u3002")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v("/>")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("files")]),t._v(`: [
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://www.runoob.com/try/demo_source/mov_bbb.mp4'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cover.jpg'")]),t._v(`
      }
    ]
  })
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("\u4E0A\u4F20\u72B6\u6001")]),t._m(1),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("after-read")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleAfterRead"')]),t._v("/>")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("files")]),t._v(`: [
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("state")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'loading'")]),t._v(`
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("state")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'success'")]),t._v(`
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("state")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'error'")]),t._v(`
      }
    ]
  }),
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleAfterRead")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("file")]),t._v(")")]),t._v(` {
      file.state = `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'loading'")]),t._v(`

      `),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` {
        file.state = `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'success'")]),t._v(`
      }, `),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1000")]),t._v(`)
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("\u6587\u4EF6\u6570\u91CF\u9650\u5236")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":maxlength")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"1"')]),t._v("/>")]),t._v(`
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("\u6587\u4EF6\u5927\u5C0F\u9650\u5236")]),t._m(2),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":maxsize")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"1024"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("oversize")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleOversize"')]),t._v(" />")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(`({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("files")]),t._v(`: []
  }),
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleOversize")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      Snackbar.warning(`),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236'")]),t._v(`)
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("\u4E0A\u4F20\u9884\u5904\u7406")]),t._m(3),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("before-read")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleBeforeRead"')]),t._v("/>")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("files")]),t._v(`: []
  }),
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleBeforeRead")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (file.file.size <= "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(" * "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1024")]),t._v(" * "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1024")]),t._v(`) {
        Snackbar.success(`),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u6587\u4EF6\u5C0F\u4E8E1M\uFF0C\u4E0A\u4F20\u6210\u529F'")]),t._v(`)
        `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`
      } `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(` {
        Snackbar.warning(`),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u6587\u4EF6\u5927\u4E8E1M\uFF0C\u4E0D\u80FD\u4E0A\u4F20'")]),t._v(`)
        `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`
      }
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("\u7981\u7528")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v("/>")]),t._v(`
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("\u53EA\u8BFB")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v("/>")]),t._v(`
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("\u5220\u9664\u524D\u5904\u7406")]),t._m(4),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("before-remove")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleBeforeRemove"')]),t._v(" />")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Dialog } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("files")]),t._v(`: [
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`,
      }
    ]
  }),
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleBeforeRemove")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" action = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("await")]),t._v(` Dialog({
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u662F\u5426\u5220\u9664?'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u5220\u9664\u540E\u65E0\u6CD5\u64A4\u56DE'")]),t._v(`
      })

      `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" action === "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'confirm'")]),t._v(`
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(">")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("\u4E0A\u4F20"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(">")]),t._v(`
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("\u5B57\u6BB5\u6821\u9A8C")]),t._m(5),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":rules")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v(`"[(v, u) => u.getError(v).length === 0 || '\u5B58\u5728\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6']"`)]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(`
/>`)]),t._v(`
`)])])])],1),e("h2",[t._v("API")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12)])},_=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("\u4ECB\u7ECD")]),e("p",[t._v("\u63D0\u4F9B\u4E86\u6587\u4EF6\u8BFB\u53D6\u3001\u56FE\u7247/\u89C6\u9891\u9884\u89C8\u80FD\u529B\u3002 \u901A\u8FC7\u76D1\u542C "),e("code",{pre:!0},[t._v("after-read")]),t._v(" \u4E8B\u4EF6\u83B7\u53D6\u6587\u4EF6\u4E0A\u4F20\u670D\u52A1\u5668\u3002")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u63D0\u4F9B\u4E86 "),e("code",{pre:!0},[t._v("loading")]),t._v("\u3001 "),e("code",{pre:!0},[t._v("success")]),t._v("\u3001 "),e("code",{pre:!0},[t._v("error")]),t._v(" \u4E09\u79CD\u4E0A\u4F20\u72B6\u6001\uFF0C\u5E76\u63D0\u4F9B\u4E86\u5DE5\u5177\u51FD\u6570\u5FEB\u901F\u83B7\u53D6\u5BF9\u5E94\u72B6\u6001\u7684\u6587\u4EF6\u3002")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u8D85\u8FC7\u9650\u5236\u4F1A\u88AB\u963B\u6B62\u8BFB\u53D6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76D1\u542C "),e("code",{pre:!0},[t._v("oversize")]),t._v(" \u4E8B\u4EF6\u83B7\u53D6\u6587\u4EF6\u3002")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u901A\u8FC7\u6CE8\u518C "),e("code",{pre:!0},[t._v("before-read")]),t._v(" \u4E8B\u4EF6\u5BF9\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u6587\u4EF6\u8BFB\u53D6\u3002")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u5220\u9664\u6587\u4EF6\u4E4B\u524D\u4F1A\u89E6\u53D1 "),e("code",{pre:!0},[t._v("before-remove")]),t._v(" \u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u5220\u9664\u64CD\u4F5C\u3002")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u901A\u8FC7\u4F20\u5165\u4E00\u4E2A\u6821\u9A8C\u5668\u6570\u7EC4\u53EF\u4EE5\u5BF9\u503C\u8FDB\u884C\u6821\u9A8C\uFF0C\u6821\u9A8C\u5668\u8FD4\u56DE "),e("code",{pre:!0},[t._v("true")]),t._v(" \u5219\u4E3A\u6821\u9A8C\u901A\u8FC7\u3002 \u4EE5\u5916\u7684\u503C\u5C06\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A\u3002 \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570\u96C6\u5408\uFF0C\u53EF\u4EE5\u5FEB\u901F\u83B7\u53D6\u7B26\u5408\u72B6\u6001\u7684\u6587\u4EF6\u96C6\u5408\u3002")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("\u5C5E\u6027")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u7C7B\u578B")]),e("th",[t._v("\u9ED8\u8BA4\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("v-model")])]),e("td",[t._v("\u6587\u4EF6\u5217\u8868")]),e("td",[e("em",[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("accept")])]),e("td",[t._v("\u63A5\u53D7\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u4E0E\u539F\u751F\u5C5E\u6027\u4E00\u81F4")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("image/*")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("capture")])]),e("td",[t._v("\u83B7\u53D6\u6587\u4EF6\u65B9\u5F0F\uFF0C\u4E0E\u539F\u751F\u5C5E\u6027\u4E00\u81F4")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("multiple")])]),e("td",[t._v("\u662F\u5426\u591A\u9009\u6587\u4EF6")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("readonly")])]),e("td",[t._v("\u662F\u5426\u53EA\u8BFB")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("disabled")])]),e("td",[t._v("\u662F\u5426\u7981\u7528")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("removable")])]),e("td",[t._v("\u662F\u5426\u53EF\u4EE5\u5220\u9664")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("true")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("maxlength")])]),e("td",[t._v("\u6700\u5927\u6587\u4EF6\u4E2A\u6570")]),e("td",[e("em",[t._v("string | number")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("maxsize")])]),e("td",[t._v("\u6700\u5927\u6587\u4EF6\u5927\u5C0F")]),e("td",[e("em",[t._v("string | number")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("previewed")])]),e("td",[t._v("\u662F\u5426\u5141\u8BB8\u9884\u89C8")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("true")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("ripple")])]),e("td",[t._v("\u662F\u5426\u5F00\u542F\u6C34\u6CE2\u7EB9")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("true")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("validate-trigger")])]),e("td",[t._v("\u89E6\u53D1\u9A8C\u8BC1\u7684\u65F6\u673A\uFF0C \u53EF\u9009\u503C\u4E3A "),e("code",{pre:!0},[t._v("onChange")]),t._v(" "),e("code",{pre:!0},[t._v("onRemove")])]),e("td",[e("em",[t._v("ValidateTriggers[]")])]),e("td",[e("code",{pre:!0},[t._v("['onChange', 'onRemove']")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("rules")])]),e("td",[t._v("\u9A8C\u8BC1\u89C4\u5219\uFF0C\u8FD4\u56DE "),e("code",{pre:!0},[t._v("true")]),t._v(" \u8868\u793A\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5176\u4F59\u7684\u503C\u5219\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A")]),e("td",[e("em",[t._v("Array<(v: VarFile, u: VarFileUtils) => any>")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("VarFile")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u7C7B\u578B")]),e("th",[t._v("\u9ED8\u8BA4\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("file")])]),e("td",[t._v("\u539F\u751F\u6587\u4EF6")]),e("td",[e("em",[t._v("File")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("name")])]),e("td",[t._v("\u6587\u4EF6\u540D")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("url")])]),e("td",[t._v("\u6587\u4EF6\u5730\u5740")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("cover")])]),e("td",[t._v("\u5C01\u9762\u56FE")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("fit")])]),e("td",[t._v("\u5C01\u9762\u56FE\u586B\u5145\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A "),e("code",{pre:!0},[t._v("fill")]),t._v(" "),e("code",{pre:!0},[t._v("contain")]),t._v(" "),e("code",{pre:!0},[t._v("cover")]),t._v(" "),e("code",{pre:!0},[t._v("none")]),t._v(" "),e("code",{pre:!0},[t._v("scale-down")])]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("state")])]),e("td",[t._v("\u6587\u4EF6\u4E0A\u4F20\u72B6\u6001\uFF0C\u53EF\u9009\u503C\u4E3A "),e("code",{pre:!0},[t._v("loading")]),t._v(" "),e("code",{pre:!0},[t._v("success")]),t._v(" "),e("code",{pre:!0},[t._v("error")])]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("VarFileUtils")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u65B9\u6CD5\u540D")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u8FD4\u56DE\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("getLoading")])]),e("td",[t._v("\u83B7\u53D6 "),e("code",{pre:!0},[t._v("state")]),t._v(" \u7B49\u4E8E "),e("code",{pre:!0},[t._v("loading")]),t._v(" \u7684\u6587\u4EF6\u96C6\u5408")]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("getSuccess")])]),e("td",[t._v("\u83B7\u53D6 "),e("code",{pre:!0},[t._v("state")]),t._v(" \u7B49\u4E8E "),e("code",{pre:!0},[t._v("success")]),t._v(" \u7684\u6587\u4EF6\u96C6\u5408")]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("getError")])]),e("td",[t._v("\u83B7\u53D6 "),e("code",{pre:!0},[t._v("state")]),t._v(" \u7B49\u4E8E "),e("code",{pre:!0},[t._v("error")]),t._v(" \u7684\u6587\u4EF6\u96C6\u5408")]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("\u65B9\u6CD5")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u65B9\u6CD5\u540D")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u8FD4\u56DE\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("getLoading")])]),e("td",[t._v("\u83B7\u53D6 "),e("code",{pre:!0},[t._v("state")]),t._v(" \u7B49\u4E8E "),e("code",{pre:!0},[t._v("loading")]),t._v(" \u7684\u6587\u4EF6\u96C6\u5408")]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("getSuccess")])]),e("td",[t._v("\u83B7\u53D6 "),e("code",{pre:!0},[t._v("state")]),t._v(" \u7B49\u4E8E "),e("code",{pre:!0},[t._v("success")]),t._v(" \u7684\u6587\u4EF6\u96C6\u5408")]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("getError")])]),e("td",[t._v("\u83B7\u53D6 "),e("code",{pre:!0},[t._v("state")]),t._v(" \u7B49\u4E8E "),e("code",{pre:!0},[t._v("error")]),t._v(" \u7684\u6587\u4EF6\u96C6\u5408")]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("validate")])]),e("td",[t._v("\u89E6\u53D1\u6821\u9A8C")]),e("td",[e("code",{pre:!0},[t._v("-")])]),e("td",[e("code",{pre:!0},[t._v("valid: Promise<boolean>")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("resetValidation")])]),e("td",[t._v("\u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F")]),e("td",[e("code",{pre:!0},[t._v("-")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("reset")])]),e("td",[t._v("\u6E05\u7A7A\u7ED1\u5B9A\u7684\u503C(\u8BBE\u7F6E\u4E3A "),e("code",{pre:!0},[t._v("[]")]),t._v(")\u548C\u6821\u9A8C\u4FE1\u606F")]),e("td",[e("code",{pre:!0},[t._v("-")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("\u4E8B\u4EF6")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u4E8B\u4EF6\u540D")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u53C2\u6570")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("before-read")])]),e("td",[t._v("\u6587\u4EF6\u8BFB\u53D6\u524D\u89E6\u53D1\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u6587\u4EF6\u8BFB\u53D6(\u652F\u6301 promise)")]),e("td",[e("code",{pre:!0},[t._v("file: VarFile")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("after-read")])]),e("td",[t._v("\u6587\u4EF6\u8BFB\u53D6\u540E\u89E6\u53D1")]),e("td",[e("code",{pre:!0},[t._v("file: VarFile")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("oversize")])]),e("td",[t._v("\u6587\u4EF6\u8D85\u8FC7\u9650\u5236\u5927\u5C0F\u65F6\u89E6\u53D1")]),e("td",[e("code",{pre:!0},[t._v("file: VarFile")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("before-remove")])]),e("td",[t._v("\u6587\u4EF6\u5220\u9664\u524D\u89E6\u53D1\uFF0C\u8FD4\u56DE\u5047\u503C\u963B\u6B62\u6587\u4EF6\u5220\u9664(\u652F\u6301 promise)")]),e("td",[e("code",{pre:!0},[t._v("file: VarFile")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("remove")])]),e("td",[t._v("\u6587\u4EF6\u5220\u9664\u65F6\u89E6\u53D1")]),e("td",[e("code",{pre:!0},[t._v("file: VarFile")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("\u63D2\u69FD")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u63D2\u69FD\u540D")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u53C2\u6570")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("default")])]),e("td",[t._v("\u4E0A\u4F20\u6309\u94AE\u5185\u5BB9")]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("\u6837\u5F0F\u53D8\u91CF")]),e("p",[t._v("\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),e("a",{attrs:{href:"#/zh-CN/style-provider"}},[t._v("StyleProvider \u7EC4\u4EF6")]),t._v("\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236")]),e("table",[e("thead",[e("tr",[e("th",[t._v("\u53D8\u91CF\u540D")]),e("th",[t._v("\u9ED8\u8BA4\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-action-background")])]),e("td",[e("code",{pre:!0},[t._v("#f7f8fa")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-action-icon-color")])]),e("td",[e("code",{pre:!0},[t._v("#888")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-action-icon-size")])]),e("td",[e("code",{pre:!0},[t._v("24px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-action-margin")])]),e("td",[e("code",{pre:!0},[t._v("0 10px 10px 0")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-size")])]),e("td",[e("code",{pre:!0},[t._v("80px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-margin")])]),e("td",[e("code",{pre:!0},[t._v("0 10px 10px 0")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-name-background")])]),e("td",[e("code",{pre:!0},[t._v("#f7f8fa")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-name-color")])]),e("td",[e("code",{pre:!0},[t._v("#888")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-name-font-size")])]),e("td",[e("code",{pre:!0},[t._v("12px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-name-padding")])]),e("td",[e("code",{pre:!0},[t._v("10px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-text-align")])]),e("td",[e("code",{pre:!0},[t._v("center")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-close-background")])]),e("td",[e("code",{pre:!0},[t._v("rgba(0, 0, 0, 0.3)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-close-size")])]),e("td",[e("code",{pre:!0},[t._v("24px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-close-icon-font-size")])]),e("td",[e("code",{pre:!0},[t._v("14px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-close-icon-color")])]),e("td",[e("code",{pre:!0},[t._v("#fff")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-cover-fit")])]),e("td",[e("code",{pre:!0},[t._v("cover")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-cover-background")])]),e("td",[e("code",{pre:!0},[t._v("#f7f8fa")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-preview-video-width")])]),e("td",[e("code",{pre:!0},[t._v("100vw")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-preview-video-height")])]),e("td",[e("code",{pre:!0},[t._v("100vw")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-indicator-height")])]),e("td",[e("code",{pre:!0},[t._v("4px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-indicator-normal-color")])]),e("td",[e("code",{pre:!0},[t._v("var(--color-disabled)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-indicator-success-color")])]),e("td",[e("code",{pre:!0},[t._v("var(--color-success)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-indicator-error-color")])]),e("td",[e("code",{pre:!0},[t._v("var(--color-danger)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-disabled-color")])]),e("td",[e("code",{pre:!0},[t._v("#ddd")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-disabled-text-color")])]),e("td",[e("code",{pre:!0},[t._v("var(--color-text-disabled)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-loading-background")])]),e("td",[e("code",{pre:!0},[t._v("linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))")])])])])])])}];const l={components:{}},s={};var p=a(l,v,_,!1,c,null,null,null);function c(t){for(let r in s)this[r]=s[r]}var u=function(){return p.exports}();export{u as default};