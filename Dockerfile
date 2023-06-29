FROM node:18-alpine

WORKDIR /app
# copy package.json and package-lock.json to the container
COPY package*.json ./
# install dependencies
RUN yarn install --production && yarn cache clean
# copy all the files from the current directory to the container
COPY . .

ARG REACT_APP_EMAILJS_SERVICE_ID
ARG REACT_APP_EMAILJS_TEMPLATE_ID
ARG REACT_APP_EMAILJS_USER_ID
ARG REACT_APP_FONT_AWESOME_URL
ENV REACT_APP_EMAILJS_SERVICE_ID=$REACT_APP_EMAILJS_SERVICE_ID
ENV REACT_APP_EMAILJS_TEMPLATE_ID=$REACT_APP_EMAILJS_TEMPLATE_ID
ENV REACT_APP_EMAILJS_USER_ID=$REACT_APP_EMAILJS_USER_ID
ENV REACT_APP_FONT_AWESOME_URL=$REACT_APP_FONT_AWESOME_URL

# run the app
CMD ["yarn", "start"]