FROM openjdk:8u181-alpine3.8

WORKDIR /

COPY target/app.jar app.jar
EXPOSE 3000

CMD java -jar app.jar
