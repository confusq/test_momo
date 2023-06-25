/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    /*我的 */
    "https://www.maimemo.com/share/page?uid=5390766&pid=0c939072148755a82de18ee31a76cbe4&tid=74defd15b5c94cf95eb9196c961bc4c4",
    "https://www.maimemo.com/share/page?uid=5390766&pid=0c939072148755a82de18ee31a76cbe4&tid=74defd15b5c94cf95eb9196c961bc4c4",
    "https://www.maimemo.com/share/page?uid=7843145&pid=7ba87f9c8ade1a34ab12848e75aaca38&tid=60e6ac024af08ee7f9269aa0236534dc",
    "https://www.maimemo.com/share/page?uid=7843145&pid=7ba87f9c8ade1a34ab12848e75aaca38&tid=60e6ac024af08ee7f9269aa0236534dc",
    "https://www.maimemo.com/share/page?uid=7843145&pid=7ba87f9c8ade1a34ab12848e75aaca38&tid=60e6ac024af08ee7f9269aa0236534dc",
    "https://www.maimemo.com/share/page?uid=7843145&pid=7ba87f9c8ade1a34ab12848e75aaca38&tid=60e6ac024af08ee7f9269aa0236534dc",
]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
