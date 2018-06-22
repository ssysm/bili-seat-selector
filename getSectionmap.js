/**
 * 获取级别座位图
 * 以最后一个可用的区域为目标
 */
function getSectionmap() {
    var map = document.querySelector('#area');
    if (!map) {
        alert('无选区图');
    } else {
        for(var i = 0;i<map.children.length;i++){
            var section = map.children[i];
            if(section.style.fill ==  'transparent'){
                var event = new Event('click');
                section.dispatchEvent(event);
                break;
            }
        }
        
    }
}