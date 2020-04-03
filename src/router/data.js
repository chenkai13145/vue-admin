export const data = {
    "msg": "success",
    "menuList": [
        {
            "menuId": 34,
            "parentId": 0,
            "parentName": null,
            "name": "业务", //一级菜单名称
            "url": 'business',//一级菜单（url）name
            "perms": null,
            "type": 0,
            "icon": "el-icon-suitcase",//一级菜单icon
            "orderNum": 2,//一级菜单排序
            "open": null,
            "list": [{
                "menuId": 36, //二级菜单id
                "parentId": 34, 
                "parentName": null,
                "name": "收佣管理",//二级菜单名称
                "url": "/business/commission",//二级菜单路径
                "perms": null,
                "type": 1,
                "icon": "",
                "orderNum": 1,//二级菜单排序
                "open": null,
                "list":null
            }, {
                "menuId": 37,
                "parentId": 34,
                "parentName": null,
                "name": "结佣管理",
                "url": "/business/management",
                "perms": null,
                "type": 1,
                "icon": "",
                "orderNum": 2,
                "open": null,
                "list": null
            }, {
                "menuId": 38,
                "parentId": 34,
                "parentName": null,
                "name": "成交单",
                "url": "/business/Picturepreview",
                "perms": null,
                "type": 1,
                "icon": "",
                "orderNum": 4, 
                "open": null,
                "list": null
            }, {
                "menuId": 39,
                "parentId": 34,
                "parentName": null,
                "name": "代理成交单",
                "url": "/business/viewPictrue",
                "perms": null,
                "type": 1,
                "icon": "",
                "orderNum": 5,
                "open": null,
                "list": null
            }]
        }]
}
