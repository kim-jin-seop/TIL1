(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{411:function(t,s,a){"use strict";a.r(s);var n=a(56),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"퀵-정렬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#퀵-정렬"}},[t._v("#")]),t._v(" 퀵 정렬")]),t._v(" "),a("ul",[a("li",[t._v("퀵 정렬은 분할 정복 알고리즘이다.")]),t._v(" "),a("li",[t._v("분할을 하는데, 정확히 반을 가르지 않고 정해진 피벗으로 가른다.")]),t._v(" "),a("li",[t._v("최악의 경우 O(n^2)의 시간복잡도를 갖는다.")]),t._v(" "),a("li",[t._v("보통 일반적으로 O(nlogn)이 된다.")])]),t._v(" "),a("h2",{attrs:{id:"분할과-정복"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#분할과-정복"}},[t._v("#")]),t._v(" 분할과 정복?")]),t._v(" "),a("p",[t._v("여기서 의미하는 분할과 정복은 데이터가 들어있는 배열 혹은 리스트를 쪼개고(분할) 그리고 그 쪼갠 리스트를 정렬(정복)하며 다시 묶어주는 것을 의미한다."),a("br"),t._v("\n퀵정렬의 경우 pivot을 기준으로 정렬을 하며 분할을 수행함.")]),t._v(" "),a("h2",{attrs:{id:"구현-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구현-방법"}},[t._v("#")]),t._v(" 구현 방법")]),t._v(" "),a("ol",[a("li",[t._v("pivot을 정해준다.(분할할 지점)")]),t._v(" "),a("li",[t._v("pivot을 기준으로 왼쪽은 작은거 오른쪽은 큰게 오도록 설정한다.(pivot보다, 오름차순 정렬시)")]),t._v(" "),a("li",[t._v("피벗을 적절한 위치로 옮겨준다.")]),t._v(" "),a("li",[t._v("피벗 기준 양 옆의 분할된 배열에 1번부터 3번을 반복 시행한다.(모든 값을 다 쪼갤 때 까지)")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("partition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pivot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pivot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" pivot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pivot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickSort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pivot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("partition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickSort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pivot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickSort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pivot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br")])]),a("h2",{attrs:{id:"퀵정렬의-특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#퀵정렬의-특징"}},[t._v("#")]),t._v(" 퀵정렬의 특징")]),t._v(" "),a("ul",[a("li",[t._v("시간복잡도는 O(nlogn) -> 데이터가 한번 분할될 때마다 모두 n개의 데이터를 확인해서 적절 위치에 넣고 logn으로 분할 되기 때문에")]),t._v(" "),a("li",[t._v("시간복잡도가 최악의 경우 O(n^2)이 될 수 있음. -> 정해진 피벗이 항상 왼쪽이나 오른쪽으로만 붙어있을 때")]),t._v(" "),a("li",[t._v("빠르고 자신의 배열 한 곳에서만 처리하므로 메모리의 낭비가 없음.")]),t._v(" "),a("li",[t._v("분할이 어찌 되느냐가 성능에 대한 주요 포인트임(피벗을 어떻게 잡을지를 잘 결정해주면 해결 가능)")])])])}),[],!1,null,null,null);s.default=r.exports}}]);