# Use uma imagem oficial do Node.js como base
FROM node:18-alpine

# Crie um diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm ci --only=production

# Copie o código da aplicação para o contêiner
COPY . .

# Expõe a porta que a aplicação usa
EXPOSE 3000

# Comando para executar a aplicação
CMD [ "node", "dist/apps/cloud/main" ]
