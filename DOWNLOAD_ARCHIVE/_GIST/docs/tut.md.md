PdfLatex is a tool that converts Latex sources into PDF. This is specifically very important for researchers, as they use it to publish their findings. It could be installed very easily using Linux terminal, though this seems an annoying task on Windows. Installation commands are given below.

- Install the TexLive base

```
sudo apt-get install texlive-latex-base -y
```

- Also install the recommended and extra fonts to avoid running into the error [1], when trying to use pdflatex on latex files with more fonts.

```
sudo apt-get install texlive-fonts-recommended -y
sudo apt-get install texlive-fonts-extra -y
```

- Install the extra packages,

```
sudo apt-get install texlive-latex-extra -y
```

Once installed as above, you may be able to create PDF files from latex sources using PdfLatex as below.

```
pdflatex latex_source_name.tex
```

Error 1:
grep: ptmr7t.log: No such file or directory
mktextfm: `mf-nowin -progname=mf \mode:=ljfour; mag:=1; nonstopmode; input ptmr7t' failed to make ptmr7t.tfm.
kpathsea: Appending font creation commands to missfont.log.

! Font OT1/ptm/m/n/10=ptmr7t at 10.0pt not loadable: Metric (TFM) file not found.

Ref: http://kkpradeeban.blogspot.com/2014/04/installing-latexpdflatex-on-ubuntu.html
