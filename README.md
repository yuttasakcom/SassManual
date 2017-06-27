## Sass101

### ติดตั้ง on Ubuntu
พิมพ์คำสั่ง
> sudo apt install -y ruby-sass

: ตรวจสอบเวอร์ชั่น
  พิมพ์คำสั่ง
  > sass -v

### Convert
: แปลงไฟล์ .scss เป็น .sass
  พิมพ์คำสั่ง
  > sass-convert example.scss example.sass


convert sass to scss
```
sass-convert example.sass example.scss
```

convert scss to css
```
sass example.scss:example.css
```

#### Watch
watch file
```
sass --watch example.scss:example.css
```
watch directory
```
sass --watch Directory:CSS
```

#### Compact & Compressed & expanded
```
sass example.scss:example.css --style compact
```
```
sass example.scss:example.css --style compressed
```
```
sass example.scss:example.css --style expanded
```

sourcemap
> --sourcemap=none