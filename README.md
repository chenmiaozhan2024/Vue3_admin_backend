# 硅谷甄选后端API

> 一个基于 Express框架搭建的硅谷甄选后台API应用，已完成项目所有所有接口，并进行完成自测，

## 项目简介
> 本项目是***尚硅谷***的硅谷甄选（前端项目）项目为基础，参考gitHub大神go语言版本开发的基于Express框架的硅谷甄选API
## 项目亮点
- 基于Express框架开发，对前端开发人员来说比较友好 
- Express 框架基于 Node.js，安装便捷、上手门槛低，更适合前端开发者快速搭建与运行 API。
- 有apiFox接口文档，和视频教学教你怎么快速启动

## 在线演示地址

## 技术栈

| 技术 | 说明 |
|------|------|
| Node.js | 运行环境 |
| Express.js | Web 框架 v4.16.1 |
| MySQL | 数据库 |
| mysql2 | MySQL 驱动 v3.16.3 |
| JWT | 身份验证 v9.0.3 ||

## 项目结构

```
vue3_admin__template-main/
├── bin/                # 应用启动入口
├── Control/             # 控制器层 (路由处理)
│   ├── aclControl/      # ACL 权限控制
│   │   ├── userControl.js      # 用户管理
│   │   ├── roleControl.js      # 角色管理
│   │   └── permissionControl.js # 权限/菜单管理
│   ├── productControl/  # 商品管理
│   ├── auth.js         # 认证相关
│   └── index.js        # 首页
├── Mapper/             # 数据访问层 (DAO)
│   ├── acl/            # ACL 相关数据操作
│   └── productMapper/   # 商品相关数据操作
├── dataBase/           # 数据库配置
│   ├── db.js           # 数据库连接
│   ├── config.js       # 数据库配置
│   └── api.js         # 数据库操作方法
├── utils/             # 工具函数
│   ├── verifyToken.js   # JWT 令牌验证
│   └── response.js     # 统一响应格式
├── public/            # 静态资源
├── static/            # 静态文件
├── views/             # 模板文件
└── app.js             # 应用主入口
```
### apiFox地址
```前端-陈妙湛 在 Apifox 邀请你加入团队 硅谷甄选 https://app.apifox.com/invite?token=Xgr_XDyoy3ORPJRQ9gwuU```
![img.png](image/img.png)
![img_1.png](image/img_1.png)
## 快速开始
### 克隆硅谷甄选后端项目
```https://github.com/chenmiaozhan2024/Vue3_admin_main.git```
### 安装依赖
```npm install```
### 安装nodemon
```npm install -g nodemon```
### 执行init-sql里的sql文件，创建数据库，并把配置文件改成自己本地的
```javascript
module.exports = {
    db: {
        host: '127.0.0.1',    // 数据库地址
        port: '3306',           // 数据库端口
        user: 'root',           // 用户名
        password: 'xxxx',      // 替换成你本地数据库密码
        database: 'sv_selection_db' // 替换成你本地数据库名
    }
}
```

### 环境要求
- Node.js >= 14.x
- MySQL >= 5.7
### 启动
```npm run start```

项目默认运行在 `http://localhost:3000`

## API 接口文档

### 认证接口

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/auth/login` | 用户登录 |

### 用户管理 (ACL)

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/admin/acl/user/:page/:limit` | 分页获取用户列表 |
| GET | `/admin/acl/user/toAssign/:userId` | 获取用户分配的角色 |
| POST | `/admin/acl/user/save` | 新增用户 |
| PUT | `/admin/acl/user/update` | 更新用户 |
| DELETE | `/admin/acl/user/remove/:id` | 删除用户 |
| DELETE | `/admin/acl/user/batchRemove` | 批量删除用户 |
| POST | `/admin/acl/user/doAssignRole` | 为用户分配角色 |

