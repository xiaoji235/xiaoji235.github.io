fetch('https://api.github.com/users/xiaoji235') // 请求API获取JSON数据
  .then(response => response.json())
  .then(data => {
    if (data && data.name) { // 确保JSON数据不为空且包含'name'字段
      const nameValue = data.name; // 获取'name'字段的值
      const bioValue = data.bio; // 获取'bio'字段的值
      document.querySelector('.img-title-big').innerText = nameValue; // 将'name'字段的值嵌入到class为'myname'的元素中
      document.querySelector('.introduce').innerText = bioValue; // 将'bio'字段的值嵌入到class为'introduce'的元素中
    } else {
      console.error('JSON数据不完整或缺少"name"字段');
    }
  })
  .catch(error => console.error('Error:', error));