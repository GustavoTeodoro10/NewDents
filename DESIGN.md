---
name: New Dents Mauá
description: Site de uma página de clínica odontológica, construído em torno do logotipo violeta do cliente.
colors:
  violet-brand: "#5f2a6e"
  violet-deep: "#4a1f58"
  violet-ink: "#2a1235"
  mauve-logo: "#8f6b9b"
  lilac-100: "#f5eff9"
  lilac-200: "#eaddf2"
  lilac-300: "#d8c2e6"
  ground: "#fcfafd"
  muted-ink: "#5a4764"
  star-gold: "#e7a500"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.45rem + 4.4vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 2rem + 1vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.4vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  pill: "999px"
  tile: "28px"
  media: "24px"
spacing:
  section: "clamp(4.5rem, 8vw, 8rem)"
  gutter: "1.25rem"
  gap: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.violet-brand}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.violet-deep}"
  button-light:
    backgroundColor: "#ffffff"
    textColor: "{colors.violet-brand}"
    rounded: "{rounded.pill}"
    height: "52px"
  tile-deep:
    backgroundColor: "{colors.violet-brand}"
    textColor: "#ffffff"
    rounded: "{rounded.tile}"
    padding: "2.5rem"
  tile-lilac:
    backgroundColor: "{colors.lilac-200}"
    textColor: "{colors.violet-ink}"
    rounded: "{rounded.tile}"
---

# Design System: New Dents Mauá

## Overview

**Creative North Star: "A Recepção"**

A página fala do jeito que a recepção da clínica fala: clara, calorosa e sem pressa. Os pacientes, nas avaliações reais do Google, destacam o acolhimento antes da técnica; o sistema visual segue essa ordem. Fundo quase branco com um fio de violeta, um único violeta profundo tirado do logotipo e tinturas lilás para os campos de repouso. A única peça "performada" é a vinheta animada do logotipo do cliente; o resto é tipografia e espaço.

Densidade baixa, uma ação por tela (agendar pelo WhatsApp) e uma voz só: o violeta da marca.

**Key Characteristics:**
- Um acento só (violeta do logo), usado em campos grandes e no botão principal.
- Tipografia como estrutura: títulos grandes, sem ícones decorativos nem ornamentos.
- Branco do vídeo dissolvido no fundo, sem caixas ao redor do logotipo.
- Fotografia só do que é real (fachada); onde não há foto, há cor.

## Colors

Paleta de uma cor: violeta profundo contra neutros tingidos de violeta.

