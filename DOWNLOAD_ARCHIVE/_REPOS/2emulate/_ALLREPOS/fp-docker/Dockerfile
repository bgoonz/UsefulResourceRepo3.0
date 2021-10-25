FROM jruby:9.1-jdk
MAINTAINER Andrey Kumanyaev <me@zzet.org>

RUN apt-get update -qq
# Install software dependencies
RUN apt-get install -y apt-utils file git build-essential imagemagick ghostscript lame ffmpeg libcairo2 libcairo2-dev poppler-utils nodejs npm apt-utils python-software-properties software-properties-common

# LibreOffice
# https://github.com/chrisdaish/docker-libreoffice/blob/master/Dockerfile
ENV FRONTEND noninteractive
RUN useradd -m libreoffice; \
    apt-get update \
    && apt-get install -y --no-install-recommends wget \
                                                  libdbus-glib-1-2 \
                                                  libsm6 \
                                                  openjdk-8-jre \
    && rm -rf /var/lib/apt/lists/*

ENV LIBREOFFICEPACKAGE LibreOffice_5.1.4_Linux_x86-64_deb.tar.gz
ENV LIBREOFFICEDIR LibreOffice_5.1.4.2_Linux_x86-64_deb

RUN wget -q http://mirror.switch.ch/ftp/mirror/tdf/libreoffice/stable/5.1.4/deb/x86_64/$LIBREOFFICEPACKAGE -O /tmp/$LIBREOFFICEPACKAGE \
    && mkdir /tmp/LibreOffice \
    && tar -xzf /tmp/$LIBREOFFICEPACKAGE -C /tmp/LibreOffice \
    && dpkg -i /tmp/LibreOffice/$LIBREOFFICEDIR/DEBS/*.deb \
    && rm -f /tmp/$LIBREOFFICEPACKAGE \
    && rm -rf /tmp/LibreOffice \
    && ln -s /usr/bin/libreoffice5.1 /usr/bin/libreoffice

# Install Prince
RUN mkdir -p /tmp/prince
WORKDIR /tmp/prince
RUN curl -O http://www.princexml.com/download/prince-10r6-ubuntu14.04-amd64.tar.gz \
    && tar -zxvf prince-10r6-ubuntu14.04-amd64.tar.gz \
    && prince-10r6-ubuntu14.04-amd64/install.sh \
    && rm -rf /tmp/prince

# Install libjpeg8 (missed in debian)
COPY ./libjpeg8_8d1-2-bpo70+1_amd64.deb /tmp/libjpeg8_8d1-2-bpo70+1_amd64.deb
RUN dpkg --install /tmp/libjpeg8_8d1-2-bpo70+1_amd64.deb \
    && rm -f /tmp/libjpeg8_8d1-2-bpo70+1_amd64.deb

# Install kindlegen
RUN mkdir -p /tmp/kindlegen
WORKDIR /tmp/kindlegen
COPY ./kindlegen_linux_2.6_i386_v2_9.tar.gz /tmp/kindlegen/kindlegen_linux_2.6_i386_v2_9.tar.gz
RUN tar -zxvf kindlegen_linux_2.6_i386_v2_9.tar.gz \
    && cp /tmp/kindlegen/kindlegen /usr/local/bin \
    && rm -rf /tmp/kindlegen

RUN ln -s /usr/bin/nodejs /usr/local/bin/node

ENV JRUBY_OPTS "--2.0 -X-C -J-XX:+TieredCompilation -J-XX:TieredStopAtLevel=1 -Xcompile.invokedynamic=false -J-noverify -Xcompile.mode=OFF -J-Xmx2048m -J-Xms2048m -J-Djava.awt.headless=true -J-Dapple.awt.UIElement=true -Xrewrite.java.trace=true"
RUN gem update --system
RUN gem update bundler
