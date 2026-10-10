# Relatório final - New Dents Mauá

Site one-page (HTML, CSS e JS puros + Tailwind via CDN). Fases: `/taste-skill` (direção), `/impeccable` (construção) e `/emil-design-eng` (polimento).

## 1. Informações que faltaram e como foram contornadas

| Faltou | Como foi contornado |
|---|---|
| E-mail | Omitido do rodapé |
| CRO e responsável técnico | Omitidos; precisam do cliente |
| Fotos reais da clínica e da equipe | Só a fachada é foto; o resto usa cor da marca |
| Equipe além da Dra. Lilian Fleitas | Nenhum profissional destacado; nomes só dentro das avaliações |
| Ref. 2 e nota da Ref. 1 | Usada só a estrutura da Ref. 1 (ordem das seções e CTA recorrente) |
| Segundo número (+55 11 91070-1908, Facebook) | Não usado, conforme instrução; só (11) 97598-9071 |
| Logo em arquivo original | Recorte por captura do arquivo de 814 px do Facebook (`assets/logo.png`); trocar pelo original se o cliente enviar |
| Oferta (planos 90/180 dias) | Não se aplica; seção omitida |

## 2. GoatCounter

Script no `<head>` com o endereço informado:

```html
<script data-goatcounter="https://teocode.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
```

Eventos de CTA (`data-gc-event`): `cta-header`, `cta-hero`, `cta-tratamentos`, `cta-avaliacoes`, `cta-local`, `cta-contato`, `cta-footer`, `cta-flutuante`. Um único listener em `assets/js/site.js`, protegido por `if (window.goatcounter && window.goatcounter.count)`; o link do WhatsApp funciona mesmo sem o rastreio.

## 3. Pendências que dependem do cliente

- Responsável técnico e CRO para o rodapé (a placa da fachada sugere um nome, não validado).
- E-mail de contato.
- Mais fotos reais da clínica e da equipe.
- Confirmar quais procedimentos de harmonização são realizados nesta unidade.
- Validar a frase da seção Sobre (resposta pública do negócio no Google) e o texto de Odontopediatria.
- Domínio final: substituir `SEU-DOMINIO.com.br` (canonical, `og:image`, JSON-LD).
- Cadastrar o domínio no painel do GoatCounter.

## 4. O que foi aproveitado das referências

- **Ref. 1 (Maua Vital):** ordem lógica hero, serviços, sobre, depoimentos, localização e CTA final, e CTA de agendamento recorrente. Descartados: grade de 8 cards iguais, banner de cookies, textos, imagens e cores.
- **Ref. 2:** não informada.

## 5. Verificação e limites

- Inspeção em desktop (~1229 px) e mobile (375 px), com detector mecânico do Impeccable (apenas falsos positivos de padding e um line-height ajustado).
- Não testado: Safari, telas acima de 1440 px, leitor de tela real, `prefers-reduced-motion` em dispositivo.
- Não houve revisor independente; a revisão foi feita pelo mesmo agente que construiu.
- Avaliações do Google transcritas sem alteração de palavras (com cortes `[...]`), coletadas em 09/10/2026.