### Primary
- **Violeta do Logo** (#5f2a6e): botão principal, faixa da nota, tile de destaque, bloco final de CTA. Contraste 10,3:1 com branco.
- **Violeta Fundo** (#4a1f58): hover e estado ativo do botão.

### Secondary
- **Malva do Logo** (#8f6b9b): segundo tom do logotipo; só decorativo, nunca em texto (contraste insuficiente).

### Neutral
- **Tinta Violeta** (#2a1235): texto principal e títulos.
- **Tinta Suave** (#5a4764): texto de apoio, 8:1 sobre o fundo.
- **Fundo** (#fcfafd): superfície da página.
- **Lilás 100 / 200 / 300** (#f5eff9, #eaddf2, #d8c2e6): campos de repouso (Sobre, Local, rodapé), tiles e hairlines.
- **Ouro Google** (#e7a500): somente as estrelas das avaliações, para ser reconhecível como "Google".

### Named Rules
**The One Voice Rule.** O violeta é o único acento. Nenhuma segunda cor de destaque entra na página (nem o verde do WhatsApp: o ícone é branco sobre violeta).

**The Never-Text Rule.** O malva do logo não carrega texto.

## Typography

**Display Font:** Bricolage Grotesque (600 e 700) com Figtree como reserva
**Body Font:** Figtree (400, 500, 600)

**Character:** Bricolage dá títulos de peso e personalidade humana, com um traço de curiosidade; Figtree é limpa e neutra para leitura rápida no celular.

### Hierarchy
- **Display** (700, 2.5 a 5rem, 1.06): só o H1 do Hero.
- **Headline** (700, 2.25 a 3rem, 1.05): título de seção.
- **Title** (700, 1.6 a 2.4rem, 1.1): títulos dos tiles de tratamento.
- **Body** (400, 17px, 1.65, máx. 62ch): texto corrido.
- **Label** (600, 16px): botões e links.

### Named Rules
**The Weight-Not-Color Rule.** Ênfase dentro de um título vem de peso ou do violeta da marca, nunca de gradiente nem de outra família.

## Layout

Contêiner de 1240px com gutter de 20px (32px a partir de 768px). Seções com respiro vertical fluido (72 a 128px) e fundos que alternam entre fundo, lilás e campos violeta. Hero em duas colunas só em desktop, com a mídia sangrando até a borda direita; no celular o texto vem primeiro e o CTA fica visível sem rolar. O bento de tratamentos é assimétrico (7/5 e 5/7 colunas), sem caixas iguais. Avaliações: grade 2+3 no desktop, carrossel com scroll-snap no mobile.

## Elevation & Depth

Plano por padrão: a profundidade vem de campos de cor, não de sombras. Única sombra: o botão principal e o botão flutuante têm uma sombra suave violeta com deslocamento vertical (`0 8px 20px -8px rgba(95,42,110,.55)`), que sobe no hover.

## Shapes

Uma regra: botões em pílula (999px); tiles com 28px; mídia (foto, mapa) com 24px. Não há cantos retos nem cantos mistos fora dessa regra.

## Components

### Buttons
- **Shape:** pílula, 52px de altura (44px no cabeçalho).
- **Primary:** violeta do logo, texto branco, ícone do WhatsApp à esquerda. Rótulo único em todo o site: "Agendar avaliação".
- **Hover / Focus:** sobe 2px e escurece; foco com contorno de 3px (branco sobre campos violeta); ativo encolhe para 97%.
- **Light:** branco com texto violeta, só sobre campos violeta.

### Tiles (Tratamentos)
- **Corner Style:** 28px.
- **Background:** violeta (destaque), lilás 200, lilás 100 e fundo com contorno de 1,5px.
- **Content:** título grande e uma frase; só o tile violeta traz lista (procedimentos de harmonização).

### Avaliações
- Sem caixas: cada avaliação é um bloco com régua superior de 2px em violeta, estrelas, citação e nome. Texto verbatim do Google.

### Navigation
- Cabeçalho fixo de 72px com linha só depois de rolar; links com sublinhado que cresce no hover; menu mobile em painel abaixo do cabeçalho.

### Vinheta do Hero (assinatura)
- Vídeo do cliente (10 s, mudo, toca uma vez e repousa no último quadro), ampliado 1,3x e dissolvido por máscara radial; `mix-blend-mode: multiply` funde o branco ao fundo. Botão de pausa visível. Com movimento reduzido, só o último quadro.

## Do's and Don'ts

### Do:
- **Do** usar "Agendar avaliação" como único rótulo de contato, sempre com `data-gc-event` próprio.
- **Do** manter texto de apoio em #5a4764 ou mais escuro sobre fundos claros.
- **Do** deixar a página sem imagem onde não há foto real: use campos de cor.
- **Do** respeitar `prefers-reduced-motion`: sem vídeo, sem revelar ao rolar.

### Don't:
- **Don't** redesenhar, recolorir ou "limpar" o logotipo; ele entra como o arquivo do cliente, com multiply sobre fundos claros.
- **Don't** usar fotos de banco de imagens como se fossem da clínica.
- **Don't** colocar texto em malva (#8f6b9b).
- **Don't** repetir caixas de mesmo tamanho com ícone + título + texto.

## Not canonized (defects the build carries)

- Posicionamento do vídeo e máscara foram validados só em captura de tela, em dois tamanhos (≈1229px e 375px); ainda não em 1440px+ nem em Safari.
- O texto do tile de Odontopediatria e a frase de Sobre ("resposta do negócio no Google") dependem de validação do cliente.
