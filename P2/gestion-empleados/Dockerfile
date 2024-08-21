# Usar la imagen oficial de Node.js
FROM node:18

# Crear directorio de la aplicación
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json si existe
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto de la aplicaciónc
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "src/index.js"]
