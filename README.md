# Test2048

# 1、页面加载完毕随机用数字2或4填充两个单元格

# 2、判断用户滑动方向

# 使用touchStart事件函数获取起始位置touchStartX、touchStartY，touchMove获取终点位置touchEndX、touchEndY 
    
    var disX = this.touchStartX - this.touchEndX;
    var absdisX = Math.abs(disX);
    var disY = this.touchStartY - this.touchEndY;
    var absdisY = Math.abs(disY);  
    // 确定移动方向
    // 0:上, 1:右, 2:下, 3:左
    var direction = absdisX > absdisY ? (disX < 0 ? 1 : 3) : (disY < 0 ? 2 : 0); 
    
# 3、根据滑动方向（假设向右滑动）移动表格以及相同项合并

 将2048的棋盘生成4*4的二维数组list，为空的空格用0表示
// 比如棋盘数据如下
var grid = [
    [2, 2, 0, 0],
    [0, 0, 0, 0],
    [0, 8, 4, 0],
    [0, 0, 0, 0]
];

根据滑动方向生成4*4二维数组

var list = [
    [0, 0, 2, 2],  // 注意是0022不是2200，因为像右滑动所以从右边push入数组
    [0, 0, 0, 0],
    [0, 4, 8, 0],
    [0, 0, 0, 0]
];

将list的每一个小数组中的数字提到前面，0放到末尾

list2 = [
    [2, 2, 0, 0], 
    [0, 0, 0, 0],
    [4, 8, 0, 0],
    [0, 0, 0, 0]
]; 

将相同值的单元格加起来，并将后面的一个单元格值变为0

list2 = [
    [4, 0, 0, 0], 
    [0, 0, 0, 0],
    [4, 8, 0, 0],
    [0, 0, 0, 0]
]; 


将list2回退为list并渲染数据到棋盘视图

list = [
    [0, 0, 0, 4],
    [0, 0, 0, 0],
    [0, 0, 8, 4],
    [0, 0, 0, 0]
];
4、重复步骤1

5、判断游戏是否结束

判断标准：4*4单元格填满且任意一个单元格上下左右没有相同值的单元格

6、根据游戏结果给出相应提示
