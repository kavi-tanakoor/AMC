cp -r ./src/main/amp/web/js ./target/seedim-mvndevel-share-war/.
mvn integration-test -Pamp-to-war -Dmaven.tomcat.port=8081
