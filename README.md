# Sass

#### ติดตั้ง on Ubuntu
> sudo apt install -y ruby-sass

ตรวจสอบเวอร์ชั่น
> sass -v

#### Convert
convert scss to sass
```
sass-convert example.scss example.sass
```

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
sass -watch Directory:CSS
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