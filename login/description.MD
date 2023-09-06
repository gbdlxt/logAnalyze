登录日志的检索方法是appid精确、搜索框用userid作关键字模糊查询。
    因为在房间connecting之前userid、username、roomid都是没值的。

https://logcenter-new.oa.zego.im/internal/bsearch

查调用登录接口
search "userid" AND "zm.lg"
查roomstateupdate & roomstatechange
search: "userid" AND ("zm.rm.scb" OR "zm.al")
查保活心跳在内，发给房间的信令和房间回包
search: "userid" AND ("zm.hb.st" OR "zm.lrh.hp" OR "zm.lrh.sm")



action 说明
zm.lg =======> 登录接口 call、initConfig、settingConfig
zm.rm.scb ===> roomstateupdate 房间状态回调
zm.al =======> roomstatechange & tokenWillExpire 的日志
zm.hb.st ====> start 发起心跳
zm.lrh.hp ===> 心跳回包
zm.lrh.lgi ==> 登录信令
zm.lrh.sm ===> 房间发送信令 发心跳、拉用户列表都是由这个发起 
        eg：zm.lrh.sm	seq: 1 cmd: /lr/login_room; 
            zm.lrh.hp	down /lr/login_room_rsp;
            zm.lrh.sm   seq: 4 cmd: /lr/room/hb;
            zm.hb.st	call | call success
            zm.lrh.sm   down /lr/room/hb_rsp
zm.lrh.sru ==> sm的处理结果

zm.lg ======> call by user logAnalyze logAnalyze
zm.rm.scb ==> CONNECTING {"code":0,"msg":""} 
zm.rm.scb ==> CONNECTED {"code":0,"msg":""}
zm.rm.scb ==> CONNECTING {"code":1000017,"msg":"network is broken"}	
zm.rm.scb ==> DISCONNECTED {"code":0,"msg":""}

zm.lrh.lgi ==> login {"app_id": 1739272706, "sdk_ver": 2202, id_name: xxx, third_token: xxx} // 单房间登录
zm.lrh.lgi ==> login rsp // 只有单房间登录有rsp，多房间没有打rsp
zm.lrh.lgi ==> enter {}  // 多房间登录

zm.rh.ivd ===> 房间定时器

房间回包指令
swPushCmdList = ['/sw/push', '/sw/merge_push', '/sw/push_kickout', '/sw/push_redirect'];
onSwitchCmdList = ['/lr/login_room_rsp', '/lr/logout_room_rsp', '/sw/push_kickout', '/sw/push', '/sw/merge_push'];
unEncryptCmdList = ['/lr/login_room', '/lr/login_room_rsp'];


执行顺序：
zm.lg  this.logger.info(ZEGO_RTM_ACTION.RTM_LOGIN_ROOM + ' call by user ' + user?.userID + ' ' + roomID);

