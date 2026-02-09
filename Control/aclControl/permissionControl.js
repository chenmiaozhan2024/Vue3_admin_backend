const express = require('express')
const router = express.Router()
const {verifyToken} = require('../../utils/verifyToken')
const {getMenuList,permissionSave,permissionUpdate,permissionDelete} = require("../../Mapper/acl/permissionMapper")

// 获取全部菜单与按钮的标识数据
router.get('/admin/acl/permission', verifyToken, async (req, res) => {
    try {
       const result= await getMenuList()
        res.success(result)
    } catch (err) {
        console.log(err)
        res.error(500, '服务器内部错误，请稍后再试')
    }
})
//新增子菜单
router.post('/admin/acl/permission/save',verifyToken,async (req,res,next)=>{
    try {
        const body=req.body
       await permissionSave(body)
        res.success()
    } catch (err) {
        console.log(err)
        if (err.message === '菜单名称已存在') {
            res.error(400, err.message)
        } else {
            res.error(500, '服务器内部错误，请稍后再试')
        }
    }
})
//更新菜单
router.put('/admin/acl/permission/update', verifyToken, async (req, res) => {
    try {
        const params=req.body
        await permissionUpdate(params)
        res.success()
    } catch (err) {
        console.log(err)
        res.error(500, '服务器内部错误，请稍后再试')
    }
})
// 删除菜单
router.delete('/admin/acl/permission/remove/:id',verifyToken,async (req,res,next)=>{
    try {
        const id=req.params.id
        await permissionDelete(id)
        res.success()
    } catch (err) {
        console.log(err)
        if (err.message === '该菜单下存在子菜单，不能删除') {
            res.error(400, err.message)
        } else {
            res.error(500, '服务器内部错误，请稍后再试')
        }
    }
})
module.exports = router
