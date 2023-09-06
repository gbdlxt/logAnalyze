// 解析出hits里面每项记录，转换成action&time&content
let hits = null;

/**************************************
 * 
 * 拆解日志数据
 * 
 **************************************/
// 设置hits
function setLogHits(logHits) {
    console.warn(logHits);
    hits = logHits.map(log=> {
        const { client_time, server_time, content, action } = log._source;
        return { client_time: new Date(client_time).getTime(), server_time, content, action };
    });
}

// 获取hits 数组
function getLogHits() {
    return hits;
}

/******************************************
 * 
 * 分析
 * 
 ******************************************/
// 房间状态异常
function analysyse(hits, analysyseFns) {
    let rst = [];
    analysyseFns.forEach(fn => {
        rst.push({
            name: fn.name,
            result: fn.call(this, hits)
        });
    });
    return rst;
}

function roomStateChangedError() {
    let rst = hits.filter(hit => {
        if(['zm.al'].includes(hit.action)) {
            const params = hit.content.slice(18, hit.content.length - 1).split(',');
            return params[2] != '0';
        }
    }).map(hit=> {
        //'roomStateChanged ["951753123","LOGOUT",0,null]' | roomid, state, error.code, extendedData
        const params = hit.content.slice(18, hit.content.length - 1).split(',');
        return {
            roomid: params[0],
            state: params[1],
            code: params[2],
            desc: params[3]
        };
    });
    return rst;
}

// 推流状态异常
function publisherStateUpdateError(hits) {
    console.log('hits', hits);
    let rst = hits.filter(hit => {
        if(hit.content.indexOf('publisherStateUpdate') == 0) {
            const params = JSON.parse(hit.content.slice(22, hit.content.length - 1));
            return params.errorCode;
        }
    }).map(hit=> {
        // publisherStateUpdate [{"state":"PUBLISHING","streamID":"webrtc1692603746081","errorCode":0,"extendedData":""}]
        const params = JSON.parse(hit.content.slice(22, hit.content.length - 1));
        if(params.errorCode) {
            return {
                id: params.streamID,
                state: params.state,
                code: params.errorCode,
                desc: params.extendedData
            }
        }
    })
    return rst
}

// 拉流状态异常
function playerStateUpdateError(hits) {
    let rst = hits.filter(hit => {
        if(hit.content.indexOf('playerStateUpdate') == 0) {
            const params = JSON.parse(hit.content.slice(19, hit.content.length - 1));
            return params.errorCode;
        }
    }).map(hit=> {
        // publisherStateUpdate [{"state":"PUBLISHING","streamID":"webrtc1692603746081","errorCode":0,"extendedData":""}]
        const params = JSON.parse(hit.content.slice(19, hit.content.length - 1));
        return {
            id: params.streamID,
            state: params.state,
            code: params.errorCode,
            desc: params.extendedData
        }
    });
    return rst
}

function playerStateUpdateNoPlay() {
    let rst = hits.filter(hit => {
        if(hit.content.indexOf('playerStateUpdate') == 0) {
            const params = JSON.parse(hit.content.slice(19, hit.content.length - 1));
            return params.state == 'NO_PLAY';
        }
    }).map(hit=> {
        // publisherStateUpdate [{"state":"PUBLISHING","streamID":"webrtc1692603746081","errorCode":0,"extendedData":""}]
        const params = JSON.parse(hit.content.slice(19, hit.content.length - 1))
        return {
            id: params.streamID,
            state: params.state,
            code: params.errorCode,
            desc: params.extendedData
        }
    });
    return rst
}