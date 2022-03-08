# Dockerfile-react
FROM node:14.9.0-alpine3.10

CMD ["/bin/sh"]

ENV PROJECT /gitlabrunner-admin

WORKDIR ${PROJECT}

RUN apk update && \
	npm install -g create-react-app

ADD ./package.json ${PROJECT}

RUN npm install
