---
title: Linux搭建deepseek（特快地址）
tags: [AI]
categories: [AI, deepseek]
index_img: https://dl2.img.timecdn.cn/2025/02/01/deepseek.jpg
banner_img: https://dl2.img.timecdn.cn/2025/02/01/deepseek.jpg
date: 2025-2-1 20:00:00
---

## 首先安装ollama
### ollama 安装地址：
 - 标准版：`curl -fsSL https://cdn.jsdelivr.net/gh/xiaoji235/script-bank/ollama/install.sh | sh`
 - 汉化版：`curl -fsSL https://cdn.jsdelivr.net/gh/xiaoji235/script-bank/ollama/install-zh_CN.sh | sh`
- 安卓termux版：`wget https://cdn.jsdelivr.net/gh/xiaoji235/script-bank/ollama/ollama-android.sh && bash ollama-android.sh`

## 接着复制以下代码运行deepseek r1 1.5b镜像（没有会自动拉取）
`ollama run deepseek-r1:1.5b`

### 注意：
上方仅提供最小的1.5b，1.5b够用了，如果需要deepseek大模型请前往[deepseek大模型官网](https://ollama.com/library/deepseek-r1)
