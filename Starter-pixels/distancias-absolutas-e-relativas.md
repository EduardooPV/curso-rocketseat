# Distâncias absolutas <length>

São fixas e não alteram seu valor.

Unidade       Nome               Equivalente

cm         Centimetros        1cm= 96px/2.54
in         Inches(Polegadas)  1in= 2.54cm=96px
px         Pixels             1px= 1/96th of 1in

* O mais comum e mais utilizado é o **PX**
* Não recomendado usar CM


# Distâncias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou o root, ou o tamanho da tela.

* Beneficio: Maior adaptação aos diferentes tipos de tela
* 
Unidade         Relativo a

em              Tamanho da font do pai.
rem             Tamanho da font do elemento raiz(root/html)

vw              1% da viewport width.
vh              1% da viewport height.