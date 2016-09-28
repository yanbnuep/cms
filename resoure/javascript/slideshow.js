/**
 * Created by itdwyy on 2016/9/21.
 */
var SliderShow = (function () {

    function slideShow(eleClsName,animateCls,direction) {
        var elements = getSlideElement(eleClsName),
            curIndex = 0;
        for(var i = 0;i<elements.length;i++){
            if(hasClass(elements[i],animateCls)){
             curIndex = i;
                break;
            }
        }
       return slideNext(elements,curIndex,direction,animateCls);
    }
    function getSlideElement(elementName) {
        var elements = document.querySelector(elementName);
        return elements;
    }
    function slideNext(elements, curIndex, direction, clsName) {
        /*if direction larger than zero show the next otherwise pre*/
        var curElement = elements[curIndex];
        if (elements.length) {
            if (direction > 0 && (elements.length >(curIndex+1))) {
                var nextElement = elements[curIndex + 1];
                slideClass(curElement, nextElement, clsName);
                return;
            } else if ((direction < 0) && (curIndex>0)) {
                var nextElement = elements[curIndex - 1];
                slideClass(curElement, nextElement, clsName);
                return;
            }
        }
        return;
    }
    function slideClass(cur, next, clsName) {
        if (hasClass(cur, clsName)) {
            cur.removeAttribute(clsName);
        }
        if (!hasClass(next, clsName)) {
            next.className += clsName;
        }
    }
    function hasClass(ele, clsname) {
        return (' ' + ele.className + ' ').indexOf(' ' + clsname + ' ') > -1;
    }
})();