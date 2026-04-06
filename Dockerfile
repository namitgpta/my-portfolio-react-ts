FROM node:24-alpine

WORKDIR /app
# copy package.json and package-lock.json to the container
COPY package*.json ./
# install dependencies
RUN yarn install --production && yarn cache clean
# copy all the files from the current directory to the container
COPY . .

ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID
ARG VITE_EMAILJS_USER_ID
ARG VITE_FONT_AWESOME_URL
ENV VITE_EMAILJS_SERVICE_ID=$VITE_EMAILJS_SERVICE_ID
ENV VITE_EMAILJS_TEMPLATE_ID=$VITE_EMAILJS_TEMPLATE_ID
ENV VITE_EMAILJS_USER_ID=$VITE_EMAILJS_USER_ID
ENV VITE_FONT_AWESOME_URL=$VITE_FONT_AWESOME_URL

# build the app
RUN yarn build

# serve the static build
RUN yarn global add serve
CMD ["serve", "-s", "dist"]