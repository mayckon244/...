# StyleMirror

Aplicação web local para experimentar armações vetoriais sobre uma fotografia e explorar estilos de cabelo. Construída com React, TypeScript e Vite.

## Estado real das funcionalidades

### Implementado
- Upload local de JPG, PNG e WebP (máximo 15 MB), com validação e mensagens de erro.
- A foto original é mantida separada e nunca é sobrescrita.
- Cinco modelos vetoriais de armação preta.
- Ajustes manuais de posição horizontal/vertical, escala, inclinação e espessura.
- Comparação entre original, resultado e visualização dividida.
- Exportação da foto com a armação em PNG e JPEG.
- Seleção de cinco estilos de cabelo, cinco estilos de óculos, favoritos e histórico de combinações da sessão.
- Botão para limpar dados temporários e revogação de URLs temporárias.
- Layout responsivo para desktop e celular.
- Testes unitários de validação de imagem e catálogo de estilos.

### Limitações importantes
- **A edição real do cabelo ainda não está integrada.** O seletor permite escolher e registrar o estilo desejado, mas não altera os fios da fotografia. A interface informa essa limitação para não simular uma transformação realista.
- A armação é desenhada geometricamente por cima da foto. Não há detecção automática de pontos faciais neste MVP; os controles são manuais. Ajuste posição e escala para alinhar os óculos.
- Os cartões da galeria são seletores de combinação, não imagens finais geradas. A galeria de cinco resultados e a montagem de cinco fotos só devem ser habilitadas quando houver cinco resultados reais.
- A visualização dividida compara a imagem original e a versão com armação. Não é uma certificação automática de preservação facial.
- O app não envia imagens para uma API e não precisa de credenciais externas.

## Requisitos
- Node.js 20 ou superior recomendado
- npm

## Instalação e execução

```bash
npm install
npm run dev
```

Abra o endereço local mostrado pelo Vite no terminal.

## Testes e build

```bash
npm test
npm run build
npm run preview
```

## Estrutura

```text
StyleMirror/
├── src/
│   ├── components/
│   │   ├── ComparisonViewer.tsx
│   │   ├── GlassesEditor.tsx
│   │   ├── PhotoUploader.tsx
│   │   └── StyleGallery.tsx
│   ├── data/
│   │   ├── styles.ts
│   │   └── styles.test.ts
│   ├── services/
│   │   ├── glassesRenderer.ts
│   │   └── imageCompositor.ts
│   ├── utils/
│   │   ├── imageValidation.ts
│   │   └── imageValidation.test.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── types.ts
├── index.html
├── package.json
└── README.md
```

## Privacidade
O processamento é feito no navegador. A foto é mantida em URLs temporárias locais durante a sessão. Use **Limpar** para remover os dados temporários gerenciados pela aplicação. Não há persistência permanente, telemetria nem envio automático de imagens.

## Próximos passos para uma versão avançada
1. Integrar MediaPipe Face Landmarker com um modelo devidamente versionado e licenciado para sugerir pontos iniciais da armação.
2. Acrescentar edição manual de máscara do cabelo e uma integração opcional com serviço de edição localizada.
3. Implementar cache por combinação e geração sob demanda das 25 combinações.
4. Adicionar testes de renderização Canvas e testes de ponta a ponta em navegador.
5. Criar uma montagem exportável apenas a partir de cinco resultados efetivamente renderizados.


## Hospedagem no Render

Este projeto é um front-end Vite/React e pode ser publicado como **Static Site** no Render; não precisa de servidor Node em produção.

### Publicar usando o Blueprint

1. Envie todos os arquivos desta pasta para um repositório GitHub.
2. No Render, escolha **New + → Blueprint** e conecte o repositório.
3. O Render detectará `render.yaml`. Confirme a criação do serviço `stylemirror`.
4. Aguarde o build. O comando de compilação é `npm install && npm run build` e a pasta publicada é `dist`.
5. Abra o URL `*.onrender.com` fornecido pelo Render.

O arquivo `render.yaml` inclui uma regra de rewrite para que as rotas de uma SPA React abram corretamente ao atualizar a página.

### Configuração manual alternativa

No Render, escolha **New + → Static Site** e configure:

- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

Não configure um serviço Web Node para esta versão estática e não defina variáveis secretas: a aplicação atual não usa backend nem API externa.

### Antes de publicar

Rode localmente `npm install`, `npm test` e `npm run build`. O deploy falhará se o build não terminar com sucesso. Depois de atualizar o GitHub, o Render normalmente inicia um novo deploy automaticamente se a integração com o repositório estiver habilitada.