### 角色管理 (ACL)

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/admin/acl/role/:page/:limit` | 分页获取角色列表 |
| GET | `/admin/acl/role/toAssign/:roleId` | 获取角色分配的权限 |
| POST | `/admin/acl/role/save` | 新增角色 |
| PUT | `/admin/acl/role/update` | 更新角色 |
| DELETE | `/admin/acl/role/remove/:id` | 删除角色 |

### 权限/菜单管理 (ACL)

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/admin/acl/permission` | 获取所有菜单（树形结构） |
| POST | `/admin/acl/permission/save` | 新增菜单/权限 |
| PUT | `/admin/acl/permission/update` | 更新菜单/权限 |
| DELETE | `/admin/acl/permission/remove/:id` | 删除菜单/权限 |

### 商品管理

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/admin/product/trademark/:page/:limit` | 品牌列表 |
| POST | `/admin/product/baseTrademark/save` | 新增品牌 |
| PUT | `/admin/product/baseTrademark/update` | 更新品牌 |
| DELETE | `/admin/product/baseTrademark/remove/:id` | 删除品牌 |
| GET | `/admin/product/baseTrademark/getTrademarkList` | 获取全部品牌 |
| POST | `/admin/product/fileUpload` | 图片上传 |
| GET | `/admin/product/attr/:page/:limit` | 属性列表 |
| GET | `/admin/product/getCategory1` | 获取一级分类 |
| GET | `/admin/product/getCategory2/:category1Id` | 获取二级分类 |
| GET | `/admin/product/getCategory3/:category2Id` | 获取三级分类 |
| GET | `/admin/product/:page/:limit` | SPU列表 |
| POST | `/admin/product/saveSpuInfo` | 新增SPU |
| PUT | `/admin/product/updateSpuInfo` | 更新SPU |
| DELETE | `/admin/product/deleteSpu/:spuId` | 删除SPU |
| GET | `/admin/product/spuImageList/:spuId` | SPU图片列表 |
| GET | `/admin/product/spuSaleAttrList/:spuId` | SPU销售属性列表 |
| GET | `/admin/product/baseSaleAttrList` | 销售属性列表 |
| POST | `/admin/product/saveSkuInfo` | 保存SKU |
| GET | `/admin/product/list/:page/:pageSize` | SKU列表 |
| GET | `/admin/product/onSale/:skuId` | 商品上架 |
| GET | `/admin/product/cancelSale/:skuId` | 商品下架 |
| GET | `/admin/product/getSkuInfo/:skuId` | 获取SKU详情 |

## 统一响应格式

所有接口返回统一的 JSON 格式：

### 成功响应

```json
{
  "code": 200,
  "data": {},
  "message": "success",
  "ok": true
}
```

### 错误响应

```json
{
  "code": 400/500,
  "message": "错误信息",
  "ok": false
}
```

## JWT 认证

大部分接口需要在请求头中携带 Token：

```
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 数据库表结构

### 核心表

- `user` - 用户表
- `role` - 角色表
- `menu` - 菜单/权限表
- `user_role` - 用户角色关联表
- `role_menu` - 角色菜单关联表
- `attr` - 商品属性表
- `trademark` - 品牌表

## 开发说明
>这个项目的开发初衷，是为了给想学前端、想上手实战硅谷甄选项目的同学提供便利。GitHub 上有一个基于 Go 语言框架开发的该项目后端，功能实现非常出色，我也是以此为蓝本完成了本次开发。

>但现实问题是，大部分前端学习者往往缺乏后端相关基础，既无法直接使用 Go 语言版本的后端代码，也难以完成部署操作。因此，我专门基于 Express 框架重新开发了硅谷甄选的后端 API，希望能为前端学习的同学扫清技术障碍，让大家能专注于前端部分的学习和实践。

>需要说明的是，这个项目的开发时间比较仓促（临近 2025 年春节），所以存在一些不足，比如尚未引入 TypeScript 等技术规范。后续我计划推出 2.0 版本来完善这些问题；如果支持这个项目的同学足够多，我也会考虑在 B 站专门出一期教程，详细讲解如何用 Express 框架实现这套后端 API。

> 有问题可以邮箱联系1004757557@qq.com
### MVC 架构


### 添加新接口

1. 在 `Mapper/` 中添加数据操作函数
2. 在 `Control/` 中添加路由处理函数
3. 在 `app.js` 中注册路由

## License

MIT
