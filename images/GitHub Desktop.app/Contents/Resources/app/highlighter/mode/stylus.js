self.webpackChunk(["mode/stylus"],{40:function(a,b,c){(function(a){a(c(0))})(function(a){"use strict";function b(a){return a=a.sort(function(c,a){return a>c}),new RegExp("^(("+a.join(")|(")+"))\\b")}function c(a){for(var b={},c=0;c<a.length;++c)b[a[c]]=!0;return b}function d(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}a.defineMode("stylus",function(a){function q(a,b){if(ea=a.string.match(/(^[\w-]+\s*=\s*$)|(^\s*[\w-]+\s*=\s*[\w-])|(^\s*(\.|#|@|\$|\&|\[|\d|\+|::?|\{|\>|~|\/)?\s*[\w-]*([a-z0-9-]|\*|\/\*)(\(|,)?)/),b.context.line.firstWord=ea?ea[0].replace(/^\s*/,""):"",b.context.line.indent=a.indentation(),K=a.peek(),a.match("//"))return a.skipToEnd(),["comment","comment"];if(a.match("/*"))return b.tokenize=r,r(a,b);if("\""==K||"'"==K)return a.next(),b.tokenize=s(K),b.tokenize(a,b);if("@"==K)return a.next(),a.eatWhile(/[\w\\-]/),["def",a.current()];if("#"==K){if(a.next(),a.match(/^[0-9a-f]{6}|[0-9a-f]{3}/i))return["atom","atom"];if(a.match(/^[a-z][\w-]*/i))return["builtin","hash"]}return a.match(ca)?["meta","vendor-prefixes"]:a.match(/^-?[0-9]?\.?[0-9]/)?(a.eatWhile(/[a-z%]/i),["number","unit"]):"!"==K?(a.next(),[a.match(/^(important|optional)/i)?"keyword":"operator","important"]):"."==K&&a.match(/^\.[a-z][\w-]*/i)?["qualifier","qualifier"]:a.match(X)?("("==a.peek()&&(b.tokenize=t),["property","word"]):a.match(/^[a-z][\w-]*\(/i)?(a.backUp(1),["keyword","mixin"]):a.match(/^(\+|-)[a-z][\w-]*\(/i)?(a.backUp(1),["keyword","block-mixin"]):a.string.match(/^\s*&/)&&a.match(/^[-_]+[a-z][\w-]*/)?["qualifier","qualifier"]:a.match(/^(\/|&)(-|_|:|\.|#|[a-z])/)?(a.backUp(1),["variable-3","reference"]):a.match(/^&{1}\s*$/)?["variable-3","reference"]:a.match(aa)?["operator","operator"]:a.match(/^\$?[-_]*[a-z0-9]+[\w-]*/i)?a.match(/^(\.|\[)[\w-\'\"\]]+/i,!1)&&!z(a.current())?(a.match(/\./),["variable-2","variable-name"]):["variable-2","word"]:a.match(_)?["operator",a.current()]:/[:;,{}\[\]\(\)]/.test(K)?(a.next(),[null,K]):(a.next(),[null,null])}function r(a,b){for(var c,d=!1;null!=(c=a.next());){if(d&&"/"==c){b.tokenize=null;break}d="*"==c}return["comment","comment"]}function s(a){return function(b,c){for(var d,e=!1;null!=(d=b.next());){if(d==a&&!e){")"==a&&b.backUp(1);break}e=!e&&"\\"==d}return d!=a&&(e||")"==a)||(c.tokenize=null),["string","string"]}}function t(a,b){return a.next(),b.tokenize=a.match(/\s*[\"\')]/,!1)?null:s(")"),[null,"("]}function u(a,b,c,d){this.type=a,this.indent=b,this.prev=c,this.line=d||{firstWord:"",indent:0}}function v(a,b,c,d){return d=0<=d?d:O,a.context=new u(c,b.indentation()+d,a.context),c}function w(a,b){var c=a.context.indent-O;return b=b||!1,a.context=a.context.prev,b&&(a.context.indent=c),a.context.type}function x(a,b,c){return fa[c.context.type](a,b,c)}function y(a,b,c,d){for(var e=d||1;0<e;e--)c.context=c.context.prev;return x(a,b,c)}function z(a){return a.toLowerCase()in Q}function A(a){return a=a.toLowerCase(),a in S||a in $}function B(a){return a.toLowerCase()in ba}function C(a){return a.toLowerCase().match(ca)}function D(a){var b=a.toLowerCase(),c="variable-2";return z(a)?c="tag":B(a)?c="block-keyword":A(a)?c="property":b in U||b in da?c="atom":"return"==b||b in V?c="keyword":a.match(/^[A-Z]/)&&(c="string"),c}function E(a,b){return I(b)&&("{"==a||"]"==a||"hash"==a||"qualifier"==a)||"block-mixin"==a}function F(a,b){return"{"==a&&b.match(/^\s*\$?[\w-]+/i,!1)}function G(a,b){return":"==a&&b.match(/^[a-z-]+/,!1)}function H(a){return a.sol()||a.string.match(new RegExp("^\\s*"+d(a.current())))}function I(a){return a.eol()||a.match(/^\s*$/,!1)}function J(a){var b=/^\s*[-_]*[a-z0-9]+[\w-]*/i,c="string"==typeof a?a.match(b):a.string.match(b);return c?c[0].replace(/^\s*/,""):""}for(var K,L,M,N,O=a.indentUnit,P="",Q=c(e),R=/^(a|b|i|s|col|em)$/i,S=c(i),T=c(j),U=c(m),V=c(l),W=c(f),X=b(f),Y=c(h),Z=c(g),$=c(k),_=/^\s*([.]{2,3}|&&|\|\||\*\*|[?!=:]?=|[-+*\/%<>]=?|\?:|\~)/,aa=b(n),ba=c(o),ca=new RegExp(/^\-(moz|ms|o|webkit)-/i),da=c(p),ea="",fa={};P.length<O;)P+=" ";return fa.block=function(a,b,c){if("comment"==a&&H(b)||","==a&&I(b)||"mixin"==a)return v(c,b,"block",0);if(F(a,b))return v(c,b,"interpolation");if(I(b)&&"]"==a&&!/^\s*(\.|#|:|\[|\*|&)/.test(b.string)&&!z(J(b)))return v(c,b,"block",0);if(E(a,b))return v(c,b,"block");if("}"==a&&I(b))return v(c,b,"block",0);if("variable-name"==a)return b.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/)||B(J(b))?v(c,b,"variableName"):v(c,b,"variableName",0);if("="==a)return I(b)||B(J(b))?v(c,b,"block"):v(c,b,"block",0);if("*"==a&&(I(b)||b.match(/\s*(,|\.|#|\[|:|{)/,!1)))return N="tag",v(c,b,"block");if(G(a,b))return v(c,b,"pseudo");if(/@(font-face|media|supports|(-moz-)?document)/.test(a))return v(c,b,I(b)?"block":"atBlock");if(/@(-(moz|ms|o|webkit)-)?keyframes$/.test(a))return v(c,b,"keyframes");if(/@extends?/.test(a))return v(c,b,"extend",0);if(a&&"@"==a.charAt(0))return 0<b.indentation()&&A(b.current().slice(1))?(N="variable-2","block"):/(@import|@require|@charset)/.test(a)?v(c,b,"block",0):v(c,b,"block");if("reference"==a&&I(b))return v(c,b,"block");if("("==a)return v(c,b,"parens");if("vendor-prefixes"==a)return v(c,b,"vendorPrefixes");if("word"==a){var d=b.current();if(N=D(d),"property"==N)return H(b)?v(c,b,"block",0):(N="atom","block");if("tag"==N){if(/embed|menu|pre|progress|sub|table/.test(d)&&A(J(b)))return N="atom","block";if(b.string.match(new RegExp("\\[\\s*"+d+"|"+d+"\\s*\\]")))return N="atom","block";if(R.test(d)&&(H(b)&&b.string.match(/=/)||!H(b)&&!b.string.match(/^(\s*\.|#|\&|\[|\/|>|\*)/)&&!z(J(b))))return N="variable-2",B(J(b))?"block":v(c,b,"block",0);if(I(b))return v(c,b,"block")}if("block-keyword"==N)return N="keyword",b.current(/(if|unless)/)&&!H(b)?"block":v(c,b,"block");if("return"==d)return v(c,b,"block",0);if("variable-2"==N&&b.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/))return v(c,b,"block")}return c.context.type},fa.parens=function(a,b,c){if("("==a)return v(c,b,"parens");if(")"==a)return"parens"==c.context.prev.type?w(c):b.string.match(/^[a-z][\w-]*\(/i)&&I(b)||B(J(b))||/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(J(b))||!b.string.match(/^-?[a-z][\w-\.\[\]\'\"]*\s*=/)&&z(J(b))?v(c,b,"block"):b.string.match(/^[\$-]?[a-z][\w-\.\[\]\'\"]*\s*=/)||b.string.match(/^\s*(\(|\)|[0-9])/)||b.string.match(/^\s+[a-z][\w-]*\(/i)||b.string.match(/^\s+[\$-]?[a-z]/i)?v(c,b,"block",0):I(b)?v(c,b,"block"):v(c,b,"block",0);if(a&&"@"==a.charAt(0)&&A(b.current().slice(1))&&(N="variable-2"),"word"==a){var d=b.current();N=D(d),"tag"==N&&R.test(d)&&(N="variable-2"),("property"==N||"to"==d)&&(N="atom")}return"variable-name"==a?v(c,b,"variableName"):G(a,b)?v(c,b,"pseudo"):c.context.type},fa.vendorPrefixes=function(a,b,c){return"word"==a?(N="property",v(c,b,"block",0)):w(c)},fa.pseudo=function(a,b,c){return A(J(b.string))?y(a,b,c):(b.match(/^[a-z-]+/),N="variable-3",I(b)?v(c,b,"block"):w(c))},fa.atBlock=function(a,b,c){if("("==a)return v(c,b,"atBlock_parens");if(E(a,b))return v(c,b,"block");if(F(a,b))return v(c,b,"interpolation");if("word"==a){var d=b.current().toLowerCase();if(N=/^(only|not|and|or)$/.test(d)?"keyword":W.hasOwnProperty(d)?"tag":Z.hasOwnProperty(d)?"attribute":Y.hasOwnProperty(d)?"property":T.hasOwnProperty(d)?"string-2":D(b.current()),"tag"==N&&I(b))return v(c,b,"block")}return"operator"==a&&/^(not|and|or)$/.test(b.current())&&(N="keyword"),c.context.type},fa.atBlock_parens=function(a,b,c){if("{"==a||"}"==a)return c.context.type;if(")"==a)return I(b)?v(c,b,"block"):v(c,b,"atBlock");if("word"==a){var d=b.current().toLowerCase();return N=D(d),/^(max|min)/.test(d)&&(N="property"),"tag"==N&&(R.test(d)?N="variable-2":N="atom"),c.context.type}return fa.atBlock(a,b,c)},fa.keyframes=function(a,b,c){return"0"==b.indentation()&&("}"==a&&H(b)||"]"==a||"hash"==a||"qualifier"==a||z(b.current()))?y(a,b,c):"{"==a?v(c,b,"keyframes"):"}"==a?H(b)?w(c,!0):v(c,b,"keyframes"):"unit"==a&&/^[0-9]+\%$/.test(b.current())?v(c,b,"keyframes"):"word"==a&&(N=D(b.current()),"block-keyword"==N)?(N="keyword",v(c,b,"keyframes")):/@(font-face|media|supports|(-moz-)?document)/.test(a)?v(c,b,I(b)?"block":"atBlock"):"mixin"==a?v(c,b,"block",0):c.context.type},fa.interpolation=function(a,b,c){return("{"==a&&w(c)&&v(c,b,"block"),"}"==a)?b.string.match(/^\s*(\.|#|:|\[|\*|&|>|~|\+|\/)/i)||b.string.match(/^\s*[a-z]/i)&&z(J(b))?v(c,b,"block"):!b.string.match(/^(\{|\s*\&)/)||b.match(/\s*[\w-]/,!1)?v(c,b,"block",0):v(c,b,"block"):"variable-name"==a?v(c,b,"variableName",0):("word"==a&&(N=D(b.current()),"tag"==N&&(N="atom")),c.context.type)},fa.extend=function(a,b,c){return"["==a||"="==a?"extend":"]"==a?w(c):"word"==a?(N=D(b.current()),"extend"):w(c)},fa.variableName=function(a,b,c){return"string"==a||"["==a||"]"==a||b.current().match(/^(\.|\$)/)?(b.current().match(/^\.[\w-]+/i)&&(N="variable-2"),"variableName"):y(a,b,c)},{startState:function(a){return{tokenize:null,state:"block",context:new u("block",a||0,null)}},token:function(a,b){return!b.tokenize&&a.eatSpace()?null:(L=(b.tokenize||q)(a,b),L&&"object"==typeof L&&(M=L[1],L=L[0]),N=L,b.state=fa[b.state](M,a,b),N)},indent:function(a,b,c){var d=a.context,e=b&&b.charAt(0),f=d.indent,g=J(b),h=c.match(/^\s*/)[0].replace(/\t/g,P).length,i=a.context.prev?a.context.prev.line.firstWord:"",j=a.context.prev?a.context.prev.line.indent:h;return d.prev&&("}"==e&&("block"==d.type||"atBlock"==d.type||"keyframes"==d.type)||")"==e&&("parens"==d.type||"atBlock_parens"==d.type)||"{"==e&&"at"==d.type)?f=d.indent-O:!/(\})/.test(e)&&(/@|\$|\d/.test(e)||/^\{/.test(b)||/^\s*\/(\/|\*)/.test(b)||/^\s*\/\*/.test(i)||/^\s*[\w-\.\[\]\'\"]+\s*(\?|:|\+)?=/i.test(b)||/^(\+|-)?[a-z][\w-]*\(/i.test(b)||/^return/.test(b)||B(g)?f=h:/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(e)||z(g)?/\,\s*$/.test(i)?f=j:/^\s+/.test(c)&&(/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(i)||z(i))?f=h<=j?j:j+O:f=h:!/,\s*$/.test(c)&&(C(g)||A(g))&&(B(i)?f=h<=j?j:j+O:/^\{/.test(i)?f=h<=j?h:j+O:C(i)||A(i)?f=h>=j?j:h:/^(\.|#|:|\[|\*|&|@|\+|\-|>|~|\/)/.test(i)||/=\s*$/.test(i)||z(i)||/^\$[\w-\.\[\]\'\"]/.test(i)?f=j+O:f=h)),f},electricChars:"}",lineComment:"//",fold:"indent"}});var e=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","bgsound","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","nobr","noframes","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","var","video"],f=["domain","regexp","url","url-prefix"],g=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],h=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid"],i=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-position","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marker-offset","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode","font-smoothing","osx-font-smoothing"],j=["scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-3d-light-color","scrollbar-track-color","shape-inside","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","zoom"],k=["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],l=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],m=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","column","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","dashed","decimal","decimal-leading-zero","default","default-button","destination-atop","destination-in","destination-out","destination-over","devanagari","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","flex","footnotes","forwards","from","geometricPrecision","georgian","graytext","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","malayalam","match","matrix","matrix3d","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row-resize","rtl","run-in","running","s-resize","sans-serif","scale","scale3d","scaleX","scaleY","scaleZ","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","solid","somali","source-atop","source-in","source-out","source-over","space","spell-out","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","symbolic","symbols","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","x-large","x-small","xor","xx-large","xx-small","bicubic","optimizespeed","grayscale","row","row-reverse","wrap","wrap-reverse","column-reverse","flex-start","flex-end","space-between","space-around","unset"],n=["in","and","or","not","is not","is a","is","isnt","defined","if unless"],o=["for","if","else","unless","from","to"],p=["null","true","false","href","title","type","not-allowed","readonly","disabled"],q=e.concat(f,g,h,i,j,l,m,k,n,o,p,["@font-face","@keyframes","@media","@viewport","@page","@host","@supports","@block","@css"]);a.registerHelper("hintWords","stylus",q),a.defineMIME("text/x-styl","stylus")})}});
//# sourceMappingURL=stylus.js.map