#/bin/bash
clearContainer="docker rm asm-dev"
clearImage="docker rmi asmx86"
eval $clearContainer
eval $clearImage