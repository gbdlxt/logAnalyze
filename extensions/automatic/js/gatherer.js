const Gatherer = (function(moduls) {
    const { GenerateLink } = moduls;
    let taskIndex = 0; //任务索引
    let taskChain = [];
    
    function setChain(chain) {
        taskChain = chain;
    }
    function getChain() {
        return taskChain;
    }
    function startTask(cb) {
        // 初始化数据
        // taskChain = generateChain();
        taskIndex = 0;
        const gatherer = getCurrentGatherer();
        startGathering(gatherer, cb);
    
        // 结束监听
    
    }
    
    function getCurrentGatherer() {
        return taskChain[taskIndex];
    }
    
    function startGathering(gatherer, cb) {
        // 生成链接
        const { geneFn, arguments } = gatherer;
        arguments.forEach(item=> {
            const {params, startTime, endTime} = item;
            const link = GenerateLink[geneFn](params, startTime, endTime);
            gatherer.links.push(link);
            // 创建页签
            cb.call(this, link);
        });
        // 创建页签
        // createTab(gatherer.link);
        // cb(gatherer.link);
    }
    
    function nextGathering(cb) {
        taskIndex = taskIndex + 1;
        const gatherer = getCurrentGatherer();
        if(gatherer) {
            startGathering(gatherer, cb);
            return true;
        }
        return false; // 结束
    }
    
    // function createTab(url) {
    //     chrome.tabs.create({
    //         url: url,
    //         index: 0,
    //         active: false,
    //     }).then(tab=> {
    //         // 标签创建成功后，可能content_script还没加载上，向注入脚本传信息回报错
    //     });
    // }

    return {
        setChain,
        startTask,
        getCurrentGatherer,
        startGathering,
        nextGathering,
        getChain
    };
})