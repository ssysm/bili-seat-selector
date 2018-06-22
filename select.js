/**
 * 某站的选座脚本
 * @author github.com/@ssysm
 * @requires document dom元素
 * @returns {void} 啥也不反回
 */
function select() {
    var seats_map = document.querySelector('.seats');
    var availableSeat = [];
    if (!seats_map) {
        alert('无座位图')
    }
    for (var i = 0; i < seats_map.children.length; i++) {
        for (var j = 0; j < seats_map.children[i].children.length; j++) {
            var seat = seats_map.children[i].children[j];
            if (seat) {
                if (seat.className !== 'unavailable') {
                    availableSeat.push(seat);
                }
            }
        }
    }
    return availableSeat;
}