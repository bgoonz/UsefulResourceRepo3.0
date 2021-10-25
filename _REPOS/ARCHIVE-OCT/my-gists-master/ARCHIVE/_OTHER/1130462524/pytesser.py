from subprocess import Popen, PIPE
import os
import sys


PROG_NAME = "tesseract"
TEMP_IMAGE = "tmp.bmp"
TEMP_FILE = "tmp"

PSM_OSD_ONLY = 0
PSM_SEG_AND_OSD = 1
PSM_SEG_ONLY = 2
PSM_AUTO = 3
PSM_SINGLE_COLUMN = 4
PSM_VERTICAL_ALIGN = 5
PSM_UNIFORM_BLOCK = 6
PSM_SINGLE_LINE = 7
PSM_SINGLE_WORD = 8
PSM_SINGLE_WORD_CIRCLE = 9
PSM_SINGLE_CHAR = 10


class TesseractException(Exception):
    pass


class TesseractNotFound(Exception):
    pass


def check_path():
    for path in os.environ.get("PATH", "").split(";"):
        filepath = os.path.join(path, PROG_NAME)
        if (
            os.path.exists(filepath) or os.path.exists("{}.exe".format(filepath))
        ) and not os.path.isdir(filepath):
            return True
    raise TesseractNotFound


def process_request(input_file, output_file, lang=None, psm=None):
    args = [PROG_NAME, input_file, output_file]
    if lang is not None:
        args.append("-l")
        args.append(lang)
    if psm is not None:
        args.append("-psm")
        args.append(str(psm))
    proc = Popen(args, stdout=PIPE, stderr=PIPE)
    ret = proc.communicate()

    code = proc.returncode
    if code != 0:
        if code == 2:
            raise TesseractException("File not found")
        if code == -11:
            raise TesseractException("Language code invalid: {}".format(ret[1]))
        else:
            raise TesseractException(ret[1])


def image_to_string(file, lang=None, psm=None):
    check_path()
    process_request(file, TEMP_FILE, lang, psm)
    with open(TEMP_FILE + ".txt", "r") as f:
        txt = f.read()

    os.remove(TEMP_FILE + ".txt")
    return txt


if __name__ == "__main__":
    print(image_to_string(sys.argv[1], psm=PSM_AUTO))
