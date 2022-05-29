FROM nginx
ADD dist /usr/share/nginx/html
ENV PORT 2001
