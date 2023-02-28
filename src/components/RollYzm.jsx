import React from 'react';
import { useEffect} from 'react';
import './less/rollYzm.less';
import { forwardRef } from 'react';

function RollYzm(){
  useEffect(()=>{
    const oShadow = document.querySelector('#shadow');
    const oContent = document.querySelector('#content');
    const oTip = document.querySelector('#tip');
    const oBlock = document.querySelector('#block');

    const maxTop = oContent.clientHeight - oShadow.offsetHeight;//大图片减空格的宽度 即最大宽度
    const maxLeft = oContent.clientWidth - oShadow.offsetWidth;//大图片减空格的高度 即最大高度

    const setPosition=()=>{
        //Math.round四舍五入 Math.random是0.0-1.0
        const randomTop = Math.round(Math.random() * maxTop);
        const randomLeft = Math.round(Math.random() * maxLeft);

        //挖空空格的随机位置
        oShadow.style.left = `${randomLeft}px`;
        oShadow.style.top = `${randomTop}px`;
        //填补的高度和空格高度一样
        oTip.style.top = `${randomTop}px`;

        //保证背景图片一致
        oTip.style.backgroundPosition = `${-randomLeft}px ${-randomTop}px`;
        oBlock.style.backgroundPosition = `${-randomLeft}px ${-randomTop}px`;
    }
    setPosition();
    //下边方块按下委托事件
    oBlock.onmousedown = function (e) {
        var ev = e;
        //初始按下的位置
        var startX = ev.x;
        console.log(startX);
        //鼠标滑动事件 和按下是组合的
        window.onmousemove = function (e) {
            var ev =e;
            //拿移动产生位移 时时刻刻改变
            var left = ev.x - startX;
            //把移动距离困在图片框里
            if (left <= 0) left = 0;
            if (left >= maxLeft) left = maxLeft;

            oTip.style.left = `${left}px`
            oBlock.style.left = `${left}px`

        }

        //鼠标抬起事件
        window.onmouseup = function () {
            //滑块不跟随鼠标抬起回归原位
            window.onmousemove = null;
            //Math.abs取绝对值
            if (Math.abs(oTip.offsetLeft - oShadow.offsetLeft) <= 2) {
                // location.href = 'http://www.baidu.com';
                console.log(111);
            } else {
                oTip.style.left = 0;
                oBlock.style.left = 0;
                setPosition();
            }
        }
    }
    //解决以下移出范围的拖拽问题
    window.ondragstart = function () {
        return false
    }
  })
    return (
        <div id="roll_box">
            <div id="content">
                <div id="shadow"></div>
                <div id="tip"></div>
            </div>
            <div id='block_box'>  
                <div id="block"></div>
            </div>
        </div>
  )
}
export default forwardRef(RollYzm)
