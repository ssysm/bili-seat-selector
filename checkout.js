/**
 * 确定订单
 * @requires ./select.js 座位阵列
 * @param {Array} availableSeat 可选座位序列
 * @param {Number} [seat=1] 选择几个座位
 * @param {Number} [maxretry=3] 最多重试
 */
function checkout(availableSeat,seat=1,maxretry=3){
    var clickEvent = new Event('click');
    var failCounter = 0;
    for(var i = 0;i<seat;i++){
        availableSeat[i].dispatchEvent(clickEvent);
    }
    setTimeout(function(){
        document.querySelector('.finish-btn').click();
    },100);
} 
