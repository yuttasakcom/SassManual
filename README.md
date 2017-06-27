## Sass101

## สารบัญ
- [ติดตั้ง](#ติดตั้ง)
- [แปลงไฟล์](#แปลงไฟล์)
- [Watcher](#watcher)
- [Compact](#compact)
- [Compressed](#compressed)
- [Expanded](#expanded)

## ติดตั้ง
พิมพ์คำสั่ง `sudo apt install -y ruby-sass`
ตรวจสอบเวอร์ชั่น พิมพ์คำสั่ง `sass -v`

![sass version](./img/install_sass.gif)

## แปลงไฟล์
แปลงไฟล์ .scss เป็น .sass พิมพ์คำสั่ง `sass-convert example.scss example.sass`<br>
แปลไฟล์ .sass เป็น .scss พิมพ์คำสั่ง `sass-convert example.sass example.scss`<br>
แปลงไฟล์ .scss เป็น .css พิมพ์คำสั่ง `sass example.scss:example.css`

## Watcher
watch file พิมพ์คำสั่ง `sass --watch example.scss:example.css`<br>
watch directory พิมพ์คำสั่ง `sass --watch Directory:CSS`

## Compact
compact file พิมพ์คำสั่ง `sass example.scss:example.css --style compact`<br>
compack directory พิมพ์คำสั่ง `sass scss:css --style compact`<br>

## Compressed
compressed file พิมพ์คำสั่ง `sass example.scss:example.css --style compressed`<br>
compressed directory พิมพ์คำสั่ง `sass scss:css --style compressed`<br>

## Expanded
expanded file พิมพ์คำสั่ง `sass example.scss:example.css --style expanded`<br>
expanded directory พิมพ์คำสั่ง `sass scss:css --style expanded`<br>

_/\*หมายเหตุ\*/ กรณีไม่ต้องการไฟล์นามสกุล .map_ เพิ่ม option --sourcemap=none