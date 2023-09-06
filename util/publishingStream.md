
"publisherStateUpdate" OR "zc.sps.0" OR "zsc.crss.0" OR "zc.p.0.ocsc" OR "zc.p.0.ogrd" OR "zc.s.sss" OR "zm.lrh.sru" OR "zc.p.0.upq"

zc.sps.0            startPublishingStream()
    call by user
    publishOption

zsc.crss.0          connect result singnal server
    begin unified_rtc
    signal is connecting unified_rtc streamId: webrtc1692603831618
    connected success unified_rtc
    already connected unified_rtc streamId: webrtc1692604055796

zc.p.0.ocsc         onconnectionstatechange
    webrtc1692603746081 signal state: have-local-offer

zc.p.0.ogrd         ongetremotedescription
    webrtc1692603746081 sdp revert m=audio m=video
    webrtc1692603746081 remoteSdp:v=0 o=Ze
    webrtc1692603746081 set success

zc.s.sss	        sendstreamstate
    call 1692603746
    stream webrtc1692603746081 status {"mic_status":0,"camera_status":0}

zm.lrh.sru	        sendstreamupdate
    {"sub_cmd":2001
    suc /lr/stream/add
    {"sub_cmd":2002
    suc /lr/stream/delete

正常的顺序
    zc.sps.0        call by user
    zc.al           PUBLISH_REQUESTING
    zsc.crss.0      begin unified_rtc
    zsc.crss.0      signal is connecting
    zsc.crss.0      connected success unified_rtc
    zc.p.0.ocsc     have-local-offer
    zc.p.0.ogrd     remoteSdp:v=0 o=Ze
    zc.p.0.ogrd     set success
    zm.lrh.sru      {"sub_cmd":2001
    zm.lrh.sru      suc /lr/stream/add
    zc.s.sss        status {"mic_status":0,"camera_status":0}
    zc.al           PUBLISHING
    zm.lrh.sru      {"sub_cmd":2002
    zm.lrh.sru	    suc /lr/stream/delete
    zc.al           NO_PUBLISH
