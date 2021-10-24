FROM node:14

WORKDIR /code

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
RUN chmod 755 /code/run.sh
RUN chmod 755 /code/run_bash.sh


CMD [ "./run.sh" ]
