
# 🚀 Iniciando com Create React App

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

### ▶️ `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar.

A página será recarregada automaticamente quando houver alterações no código.\
Você também poderá ver erros de lint no console.

### 🧪 `npm test`

Inicia o executor de testes no modo interativo.\
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### 📦 `npm run build`

Compila o aplicativo para produção na pasta `build`.\
O React será corretamente empacotado no modo de produção e otimizado para melhor desempenho.

O build será minificado e os nomes dos arquivos incluirão hashes únicos.\
Seu aplicativo estará pronto para ser implantado!

Confira mais detalhes na seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment).

### ⚠️ `npm run eject`

**Atenção: essa é uma operação irreversível. Após executar `eject`, não há como voltar atrás!**

Se você não estiver satisfeito com a configuração padrão e as ferramentas utilizadas, pode executar `eject`. Esse comando removerá a dependência única de build do seu projeto.

Todos os arquivos de configuração e dependências transitivas (Webpack, Babel, ESLint, etc.) serão copiados para o seu projeto, permitindo controle total sobre as configurações.\
Todos os comandos, exceto `eject`, continuarão funcionando normalmente.

No entanto, você nunca é obrigado a usar `eject`. O conjunto de recursos padrão é adequado para pequenas e médias implantações. Só utilize se realmente precisar personalizar o projeto.

## 📚 Saiba Mais

Para mais informações, consulte a [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, visite a [documentação oficial do React](https://reactjs.org/).

## 🔠 Fonte Personalizada

Se desejar utilizar uma fonte personalizada no projeto, adicione o seguinte código no seu arquivo CSS:

```css
@font-face {
  font-family: 'CodeBold';
  src: url('../fonts/codebold.otf');
  font-weight: bold;
  font-style: normal;
}

* {
  font-family: 'CodeBold';
}
```

---

# 🔄 Atualizando sua Branch com a Main

Siga os passos abaixo para atualizar sua branch com as últimas alterações da `main` no **Visual Studio Code**.

## 📌 Passo 1: Certifique-se de estar na sua branch atual  
(Substitua `sua-branch` pelo nome correto da sua branch.)  

```bash
git checkout sua-branch
```

## 📌 Passo 2: Atualize a branch `main` com as últimas mudanças do repositório remoto  

```bash
git fetch origin
git checkout main
git pull origin main
```

## 📌 Passo 3: Volte para sua branch e traga as mudanças da `main`  

```bash
git checkout sua-branch
git merge main
```

## ⚠️ Resolvendo conflitos (se houver)  
Se houver conflitos, o **VS Code** destacará os arquivos afetados. Resolva os conflitos manualmente, depois execute os seguintes comandos:

```bash
git add .
git commit -m "Merge com as atualizações da main"
```

## 📌 Passo 4: Envie as alterações para o repositório remoto (se necessário)  

```bash
git push origin sua-branch
```



