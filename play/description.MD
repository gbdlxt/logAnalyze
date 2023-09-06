zc.p.opcsc.1 ======> connectionState 只在connected做首帧统计
zc.al：[
          "deviceError",
          "streamExtraInfoUpdate",
          "publisherStateUpdate",
          "playerStateUpdate",
          "roomStreamUpdate"
        ]

zc.sps.1 ==========> startPlayStream
        call by user
        call streamid // 进入拉流模块报的
zc.tsh.a ==========> 启动重试间隔定时器 
        retry call zego_6410_98000
        stream streamid : connect to unified signal server
        // 此处setTimeout 链接媒体服务器
        call success. delay: 0 //第一次间隔事件0
zc.tsh.smt ========> 启动最大重试时间定时 start max timer
zsc.crss.0 ========> 连接媒体服务器  
        begin unified_l3
        new signal unified_l3
        token
        connected success unified_l3 / connect failed unified_l3
zc.al =============> PLAY_REQUESTING zc.sps.1之后会设置拉流状态
zc.as.smss ========> 跟媒体链接状态 0 connected 1 disconnect 2 broken
zc.as.sass ========> 跟统一接入的连接状态 0 connected
zc.as.umrs ========> 媒体链接和统一接入连接状态综合
zn.zca.o.0 ========> 注册zc.as.smss、zc.as.sass时触发，不用关注