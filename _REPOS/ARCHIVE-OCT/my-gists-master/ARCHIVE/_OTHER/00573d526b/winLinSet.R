# Allows for working directory to be used on Windows or Linux

projectFolder <- "YOURDESKTOPFOLDER"
if(Sys.info()['sysname'] == "Linux"){
  setwd( paste0( Sys.getenv("HOME") , paste0("/Desktop/", projectFolder, "/") ) ) 
} else {
  X <- Sys.getenv('HOME')
  setwd(gsub("Documents", paste0("/Desktop/", projectFolder, "/"), X))
  rm(X)
}

getwd()