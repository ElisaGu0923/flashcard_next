FROM node:16.13.0-alpine3.13
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY --chown=app:node package*.json ./
RUN npm install
COPY --chown=app:node . .
ENV SAMPLE_VAR=s
EXPOSE 3000
ENTRYPOINT ["npm","run","dev"]