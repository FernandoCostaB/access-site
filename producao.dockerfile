
FROM debian:latest
LABEL mainteiner="Thulio Queiroz" email="t.queiroz@accesscredito.com.br"
# Instalação
RUN apt-get update -y
RUN apt-get install -y apache2
RUN a2enmod rewrite
# Configuração
ENV app_name accesscredito.com.br
ENV full_path /var/www
ENV path_conf_apache /etc/apache2/sites-available
ENV file_conf_apache accesscredito.com.br.conf
ENV artefato dist.tar.gz 
RUN mkdir -p ${full_path}/${app_name}
ADD ${artefato} ${full_path}/${app_name}
RUN chown -R www-data:www-data ${full_path}/${app_name}
RUN chmod -R 755 ${full_path}
COPY ${file_conf_apache} ${path_conf_apache}/${file_conf_apache}
RUN a2ensite ${file_conf_apache}
RUN a2dissite 000-default.conf
RUN a2enmod rewrite
RUN apache2ctl configtest
EXPOSE 80
EXPOSE 443
ENTRYPOINT ["/usr/sbin/apache2ctl"]
CMD ["-D", "FOREGROUND"]
