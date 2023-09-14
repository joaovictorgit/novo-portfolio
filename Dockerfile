FROM node:18-alpine
WORKDIR /app/portfolio
COPY . .
RUN npm install --production
CMD ["npm", "start"]
EXPOSE 3000