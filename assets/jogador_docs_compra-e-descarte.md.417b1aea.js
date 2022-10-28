import{_ as a,c as s,o,d as n}from"./app.14303157.js";const C=JSON.parse('{"title":"Jogador","description":"","frontmatter":{},"headers":[{"level":2,"title":"Compra","slug":"compra","link":"#compra","children":[{"level":3,"title":"Comprar uma carta","slug":"comprar-uma-carta","link":"#comprar-uma-carta","children":[]},{"level":3,"title":"Comprar v\xE1rias cartas","slug":"comprar-varias-cartas","link":"#comprar-varias-cartas","children":[]}]},{"level":2,"title":"Descarte","slug":"descarte","link":"#descarte","children":[]}],"relativePath":"jogador/docs/compra-e-descarte.md"}'),e={name:"jogador/docs/compra-e-descarte.md"},r=n(`<h1 id="jogador" tabindex="-1">Jogador <a class="header-anchor" href="#jogador" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">ATEN\xC7\xC3O</p><p>Os comportamentos de compra e descarte podem mudar futuramente. Favor conferir documenta\xE7\xE3o e <a href="https://github.com/diogomene15/UnoOO-Jogador/" target="_blank" rel="noreferrer">c\xF3digo do Github</a> no caso de d\xFAvidas.</p></div><h2 id="compra" tabindex="-1">Compra <a class="header-anchor" href="#compra" aria-hidden="true">#</a></h2><p>Na classe jogador, as fun\xE7\xF5es <em><code>comprar</code></em> se referem ao ato de receber uma carta.</p><h3 id="comprar-uma-carta" tabindex="-1">Comprar uma carta <a class="header-anchor" href="#comprar-uma-carta" aria-hidden="true">#</a></h3><p>Para fazer com que um jogador receba um carta espec\xEDfica, utilize a fun\xE7\xE3o <em><code>comprar(Carta carta)</code></em>.</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">Jogador</span><span style="color:#A6ACCD;"> jogador </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Jogador</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Rainer Maria Rilke</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">jogador</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">comprar</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CartaNormal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Cor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">VERMELHO</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">));</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//returns: (void)</span></span>
<span class="line"></span></code></pre></div><h3 id="comprar-varias-cartas" tabindex="-1">Comprar v\xE1rias cartas <a class="header-anchor" href="#comprar-varias-cartas" aria-hidden="true">#</a></h3><p>J\xE1 no caso em que h\xE1 a necessidade de se fazer com que Jogador receba v\xE1rias cartas, deve-se utilizar a fun\xE7\xE3o <em><code>comprar(ArrayList&lt;Carta&gt; listaCartas)</code></em>.</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki has-focused-lines"><code><span class="line has-focus"><span style="color:#C792EA;">ArrayList</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Carta</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> cartas </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ArrayList</span><span style="color:#89DDFF;">&lt;&gt;();</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">cartas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CartaNormal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Cor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">VERMELHO</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">cartas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CartaNormal</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Cor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">AZUL</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">Jogador</span><span style="color:#A6ACCD;"> jogador </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Jogador</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Rainer Maria Rilke</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">jogador</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">comprar</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cartas</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//returns: (void) </span></span>
<span class="line"></span></code></pre></div><h2 id="descarte" tabindex="-1">Descarte <a class="header-anchor" href="#descarte" aria-hidden="true">#</a></h2><p>Fun\xE7\xE3o que realiza o descarte (ou retirada) de carta de um objeto de Jogador.</p><div class="danger custom-block"><p class="custom-block-title">CUIDADO</p><p>Fun\xE7\xE3o ainda n\xE3o desenvolvida na classe Jogador</p></div>`,13),l=[r];function p(c,t,d,D,i,F){return o(),s("div",null,l)}const A=a(e,[["render",p]]);export{C as __pageData,A as default};
