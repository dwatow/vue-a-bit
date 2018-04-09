# 實作出components
> 練習components

## 說明
- 把header body footer切成components


## 檔案架構
- 把component都放在src/components
- images都放在src/assets/images

### html 和 css import image
- 跟以前一樣，由目前檔案所在位置引入目標檔案

```
img src='../assets/images/living-room.jpg'
background:url(../assets/images/buttons.png) no-repeat;

```

### 使用bootstrap
- 在index.html的head引入就好
- 或者可以在main.js import
```
import 'bootstrap/dist/css/bootstrap.min.css';
```
